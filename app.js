const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const app = express();
const port = 3000;
const ejs = require("ejs");
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    try {
        const apiUrl = 'https://picsum.photos/v2/list?page=1&limit=6';
        const response = await axios.get(apiUrl);
    
        if (response.status === 200) {
          const images = response.data;
          res.render('home', {images})
        } else {
          throw new Error(`Failed to fetch images. Status code: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error fetching images: ${error.message}`);
        throw error;
      }
  });
  const axios = require('axios');
  const fetchRandomImages = async () => {
  const apiUrl = 'https://picsum.photos/v2/list?page=1&limit=6';
    
  };
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  