# MVC Tech Blog

## _Description_

The MVC Tech Blog is built with a MySQL database and CMS-style using Model View Controller (MVC) paradigm.

## _Visual_

Live Application: [MVC Tech Blog](https://tech-blog-main.herokuapp.com/)

- [x] Homepage
      ![tech-blog-homepage](https://user-images.githubusercontent.com/71200950/153731140-8f9f2f21-e13b-490c-98d8-cc3351267340.png)

- [x] Dashboard
      ![tech-blog-dashboard](https://user-images.githubusercontent.com/71200950/153731188-80dbc8e2-e68e-40f6-83f9-08e6716acfa2.png)

- [x] Login
      ![tech-blog-login](https://user-images.githubusercontent.com/71200950/153731196-192f88ac-0efa-42d7-9043-0614d8af474e.png)

- [x] Sign up
      ![tech-blog-signup](https://user-images.githubusercontent.com/71200950/153731202-8ea3c65e-aef7-4f85-9850-a77e051baa78.png)

- [x] Comment
      ![tech-blog-comment](https://user-images.githubusercontent.com/71200950/153731221-e269e877-0e24-40cb-9ba1-cc625bfa772d.png)

## _Built with_

- [x] Express-handlebars (https://www.npmjs.com/package/express-handlebars)
- [x] Model-View-Controller paradigm
- [x] MySQL2
- [x] Sequelize

## _Usage_

After cloning the repo, run the following commands

- [x] Install the required packages
      `npm install`

- [x] Initiate your MySQL
      `npm run db`
      then enter your MySQL password

- [x] Seed DB
      `npm run seed`

- [x] Run Test
      `npm run test`

- [x] Start Server to check
      `npm start`

You can listening on your `http://localhost:3001/`

FYI, remember to add .env file to the root of the project

```
SESS_SECRET='My Super Pass'
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PASSWORD='your_pass_XXX'
```

## _References_

UC Berkeley Extension Coding Bootcamp - Module 14: Model-View-Controller (MVC)

### _User Story_
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
### _Acceptance Criteria_
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```