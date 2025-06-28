import React from 'react';
import Holdings from './components/Holdings';
import Chart from './components/Chart';
import Watchlist from './components/Watchlist';
import './index.css';

export default function PortfolioPage() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <Holdings />
      </aside>
      <main className="main-content">
        <section className="chart-section">
          <Chart />
        </section>
        <section className="watchlist-section">
          <Watchlist />
        </section>
      </main>
    </div>
  );
}
