const express = require('express');
const app = express();

app.get('/', (req, res) => {

   res.send('Home Page');
});

app.listen(3000, (err) => {

   if(err) {
    console.log('error while listening');
} else {
   console.log('listening on port 3000');
}
});
