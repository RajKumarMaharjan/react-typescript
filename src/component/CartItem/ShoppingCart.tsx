
import { UseShoppingChart } from "../../context/shoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";
import { useState , useEffect} from "react";
import '../../css/index.css'

const ShoppingCart = () => {
  const { cartItems } = UseShoppingChart();
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [isclosing, setIsClosing] = useState(false);

  const handleCartClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isclosing) {
      const timer = setTimeout(() => {
        setIsCartVisible(false);
        setIsClosing(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isclosing]);

  if (!isCartVisible) {
    return null;
  }
  return (
    <div
      className={`w-[400px] h-[100vh] bg-[#edf1f5] px-4 ${isclosing ? 'slideOut' : ''}`}
      onClick={handleCartClick}
    >
      <div className="flex justify-between py-8">
        <p className="text-lg font-semibold tracking-wide text-gray-700">Cart-List</p>
        <button onClick={handleCloseClick} className="text-2xl text-gray-700 ">&times;</button>
      </div>
     {cartItems.length === 0 ? (
      <p>Cart List Is Empty</p>
     ) : (
      <div>
         <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="text-md font-semibold float-end mt-8">
        Total: {' '}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
      </div>
     )}
    </div>
  );
};

export default ShoppingCart;
