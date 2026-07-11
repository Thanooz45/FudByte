import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import MainPage from './pages/MainPage.jsx';
import Menu from './pages/Menu.jsx';
import Cart from './pages/Cart.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
