const generateFoodData = (numItems, listCategories) => {
    // console.log(listCategories)
    const foodData = [];
    for (let i = 1; i <= numItems; i++) {
        const category = listCategories[Math.floor(Math.random() * listCategories.length)];
        const foodItem = {
            "_id": `x${i}`,
            "name": `Nama Makanan ${i}`,
            // "image": "https://i.ibb.co/YbZR8mc/Group-40.png",
            "image": "https://i.ibb.co/8s9c629/Foto-Makanan.png",
            category,
            "cal": Math.floor(Math.random() * 100) + 50,
            "protein": Math.floor(Math.random() * 50) + 50,
            "carb": Math.floor(Math.random() * 50) + 50,
            "fat": Math.floor(Math.random() * 50) + 50,
            "desc": `Deskripsi Makanan ${i}`,
            "createdAt": "2023-11-23T08:30:00",
            "updatedAt": "2023-11-23T10:45:00"
        };
        foodData.push(foodItem);
    }
    return foodData;
}

module.exports = { generateFoodData };