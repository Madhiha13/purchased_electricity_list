const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // Choose any available port number

app.use(cors())
// Static array of objects (replace with your actual data)
const dataArray = [
    { id: 1, emissionType: 'Purchased Electricity',facilty:'Facility1',responsibilty:'Manoj',reportingYear:'2021-2022',status:'40' ,button: { text: '', action: 'action1' }},
    { id: 2, emissionType: 'Purchased Electricity',facilty:'Facility2',responsibilty:'Hari',reportingYear:'2022-2023',status:80 ,button: { text: '', action: 'action1' }},
    { id: 3, emissionType: 'Purchased Electricity',facilty:'Facility3',responsibilty:'Jyothsna',reportingYear:'2017-2018',status:60 ,button: { text: '', action: 'action1' }},
    { id: 4, emissionType: 'Purchased Electricity',facilty:'Facility4',responsibilty:'Suman',reportingYear:'2019-2020',status:50 ,button: { text: ' ', action: 'action1' }},
    { id: 5, emissionType: 'Purchased Electricity',facilty:'Facility5',responsibilty:'Kaviya',reportingYear:'2018-2019',status:25 ,button: { text: ' ', action: 'action1' }},
];

// Endpoint to get the array of objects
app.get('/api/data', (req, res) => {
    res.json(dataArray);
});

// Example of another route
app.get('/api/item/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = dataArray.find(item => item.id === itemId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log(`data will be at http://localhost:5000/api/data`);