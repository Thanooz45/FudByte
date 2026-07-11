import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(dish) {
    setCart((prev) => {
      const found = prev.find((item) => item.name === dish.name);
      if (found) {
        return prev.map((item) =>
          item.name === dish.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  }

  function updateQty(idx, change) {
    setCart((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  }

  function removeItem(idx) {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
