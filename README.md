# Color Coded API

### Prerequisites

What things you need to install the software and how to install them

* [node](https://nodejs.org/en/download/) `>=8.0.0`
* [yarn](https://yarnpkg.com/en/docs/install) `>=1.0.0`
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) `~3.4.x`

# Install Dependencies
`yarn install`

# Create .env file in root of project
Specify Values for these variables
```
NODE_ENV=<node env here>
NODE_PORT=<node port here>

MONGO_DB_HOST=<mongo db host here>
MONGO_DB_NAME=<mongo db name here>
```

# For Development
`npm run start-dev`

# For Production
`npm start`
