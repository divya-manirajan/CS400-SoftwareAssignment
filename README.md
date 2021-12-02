Delicate Garbage - Claire Roeder, Divya Manirajan, Cam Herbert

Overview:
    This project encapsulates the work of four separate phases, each of which build upon the concept and design for a software product named SportsLink. SportLink is an event organization application that allows users to find and create sports pickup games around their community. In the final phase of the project, a prototype was created that simulates two minimum viable products and the general aesthetic of the product.

SEA_01: Design the Box
    In the first phase of the project the group decided on the concept of “SportsLink” -- an app where people looking to play sports can find and create pickup games. More specifically, the app would help users create their preferred experience by allowing them to choose random teams or filter through certain skill sets, ages, or genders. The app would be centered around community engagement and team building, as people are interacting with new people each time they play a game. The vision statement was:
    For anyone who is looking for new and interesting opportunities to connect to community members through sports, SportsLink is a sports organization app that allows users to join and organize a variety of sports competitions or casual sessions. Unlike OpenSports and other sports organization apps, SportsLink focuses on community by allowing users of all skill levels and ages to learn and play together.
    During this phase, our group brainstormed several features. In the best case scenario, the app would be able to let users look for and create events, scroll through a feed of events, filter through preferred settings, and even level up and gain points as they win and play games.
    
SEA_02: Developing Features, Scenarios, Personas and User Stories 
    During this phase of the project, five interviews were conducted in order to gain insight on what a potential customer of SportsLink would want. Our team first created an interview template and then conducted the interviews on participants ranging from 21 to 70+ years old.
    The results of our interviews allowed us to narrow our feature list in order to create the most desirable product. For example, several interviewees stated that an e-sports option would not be appealing to them, which changed the trajectory of our product. Our minimum viable products turned out to be Creating an Event, Searching for an Activity, Filtering Preferences, and User Profiles.
    Three personas were developed during this phase -- Julie, Ava, and Matt -- all of which had different ages, backgrounds, and reasons for using the app. Each persona was tied to three separate scenarios, and ten user stories for each scenario. During the creation of these personas, scenarios, and user stories, new features were brought to light, such as features that enhance safety, per Ava’s concerns.
    
SEA_03: Developing a Software Architecture
    The architecture was laid out and the group decided to assign each feature to a component. Microservices, such as logging in, filling out forms, etc. were assigned to features. It was decided that the software should follow a client-server distribution that stores and pulls information from a database. 
    
SEA_04: Developing a Prototype and Portfolio
    For our final phase of this project we have decided to create a website that implements two of our minimum viable products -- creating events and creating user profiles. The website includes a navigation bar with tabs “Home”, “Events”, “About”, and “Profile”. For the prototype, we decided to skip the implementation MySQL, PHP, and other technologies listed in SEA_03 for simplicity.
    
  The website was created using HTML, styled with CSS, and functions with JavaScript. We incorporated several JavaScript mechanisms in our code, including functions for minimum character length, checking for the ‘@’ symbol in email fields, etc. For the create event form, we included a table using JavaScript that prints out the user input which tests functionality and also allows the user to double check their information.
  
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Instructions on Building and Running Application:

        Clone repository.
        
        Enter: cd .\CS400-SoftwareAssignment\prototype\
        
        Enter: docker build -t prototype:v1 .  
  
        Enter: docker run -dp 8000-8003:8000-8003 prototype:v1
  
        Enter: docker ps
  
        Visit: http://localhost:8000/

Instructions for Running Unit Tests:
    Run on docker CLI for prototype:v1 : npm run test

Prototype:
    The prototype consists of several html files, including home.html which serves as the home page (index.html) that points to other html files in the project by use of a navigation bar. There is a server.js file which is used to run the web pages from local hosts. It includes a single file that contains all JavaScript functions, function.js, which were then tested using Jest. The Dockerfile builds the image for the web page, which is run on 4 local ports.


Reflection:
    The process of developing SportsLink has given us the skills to envision what technologies a software product may need, the shortcomings it may experience, and the user perspectives that may come with it. We are now comfortable with and have a better understanding of using HTML, JavaScript, Docker, and Unit Testing. In making the website, we have learned how to gauge what types of formatting are most user friendly and make intuitive sense to customers.
    As a group, we discovered that collaborating on software development can be very difficult. More specifically, we had issues with merging code on github. However, this project has allowed us to gain experience in that area and learn how to collaborate in the most efficient way. We are now proficient in avoiding merge conflicts on github and working on seperate branches.
    This project allowed us to thoroughly understand how Docker works and what needs to be done in order to containerize a project. 

Demonstration Video:

https://video.bellarmine.edu/media/SEA_04/1_o5zrn2ue
