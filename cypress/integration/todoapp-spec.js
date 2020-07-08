/* eslint-disable no-undef */
describe("Testing functionalities of todo app", () => {

 beforeEach(() => {
  cy.viewport("macbook-15");
  cy.visit("http://localhost:3000");
 })

 it("Check app header", () => {
  cy.get('.app-header').should("be.visible");
  cy.contains('Todo App').should("be.visible");
 })

 it("Verify dashboard components", () => {
  cy.get('.dashboard')
  cy.get('.dashboard > :nth-child(1)').should("be.visible");
  cy.get('.dashboard > :nth-child(2)').should("be.visible");
  cy.get('.dashboard > :nth-child(3)').should("be.visible");
  cy.get('.dashboard > :nth-child(4)').should("be.visible");

  cy.get(':nth-child(1) > .card-title').should("be.visible");
  cy.get(':nth-child(1) > .card-title').contains("Total Task");
  cy.get(':nth-child(2) > .card-title').should("be.visible");
  cy.get(':nth-child(2) > .card-title').contains("Open");
  cy.get(':nth-child(3) > .card-title').should("be.visible");
  cy.get(':nth-child(3) > .card-title').contains("Completed");
  cy.get(':nth-child(4) > .card-title').should("be.visible");
  cy.get(':nth-child(4) > .card-title').contains("Cancelled");

  cy.get(':nth-child(1) > .card-body').should("be.visible");
  cy.get(':nth-child(2) > .card-body').should("be.visible");
  cy.get(':nth-child(3) > .card-body').should("be.visible");
  cy.get(':nth-child(4) > .card-body').should("be.visible");

  cy.get('.app-header').should("be.visible");
  cy.contains('Todo App').should("be.visible");
 })

 it("Check Add Task modal", () => {
  cy.get('.add-task-main > .btn').should("be.visible").click();
  cy.get('.modal-title').should("be.visible");
  cy.get('form > :nth-child(1)').should("be.visible");
  cy.get('form > :nth-child(2)').should("be.visible");
  cy.get('form > :nth-child(3)').should("be.visible");
  cy.get('form > :nth-child(4)').should("be.visible");
  cy.get('form > :nth-child(5)').should("be.visible");
  cy.get('.modal-footer > .btn-primary').should("be.visible");
  cy.get('.btn-secondary').should("be.visible");
  cy.get('.close > span').should("be.visible").click(); 
 })

 it("Add a todo item",() => {
  cy.get('.add-task-main > .btn').should("be.visible").click();
  cy.get('#title').type("Write Cypress Test");
  cy.get('#description').type("Write Cypress Test");
  cy.get('#rdp-form-control-dueBy').should("be.visible").click();
  cy.get('[data-day="25"]').click();
  cy.get('#expectedHours').type(0);
  cy.get('#priority').selectNth(1);
  cy.get('.btn-secondary').should("be.visible");
  cy.get('.modal-footer > .btn-primary').click();
 })

 it("Verify tabs",() => {
  cy.get(':nth-child(1) > .active').should("be.visible");
  cy.get(':nth-child(2) > .nav-link').click();
  cy.get(':nth-child(3) > .nav-link').click();
  cy.get(':nth-child(1) > .nav-link').click();
 })

 it("seach todo",() => {
  cy.get('.search').type("ash");
 })

});