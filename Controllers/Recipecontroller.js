
//create data

import recipes from "../models/recipeschema.js";

export const creatrecipe = async (req, res) => {
  try {
    const recipe = new recipes(req.body);
    await recipe.save();
    res.status(200).json({ message: "product added", data: recipe });
  } catch (error) {
    res.status(500).json({ message: "internal server error", data: error });
  }
};

//get all data

export const getallrecipe = async (req, res) => {
  try {
    const getrecipe = await recipes.find();
    res
      .status(200)
      .json({ message: "product retrived sucessfuly", data: getrecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal error for getting products", data: error });
  }
};

//get recipe by id

export const getrecipebyid = async (req, res) => {
  try {
    const recipeid = req.params.id;
    const recipe = await recipes.findById(recipeid);
    if (!recipe) {
      return res.status(404).json({ message: "recipe not found" });
    }
    res.status(200).json({ message: "recipe got sucessfully", data: recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update recipes

export const updaterecipe = async(req,res) =>{
    try {
        const recipeid = req.params.id;
        const { name,procedure,ingrediant,duration } = req.body;
        const result = await recipes.updateOne(
            {_id:recipeid},
            {name, procedure,ingrediant,duration}
        );

        if(result.matchedCount === 0){
            return res.status(404).json({message:"recipe not found"})
        }

        const recipe = await recipes.findById(recipeid);
        res.status(200).json({message:"recipe update sucessfully ",data:recipe})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


//delete recipes

export const deleterecipe = async(req,res) =>{
    try {
        const recipeid = req.params.id;
        const output = await recipes.findByIdAndDelete({_id :recipeid})
        if(!output){
            return res.status(404).json({message:"recipe not found"})
        }
        const recipe = await recipes.find();
        res.status(200).json({message:'recipe deleted sucessfully0',data:recipe})

    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}