

#Shell
    - the main application that users actually open in their browser.

- Responsilities
    - Application Routing
    - Authenttication
    - Global state
    - Navigatation/header/sidebar
    - Loading remote microfrontends
    - shared layoyts

Example: 
    shell/
    -   src/
        app.js
        routes/
        store/
        layouts/
        main.js


#Packages
    - Contain code shared by multiple microfrontends

Example:
    packages/
        - shared-ui/
            button.js



todo-microfrontend/
|
├── apps/
│   ├── shell/
│   ├── mfe-todos/
│   ├── mfe-user/
│   └── mfe-notifications/
│
└── packages/
    ├── shared-ui/
    ├── shared-redux/
    ├── shared-api/
    ├── shared-types/
    └── shared-utils/