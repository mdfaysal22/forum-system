const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/api', (req, res) => {
    res.send("Hello I am API in Forum System");
})


app.listen(port, () => {
    console.log(`This port is running by ${port}`);
})