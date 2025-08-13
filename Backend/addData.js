import { ques } from "./models/ques.js";
import { Problem } from "./models/problem.model.js";
import { Animation } from "./models/animation.model.js";
import { animationPacks } from "./db/animations.js";

export const insertQuestions = async () => { 
  try {
      const operations = ques.map(question=>({
        updateOne: {
          filter: {title: question.title},
          update: {$set: question},
          upsert: true,
        }
      }))
      const result = await Problem.bulkWrite(operations);
      ("✅ Problem sync complete!");
    (`${result.upsertedCount} problems inserted.`);
    (`${result.modifiedCount} problems updated.`); 
    } catch (error) {
      console.error("Error inserting/updating animations:", error);
    }
};

export const insertAnimations = async () => {
  try {
      const operations = animationPacks.map(animation=>({
        updateOne: {
          filter: {title: animation.title},
          update: {$set: animation},
          upsert: true,
        }
      }))
      const result = await Animation.bulkWrite(operations);
      ("✅ Animation sync complete!");
    (`${result.upsertedCount} animations inserted.`);
    (`${result.modifiedCount} animations updated.`); 
    } catch (error) {
      console.error("Error inserting/updating animations:", error);
    }
}
