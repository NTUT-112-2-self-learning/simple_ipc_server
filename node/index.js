const express = require('express');
const path = require('path');
const app = express();

const hlsPath = path.join(__dirname, 'hls');
app.use('/hls', express.static(hlsPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});