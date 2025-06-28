import React from 'react';
import Holdings from './components/Holdings';
import Chart from './components/Chart';
import Watchlist from './components/Watchlist';
import Header from '../../components/Header';
import './PortfolioPage.scss';

export default function PortfolioPage() {
  return (
    <div className="app-container">
      <Header />

      <div className="content-wrapper">
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
    </div>
  );
}
