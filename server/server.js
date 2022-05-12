const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:8080',
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/mission-commanders', require('./routes/mission-commanders-routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});