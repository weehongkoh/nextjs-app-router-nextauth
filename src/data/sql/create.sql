DROP TABLE public.users;

CREATE TABLE public.users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    CONSTRAINT update_at_on_change CHECK (updated_at >= created_at)
); 

INSERT INTO public.users (name, email, password) 
VALUES ('Example', 'example@example.com', 'hashed_password');