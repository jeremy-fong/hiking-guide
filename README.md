# Happy Trails

## Table of Contents
1. [Title](#title)
2. [Project](#project)
3. [Team Members](#team-members)
4. [Description](#description)
5. [Installation](#installation)
6. [Usage](#usage)
7. [User Story](#user-story)
8. [Further Development](#further-development)
9. [Screenshot Preview of Project](#screenshot-preview-of-project)
10. [Source](#source)

## Title :
### Happy Trials

## Project :
### *Note Taker*

## Team Members
- Jeremy Fong
- Evgheni Dimov
- Don Flores

## Description :
* This project uses Node.js, Express.js, Handlebars.js, MySQL, and Heroku for deployment.
* This project will allow the user to search for hikes based on an inputted location. 
* The hikes will show a description of the trail, length, rating of difficulty, as well as a link for more information

## Installation :
- Install MySQL, Node.js, and Express.js
- Create a .env file inside main folder and input the following inside the .env file: DB_NAME='hikingUser_db' DB_USER='root' DB_PASSWORD='(your MySQL password)'
- Open the terminal: Enter command: npm i , then npm run seed , then finally npm run start
- Go to http://localhost:3001/ in a web browser to view application.

## Usage :
- Once on the homepage, click on the 'Login' button, which will take you to the login page.
- A user does not need to login to search for hikes, however the user does need to be logged in to view their favorite hikes.
- Once the user is logged in they will be brought back to the homepage where they can input a location to search for hikes in that area. 
- Once a location searched, hike cards should appear with a description of the hike, and other information about it, as well as a save button. 
- A user can save a hike they like and view it in their favorite hikes page and can also delete it. 

## User Story :
```md
- AS A USER, I want to search a location,
    SO THAT I can find hikes around the area. 
- WHEN I view the hike,
    I SHOULD see a description, list of needed items, rated difficulty, length
- I want to be able to log in, 
    SO THAT I can view my favorite hikes/trails. 
- I want to be able to add hikes/trails,
    SO THAT they will be shown in the database.

    Stretch Goal
- I want to be able to track my location,
    SO THAT I can see how much of the trail has been completed. 
```

## Further Development:
```md
- When a location is searched the user is able to see the hikes in that area. 
- Right now the user is able to search for a location and get the data in the console, but it does not show on the page. 
```

## Screenshot Preview of Project :
![happy-trails-ss1](https://user-images.githubusercontent.com/112743562/213654568-3cf75eb0-1f3c-4c2a-b800-e5733e551f87.jpg)
![happy-trails-ss2](https://user-images.githubusercontent.com/112743562/213654594-837e2906-f843-47aa-9bab-9bc5a3cb7398.jpg)
![happy-trails-ss3](https://user-images.githubusercontent.com/112743562/213654612-b2cf3a27-a3aa-4246-a08f-e1812242780c.jpg)
![happy-trails-ss4](https://user-images.githubusercontent.com/112743562/213654640-7e203a7f-a2ab-48d4-8d41-8d451912c495.jpg)
![happy-trails-ss5](https://user-images.githubusercontent.com/112743562/213654654-fbfcdc63-f2f5-4b7a-81d1-6b4086e903b5.jpg)

## Source :
- GitHub Link: https://github.com/jeremy-fong/hiking-guide
- Deployed Link: https://happy-trails.herokuapp.com/
