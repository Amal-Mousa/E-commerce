BEGIN;

INSERT INTO
    users (
        id,
        username,
        email,
        password,
        role
    )
VALUES (
        1,
        'john',
        'john@example.com',
        'password123',
        false
    ), (
        2,
        'jane',
        'jane@example.com',
        'password456',
        true
    );

INSERT INTO category (id, name)
VALUES (1, 'Electronics'), (2, 'Clothing'), (3, 'Books');

INSERT INTO
    products (
        id,
        category_id,
        name,
        description,
        image,
        price,
        discount
    )
VALUES (
        1,
        1,
        'Laptop',
        'High-performance laptop with 16GB RAM.',
        'https://imageio.forbes.com/specials-images/imageserve/61086ec373551e86331910e3/0x0.jpg?format=jpg&width=1200',
        1000,
        0
    ), (
        2,
        1,
        'Smartphone',
        'Latest smartphone with 128GB storage.',
        'https://m.media-amazon.com/images/I/61X+PJnaq5L.jpg',
        800,
        0
    ), (
        3,
        2,
        'T-Shirt',
        'Comfortable cotton t-shirt.',
        'T-shirt.jpg',
        20,
        10
    ), (
        4,
        2,
        'Jeans',
        'Slim fit jeans for men.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBaAWnksJsXnZCMd0KHVY3MZ0p7IohCRqAQ&usqp=CAU',
        50,
        20
    ), (
        5,
        3,
        'Novel',
        'Bestselling novel by John Doe.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUXQ0ZWWgTdSDT8K58pbCMql8ZEGxme_Qug&usqp=CAU',
        15,
        5
    );

INSERT INTO
    cart (id, product_id, user_id)
VALUES (1, 1, 1), (2, 3, 1), (3, 2, 2), (4, 4, 2);

COMMIT;

-- C:/Users/Amal/Desktop/G13/month3/week11-project/E-commerce/server/src/database/config/seeder.sql;