import React from "react"
import {useState} from "react"

export default function AddFoodForm (props) {
const [formState, setFormState] = useState({})

    function handleImput (event){
let {name, value} = event.target
setFormState (Object.assign({}, formState, {[name]: value}))
    }

 function handleSubmit(event) {
   event.preventDefault();
   props.parentCb(formState);
   setFormState({});
 }


    return (
      <div className="AddFood">
        <h4>add food</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formState.name || ""}
            onChange={handleImput}
          />

          <label htmlFor="image">Image:</label>

          <input
            type="text"
            name="image"
            placeholder="Image Name"
            value={formState.image || ""}
            onChange={handleImput}
          />

          <label htmlFor="calories">Calories:</label>

          <input
            type="number"
            name="calories"
            placeholder="Food Calories"
            value={formState.calories || ""}
            onChange={handleImput}
          />

          <label htmlFor="servings">Servings:</label>

          <input
            type="number"
            name="servings"
            placeholder="Food Servings"
            value={formState.servings || ""}
            onChange={handleImput}
          />
          <button type="submit">create</button>
        </form>
      </div>
    );
}