const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/mission-commanders', require('./routes/mission-commanders-routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});