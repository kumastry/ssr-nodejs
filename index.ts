import express from "express";

const app = express();
const port = 3002;
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  const html = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body><h1>KUMASTRY</h1></body><script>console.log("kumastry");</script></html>'
  response.send(html);
});

app.get('/index', (req, res) => {
  res.render('index', {name: 'kimastry'});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
