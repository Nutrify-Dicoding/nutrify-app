const { signin, signup } = require("./handlers/auth");
const { getAllCategories } = require("./handlers/categorie");
const { putFoodFavorites, getFoodFavorites, deleteFoodFavorites } = require("./handlers/favorite");
const { getAllFoods, getFoodById, getFoodByCategory, searchFoodByName } = require("./handlers/foods");
const { getProfile, editProfile, editAccount, changePassword } = require("./handlers/profile");
const { addTracking, getAllTracking, getTrackingToday, getTrackingPerDate } = require("./handlers/tracking");

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.redirect('/index.html');
        }
    },
    {
        method: 'POST',
        path: '/auth/signin',
        handler: signin,
    },
    {
        method: 'POST',
        path: '/auth/signup',
        handler: signup,
    },
    {
        method: 'GET',
        path: '/foods',
        handler: getAllFoods
    },
    {
        method: 'GET',
        path: '/foods/category/{category}',
        handler: getFoodByCategory
    },
    {
        method: 'GET',
        path: '/foods/search',
        handler: searchFoodByName
    },
    {
        method: 'GET',
        path: '/foods/{id}',
        handler: getFoodById
    },
    {
        method: 'GET',
        path: '/categories',
        handler: getAllCategories
    },
    {
        method: 'PUT',
        path: '/favorites',
        handler: putFoodFavorites
    },
    {
        method: 'DELETE',
        path: '/favorites/{id}',
        handler: deleteFoodFavorites
    },
    {
        method: 'GET',
        path: '/favorites',
        handler: getFoodFavorites
    },
    {
        method: 'POST',
        path: '/tracking',
        handler: addTracking
    },
    {
        method: 'GET',
        path: '/tracking/{date}',
        handler: getTrackingPerDate
    },
    {
        method: 'GET',
        path: '/tracking/today',
        handler: getTrackingToday
    },
    {
        method: 'GET',
        path: '/tracking',
        handler: getAllTracking
    },
    {
        method: 'GET',
        path: '/profile',
        handler: getProfile,
        options: {
            auth: 'jwt',
        },
    },
    {
        method: 'PUT',
        path: '/profile',
        handler: editProfile,
        options: {
            auth: 'jwt',
        },
    },
    {
        method: 'PUT',
        path: '/profile/account',
        handler: editAccount,
        options: {
            auth: 'jwt',
        },
    },
    {
        method: 'PUT',
        path: '/profile/change-password',
        handler: changePassword,
        options: {
            auth: 'jwt',
        },
    }
];

module.exports = routes;
