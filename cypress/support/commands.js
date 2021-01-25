// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const userLogin = Cypress.env("userLogin");

//Cypress.Commands.add("login", () => {
//  cy.request({
//    method: "POST",
//    url: "/user/login",
//    body: {
//      username: userLogin.username,
//      password: userLogin.password
//    }
//    // headers: {
//    //   'xxx': xxx
//    // }
//  }).then(res => {
//    cy.setCookie(userLogin.sessionCookieName);
//    // res.headers.token = 'xxx'
//    // cy.setCookie(userLogin.sessionCookieName + window.location.port, res.headers.token)
//  });
});
