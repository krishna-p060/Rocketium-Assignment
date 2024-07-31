const fs = require('fs');
const path = require('path');

const getData = (req, res) => {
  try {
    const filePath = path.join(__dirname, '../../data/dummyData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error reading data' });
  }
};

const filterAndSortData = (req, res) => {
  try {
    const { filterBy, sortBy, order = 'asc' } = req.query;
    const filePath = path.join(__dirname, '../../data/dummyData.json');
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (filterBy) {
      data = data.filter(item => item.language.toLowerCase() === filterBy.toLowerCase());
    }

    if (sortBy) {
      data.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error filtering/sorting data' });
  }
};

module.exports = {
  getData,
  filterAndSortData,
};
