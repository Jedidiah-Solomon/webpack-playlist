# Cypress End-to-end web app testing

1. npm install cypress --save-dev
2. npx cypress open

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
