Foundation
│
├── Phase 1 Project Setup
├── Phase 2 Rendering Engine
├── Phase 3 Component System
│
Core Infrastructure
│
├── Phase 4 Router (component routes)
├── Phase 5 Global Store (global state)
├── Phase 6 Middleware (async and thunks state)
├── Phase 7 Event Bus (publish/subscribe system for transient events) (actions: open modal, close modal, show toast, notifiation....)
├── Phase 8 Storage Layer
│
Application Layer
│
├── Phase 9 Shared Components
├── Phase 10 Todo Feature
├── Phase 11 Persistence
├── Phase 12 Multi-page Navigation
│
Advanced
│
├── Phase 13 Async Architecture
├── Phase 14 Lazy Loading
├── Phase 15 Developer Experience
├── Phase 16 Performance
├── Phase 17 Testing
├── Phase 18 Future Features


Renderer

Component
      │
      ▼
Virtual Tree
      │
      ▼
Renderer
      │
      ▼

      --

Component
      │
      ▼
Tree
      │
      ▼
Create DOM
      │
      ▼
Browser

----

later

Old Tree
      │
      ▼
New Tree
      │
      ▼
Diff
      │
      ▼
Patch DOM

--- 

-finally:

Component()

↓

New Tree

↓

Diff

↓

Patch

↓

Done

/// The UI Tree is immutabable
- Once created, a node should never be modified. Every update creates a new tree. Thats exactly what makes compare-and-patch predictable.


---- ROUTER ----

createRouter()

↓

Router State

↓

start()

↓

listen hashchange

↓

resolve()

↓

matchRoute()

↓

notify App



// Each middleware decides whether to:
-continue the pipeline,
-inspect the action,
-transform the action,
-perform side effects,
-or stop the pipline

---

thunk

dispatch(fn)
      │
      ▼
Thunk Middleware
      │
      ▼
Execute Function
      │
      ▼
dispatch(action)
      │
      ▼
Logger
      │
      ▼
Reducer
      │
      ▼
Subscribers


---

Store Architecture

dispatch(action)
        │
        ▼
Middleware Pipeline
        │
        ├── thunk
        ├── logger
        ├── persistence (future)
        ├── analytics (future)
        └── devtools (future)
        │
        ▼
combineReducers()
        │
        ▼
Feature Reducers
        │
        ▼
New State
        │
        ▼
Subscribers