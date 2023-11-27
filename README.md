---
runme:
  id: 01HFPHXTXZ0W8AX2YH81CBG5F8
  version: v2.0
---

npm v9.8.1
node v18.18.2

# **API SPECIFICATION**

BASE URL :

## **Sign Up**

**Request** :

- Method : POST

- Endpoint : `(base-url)/auth/signup`

- Header :
   - Content-Type : application/json
   - Accept : application/json

- Body :

```json {"id":"01HFX9CE9KMCTPDQ4GYEQS0RDM"}
{
  "email": "string",
  "username": "string",
  "gender": "string, enum('perempuan','pria')",
  "tinggi": "number",
  "berat": "number",
  "umur": "number",
  "password": "string",
  "levAktivitas": "number"
}
```

- Authentication - Bearer Token : `<token key>`
   **Response** :

```json {"id":"01HFX9CE9MZA4AC1N049S80ST9"}
{
  "message": "success",
  "token": "string",
  "username": "string",
  "email": "string",
  "gender": "string",
  "status": "string",
  "password": "string encrypt",
  "tinggi": "number",
  "berat": "number",
  "umur": "number",
  "caloriNeeded": "number",
  "carboNeeded": "number",
  "proteinNeeded": "number",
  "fatNeeded": "number",
  "levAktivitas": "number"
}
```

## **Sign In**

**Request** :

- Method : POST

- Endpoint : `(base-url)/auth/signin`

- Header :
   - Content-Type : application/json
   - Accept : application/json

- Body :

```json {"id":"01HFX9CE9NWYYQ3C43PWFXGS2Q"}
{
  "email": "string",
  "password": "string"
}
```

- Authentication - Bearer Token : `<token key>`
   **Response** :

```json {"id":"01HFX9CE9NWYYQ3C43PYCDNEZ8"}
{
  "message": "login success, welcome!",
  "token": "string",
  "username": "string",
  "email": "string",
  "gender": "string",
  "status": "string",
  "password": "string encrypt",
  "tinggi": "number",
  "berat": "number",
  "umur": "number",
  "caloriNeeded": "number",
  "carboNeeded": "number",
  "proteinNeeded": "number",
  "fatNeeded": "number"
}
```

**Food**

## **Add Many Foods (ADMIN)**

**Request** :

- Method : POST
- Endpoint : `(base-url)/foods`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

  ````json

      [
          {
              "name":"string ",
              "image": "string",
              "category":"string unique",
              "cal": "number",
              "protein": "number",
              "carb": "number",
              "fat": "number",
              "carbon": "number",
              "desc": "string",
          },
          {
              "name":"string",
              "image": "string",
              "category":"string unique",
              "cal": "number",
              "protein": "number",
              "carb": "number",
              "fat": "number",
              "carbon": "number",
              "desc": "string",
          }
      ]
      ```

  **Response** :
  ````

```json
{
  "message": "food added successfully",
  "data": [
    {
      "name": "string ",
      "image": "string",
      "category": "string unique",
      "cal": "number",
      "protein": "number",
      "carb": "number",
      "fat": "number",
      "carbon": "number",
      "desc": "string"
    },
    {
      "name": "string",
      "image": "string",
      "category": "string unique",
      "cal": "number",
      "protein": "number",
      "carb": "number",
      "fat": "number",
      "carbon": "number",
      "desc": "string"
    }
  ]
}
```

## **Update Food Data (ADMIN)**

**Request** :

- Method : PATCH
- Endpoint : `(base-url)/foods/{:food_id}`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body : (example)
  `json
  {
      "cal": "number",
      "protein": "number",
      "carb": "number",
      "fat": "number",
      "carbon": "number",
  }
  `
  **Response** :

```json
{
  "message": "update success",
  "foodUpdated": {
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
  }
}
```

## **Get All Food Data**

**Request**

- Method : GET
- Endpoint : `(base-url)/foods`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CE9PT8RSYWQEFXFB0TRP"}
[
  {
    "_id": "string unique",
    "name": "string",
    "image": "string",
    "category": {
      "_id": "string unique",
      "name": "string"
    },
    "cal": "number",
    "protein": "number",
    "carb": "number",
    "fat": "number",
    "desc": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

## **Get Food Data by Food Id**

**Request** :

- Method : GET
- Endpoint : `(base-url)/foods/{:food_id}`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEBTD59T5MQ1G10YM3MT"}
[
  {
    "_id": "string unique",
    "name": "string",
    "image": "string",
    "category": {
      "_id": "string unique",
      "name": "string"
    },
    "cal": "number",
    "protein": "number",
    "carb": "number",
    "fat": "number",
    "desc": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

## **Get Food By Category**

**Request** :

- Method : GET
- Endpoint : `(base-url)/foods/category/{:category_id}`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEBVVCCF1GAN74XSVA6Y"}
[
  {
    "_id": "string unique",
    "name": "string",
    "image": "string",
    "category": {
      "_id": "string unique",
      "name": "string"
    },
    "cal": "number",
    "protein": "number",
    "carb": "number",
    "fat": "number",
    "desc": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

## **Search Food Data**

**Request** :

- Method : GET
- Endpoint : `(base-url)/foods/search?name={:query}`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEBVVCCF1GAN77KW9SSS"}
[
  {
    "_id": "string unique",
    "name": "string",
    "image": "string",
    "category": {
      "_id": "string unique",
      "name": "string"
    },
    "cal": "number",
    "protein": "number",
    "carb": "number",
    "fat": "number",
    "desc": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

# **Category**

## **Get All Categories**

**Request** :

- Method : GET
- Endpoint : `(base-url)/categories`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEBVVCCF1GAN7AXDHN99"}
[
  {
    "_id": "string unique",
    "name": "string"
  }
]
```

## **Add Category (ADMIN)**

**Request** :

- Method : POST
- Endpoint : `(base-url)/categories`
- Header :
   - Content-Type : application/json
   - Accept : application/json

- Body :
   `json
   {
   "_id": "string",
   "name":"string"
   }
   `
   __Response__ :

```json {"id":"01HFX9CEBVVCCF1GAN7D3JAY2J"}
{
  "message": "category added successfully",
  "data": {
    "_id": "string",
    "name": "string"
  }
}
```

# **Favorite**

## **Add Favorite Food**

**Request** :

- Method : POST
- Endpoint : `(base-url)/favorites`
- Header :
   - Content-Type : application/json
   - Accept : application/json
   - Authorization : Bearer TOKEN

- Body :
   `json
   {
   "user":"string unique",
   "food":"string unique"
   }
   `
   **Response** :

```json {"id":"01HFX9CEBZW5KAS0YKMFX2F5E2"}
{
  "message": "favorite food data added successfully",
  "favorite": "string unique",
  "newFav": {
    "user_id": "string unique",
    "food_id": "string unique"
  }
}
```

## **Get Favorite Food**

**Request** :

- Method : GET
- Endpoint : `(base-url)/favorites`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEC08V2WBKNDSS05J6J2"}
[
  {
    "_id": "string unique",
    "user": "string unique",
    "food": {
      "_id": "string unique",
      "name": "string",
      "image": "string",
      "category": "string unique",
      "cal": "number",
      "protein": "number",
      "carb": "number",
      "fat": "number",
      "desc": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  }
]
```

## **Delete Favorite Food**

**Request** :

- Method : DELETE
- Endpoint : `(base-url)/favorites/{:favorite_id}`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEC08V2WBKNDSVRBKE07"}
{
  "message": "favorite food data deleted successfully"
}
```

# **Add Tracking of User**

**Request** :

- Method : POST
- Endpoint : `(base-url)/tracking`
- Header :
   - Content-Type : application/json
   - Accept : application/json

- Body :

```json {"id":"01HFX9CEC1FQN8KE7S2X0QVKDE"}
{
  "food": [
    {
      "foodId": "string unique",
      "portion": "number"
    }
  ]
}
```

**Response** :

```json {"id":"01HFX9CEC1FQN8KE7S2ZSD7ZX2"}
{
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
```

## **Get All Tracking of User**

**Request** :

- Method : GET
- Endpoint : `(base-url)/tracking`
- Header : - Accept : application/json
   **Response** :

```json {"id":"01HFX9CEC1FQN8KE7S320FWET1"}
{
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
```

## **Get Today Tracking of User**

**Request** :

- Method : GET
- Endpoint : `(base-url)/tracking/today`
- Header : 
  - Accept : application/json
  - Authorization : Bearer TOKEN

**Response** :

```json {"id":"01HFX9CEC1FQN8KE7S33GMNZXY"}
{
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
```

## **Get Tracking of User Per Date**

**Request** :

- Method : GET
- Endpoint : `(base-url)/tracking/{:date}`
- Header : 
  - Accept : application/json
  - Authorization : Bearer TOKEN

**Response** :

```json {"id":"01HFX9CEC1FQN8KE7S36KBTKSB"}
{
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
```

# **Profile and Account**

## **Get Profile**

**Request** :

- Method : GET
- Endpoint : `(base-url)/profile`
- Header : 
  - Accept : application/json
  - Authorization : Bearer TOKEN

**Response** :

```json {"id":"01HFX9CEC2K68587F4B0B7Q6D2"}
{
  "_id": "string",
  "username": "string",
  "email": "string",
  "gender": "string",
  "status": "string",
  "password": "string encrypted",
  "tinggi": "number",
  "berat": "number",
  "levelAktivitas": {
    "val": "number",
    "ket": "string"
  },
  "umur": "number",
  "caloriNeeded": "number",
  "proteinNeeded": "number",
  "fatNeeded": "number",
  "carboNeeded": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
```

## **Edit Profile**

**Request** :

- Method : PUT
- Endpoint : `(base-url)/profile`
- Header :
   - Content-Type : application/json
   - Accept : application/json
   - Authorization : Bearer TOKEN

- Body : (example)
   `json
   {
   "username": "string",
   "gender": "string",
   "tinggi": "number",
   "berat": "number",
   "levelAktivitas": "number",
   "umur": "number"
   }
   `
   **Response** :

```json {"id":"01HFX9CEC2K68587F4B48VZKX4"}
{
  "message": "profile has been changed successfully",
  "changeSuccess": {
    "username": "string",
    "gender": "string",
    "tinggi": "number",
    "berat": "number",
    "umur": "number",
    "levelAktivitas": "number",
    "caloriNeeded": "number",
    "carboNeeded": "number",
    "proteinNeeded": "number",
    "fatNeeded": "number"
  }
}
```

## **Edit Account (Email and Password)**

**Request** :

- Method : PUT
- Endpoint : `(base-url)/profile/account`
- Header :
   - Content-Type : application/json
   - Accept : application/json
   - Authorization : Bearer TOKEN

- Body :
   `json
   {
   "email": "string",
   "currentPassword": "string",
   "newPassword": "string",
   "confirmPassword": "string"
   }
   `
   **Response** :

```json {"id":"01HFX9CEC3KZKATZGP0DS6Q2XP"}
{
  "message": "string",
  "changed": {
    "email": "string",
    "password": "string encrypted"
  }
}
```

## **Change Password**

**Request** :

- Method : PUT
- Endpoint : `(base-url)/profile/change-password`
- Header :
   - Content-Type : application/json
   - Accept : application/json
   - Authorization : Bearer TOKEN

- Body : (example)
   `json
   {
   "currentPassword":"string",
   "newPassword":"string",
   "confirmPassword":"string"
   }
   `
   **Response** :

```json {"id":"01HFX9CEC3KZKATZGP0ESDHNPH"}
{
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
```