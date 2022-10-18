## 1. GET /user/random A random user

👈 Get a random user from the .json file

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/random](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/random)

## 2. GET /user/all A list of random users

👈 Get all the users from the .json file

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/all](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/all)

👈 BONUS: Limit the number of users using query parameter(eg:?limit=5)

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/all?limit=3](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/all?limit=3)

## 3. POST /user/save Save a random user

👈 Save a user in the .json file

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/save](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/save)

👈 BONUS: validate the body and check if all the required properties are present in the body. -- if any properties will be missing "message": "some info is missing!" this error message will be returned.

## 4. PATCH /user/update Update a random user

👈Update a user's information in the .json file using its id

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/update](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/save)

👈BONUS: validate the user id. if id doesn't exist "message": "user does not exist!" this error message will be returned.

## 5. PATCH /user/bulk-update update multiple users

👈Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.

👈 End Point:[https://acc-assignment-1-emon-imrannaazir.vercel.app/user/bulk-update](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/bulk-update)

👈BONUS: validate the body. Body validated

## 6. DELETE /user/ delete

👈Delete a user from the .json file using its id. If any user against the provided id doesn't exist "message": "invalid id! Please provide valid id!" this error message will be returned.

👈 End Point: [https://acc-assignment-1-emon-imrannaazir.vercel.app/user/delete](https://acc-assignment-1-emon-imrannaazir.vercel.app/user/delete)

👈BONUS: validate the user id
