import mongoose from "mongoose";
const recipeschema = mongoose.Schema({
    name: String,
    procedure: String,
    ingrediant:[],
    duration: String
})

const recipes = mongoose.model("recipes", recipeschema);
export default recipes;