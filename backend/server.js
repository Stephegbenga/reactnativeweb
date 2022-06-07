// server.js or app.js
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 8080;

const config = {
    method: 'get',
    url: 'https://suncrypto.in/socket/market.php',
    headers: {}
};



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/getdata", async (req, res) => {
    axios(config)
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error.message);
        });

});



//Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
  });