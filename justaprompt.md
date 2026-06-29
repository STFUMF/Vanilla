Project Prompt: Build a Vanilla JavaScript Microfrontend Todo Application with Custom Redux
Objective

Build a Todo List application using a Microfrontend Architecture in Vanilla JavaScript without any frontend framework (React, Vue, Angular, etc.).

The project must include a custom Redux implementation built completely from scratch, without using Redux, Redux Toolkit, Zustand, MobX, or any state management library.

The goal is to understand:

Microfrontend architecture
State management internals
Redux principles
Reducers and actions
Store subscriptions
Dynamic reducer injection
Separation of concerns
Modular frontend design
Technical Requirements
Core Technologies
Vanilla JavaScript (ES6 Modules)
HTML5
CSS3
No frontend frameworks
No Redux package
No state management libraries
No UI component libraries
Architecture

Use a monorepo-like structure:

todo-microfrontend/

├── apps/
│
│   ├── shell/
|   |       |── app.js
|   |       |── index.html
|   |       |── router.js
|   |       |── store.js
|   |
│   ├── mfe-todos/
│   ├── mfe-user/
│   └── mfe-notifications/
│
├── packages/
│
│   ├── redux/
|   |       |──applyMiddleware.js
|   |       |── combineReducers.js
|   |       |── createStore.js
│   ├── shared/
│   ├── shared-ui/
│   └── shared-utils/
│
└── public/
Shell Application Responsibilities

The Shell application must:

Bootstrap the application
Create the global store
Configure reducers
Handle navigation/routing
Load microfrontends
Expose shared services

Structure:

shell/

├── index.html
├── app.js
├── router.js
├── store.js
└── reducerManager.js
Microfrontends
Todo Microfrontend

Responsible for:

Create Todo
Edit Todo
Delete Todo
Toggle Complete
Render Todo List

Structure:

mfe-todos/

├── todoPage.js
├── todoView.js
├── todoActions.js
├── todoReducer.js
└── todoSelectors.js
User Microfrontend

Responsible for:

Display User Profile
Update User Information

Structure:

mfe-user/

├── userPage.js
├── userActions.js
├── userReducer.js
└── userSelectors.js
Notification Microfrontend

Responsible for:

Success Messages
Error Messages
Global Toasts

Structure:

mfe-notifications/

├── notificationPage.js
├── notificationActions.js
└── notificationReducer.js
Build Redux from Scratch

Implement the following Redux features manually.

createStore

Requirements:

getState()
dispatch()
subscribe()
unsubscribe()
initialize state

Example:

const store = createStore(rootReducer);
combineReducers

Requirements:

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});
Dynamic Reducer Injection

Implement a reducer manager:

injectReducer("todos", todoReducer);
injectReducer("user", userReducer);

New reducers should be added at runtime.

Middleware System

Implement:

applyMiddleware()

Support:

loggerMiddleware

Example:

dispatch(action)
↓
middleware
↓
reducer
↓
new state
Thunk Middleware

Implement support for:

dispatch(asyncFunction);

Example:

dispatch((dispatch) => {
  setTimeout(() => {
    dispatch(addTodo("Learn Redux"));
  }, 1000);
});
Todo Features
Add Todo
ADD_TODO

State:

{
  id: 1,
  text: "Learn Redux",
  completed: false
}
Toggle Todo
TOGGLE_TODO
Delete Todo
DELETE_TODO
Edit Todo
EDIT_TODO
Global State Shape
{
  todos: {
    items: []
  },

  user: {
    profile: {}
  },

  notifications: {
    messages: []
  }
}
Shared Packages
redux/

Contains:

redux/

├── createStore.js
├── combineReducers.js
├── applyMiddleware.js
├── thunk.js
├── reducerManager.js
└── compose.js
shared-ui/

Contains reusable components:

shared-ui/

├── Button.js
├── Input.js
├── Modal.js
└── Toast.js
shared-utils/

Contains:

shared-utils/

├── uuid.js
├── formatDate.js
└── constants.js
Routing

Implement a simple hash router.

Example:

#/todos
#/profile
#/notifications

Requirements:

Route registration
Route change listener
Dynamic page mounting
Persistence

Implement localStorage persistence.

Requirements:

saveState()
loadState()

State should survive page refreshes.

Bonus Features
DevTools Logger

Print:

Previous State

Action

Next State

For every dispatch.

Time Travel

Store state history:

undo()
redo()
Selector Memoization

Implement a simple version of:

createSelector()

Similar to Reselect.

Expected Learning Outcomes

By completing this project, the developer should understand:

How Redux works internally
How reducers produce immutable state
How middleware chains work
How subscriptions trigger UI updates
How microfrontends communicate through a shared store
How dynamic reducer injection works
How routing and application composition work without frameworks
How state persistence is implemented
Final Deliverable

A fully working Vanilla JavaScript Todo application that demonstrates:

Microfrontend architecture
Custom Redux implementation
Dynamic reducers
Middleware support
Thunk support
Routing
Local storage persistence
Shared packages
Todo CRUD functionality
Modular, scalable folder structure suitable for enterprise applications.



              Shell
                 │
      ┌──────────┴──────────┐
      │                     │
 Shared Store          Event Bus
      │                     │
      ▼                     ▼
 Todo MFE              Notification MFE
 Search MFE            Analytics MFE
 Filter MFE            Logger MFE
 Stats MFE