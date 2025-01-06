import express from 'express';
import { creatrecipe, deleterecipe, getallrecipe, getrecipebyid, updaterecipe } from '../Controllers/Recipecontroller.js';

const router = express.Router();

router.post('/create',creatrecipe)
router.get("/getrecipe",getallrecipe)
router.get("/getrecipe/:id",getrecipebyid)
router.put('/update/:id',updaterecipe)
router.delete('/delete/:id',deleterecipe)


export default router;

