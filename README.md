## ABOUT THE PROJECT 
<h5>This repo is the backend part of the project.</h5>
<h1> Runway Kicks </h1>
<div align="center"  width="100" height="100">
  <img src="logo.png" alt="html" width="200" height="100"/>
  <br>
  <br>
  <p>Welcome to Runway Kicks, a footwear ecommerce website for purchasing products. This website is designed to make it easy for you to browse and purchase a wide variety of shoes, from casual to formal, at competitive prices.</p>
  <br>
  <p>Our system provides a user-friendly platform that enables users to browse products, search, filter, add and place order with ease.. Additionally, all-encompassing administrative interface that enables authorized personnel to perform a wide range of operations, including Create, Read, Update, and Delete (CRUD) functions. </p>
</div>
<hr> 

## TECH STACKS USED

<p align = "center">
<img src="https://github.com/PrinceCorwin/Useful-tech-icons/blob/main/images/HTML.png" alt="html" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="50" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>
<hr>

## Features 
-  Authentication
-  API Validation
-  Responsive
-  Cross Platform
-  Registeration/Signin/Logout
-  Product Search 
-  Product Filter
-  Add to Cart
-  Order History Fetch
-  Admin can perform all CRUD operations

## Run Locally
### Clone this Project

```
https://github.com/Swati-Tanu/Runway-Kicks.git
```

### Install npm Packages

```javascript
npm i --global
```

### Go to Backend Folder
```javascript
cd backend
```

### Run Server
```javascript
npx nodemon index.js
```
### Runs the project in the development mode

[http://localhost:5000](http://localhost:5000)


### Environment Variables Required
`mongourl`

`key`

`port`

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
</p>

## API Endpoints
   #### Welcome
```javascript
GET  /
```
  #### Registration
```javascript
POST  /user/register
```
  #### Signin
```javascript
POST  /user/login
```
#### Men Products 
```javascript
GET /men/
GET /men/filter
GET /men/exc
GET /men/sort
GET /men/search
POST  /men/create
PATCH /men/update/:id
DELETE /men/delete/:id
```
#### Women Products 
```javascript
GET /women/
GET /women/filter
GET /women/exc
GET /women/sort
GET /women/search
POST  /women/create
PATCH /women/update/:id
DELETE /women/delete/:id
```

#### Kids Products 
```javascript
GET /kid/
GET /kid/filter
GET /kid/exc
GET /kid/sort
GET /kid/search
POST  /kid/create
PATCH /kid/update/:id
DELETE /kid/delete/:id
```

#### Orders
```javascript
GET /order/
GET /order/search
```

#### Carts
```javascript
GET /cart/
POST  /cart/create
PATCH /cart/update/:id
DELETE /cart/delete/all
DELETE /cart/delete/:id
```

  #### Admin 
 ```javascript
 POST /admin/register
 POST /admin/login

 Credentials: 
 admin@gmail.com
 admin
 
 ```
    
   
<div align = "center">  
  
  
| `Project Highlights` |
| :------------------: | 

 <div align = "center">
   <h2>Landing Page</h2>
   
   <br>
   <h2>Product Page</h2>
    
   <h2>Sale Page</h2>
   
   <br>
   <h2>Community Page</h2>
   
   <br>
   <h2>Admin Dashboard</h2>
   
   <br>
<div/>
  <br>

| `Demo` |
| :----: | 
   

[FRONTEND]()

[BACKEND](https://dark-frog-scarf.cyclic.app/)

 
| `Author` |
| :-------: | 
 
 [SWATI TANU](https://github.com/Swati-Tanu) 
 
