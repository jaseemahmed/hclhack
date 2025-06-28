import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 flex gap-4">
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/transactions">Transactions</Link>
    </header>
  );
}
