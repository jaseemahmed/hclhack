import { useDispatch, useSelector } from 'react-redux';

// ✅ For plain JS projects — no types
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
