const addTracking = (req, res) => {
    return {
        "_id": "string unique",
        "user": "string unique",
        "tracking": {
            "date": "date",
            "food": [
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                }
            ]
        },
        "totCarb": "number",
        "totProtein": "number",
        "totFat": "number",
        "totCal": "number"
    }
}

const getAllTracking = (req, res) => {
    return {
        "_id": "string unique",
        "user": "string unique",
        "tracking": {
            "date": "date",
            "food": [
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                }
            ]
        },
        "totCarb": "number",
        "totProtein": "number",
        "totFat": "number",
        "totCal": "number"
    }
}

const getTrackingToday = (req, res) => {
    return {
        "_id": "string unique",
        "user": "string unique",
        "tracking": {
            "date": "date",
            "food": [
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                }
            ]
        },
        "totCarb": "number",
        "totProtein": "number",
        "totFat": "number",
        "totCal": "number"
    }
}

const getTrackingPerDate = (req, res) => {
    return {
        "_id": "string unique",
        "user": "string unique",
        "tracking": {
            "date": "date",
            "food": [
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "string unique",
                        "name": "string",
                        "image": "string",
                        "category": "string unique",
                        "cal": "number",
                        "protein": "number",
                        "carb": "number",
                        "fat": "number",
                        "desc": "100gram"
                    },
                    "portion": "number",
                    "time": "time"
                }
            ]
        },
        "totCarb": "number",
        "totProtein": "number",
        "totFat": "number",
        "totCal": "number"
    }
}
module.exports = {
    addTracking,
    getAllTracking,
    getTrackingToday,
    getTrackingPerDate,
}