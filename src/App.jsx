import { useState } from "react";
import Card from "./card";
import Button from "./button";
import Input from "./input";
import Select from "./select";
import { ShoppingCart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Eco-friendly Water Bottle", price: "$25", category: "Reusables", image: "https://th.bing.com/th/id/OIP.KzIjocsS0QhhsSBsPiobEQHaI9?w=167&h=201&c=7&r=0&o=5&dpr=1.1&pid=1.7", link: "https://shop.sensworldwide.com/products/hydrawooden-500ml?variant=44669508124926" },
  { id: 2, name: "Biodegradable Toothbrush", price: "$10", category: "Personal Care", image: "https://i.etsystatic.com/19705537/r/il/2e83f1/2692601631/il_1140xN.2692601631_5xv4.jpg", link: "https://barenecessities.in/products/compostable-bamboo-tooth-brush-zero-waste-eco-friendly" },
  { id: 3, name: "Organic Cotton Tote Bag", price: "$15", category: "Fashion", image: "https://tinygreenmom.com/wp-content/uploads/2010/07/Canvas_Bag_P_L_O.jpg", link: "https://brownliving.in/products/knot-white-100-cotton-canvas-eco-friendly-tote-bag-with-zip" },
  { id: 4, name: "Solar Powered Charger", price: "$45", category: "Technology", image: "https://th.bing.com/th/id/OIP.Aa9BoYAczx--FX6NaM3O4QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain", link: "https://amzn.in/d/828L5md" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
    (product) =>
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
        <Leaf className="text-green-600" /> Sustainable Product Marketplace
      </h1>
      
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select options={['All', 'Reusables', 'Personal Care', 'Fashion', 'Technology']} onValueChange={setCategory} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="hover:shadow-xl transition p-4 border rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-green-700 font-semibold">{product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="mt-2 w-full flex items-center gap-2 text-blue-600 hover:underline">
                Buy Now <ShoppingCart />
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
