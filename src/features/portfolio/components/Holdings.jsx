import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolios } from '../portfolioSlice';
import HoldingItem from '../components/HoldingItem';
import './Holdings.scss';


export default function Holdings() {
  const dispatch = useDispatch();
  const { data: portfolios, loading, error } = useSelector(state => state.portfolio);

  // Filter state
  const [filters, setFilters] = useState({
    transactionRefNo: '',
    securityName: '',
    transactionType: '',
    fromDate: '',
    toDate: '',
  });

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredPortfolios = portfolios.filter((p) => {
    const refMatch = p.transactionRefNo?.toLowerCase().includes(filters.transactionRefNo.toLowerCase());
    const nameMatch = p.securityName?.toLowerCase().includes(filters.securityName.toLowerCase());
    const typeMatch = filters.transactionType ? p.transactionType === filters.transactionType : true;

    const date = new Date(p.transactionDate);
    const fromMatch = filters.fromDate ? date >= new Date(filters.fromDate) : true;
    const toMatch = filters.toDate ? date <= new Date(filters.toDate) : true;

    return refMatch && nameMatch && typeMatch && fromMatch && toMatch;
  });

  return (
    <div className="holdings">
      <h2 className="holdings-title">Holdings</h2>

      {/* Filter UI */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Transaction Ref No."
          value={filters.transactionRefNo}
          onChange={(e) => handleFilterChange('transactionRefNo', e.target.value)}
        />

        <input
          type="text"
          placeholder="Security Name"
          value={filters.securityName}
          onChange={(e) => handleFilterChange('securityName', e.target.value)}
        />

        <select
          value={filters.transactionType}
          onChange={(e) => handleFilterChange('transactionType', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Dividend">Dividend</option>
        </select>

        <input
          type="date"
          value={filters.fromDate}
          onChange={(e) => handleFilterChange('fromDate', e.target.value)}
        />

        <input
          type="date"
          value={filters.toDate}
          onChange={(e) => handleFilterChange('toDate', e.target.value)}
        />
      </div>

      {/* Feedback */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && filteredPortfolios.length === 0 && (
        <p>No matching portfolios found.</p>
      )}

      {/* List */}
      {filteredPortfolios.map((portfolio) => (
        <HoldingItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
