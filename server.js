const express = require('express');
const app = express();
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/', schoolRoutes);

app.get('/hello' , (req , res) => {
    res.json({ message: "HELLO TEAM WE ARE LIVE🚩" });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
