// src/App.js
import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);

  function createFood(body) {
    body._id = Math.random() * 1000;
    setFoodList([body, ...foodList]);
  }
  function handleFilterFood(string) {
    if (string === "") {
      setFilteredFood(foodList);
    } else {
      setFilteredFood(
        foodList.filter(
          (food) => food.name.toLowerCase().includes(string.toLowerCase())
        )
      );
    }
  }

  return (
    <div className="App">
      <AddFoodForm parentCb={createFood} />
      <Search filterFood={handleFilterFood} />
      {filteredFood.map((food) => (
        <FoodBox food={food} />
      ))}
    </div>
  );
}
export default App;
