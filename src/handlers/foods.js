const getAllFoods = (req, res) => {
    return req.server.app.dummyListFood;
}
const getFoodById = (req, res) => {
    const { id } = req.params;
    const food = req.server.app.dummyListFood.find((food) => food._id === id);
    if (!food) {
        return res.response({
            status: "fail",
            message: "Food not found",
        }).code(404);
    }
    return food;
}

const getFoodByCategory = (req, res) => {
    const { category } = req.params;
    const food = req.server.app.dummyListFood.filter((food) => food.category._id === category);
    if (!food) {
        return res.response({
            status: "fail",
            message: "Food not found",
        }).code(404);
    }
    return food;
}

const searchFoodByName = (req, res) => {
    const { name } = req.query;
    console.log(name)
    const food = req.server.app.dummyListFood.filter((food) => food.name.toLowerCase().includes(name.toLowerCase()));
    if (!food) {
        return res.response({
            status: "fail",
            message: "Food not found",
        }).code(404);
    }
    return food;
}

module.exports = {
    getAllFoods,
    getFoodById,
    getFoodByCategory,
    searchFoodByName
};