
# A simple node-mongo-express REST API boilerplate

# How to run it:

- Create a package.json file with 
``` npm init ```

- Install express, mongodb and body parser 
``` npm install --save express mongodb body-parser ```

- Install nodemon
``` npm install --save-dev nodemon```

- Add to package.json
``` 
  "scripts": {    "dev": "nodemon server.js"  },
```
- Update config/db.js as per your database configuration

- Run it 🥂
``` npm run dev ```

