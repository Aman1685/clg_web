const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/undergraduate', (req, res) => {
    res.sendFile(path.join(__dirname, 'undergraduate.html'));
});

app.get('/curriculum', (req, res) => {
    res.sendFile(path.join(__dirname, 'curriculum.html'));
});

app.get('/Campus_life', (req, res) => {
    res.sendFile(path.join(__dirname, 'Campus_life.html'));
});

app.get('/admissions', (req, res) => {
    res.sendFile(path.join(__dirname, 'admissions.html'));
});

app.get('/Photo_Gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'Photo_Gallery.html'));
});

app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contact.html'));
});
app.get('/mission', (req, res) => {
    res.sendFile(path.join(__dirname, 'mission.html'));
});

app.get('/administration', (req, res) => {
    res.sendFile(path.join(__dirname, 'administration.html'));
});

app.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, 'about_overview.html'));
});

app.get('/admission', (req, res) => {
    res.sendFile(path.join(__dirname, 'admission.html'));
});

app.get('/Faculty_Profiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'Faculty_Profiles.html'));
});

app.get('/videos', (req, res) => {
    res.sendFile(path.join(__dirname, 'videos.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, 'event.html'));
});

app.get('/tender', (req, res) => {
    res.sendFile(path.join(__dirname, 'tender.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});


    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
