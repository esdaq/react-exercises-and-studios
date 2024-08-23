let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


/* function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe(props) {
  return (
    <GiveRating rating= {props.rating} />
  );
} */


function RateARecipe(props) {
    function GiveRating(props) {
/*     if(props.rating <1 || props.rating > 5){
      alert("Please enter a valid number");
    }else{
      return <h3>{stars[props.rating - 1]}</h3>;
    } */

    return props.rating > 0 && props.rating < 6 ? <h3>{stars[props.rating - 1]}</h3> : null;
  }
  return (
    <>
      <GiveRating rating={props.rating}/>
    </>
  );
}




export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
