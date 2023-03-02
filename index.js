const express = require ('express');
const bodyParser = require ('body-parser');
const routes = require ('./user');
const app = express();

const PORT = process.env.PORT || 6500;

app.use(bodyParser.json());

app.use('/user',routes);

// app.get('/', (req, res) => {
//     console.log('Hello World');
//     res.send('Hello World Testing');
// });


app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});