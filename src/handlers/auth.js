const jwt = require('jsonwebtoken');

const signin = (request, h) => {
    const token = jwt.sign({
        _id: 'user-123',
        role: 'user'
    }, request.server.app.JWT_PRIVATE_KEY);

    const {email, password} = request.payload;
    if (email !== 'user@test.com' || password !== '123') {
        return h.response({
            "error": "Unauthorized",
            "message": "Email atau password salah"
        }).code(401);
    }

    return {
        "message": "Login success, welcome!",
        "token": token,
        "username": "john_doe",
        "email": "john@example.com",
        "gender": "pria",
        "status": "Aktif",
        "password": "encrypted_password",
        "tinggi": 170,
        "berat": 65,
        "umur": 19,
        "caloriNeeded": 2200,
        "carboNeeded": 300,
        "proteinNeeded": 80,
        "fatNeeded": 60
    }
};

const signup = (request, h) => {
    return {
        "email": "john.doe@example.com",
        "username": "john_doe",
        "gender": "pria",
        "tinggi": 175,
        "berat": 70,
        "umur": 25,
        "password": "strongPassword123",
        "levAktivitas": 1.55
    }
}

module.exports = { signin, signup };