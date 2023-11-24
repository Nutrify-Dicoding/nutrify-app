const generateCategories = (numCategories) => {
    const categories = [];

    for (let i = 1; i <= numCategories; i++) {
        const category = {
            "_id": `c${i}`,
            "name": `kategori ${i}`
        };

        categories.push(category);
    }

    return categories;
}

module.exports = { generateCategories };