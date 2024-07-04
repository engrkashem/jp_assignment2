# JP Assignment 2

## Description

This is a project built with TypeScript, Node.js, Express, Zod, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1.  Clone the repository:

    ```sh
      git clone https://github.com/engrkashem/jp_assignment2.git

      cd jp_assignment2
    ```

2.  Install dependencies:

    ```sh
     yarn add
    ```

3.  Create a .env file in the root directory and add the following:

    ```sh
     PORT=5000

     DB_URL=<your_mongoose_url>
    ```

4.  Start the server:

    ```sh
     yarn dev
    ```

Open your browser and navigate to http://localhost:5000 to see the application in action.

## Project Structure

```sh
    ├── dist
    │
    ├── src
    │   ├── app
    │   │   ├── config
    │   │   │    └── index.ts
    │   │   ├── errors
    │   │   │    ├── AppError.ts
    │   │   │    ├── duplicateKeyErrorHandler.ts
    │   │   │    ├── validationErrorHandler.ts
    │   │   │    └── zodErrorHandler.ts
    │   │   ├── interfaces
    │   │   │    └── error.interface.ts
    │   │   ├── middlewares
    │   │   │    ├── globalErrorHandler.ts
    │   │   │    ├── notFound.ts
    │   │   │    └── validateRequest.ts
    │   │   ├── modules
    │   │   │    ├── order
    │   │   │    │   ├── order.controller.ts
    │   │   │    │   ├── order.interface.ts
    │   │   │    │   ├── order.model.ts
    │   │   │    │   ├── order.route.ts
    │   │   │    │   ├── order.service.ts
    │   │   │    │   └── order.validation.ts
    │   │   │    └── product
    │   │   │        ├── product.constants.ts
    │   │   │        ├── product.controller.ts
    │   │   │        ├── product.interface.ts
    │   │   │        ├── product.model.ts
    │   │   │        ├── product.route.ts
    │   │   │        ├── product.service.ts
    │   │   │        └── product.validation.ts
    │   │   ├── routes
    │   │   │    └── index.ts
    │   │   └── utils
    │   │        ├── catchAsyncRequest.ts
    │   │        └── sendResponse.ts
    │   ├── app.ts
    │   └── server.ts
    ├── .env
    ├── .eslintrc
    ├── .eslintignore
    ├── .gitignore
    ├── .prettierrc.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

```

## API Documentation

- **Products: api/products**

  - **POST "/"**: Create a new Product.
  - **GET "/"**: Get all products.
  - **GET /:productId**: Get a product by ID.
  - **PUT /:productId**: Update a product by ID.
  - **DELETE /:productId**: Delete a product by ID.

- **Orders: api/orders**

  - **POST "/"**: Create a new order.
  - **GET "/"**: Get all orders.

### Validation

This project uses [Zod](https://zod.dev/) for schema validation. Schemas are defined in the utils/zodSchemas.ts file.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **TypeScript**: Typed superset of JavaScript.
- **Express**: Web framework for Node.js.
- **Zod**: TypeScript-first schema declaration and validation library.
- **MongoDB**: NoSQL database.
