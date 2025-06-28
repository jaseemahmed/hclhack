import React from 'react';
import './Holdings.scss'; // Reuse the same styles

export default function HoldingItem({ portfolio }) {
  const gain = portfolio.totalReturn - portfolio.totalInvestment;
  const isPositive = gain >= 0;
  const percent = ((gain / portfolio.totalInvestment) * 100).toFixed(2);

  return (
    <div className="holding-row">
      <div className={`stock-name ${isPositive ? 'green' : 'red'}`}>
        {portfolio.portfolioName}
        <span className="risk">{portfolio.riskLevel}</span>
      </div>
      <div className="stock-change">
        <span className={isPositive ? 'green' : 'red'}>
          {gain >= 0 ? '+' : ''}
          {gain} ({percent}%)
          {isPositive ? ' ↑' : ' ↓'}
        </span>
      </div>
      <div className={`stock-price ${isPositive ? 'green' : 'red'}`}>
        ${portfolio.accountBalance.toLocaleString()}
      </div>
    </div>
  );
}
