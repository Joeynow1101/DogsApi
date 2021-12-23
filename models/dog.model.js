import mongoose from "mongoose";

const dogsSchema = new mongoose.Schema({
  name: String,
  male: Boolean,
  breed: String,
  age: Number,
  color: String,
});

const Dog = mongoose.model("Dog", dogsSchema);

export default Dog;
