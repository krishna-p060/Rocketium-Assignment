const axios = require('axios');
const fs = require('fs');
const path = require('path');

const DATA_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json'; // Replace with actual URL

async function fetchData() {
  try {
    const response = await axios.get(DATA_URL);
    const data = response.data;
    const filePath = path.join(__dirname, '../data/dummyData.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
