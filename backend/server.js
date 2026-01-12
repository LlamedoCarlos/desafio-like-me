const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const consulta = 'SELECT * FROM posts ORDER BY id DESC';
    const { rows } = await pool.query(consulta);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const consulta = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *';
    const values = [titulo, url, descripcion];
    const { rows } = await pool.query(consulta, values);
    
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al agregar post:', error);
    res.status(500).json({ error: 'Error al agregar el post' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
