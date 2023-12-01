const foodData = require('./food.json');

// List all food items
function listAllFoodItems(data) {
  return foodData.map(item => item.foodname);
}

// List food items with a specific category
function listFoodItemsByCategory(data, category) {
  return foodData.filter(item => item.category === category).map(item => item.foodname);
}

// List food items with calorie above/below a certain threshold
function listFoodItemsByCalorie(data, threshold, above = true) {
  return foodData.filter(item => (above ? item.calorie > threshold : item.calorie < threshold)).map(item => item.foodname);
}

// List food items with highest to lowest protein content
function listFoodItemsByProtein(data) {
  return foodData.sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
}

// List food items with lowest to highest carb content
function listFoodItemsByCarb(data) {
  return foodData.sort((a, b) => a.cab - b.cab).map(item => item.foodname);
}

console.log('list all the food items')
console.log(listAllFoodItems(foodData));
console.log('list all the food items with category vegetables');
console.log(listFoodItemsByCategory(foodData,'Vegetable'));
console.log('list all the food items with category fruit');
console.log(listFoodItemsByCategory(foodData, 'Fruit'));
console.log('list all the food items with category protien');
console.log(listFoodItemsByCategory(foodData, 'Protein'));
console.log('list all the food items with category nuts');
console.log(listFoodItemsByCategory(foodData, 'Nuts'));
console.log('list all the food items with category grains');
console.log(listFoodItemsByCategory(foodData, 'Grain'));
console.log('list all the food items with category dairy');
console.log(listFoodItemsByCategory(foodData, 'Dairy'));
console.log('list all the food items with calorie above 100')
console.log(listFoodItemsByCalorie(foodData, 100, true));
console.log('list all the food items with calorie below 100')
console.log(listFoodItemsByCalorie(foodData, 100, false));
console.log('list all the food items with highest protien content to lowest')
console.log(listFoodItemsByProtein(foodData));
console.log('list all the food items with lowest cab content to highest')
console.log(listFoodItemsByCarb(foodData));
