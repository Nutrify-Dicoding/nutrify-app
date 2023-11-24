const getProfile = (req, res) => {
    return {
        "_id": "user123",
        "username": "john_doe",
        "email": "john@example.com",
        "gender": "pria",
        "status": "Aktif",
        "password": "$2y$10$pZhjIjw8OxavHmRCYQzxT.U/x5sWQTJyCFtBL1aRR.IL7t8jhCG06",
        "tinggi": 175,
        "berat": 70,
        "levelAktivitas": {
            "val": 1.55,
            "ket": "Sedang"
        },
        "umur": 28,
        "caloriNeeded": 2500,
        "proteinNeeded": 80,
        "fatNeeded": 70,
        "carboNeeded": 300,
        "createdAt": "2023-11-23T08:30:00",
        "updatedAt": "2023-11-23T10:45:00"
    }
}
const editProfile = (req, res) => {
    return {
        "message": "profile has been changed successfully",
        "changeSuccess": {
            "username": "user123",
            "gender": "pria",
            "tinggi": 175,
            "berat": 70,
            "umur": 25,
            "levelAktivitas": 1,
            "caloriNeeded": 2400,
            "carboNeeded": 300,
            "proteinNeeded": 80,
            "fatNeeded": 60
        }
    }
}

const editAccount = (req, res) => {
    return {
        "message": "account has been changed successfully",
        "changed": {
            "email": "john@example.com",
            "password": "$2y$10$vVAEjXsa3fr27yD6NlUtDO9qZ021uzzayM74E25fyRuVeLevquFmO"
        }
    }
}

const changePassword = (req, res) => {
    return {
        "message": "Password have been Changed successfully",
        "success": {
            "_id": "string",
            "username": "string",
            "email": "string",
            "gender": "string",
            "status": "string",
            "password": "string encrypted",
            "tinggi": "number",
            "berat": "number",
            "levelAktivitas": "number",
            "umur": "number",
            "caloriNeeded": "number",
            "proteinNeeded": "number",
            "fatNeeded": "number",
            "carboNeeded": "number",
            "createdAt": "date",
            "updatedAt": "date"
        }
    }
}
module.exports = { getProfile, editProfile, editAccount, changePassword }