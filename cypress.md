# Cypress End-to-end web app testing

1. npm install cypress --save-dev
2. npx cypress open

with this in package.json scripts:

```
 "myCypress": "npx cypress open"
```

just run the command to start cypress

```
npm run myCypress
``

This command will create the necessary folder structure for Cypress and open the Cypress Test Runner.

Write Your Tests: Once Cypress is open, you can start writing your tests. Tests in Cypress are written in JavaScript and are organized in files under the cypress/integration directory by default.

Run Your Tests: After writing your tests, you can run them using the Cypress Test Runner. Click on the test file you want to run, and Cypress will open your web application in a browser and execute the tests.

View Test Results: After running your tests, you can view the test results, including passing and failing tests, in the Cypress Test Runner. Cypress provides a detailed overview of each test's execution, making it easy to identify any issues.

Write More Tests: Continue writing tests to cover different parts of your application. Cypress provides a wide range of commands and utilities for interacting with your application and asserting its behavior.

## Integrate with CI/CD: Finally, consider integrating Cypress with your Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate your testing process. Cypress can be easily integrated with popular CI/CD services like Travis CI, CircleCI, and GitHub Actions.

Create Your First Test: In the Cypress Test Runner, you'll see a list of example tests provided by Cypress. You can delete these and create your own tests.

To create a new test, navigate to the cypress/integration directory and create a new file with a .spec.js extension. For example, you could create a file named **example.spec.js.**

Write Your Test: Open the newly created test file (example.spec.js) in your code editor and write your test using Cypress commands. For example, you could write a simple test to ensure that the page contains the text "Hello Students":

```

describe('My First Test', () => {
it('Visits the homepage', () => {
cy.visit('/');
cy.contains('Hello Students').should('be.visible');
});
});

```

This test uses the cy.visit() command to navigate to the homepage (assuming your application is served at /), and then uses the cy.contains() command to verify that the text "Hello Students" is visible on the page.

Run Your Test: After writing your test, you can run it using the Cypress Test Runner. Switch back to the Cypress Test Runner and click on the test file you just created (example.spec.js). Cypress will open your web application in a browser and execute the test.

View Test Results: Once the test has finished running, you can view the test results in the Cypress Test Runner. If the test passes, you'll see a green checkmark next to the test name. If it fails, you'll see a red X.

That's it! You've created and run your first Cypress test. You can continue writing more tests to cover different parts of your application by creating additional .spec.js files in the cypress/integration directory.

## Cypress Stages

1. Setup tests
2. Write test
3. View test
4. Debug

## Types of Test

1. End-to-end test
2. Integration test
3. Unit test

project-root/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── server.js
│ └── config/
│ └── db.js
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── assets/
│ │ └── images/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles/
│ │ └── main.css
│ ├── package.json
│ └── webpack.config.js
├── node_modules/
├── .gitignore
├── package.json
└── README.md

### Some commands

1. npm install cypress installs as dependency vs npm install cypress --save-dev installs as dev dependency.
2. npm init -y installs npm with yes flag.
3. npx cypress -v checks the version
4. npx cypress verify to check if the dependency is ok
5. npx cypress open -------------------opens cypress window

## Set u a test

1. create a file under e2e or component or both rtesting folder

2. At the top, put `/// <reference types = "cypress"/>` this helps for code completion showing we are in cypress
3. you then need a test runner e.g mocha
4. A function starts with **it** and then **()** with a title inside

```

it(title: string, config: Cypress.TestConfigOverrides, fn?: Mocha.Func | undefined): Mocha.Test

```

e.g `it("Google Search", function () {});` or use arrow `it("Google Search",  () => {});`

Describe a specification or test-case with the given title, TestOptions, and callback fn acting as a thunk.

e.g this test visits google.com

```

/// <reference types = "cypress"/>

it("Google Search", () => {
cy.visit("https://google.com");
});

```

```

const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
//watchForFileChanges: false, //This is true by default, so if you use false then you will need reload
setupNodeEvents(on, config) {
// implement node event listeners here
},
},
});

```

5. Save and run cypress
```

Note:

You can increase the timeout settings in your Cypress configuration or directly in your test code. The default is 3000ms

```
/// <reference types="cypress" />

it("Google Search", () => {
  cy.visit("https://e-commerce-shop-and-api-market-2.onrender.com/", { timeout: 60000 }); // Increase timeout to 60 seconds
});
```

or

in cypress.json, so it will be global

```
{
  "pageLoadTimeout": 60000, // 60 seconds
  "defaultCommandTimeout": 10000 // 10 seconds
}
```

What are describe, it, and expect ?

All of these functions come from Bundled Libraries that Cypress bakes in.

## describe

and

## it

**describe and it come from Mocha**

**expect comes from Chai**

Cypress builds on these popular tools and frameworks.

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

Chai is an assertion library that is used chiefly alongside Mocha.

How to write Unit tests?
There are two main methods (also used in the example discussed in this guide) to write Unit Tests as seen below:

describe() – It is a suite of Test scripts that calls a global function with two parameters: a string and a function.
it() – It is the smallest unit test case that is written to be executed. it() calls a global function with two parameters i.e. a string and a function. You can write multiple it() statements inside a describe() method.
The third method used in a Unit Test is based on the developer’s choice. Every it() statement has one of the below functions, which take a value and expect a return in true form:

expect() – It is a BDD-style library. Natural language assertions are chained together here. This is mainly used with non-descript topics such as booleans or numbers.
should() – It is a BDD-style library. Natural language assertions are chained together in this case as well. However, it extends each object with a should property to start the chain.
assert() – It is a TDD-style library. It provides additional tests and is browser compatible.

TDD (Test Driven Development) and BDD (Behavior Driven Development)

The primary differences between TDD and BDD lie in what is being tested and how. BDD predominantly focuses on the end user's standpoint in its testing of the application behavior, whereas TDD focuses on smaller sections of functionality to be tested by itself.

---

The describe function is used to group related tests. It takes two arguments:
A string that serves as a description of the test suite ("Home Page" in this case).
A callback function that contains the individual tests (defined by it blocks).

### It Block:

it("should load the front-page successfully", () => {})

The it function defines a single test case. It also takes two arguments:
A string that describes what the test is verifying ("should load the front-page successfully").
A callback function that contains the actual test code.

##### Visit Command:

cy.visit("https://e-commerce-shop-and-api-market-2.onrender.com/");
cy.visit is a Cypress command that navigates to a specified URL. In this test, it navigates to the home page of your application.

##### Contains Command:

cy.contains("Jedybrown Ventures");

cy.contains is a Cypress command that checks if the specified text ("Jedybrown Ventures") exists on the page. This verifies that the page loaded correctly and that the expected content is present.

---

cy.url().should('include', '/commands/actions'):

This command asserts that the current URL includes the specified string (/commands/actions).
Purpose: To verify that after a certain action (like clicking a link or submitting a form), the user is navigated to the expected page.
cy.get('.action-email').type('fake@email.com'):

This command selects an input element with the class .action-email and types the given email (fake@email.com) into it.
Purpose: To simulate a user typing into an input field.
cy.get('.action-email').should('have.value', 'fake@email.com'):

This command asserts that the input element with the class .action-email has the value fake@email.com.
Purpose: To verify that the input field's value has been correctly updated after typing into it.

---

The viewport determines the width and height of your application under test. By default the viewport will be 1000px by 660px for end-to-end testing.

Additionally, you can override this value in your cypress.config.js or via the cy.viewport() command.

---

Best media queries - CSS

1. Mobile devices: @media (max-width: 480px) and @media (max-width: 768px) --480px for smaller devices and 768px for larger phones and small tablets in portrait mode.

2. Tablet devices: @media (max-width: 1024px) --Tablets are typically targeted with max-width values ranging from 768px to 1024px.

---

The fileServerFolder and baseUrl configurations serve different purposes and can indeed be used together in the Cypress configuration file. Here's how they work and how you can use them in conjunction:

fileServerFolder: This sets the folder where Cypress will serve your local files. It's useful for testing static files or smaller projects where you don't want to set up a full web server.
baseUrl: This sets a base URL for your tests, which is typically used to avoid repeating the full URL in your test scripts. This is useful when you're testing a project that is served by a local server, such as a development server or a deployed application.

```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges: false, //This is true by default, so if you use false then you will need reload

    // Set default viewport size - without setting cypress uses 1000px x 660px (width x height)
    viewportWidth: 1280,
    viewportHeight: 720,

    // Set the where the server or root folder is
    fileServerFolder: ".", //if for instance your index.html is in root folder
    fileServerFolder: "public",// if for instance your index.html is in public folder


    // Set a base url to avoid repeating url - using http-server here at port 8080.
    baseUrl: "http://localhost:8080",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

### cypress.config.js

###### For only say e2e testing

```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges: false, //This is true by default, so if you use false then you will need reload

    // Set default viewport size - without setting cypress uses 1000px x 660px (width x height)
    viewportWidth: 1280,
    viewportHeight: 720,

    // Set the where the server or root folder is
    fileServerFolder: ".",

    // Set a base url to avoid repeating url - using http-server here at port 8080.
    baseUrl: "http://localhost:8080",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

## You can put both e2e and component

```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 7000,

  e2e: {
    //watchForFileChanges: false, //This is true by default, so if you use false then you will need reload

    // Set default viewport size - without setting cypress uses 1000px x 660px (width x height)
    viewportWidth: 1280,
    viewportHeight: 720,

    // Set the where the server or root folder is
    fileServerFolder: ".",

    // Set a base url to avoid repeating url - using http-server here at port 8080.
    baseUrl: "http://localhost:8080",
    video: true,
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // Default Command Timeout settings overridden for component tests
  component: {
    defaultCommandTimeout: 6000,
  },
});

```
