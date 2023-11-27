const postFoodFavorites = (req, res) => {
    return {
        "message": "favorite food data added successfully",
        "favorite": "string unique",
        "newFav": {
            "user_id": "string unique",
            "food_id": "string unique"
        }
    }
}

const getFoodFavorites = (req, res) => {
    const selectSomeFoods = req.server.app.dummyListFood.slice(0, 2);
    return selectSomeFoods
}

const deleteFoodFavorites = (req, res) => {
    return {
        "message": "favorite food data deleted successfully"
    }
}

module.exports = {
    postFoodFavorites,
    getFoodFavorites,
    deleteFoodFavorites
}