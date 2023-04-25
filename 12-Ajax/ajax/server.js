/* eslint-disable import/no-unresolved */
const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./upload");
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    return res.end("Concluído com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 7,
  });
});

app.get("/parOuImpar", (req, res) => {
  // req.body
  // req.query
  // req.params
  const numeroPar = parseInt(req.query.numero, 10) % 2 === 0;
  res.send({
    resultado: numeroPar ? "par" : "impar",
  });
});

app.listen(8080, () => console.log("Executando..."));
