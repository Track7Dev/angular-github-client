const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const axios = require('axios');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/github-client'));
app.use(express.json());

app.post('/github', (req, res) => {
  axios.get(req.body.handle , {headers:{Authorization:process.env.GITHUB}})
  .then((info) => res.json(info.data))
  .catch((err) => res.json({error: err.message}));
});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/github-client/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Listening To Port ${port}`);
});
