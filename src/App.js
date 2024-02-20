import './App.css';
import foods from "./foods.json"
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App () {

  let [ foodItems, setFoodItems ] = useState(foods)
  let [ food, setFood ] = useState(foods)

  function addNewFood(newFood) {
    const updatedFoodItems = [newFood, ...foodItems]
    const updatedFood = [...food, newFood]

    setFoodItems(updatedFoodItems)
    setFood(updatedFood)

  }

  function search(query) {
    console.log(query)

    const searchResult = foodItems.filter(foodItem => {
      const nameChars = foodItem.name.toLowerCase().split('').sort()
      const queryChars = query.toLowerCase().split('').sort()
      return queryChars.every(char => nameChars.includes(char))
    })

    setFood(searchResult)
  }

  function handleDelete(foodToDelete){
    const filteredFoodItems = foodItems.filter(foodItem => {
      return foodItem.name !== foodToDelete
    })

    const filteredFood = food.filter(foodItem => {
      return foodItem.name !== foodToDelete
    })

    setFoodItems(filteredFoodItems)
    setFood(filteredFood)
  }


  return (
    <>
      <AddFoodForm addFood={addNewFood}/>
      <Search search={search}/>
      <div className="App">
        {food.map(item => {
          return (
            <div>
              <FoodBox food = {item} handleDelete={handleDelete}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
