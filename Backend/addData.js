import { ques } from "./models/ques.js";
import { Problem } from "./models/problem.model.js";

const insertQuestions = async () => {
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

// Call this after DB connection is established
export default insertQuestions;