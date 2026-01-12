
CREATE DATABASE likeme;


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25) NOT NULL,
  img VARCHAR(1000) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  likes INT DEFAULT 0
);


INSERT INTO posts (titulo, img, descripcion, likes) 
VALUES 
  ('Mi primer post', 'https://picsum.photos/200/300', 'Esta es una descripción de prueba', 0),
  ('Paisaje hermoso', 'https://picsum.photos/200/301', 'Un hermoso paisaje natural', 5),
  ('Tecnología', 'https://picsum.photos/200/302', 'El futuro de la tecnología', 10);
