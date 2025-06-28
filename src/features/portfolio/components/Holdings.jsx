import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolios } from '../portfolioSlice';
import HoldingItem from './HoldingItem';
import './Holdings.scss';

export default function Holdings() {
  const dispatch = useDispatch();
  const { data: portfolios, loading, error } = useSelector(state => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  return (
    <div className="holdings">
      <h2 className="holdings-title">Holdings</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && portfolios.length === 0 && <p>No holdings found.</p>}

      {portfolios.map((portfolio) => (
        <HoldingItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
