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
                        "_id": "xy1",
                        "name": "Nasi Padang 1",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "1",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "xy12",
                        "name": "Nasi Padang 2",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "2",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "xy13",
                        "name": "Nasi Padang 3",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "1",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "xy14",
                        "name": "Nasi Padang 4",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "4",
                    "time": "time"
                },
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
                        "_id": "xy3",
                        "name": "Nasi Padang 2",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "1",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "xy3",
                        "name": "Nasi Padang 3",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "1",
                    "time": "time"
                },
                {
                    "foodId": {
                        "_id": "xy3",
                        "name": "Nasi Padang 4",
                        "image": "/images/traditional-nasi-lemak.png",
                        "category": "xyz",
                        "cal": "129",
                        "protein": "2.6",
                        "carb": "14.7",
                        "fat": "6.6",
                        "desc": "100gram"
                    },
                    "portion": "1",
                    "time": "time"
                },
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