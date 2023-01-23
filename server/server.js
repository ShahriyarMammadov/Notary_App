const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.set("strictQuery", false);

app.use(cors());
app.use(bodyParser.json());

const usersSchema = new mongoose.Schema({
  img: { type: String },
  name: { type: String },
  vezife: { type: String },
  about: { type: String },
});

const users = mongoose.model("products", usersSchema);

app.get("/users", (req, res) => {
  users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  users.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
        res.status(200);
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  users.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(404).json({ message: "notFound" });
    }
  });
});

app.post("/users", (req, res) => {
  let user = new users({
    name: req?.body?.name,
    img: req?.body?.img,
    vezife: req?.body?.vezife,
    about: req?.body?.about,
  });

  user.save();
  res.send({ message: "SUCCESS" });
});

mongoose.connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/Shahriyar",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
