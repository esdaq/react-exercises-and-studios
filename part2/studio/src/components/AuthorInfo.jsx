import "./styling.css";
import recipe from "./recipe.json";

function AuthorInfo() {
    let authorName = <div>{recipe[0].author}</div>;
    let authorImage = <img src={`${recipe[0].authorImage}`} alt={authorName} className="authorImage"/>;
    let webLink = <a href={`${recipe[0].website}`}> {recipe[0].website}</a>;
    
   return(
    <div key={recipe[0].name}>
      {authorName}
      {authorImage}
      {webLink}

    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 