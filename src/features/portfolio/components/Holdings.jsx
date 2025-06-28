import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolios } from '../portfolioSlice';

export default function Holdings() {
  const dispatch = useDispatch();
  const { data: portfolios, loading, error } = useSelector(state => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  return (
    <div>
      <h2>Holdings</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && portfolios.length === 0 && <p>No holdings found.</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id} style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px' }}>
            <strong>{portfolio.portfolioName}</strong><br />
            <span>Investment: ${portfolio.totalInvestment}</span><br />
            <span>Balance: ${portfolio.accountBalance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
