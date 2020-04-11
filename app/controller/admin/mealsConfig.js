var express = require('express');
var router = express.Router();

router.get('/getMeals', function(req, res) {
    res.send(getMeals());
});
// router.post('/getMeals', function(req, res) {
//     res.send(getMeals());
// });
router.get('/addNewMeal', function(req, res) {
    res.send(addMeal());
});
router.get('/updateMeal', function(req, res) {
    res.send(updateMeal());
});

function getMeals() {
    this.mealsList = [];
    this.mealsList.push({
        mealId: 1,
        mealName: 'Breakfast',
        mealCutoffTime: '7:00 - 09:00'
    });
    this.mealsList.push({
        mealId: 2,
        mealName: 'lunch',
        mealCutoffTime: '7:00 - 10:00'
    });
    this.mealsList.push({
        mealId: 3,
        mealName: 'Dinner',
        mealCutoffTime: '14:00 - 17:00'
    });
    return this.mealsList;
}

function addMeal(mealData) {
    console.log('Add Meal');
}

function updateMeal(mealId) {
    console.log('Update Meal');
}

module.exports = router;