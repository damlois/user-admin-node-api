# user-admin-node-api
a node api that uses CRUD methods and mongodb to store users details and return them/perform task on request.

## Prerequisites
### What things you ned to ensure the API runs properly
ensure you have --node, --mongodb and optional(robomongo to view saved collection) on your computer.

## Modules installation
* npm install express --save
* npm install -g nodemon --save -dev
* npm install mongoose --save
* npm install body-parser --save

## How to run the api
use the second command if nodemon the nodemon module is insatalled
* node app.js
* nodemon app.js

## Conributing
pull requests are welcome

## Author
Lois Adegbohungbe

## License
This project is licensed under the MIT license

## Acknowledgements
* Abassade

## Routes
|                   NAME                         |   ENDPOINT            |
| -----------------------------------------------| ----------------------|
| base                                           |      /                |
| user sign up [post]                            | /users/signup         |
| user sign in [post]                            | /users/signin         |
| for admin, get all users                       | /admin/getusers       |
| for admin, get user by id [get]                | /admin/getbyid        |
| for admin, get user by name [get]              | /admin/getbyname      |
| for admin, delete a user by id [delete]        | /admin/deletebyid/:id |
| for admin, delete all data                     | /admin/deleteall      |
