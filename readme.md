#### VUE + LARAVEL typical cases

Just a project for technology using


#### Tips

    #if "npm run dev" doesn't work:
    rm -rf node_modules
    npm install
    
    #or just try to update node and npm:
    sudo npm install n -g
    sudo n stable
    sudo npm install npm@latest -g
    
#### Frontend

##### Cases:

- Registration/login
- Checking of authorization for component via mixins
- Pagination
- Flash messages
- Simple CRUD for one entity

##### What was used:

- ES6 (including stage-3)
- Bootstrap
- Vue
- Vuex (common FLUX implementation for Vue)
- Vue Router    
- Axios

#### Backend

##### Cases:

- Auth controllers based at default scaffolding laravel controllers, but with additional similar methods for the JWT (JSON Web Tokens) 
- Auth Middleware for the JWT

##### What was used:

- Laravel 5.4
- Package "tymon/jwt-auth" - laravel JWT implementation