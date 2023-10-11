require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors')
const { Curl,curly } = require('node-libcurl');
const querystring = require('querystring');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

const port = process.env.PORT;
const apiUrl = process.env.API_URL;
app.get(`/api/datasheet/viewDataSheet`, (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();
    const queryKeys = Object.keys(req.query);
    const queryValues = Object.values(req.query);

    let queryCombinations = "";

    queryKeys.map(k => {
      queryCombinations += `${(queryCombinations !== "" ? "&" : "")}${k}=${req.query[k]}`
    })

    // Configure the Curl request
    curlTest.setOpt(Curl.option.URL, `${apiUrl}/api/datasheet/viewDataSheet?${queryCombinations}`); // Replace with your API URL
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
        res.status(statusCode).json({ error: 'API request failed', msg: data });
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
app.get('/api/category/viewCatergories', (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();
    const queryKeys = Object.keys(req.query);
    // Configure the Curl request

    let queryCombinations = "";

    queryKeys.map(k => {
      queryCombinations += `${(queryCombinations !== "" ? "&" : "")}${k}=${req.query[k]}`
    })

    curlTest.setOpt(Curl.option.URL, `${apiUrl}/api/category/viewCatergories?${queryCombinations}`); // Replace with your API URL
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

app.get('/api/item/viewItems/', (req, res) => {
  try {
    // Create a new Curl instance for each request
    const curlTest = new Curl();
    const queryKeys = Object.keys(req.query);
    // Configure the Curl request
    let queryCombinations = "";

    queryKeys.map(k => {
      queryCombinations += `${(queryCombinations !== "" ? "&" : "")}${k}=${req.query[k]}`
    })
    curlTest.setOpt(Curl.option.URL, `${apiUrl}/api/item/viewItems?${queryCombinations}`); // Replace with your API URL
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
app.post('/api/item/updateItems', async (req, res) => {
  // try {
  //   // Create a new Curl instance for each request
  //     const curlTest = new Curl();
  //   const queryKeys = Object.keys(req.query);
  //   // Configure the Curl request
  //   let queryCombinations = "";

 
  //   queryKeys.map(k => {
  //     queryCombinations += `${(queryCombinations !== "" ? "&" : "")}${k}=${req.query[k]}`
  //   })
  //   curlTest.setOpt(Curl.option.URL, `${apiUrl}/api/item/updateItems`); // Replace with your API URL
  //   curlTest.setOpt(Curl.option.POST, true);

  //   // Set the request body to req.body as a JSON string
  //   curlTest.setOpt(Curl.option.POSTFIELDS, req.body);

  //   // You may want to set appropriate headers, such as Content-Type
  //   curlTest.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/json']);


  //   console.log(req.body)
  //   // Set up response handling
  //   curlTest.on('end', function (statusCode, data, headers) {
  //     // console.info('Response status code: ' + statusCode);
  //     // console.info('Response data: ' + data);
    
  //     if (statusCode === 200) {
  //       // Send the API response to the client
  //       res.status(200).json(JSON.parse(data));
  //     } else {
  //       // Handle other status codes as needed
  //       res.status(statusCode).json({ error: 'API request failed' });
  //     }

  //     // Close the Curl instance
  //     curlTest.close();
  //   });

  //   // Handle Curl request errors
  //   curlTest.on('error', function (error) {
  //     console.error('Curl error: ' + error);
  //     res.status(500).json({ error: 'An error occurred while accessing the API.' });

  //     // Close the Curl instance
  //     curlTest.close();
  //   });

  //   // Perform the Curl request
  //   curlTest.perform();
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'An error occurred while accessing the API.' });
  // }

  const _data = req.body;
  _data.id = 1
  _data.categoryId = 1
  
  const { statusCode, data, headers } = await curly.post(`${apiUrl}/api/item/updateItems`, {
    postFields: JSON.stringify([_data]),
    httpHeader: [
      'Content-Type: application/json',
      'Accept: application/json'
    ],
  })
  console.log(data)
  console.log(statusCode)
  console.log(headers)
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});