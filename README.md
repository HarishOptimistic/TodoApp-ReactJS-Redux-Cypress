# TodoApp-ReactJS-Redux-Cypress
Simple TodoApp using ReactJS, Redux for global state management and Cypress for testing

## Instructions to run the project
1. git clone <repo link> or download the repository
2. navigate into the project directory
3. Run - "npm install" to install dependencies
4. Run - "npm start" to run the application
5. Open a new terminal and run "npm run cypress:open" to  launch Cypress. Then click on "Run all specs" in the right top corner

### Functionalities included in the project
1.  Add Task button
2.  Add Task Form - as modal
3.  Update Task Form - as modal
4.  Save and Cancel buttons in forms
5.  Task list seperated across 3 tabs - completed, pending, All Tasks
6.  List of tasks with brief details added while creation.
7.  Global Search option - based on title
8.  Mark as complete, reopen a completed task
9.  Add hours spent when marking complete
10. Keyboard shortcuts for Add task action (Ctrl+Shift+A)
11. Bulk select and mark as complete
12. Statistic dashboard of tasks with counts and numbers of hours deviation
13. Confirmation dialogs for reopen and cancellation
14. Optimise API call - i.e validate submissions if update api or update function need to be called. (Add a logic to identify this. If the data of a task has not changed on clicking the save button, do not make the API call. In short, make the API call only if the data of a task has changed.)
15. Unit Testing using Cypress

## Screenshots

![Image of MainScreen](https://github.com/HarishOptimistic/TodoApp-ReactJS-Redux-Cypress/blob/master/ToDoApp.png)
![Image of AddTaskModal](https://github.com/HarishOptimistic/TodoApp-ReactJS-Redux-Cypress/blob/master/AddTaskModal.png) 

