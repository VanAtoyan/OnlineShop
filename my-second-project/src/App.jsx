import { useState } from "react";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "",
    },
    { id: 2, title: "Yoga Mat", price: 19.99, category: "Fitness", photo: "" },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "",
    },
  ]);

  const moveToCart = (product) => {
    setBasket([...basket, { ...product, count: 1 }]);
    const found = basket.find((item) => item.id === product.id);
    if (found) {
      found.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
    }
  };

  const quantityUp = (product) => {
    const found = basket.find((item) => item.id == product.id);
    found.count++;
    setBasket([...basket]);
  };
  const quantityDown = (product) => {
    const found = basket.find((item) => item.id == product.id);
    found.count--;
    if (found.count <= 0) {
      found.count = 1;
    }
    setBasket([...basket]);
  };
const quantityRemove = (product)=>{
      const found = basket.find((item) => item.id == product.id);
      setBasket(basket.filter((item)=>item.id!=product.id))
      // setBasket(basket.filter((item) => item.id !== product.id))}
}

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="text-center py-6 bg-gray-800 shadow-md">
        <h1 className="text-4xl font-bold">Online Shop</h1>
      </header>

      {/* Products Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                <img
                  src={item.photo || "https://via.placeholder.com/150"}
                  alt={item.title}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-200">${item.price.toFixed(2)}</p>
              <small className="italic text-purple-300">{item.category}</small>
              <button
                onClick={() => moveToCart(item)}
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
              >
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Basket Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Basket</h2>
        <table className="w-full table-auto bg-purple-800 text-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Count</th>
              <th className="py-3 px-4">Subtotal</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item, index) => (
              <tr key={index} className="border-t border-gray-600">
                <td className="py-2 px-4">{item.title}</td>
                <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                <td className="py-2 px-4">{item.count}</td>
                <td className="py-2 px-4">
                  ${(item.count * item.price).toFixed(2)}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => quantityUp(item)}
                    className="px-2 py-1 bg-purple-600 rounded hover:bg-purple-500 mx-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => quantityDown(item)}
                    className="px-2 py-1 bg-purple-600 rounded hover:bg-purple-500 mx-1"
                  >
                    -
                  </button>
                  
                  <button 
                  onClick={()=>quantityRemove(item)}
                  className="px-2 py-1 bg-red-600 rounded hover:bg-red-500 mx-1">
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
