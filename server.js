const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/undergraduate', (req, res) => {
    res.sendFile(path.join(__dirname, 'undergraduate.html'));
});

app.get('/curriculum', (req, res) => {
    res.sendFile(path.join(__dirname, 'curriculum.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
