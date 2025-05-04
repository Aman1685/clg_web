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

app.get("/ai", (req, res) => {
    res.sendFile(__dirname + "/ai.html");
  });

app.get("/cs", (req, res) => {
    res.sendFile(__dirname + "/cs.html");
  });

app.get("/rb", (req, res) => {
    res.sendFile(__dirname + "/rb.html");
  });

app.get('/CoC', (req, res) => {
    res.sendFile(path.join(__dirname, 'Code of Conduct.html'));
});

app.get('/antiragging',(req,res)=>{
    res.sendFile(path.join(__dirname,"/AntiRagging.html"));
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

app.get('/Contact_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contact_Us.html'));
});
app.get('/mission', (req, res) => {
    res.sendFile(path.join(__dirname, 'mission.html'));
});

app.get('/administration', (req, res) => {
    res.sendFile(path.join(__dirname, 'administration.html'));
});

app.get('/about_overview', (req, res) => {
    res.sendFile(path.join(__dirname, 'about_overview.html'));
});

app.get('/admission', (req, res) => {
    res.sendFile(path.join(__dirname, 'admission.html'));
});

app.get('/academics', (req, res) => {
    res.sendFile(path.join(__dirname, 'Academic_Calender.html'));
});

app.get('/Faculty_Profiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'Faculty Profiles.html'));
});

app.get('/Faculty_Directory', (req, res) => {
    res.sendFile(path.join(__dirname, 'Faculty Directory.html'));
});

app.get('/videos', (req, res) => {
    res.sendFile(path.join(__dirname, 'videos.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, 'events.html'));
});

app.get('/tender', (req, res) => {
    res.sendFile(path.join(__dirname, 'tender.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});

app.get('/faq',(req, res) => {
    res.sendFile(path.join(__dirname, 'Faq.html'));
});

app.get('/accreditation',(req, res) => {
    res.sendFile(path.join(__dirname, 'Accreditation Status.html'));
});

app.get('/time_table',(req, res) => {
    res.sendFile(path.join(__dirname, 'Time_table.html'));  
});

    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
