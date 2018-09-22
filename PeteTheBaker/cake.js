function cakes(recipe, available) {
  // TODO: insert code
  var totalCakes = 0;
  var myCake = {}; // store values after comparison

  for(var ing in recipe){
  	myCake[ing] = (Object.keys(available).includes(ing)) ? Math.floor(available[ing]/recipe[ing]) : 0;
  }
  console.log(myCake);
  return ((Math.min(...Object.values(myCake))) === Infinity) ? 0 : (Math.min(...Object.values(myCake)));
}

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));