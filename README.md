# Getting Started simple mern app

Steps to create a simple mern app:-
1) npm i express-generator
2) create a new folder
3) cd into your newly created folder and run `npx express-generator backend --no-view` // here backend is your backend project name
4) npx create-react-app client  // here client is your frontend project name
5) open www file inside <your backend project name>/bin
6) Change this line `var port = normalizePort(process.env.PORT || '3000');` to this `var port = normalizePort(process.env.PORT || '3010');` this we have to do because by default react also runs on port 3000 so we want our backend server to run on a different port
7) We also want to add proxy in our frontend application, add a key-value pair in package.json of your frontend application `"proxy": "http://localhost:3010",`. This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3010) every time we make a network request to it.
8) Open App.js of your frontend project and call the API to check if everything is working properly
 fetch('/<api path>')
      .then(response => response.text())
      .then(data => console.log({ data }));