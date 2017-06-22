## About

Just a project for technology using


## Tips

    #if "npm run dev" doesn't work:
    rm -rf node_modules
    npm install
    
    #or just try to update node and npm:
    sudo npm install n -g
    sudo n stable
    sudo npm install npm@latest -g
    
### Features

- Registration/login components
- Auth controllers based at default scaffolding laravel controllers, but with additional similar methods for the JWT (JSON Web Tokens) and new middleware 
- Based at package "tymon/jwt-auth" - laravel JWT implementation