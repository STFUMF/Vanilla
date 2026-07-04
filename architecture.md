Foundation
│
├── Phase 1 Project Setup
├── Phase 2 Rendering Engine
├── Phase 3 Component System
│
Core Infrastructure
│
├── Phase 4 Router
├── Phase 5 Global Store
├── Phase 6 Middleware
├── Phase 7 Event Bus
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