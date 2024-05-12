import express from "express";
import fs from 'fs';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
})

app.get('/', (req, res) => {
  const html = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body><h1>KUMASTRY</h1></body><script>console.log("kumastry");</script></html>'
  res.send(html);
});

app.get('/index', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("./data/tasks.json", 'utf-8'));
  res.status(200).render('index', {name: 'kimastry', tasks : tasks});
});

app.post('/tasks', (req, res) => {
  const path = './data/';
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  if (!fs.existsSync(path + 'tasks.json')) {
    fs.writeFileSync(path + 'tasks.json',  JSON.stringify([req.body.task], null, 2));
  }

  const tasks = JSON.parse(fs.readFileSync("./data/tasks.json", 'utf-8'));
  tasks.push(req.body.task);
  fs.writeFileSync(path + 'tasks.json',  JSON.stringify(tasks, null, 2));

  res.redirect("../index");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
