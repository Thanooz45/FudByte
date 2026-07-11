import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../styles/menu.css';

const LOGO =
  'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750755146/Screenshot_2025-06-24_142016_bhw1jn.png';

const dishes = [
  {
    name: 'Pizza Hut',
    price: 199,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835981/Screenshot_2025-06-25_124923_xetaqa.png',
    category: 'Pizza',
    rating: 4.2,
  },
  {
    name: 'Indian Coffee House',
    price: 149,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835924/Screenshot_2025-06-25_124825_qe0ayg.png',
    category: 'Coffee',
    rating: 4.4,
  },
  {
    name: 'Pastas By Pizza Hut',
    price: 179,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835791/Screenshot_2025-06-25_124619_anzfkc.png',
    category: 'Pasta',
    rating: 3.7,
  },
  {
    name: 'Tasty Talk',
    price: 129,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750836012/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe_ufkfl0.jpg',
    category: 'Sandwich',
    rating: 3.4,
  },
  {
    name: 'Veg Noodles',
    price: 99,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835731/Screenshot_2025-06-25_124516_bc2qbn.png',
    category: 'Noodles',
    rating: 4.0,
  },
  {
    name: 'Chicken Curry',
    price: 249,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835597/Screenshot_2025-06-25_124212_estvek.png',
    category: 'Curry',
    rating: 4.5,
  },
  {
    name: 'Fish Curry',
    price: 349,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750836183/thumb__1200_0_0_0_auto_ji6qgx.jpg',
    category: 'Curry',
    rating: 4.5,
  },
  {
    name: 'Chicken Noodles',
    price: 150,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750836151/Spicy-Chicken-Hakka-Noodles-Recipe_i2to6d.jpg',
    category: 'Noodles',
    rating: 4.3,
  },
  {
    name: 'Chicken pasta',
    price: 150,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750836351/Creamy-Basil-Chicken-Pasta_-done_b9pjvj.jpg',
    category: 'Pasta',
    rating: 4.7,
  },
  {
    name: 'Chicken biryani',
    price: 200,
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750837311/Chicken-Biryani-Recipe_haxwcm.jpg',
    category: 'Biryani',
    rating: 4.2,
  },
];

const categories = [
  'All',
  'Biryani',
  'Pizza',
  'Coffee',
  'Pasta',
  'Sandwich',
  'Noodles',
  'Curry',
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  const [addedName, setAddedName] = useState(null);

  const visibleDishes =
    activeCategory === 'All'
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  function handleAdd(dish) {
    addToCart(dish);
    setAddedName(dish.name);
    setTimeout(() => setAddedName(null), 1000);
  }

  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/mainpage">
            <img
              src={LOGO}
              alt="FudByte"
              style={{ height: 40, width: 'auto', marginRight: 10 }}
            />
            <span className="font-weight-bold">FudByte</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/mainpage">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                activeCategory === cat ? 'btn-primary' : 'btn-light'
              } filter-btn border rounded-pill mr-2 mb-2`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row" id="menu-list">
          {visibleDishes.map((dish) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={dish.name}>
              <div className="card menu-card h-100 shadow-sm">
                <div className="menu-card-img-container">
                  <img src={dish.img} className="card-img-top" alt={dish.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1">{dish.name}</h5>
                  <div
                    className="text-success font-weight-bold mb-1"
                    style={{ fontSize: '1rem' }}
                  >
                    <span>&#11044;</span> {dish.rating}
                  </div>
                  <div className="text-muted small">{dish.category}</div>
                  <div className="mt-2 font-weight-bold">₹{dish.price}</div>
                  <button
                    className="btn btn-sm btn-primary add-to-cart-btn"
                    onClick={() => handleAdd(dish)}
                  >
                    {addedName === dish.name ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mb-4">
          <Link to="/cart" className="btn btn-success">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
