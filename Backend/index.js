import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
import {insertQuestions,insertAnimations} from "./addData.js";
import { seedRecommendedLists } from "./seedRecommendedLists.js";

dotenv.config({
    path: "./.env"
});

connectDB()
.then(async () => {
    await insertAnimations();
    await insertQuestions();
    await seedRecommendedLists();
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
}). catch((error)=>{
    console.log('Mongo DB connection failed:',error);
});