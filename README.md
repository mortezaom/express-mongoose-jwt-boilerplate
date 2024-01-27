# Express Mongoose JWT Boilerplate

A simple boilerplate project based on ES6+ for kickstarting your web application development with Express.js, Mongoose, and JWT

## Features

- **User Authentication:**
  - Register and login functionality with bcrypt for password hashing.
  - JWT-based authentication for secure user sessions.
  - Refresh-Token based authentication for long-lived sessions.

- **Middleware:**
  - Utilizes Express.js middleware for handling various aspects of request processing.
  - CORS middleware for enabling cross-origin resource sharing.
  - Helmet middleware for securing your app by setting various HTTP headers.

- **Validation:**
  - Express-validator for request validation, ensuring data integrity.

- **Logging:**
  - Pino (pino-http & pino-pretty) for efficient and structured logging.

- **Security:**
  - Utilizes Helmet middleware for securing the application against common web vulnerabilities.

- **Database Integration:**
  - MongoDB integration using Mongoose, providing a robust database layer.

## Use the template

1. Clone the repository:
   ```bash
   git clone https://github.com/mortezaom/express-mongoose-jwt-boilerplate.git
   ```

2. Install the dependencies:
   ```bash
   pnpm install
   ```
3. Set the environment variables:
   ```bash
    cp .env.example .env
    ```
4. Start the server:
    ```bash
    pnpm run dev
    ```
5. Open the browser and navigate to `http://localhost:5000`.

## Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [helmet](https://www.npmjs.com/package/helmet)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [pino](https://www.npmjs.com/package/pino)
- [pino-http](https://www.npmjs.com/package/pino-http)
- [pino-pretty](https://www.npmjs.com/package/pino-pretty)

## License
<!-- mit license -->

Released under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.