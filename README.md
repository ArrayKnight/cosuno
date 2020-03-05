# Cosuno Coding Challenge

### `npm install && npm start`

Once the project is running:

-   Feel free to explore the server @ [http://localhost:3000/graphql](http://localhost:3000/graphql)
-   Test out the client functionality @ [http://localhost:3333/](http://localhost:3333/)

## Instructions

Create a simple React application that shows a list of construction companies, each with the following information:

-   Company name
-   Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
-   Specialty (e.g. Excavation, Plumbing, Electrical)
-   City

The following should be possible:

-   Search for a company by typing into a search field. The search term gets matched only against the company name and the list of companies is filtered based on the search term in real time as the user is typing.
-   Filter the list using a set of checkboxes to include only those companies which offer a particular speciality (e.g. only Plumbing).

Create a simple API based on Node.js that returns the list of companies to the frontend. The API can read the data from a simple JSON source, no database setup is required.

In addition, make a list of ideas on how you would improve this application if you had more time to work on it.

### Application improvements

Be sure to search through the code for `TODO`, but here are the highlights:

-   Testing: implement Jest & React Testing Library for unit and integration tests, TestCafe/Cypress for end-to-end testing of the entire application
-   Dev Experience: limit NestJS file watching to the `srv` folder only, it currently rebuilds the server on changes to any file in the repo
-   Abstract Generic Logic: the pagination logic shouldn't be implemented directly in the Company resolver, it should be generic and re-useable for any resolver
-   Operators & Sorting: add filtering operators to change the filtering behavior, add sorting options to switch between relevance & alpha
