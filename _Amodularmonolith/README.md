# Frontend Framework

> A lightweight frontend framework built from scratch to explore modern application architecture without external UI libraries.

---

## Overview

Frontend Framework is a modular JavaScript framework focused on learning, experimentation, and clean architecture.

Instead of relying on existing frameworks such as React, Vue, or Angular, this project implements the essential building blocks of a modern frontend application from first principles.

The framework includes its own rendering engine, state management, routing, plugin architecture, dependency injection, event system, testing framework, and performance utilities.

The goal is to understand **how frontend frameworks work internally** while providing a practical foundation for building real applications.

---

# Philosophy

The framework follows a few core principles:

- **Keep the core small**
- **Prefer composition over inheritance**
- **Separate business logic from UI logic**
- **Everything should be testable**
- **Features should be implemented as plugins whenever possible**
- **Applications should drive framework evolution—not the other way around**

---

# Features

## Core

- Plugin-based application architecture
- Dependency Injection (Service Registry)
- Contribution Registry
- Application lifecycle management

## Rendering

- Virtual DOM
- Incremental DOM updates
- Functional components
- Fragments
- Attribute updates
- Event binding

## State Management

- Redux-inspired Store
- Pure Reducers
- Middleware pipeline
- Thunk middleware
- Async actions
- Optimistic updates

## Routing

- Hash-based Router
- Route matching
- Lazy route loading
- Loading callbacks
- Error handling
- Navigation API

## Events

- Publish / Subscribe Event Bus
- Multiple listeners
- Listener removal
- Custom application events

## Performance

- Memoization
- Memoized selectors
- Shallow equality comparisons

## Testing

- Custom Test Runner
- Assertions
- Async testing
- Integration testing

---

# Architecture

```
                Application
                     │
        ┌────────────┴────────────┐
        │                         │
     Plugins                 Services
        │                         │
        ▼                         ▼
Contribution Registry      Dependency Injection
        │
        ▼
    Application
        │
        ▼
 ┌─────────────────────────────────────┐
 │                                     │
 │             Features                │
 │                                     │
 │  Controllers                        │
 │  Services                           │
 │  Repository                         │
 │  Store                              │
 │  Views                              │
 │                                     │
 └─────────────────────────────────────┘
        │
        ▼
     Renderer
        │
        ▼
       DOM
```

---

# Project Structure

```
src/

├── app/
│   ├── bootstrap/
│   ├── plugins/
│   └── routes/
│
├── core/
│   ├── application/
│   ├── renderer/
│   ├── router/
│   ├── store/
│   ├── events/
│   ├── performance/
│   ├── testing/
│   └── storage/
│
├── features/
│   └── todo/
│       ├── controllers/
│       ├── repository/
│       ├── services/
│       ├── store/
│       └── views/
│
└── shared/
```

---

# Application Flow

```
User Action
      │
      ▼
Controller
      │
      ▼
Thunk
      │
      ▼
Store
      │
      ▼
Reducer
      │
      ▼
State
      │
      ▼
Selectors
      │
      ▼
Renderer
      │
      ▼
DOM
```

---

# Plugin System

Plugins extend the framework without modifying the core.

Example:

```javascript
const StorePlugin = createPlugin({
  name: "store",

  install({ contribute }) {
    contribute(ContributionTypes.MIDDLEWARE, thunk);
  },
});
```

Plugins can contribute:

- Middleware
- Routes
- Navigation
- Services
- Custom contributions

---

# State Management

The framework includes a Redux-inspired store.

```javascript
const store = createStore(rootReducer, middleware);

store.dispatch(action);

store.getState();

store.subscribe(listener);
```

Middleware can intercept actions.

Example:

```javascript
store.dispatch(asyncThunk());
```

---

# Routing

Routes are contributed by plugins.

```javascript
{
    path: "/todos",
    component: TodoPage
}
```

The router supports:

- Route matching
- Lazy loading
- Navigation
- Loading state
- Error handling

---

# Rendering

Rendering is based on a lightweight Virtual DOM.

Features include:

- Functional Components
- Fragments
- Incremental updates
- Efficient DOM reconciliation

---

# Event Bus

The framework provides an application-wide publish/subscribe system.

```javascript
events.emit(EventTypes.TODO_CREATED, todo);

events.on(EventTypes.TODO_CREATED, listener);
```

---

# Performance Utilities

The framework includes lightweight performance helpers.

```javascript
memo(fn)

createSelector(...)

shallowEqual(a, b)
```

Selectors only recompute when their inputs change.

---

# Testing

The framework includes a built-in testing framework.

Current coverage includes:

### Testing Framework

- Test Runner
- Assertions
- Async Tests

### Core

- Store
- Middleware
- Event Bus
- Router
- Renderer
- Plugin System

### Performance

- memo()
- createSelector()
- shallowEqual()

### Features

- Todo CRUD
- Optimistic Updates

### Integration

- End-to-End Todo Flow

---

# Example Feature

The Todo feature demonstrates the complete architecture.

```
TodoController

↓

TodoService

↓

TodoRepository

↓

Fake API

↓

Store

↓

Renderer
```

This feature is fully covered by integration tests.

---

# Design Goals

The framework aims to be:

- Simple to understand
- Easy to extend
- Highly testable
- Framework-agnostic
- Educational
- Production-inspired

---

# Roadmap

## Version 1.0

- Application Framework
- Plugin System
- Renderer
- Router
- Store
- Middleware
- Event Bus
- Performance Utilities
- Testing Framework
- Todo Feature

## Future

- Additional sample applications
- Developer tools
- State inspector
- Performance dashboard
- Time-travel debugging
- Real backend integration

---

# License

This project is intended as an educational framework for learning modern frontend architecture and experimenting with framework design.

Contributions, ideas, and feedback are welcome.
