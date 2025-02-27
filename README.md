# WCS-Backend-Workshop

## Clone and enter the repository
git clone https://github.com/aditi135/WCS-Backend-Workshop.git 

## Install dependencies
cd client
npm install
cd ..\server\
npm install

## If you dont have NPM: 
https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/

## The important files for this project are:
- server\server.js
- server\seed.js
- server\models\Note.js
- client\src\App.css
- client\src\App.js
- client\src\components\AddNote.js
- client\src\components\NoteList.js

## Create a MongoDB account and set up a MongoDB Atlas database
https://www.mongodb.com/ \
https://www.mongodb.com/docs/guides/atlas/connection-string/

## Add your MongoDB connection string to:
- server\server.js
- server\seed.js

## Run server
node server.js 
(make sure you are within the server directory)

## Run seed file to load in example notes (optional)
node seed.js
(make sure you are within the server directory)

## Run project
npm start
(make sure you are within the client directory)

## View project in browser
Open [http://localhost:3000](http://localhost:3000)  \
The page will reload when you make changes.

  
