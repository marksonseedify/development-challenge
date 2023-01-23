# Shortened Links Backend
This is the backend for the Shortened Links application. It is built using Node.js, Express, MongoDB, and Mongoose.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Docker
- Docker Compose

### Installing
1. Clone the repository
``git clone https://github.com/marksonseedify/development-challenge``

2. Build the application
``docker-compose build``

3. Start the application
``docker-compose up``

The application will be running on http://localhost:3000

### Endpoints
- POST /shorten: Shorten a url
- GET /:id: Get the original url from a shortened id
- GET /getAllElements: Get all the shortened urls

### Built With
- Node.js
- Express
- MongoDB

### Author
Pedro Magalhães - https://github.com/pedrosgmagalhaes

## License
This project is licensed under the ISC License - see the LICENSE.md file for details.