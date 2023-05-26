BEGIN;

DROP TABLE IF EXISTS users, products, category, cart CASCADE;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role BOOLEAN DEFAULT false
    );

CREATE TABLE
    category(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL
    );

CREATE TABLE
    products(
        id SERIAL PRIMARY KEY,
        category_id INTEGER NOT NULL REFERENCES category(id),
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        price INTEGER NOT NULL,
        discount INTEGER NOT NULL
    );

CREATE TABLE
    cart(
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL REFERENCES products(id),
        user_id INTEGER NOT NULL REFERENCES users(id)
    );

COMMIT;

-- C:/Users/Amal/Desktop/G13/month3/week11-project/E-commerce/server/src/database/config/build.sql;