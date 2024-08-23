import recipe from "./recipe.json";

function IngredientList() {
   return(
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipe[0].ingredients.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 