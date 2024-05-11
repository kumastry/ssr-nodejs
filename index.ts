import express from "express";
import path from "path";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.query.name)
  next();
})

app.get('/', (req, res) => {
  const html = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body><h1>KUMASTRY</h1></body><script>console.log("kumastry");</script></html>'
  res.send(html);
});

app.get('/index', (req, res) => {
  res.status(200).render('index', {name: 'kimastry'});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
