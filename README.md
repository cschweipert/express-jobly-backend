## Getting started with Jobly's backend

1. Clone this repository
2. `cd express-jobly-backend`
3. `npm install`
4. `createdb jobly`
5. `psql jobly < jobly-seed.sql`
6. `npm start`
7. Clone the [frontend repository](https://github.com/cschweipert/react-jobly-frontend) and get started with it

* Jobly was built with React, Node/Express and PostgreSQL.
* Has a login/register and logout feature. When logged in The user can see a list of companies hiring as well as a list of jobs to apply to.
* The user also has a profile page where they can see their profile information as well as edit their profile.
* Jobly's express backend uses a jsonwebtoken to ensure a user is logged in otherwise they cannot see the companies, jobs, or profile page. It also uses that token to ensure the user logged in is the user sending a specific requests, for example: the PATCH request to edit a user's profile page.
* Jobly's backend also makes use of jsonschema to validate forms before any information is sent and saved to the database. Jobly's frontend stores the JWT in localStorage to authenticate and authorize the user logging in.
