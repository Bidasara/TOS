import { ques } from "./models/ques.js";
import { Problem } from "./models/problem.model.js";
import { Animation } from "./models/animation.model.js";
import { animationPacks } from "./db/animations.js";

export const insertQuestions = async () => { 
  try {
    const problems = await Problem.find();
    if (problems.length > 0) {
      console.log("Questions already exist in the database. Skipping insertion.");
      return;
    }
    // Delete existing data (optional)
    await Problem.deleteMany({});  
    
    // Insert new data
    const result = await Problem.insertMany(ques);
    console.log(`${result.length} questions inserted successfully!`);
  } catch (error) {
    console.error("Error inserting questions:", error);
  }
};

export const insertAnimations = async () => {
  try {
    const animations = await Animation.find();
    if (animations.length > 0) {
      console.log("Animations already exist in the database. Skipping insertion.");
      return;
    }
    } catch (error) {
      console.error("Error inserting animations:", error);
    }
    // Delete existing data (optional)
    await Animation.deleteMany({});
    // Insert new data
    const result = await Animation.insertMany(animationPacks);
    console.log(`${result.length} animations inserted successfully!`);
}
