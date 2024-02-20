import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ addFood }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(1)


  const handleNameChange = (e) => setName(e.target.value)
  const handleImageChange = (e) => setImage(e.target.value)
  const handleCaloriesChange = (e) => setCalories(e.target.value)
  const handleServingsChange = (e) => setServings(e.target.value)

  const handlsSubmit = (e) => {
    e.preventDefault()
    const newFood = { name, image, calories, servings}

    addFood(newFood)
    
    setName("")
    setImage("")
    setCalories(0)
    setServings(1)

  }




  return (
    <form onSubmit={handlsSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;