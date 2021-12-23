import express from "express";
import Dog from "./models/dog.model.js";
import mongoose from "mongoose";

const server = express();

mongoose.connect("mongodb://localhost:27017/DogsApi");
server.listen(4001, () => console.log("Server is up and running!"));

server.use(express.json());

server.get("/dogs", async (req, res) => {
  const allDogs = await Dog.find();
  res.json(allDogs);
});

server.post("/dogs", async (req, res) => {
  const newDog = new Dog({
    name: req.body.name,
    male: req.body.male,
    breed: req.body.breed,
    age: req.body.age,
    color: req.body.color,
  });
  const result = await newDog.save();
  res.json(result);
});
