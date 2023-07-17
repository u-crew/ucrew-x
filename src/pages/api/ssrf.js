const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/user/image', async function (req, res) {
  const imgUrl = req.body.imgUrl;
//   deepcode ignore Ssrf: Ignoring this for a demo
  const imageReq = await axios.get(imgUrl);
  user.updateProfileImage(imageReq.data);
//   deepcode ignore XSS: Ignoring this for a demo
  res.send(imageReq.data);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});