require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors')
const { Curl } = require('node-libcurl');

app.use(cors());

const port = process.env.PORT;
const apiUrl = process.env.API_URL;
app.get('/api/datasheet/:id', (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();

    // Configure the Curl request
    curlTest.setOpt(Curl.option.URL, `${apiUrl}datasheet/viewDataSheet?id=${req.params.id}`); // Replace with your API URL
    //curlTest.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/json']);

    // Set up response handling
    curlTest.on('end', function (statusCode, data, headers) {
      // console.info('Response status code: ' + statusCode);
      // console.info('Response data: ' + data);
    
      if (statusCode === 200) {
        // Send the API response to the client
        res.status(200).json(JSON.parse(data));
      } else {
        // Handle other status codes as needed
        res.status(statusCode).json({ error: 'API request failed' });
      }

      // Close the Curl instance
      curlTest.close();
    });

    // Handle Curl request errors
    curlTest.on('error', function (error) {
      console.error('Curl error: ' + error);
      res.status(500).json({ error: 'An error occurred while accessing the API.' });

      // Close the Curl instance
      curlTest.close();
    });

    // Perform the Curl request
    curlTest.perform();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accessing the API.' });
  }
});

app.get('/api/categories/:id', (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();

    // Configure the Curl request
    curlTest.setOpt(Curl.option.URL, `${apiUrl}category/viewCatergories?datasheetid=${req.params.id}`); // Replace with your API URL
    //curlTest.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/json']);

    // Set up response handling
    curlTest.on('end', function (statusCode, data, headers) {
      // console.info('Response status code: ' + statusCode);
      // console.info('Response data: ' + data);
    
      if (statusCode === 200) {
        // Send the API response to the client
        res.status(200).json(JSON.parse(data));
      } else {
        // Handle other status codes as needed
        res.status(statusCode).json({ error: 'API request failed' });
      }

      // Close the Curl instance
      curlTest.close();
    });

    // Handle Curl request errors
    curlTest.on('error', function (error) {
      console.error('Curl error: ' + error);
      res.status(500).json({ error: 'An error occurred while accessing the API.' });

      // Close the Curl instance
      curlTest.close();
    });

    // Perform the Curl request
    curlTest.perform();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accessing the API.' });
  }
});

app.get('/api/categories/subItems/:catId', (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();

    // Configure the Curl request
    curlTest.setOpt(Curl.option.URL, `${apiUrl}item/viewItems?categoryID=${req.params.catId}`); // Replace with your API URL
    //curlTest.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/json']);

    // Set up response handling
    curlTest.on('end', function (statusCode, data, headers) {
      // console.info('Response status code: ' + statusCode);
      // console.info('Response data: ' + data);
    
      if (statusCode === 200) {
        // Send the API response to the client
        res.status(200).json(JSON.parse(data));
      } else {
        // Handle other status codes as needed
        res.status(statusCode).json({ error: 'API request failed' });
      }

      // Close the Curl instance
      curlTest.close();
    });

    // Handle Curl request errors
    curlTest.on('error', function (error) {
      console.error('Curl error: ' + error);
      res.status(500).json({ error: 'An error occurred while accessing the API.' });

      // Close the Curl instance
      curlTest.close();
    });

    // Perform the Curl request
    curlTest.perform();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accessing the API.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});