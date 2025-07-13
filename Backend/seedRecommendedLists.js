import { List } from "./models/list.model.js";
import { Problem } from "./models/problem.model.js";

function pickProblemsByTitle(titles, allProblems, limit = 15) {
  const lowerTitles = titles.map(t => t.toLowerCase());
  return allProblems.filter(p =>
    lowerTitles.some(t => p.title.toLowerCase().includes(t))
  ).slice(0, limit);
}

function pickProblemsByDifficulty(difficulty, allProblems, limit = 15) {
  return allProblems.filter(p => p.difficulty === difficulty).slice(0, limit);
}

export async function seedRecommendedLists() {
  // Only run if no admin lists exist
  const existing = await List.find({ byAdmin: true });
  if (existing.length > 0) {
    console.log("Recommended lists already exist, skipping seeding."); 
    return;  
  }

  // Fetch all problems once
  const allProblems = await Problem.find().sort({ num: 1 });

  // Helper to format problems for the list schema
  const formatProblems = (problems) =>
    problems.map((p) => ({
      problemId: p._id,
      solved: false,
      revised: false,
      notes: "",
    }));

  // 1. DSA Starter Pack
  const starterArrays = pickProblemsByTitle([
    "array", "subarray", "matrix", "sort", "search", "duplicate", "missing"
  ], allProblems, 15);
  const starterLinked = pickProblemsByTitle([
    "linked list", "list", "cycle", "reverse nodes", "merge k sorted"
  ], allProblems, 10);
  const starterStacks = pickProblemsByTitle([
    "stack", "queue", "parentheses", "min stack", "valid parentheses", "implement queue"
  ], allProblems, 10);
  const starterMath = pickProblemsByTitle([
    "math", "integer", "number", "palindrome", "roman", "bit", "power", "sqrt"
  ], allProblems, 10);

  // 2. Algorithmic Patterns
  const twoPointers = pickProblemsByTitle([
    "two sum", "3sum", "4sum", "container", "trapping", "move zeroes", "remove duplicates", "remove element", "reverse string"
  ], allProblems, 10);
  const slidingWindow = pickProblemsByTitle([
    "substring", "longest substring", "minimum window", "anagrams", "permutation in string", "max consecutive"
  ], allProblems, 10);
  const binarySearch = pickProblemsByTitle([
    "binary search", "search", "find", "first bad version", "peak element", "search insert position"
  ], allProblems, 10);
  const greedy = pickProblemsByTitle([
    "jump game", "candy", "gas station", "interval", "merge intervals", "erase overlap"
  ], allProblems, 10);

  // 3. Classic Data Structures
  const trees = pickProblemsByTitle([
    "tree", "binary tree", "bst", "traversal", "invert", "maximum depth", "diameter"
  ], allProblems, 15);
  const graphs = pickProblemsByTitle([
    "graph", "course schedule", "network", "island", "clone graph", "path", "ladder"
  ], allProblems, 10);
  const heaps = pickProblemsByTitle([
    "heap", "priority queue", "kth largest", "merge k sorted lists", "find median"
  ], allProblems, 10);
  const hashing = pickProblemsByTitle([
    "hash", "group anagrams", "two sum", "subarray sum", "longest substring"
  ], allProblems, 10);

  // 4. Dynamic Programming & Recursion
  const basicDP = pickProblemsByTitle([
    "climb", "house robber", "fib", "staircase", "min cost", "unique paths", "triangle"
  ], allProblems, 10);
  const knapsack = pickProblemsByTitle([
    "subset", "partition", "target sum", "coin change", "combination sum", "knapsack"
  ], allProblems, 10);
  const stringDP = pickProblemsByTitle([
    "edit distance", "palindromic", "longest common subsequence", "interleaving string", "distinct subsequences"
  ], allProblems, 10);
  const combinatorics = pickProblemsByTitle([
    "permutation", "combination", "generate parentheses", "n-queens", "sudoku"
  ], allProblems, 10);

  // Build the lists
  const lists = [
    {
      title: "DSA Starter Pack",
      byAdmin: true,
      categories: [
        { title: "Arrays & Strings", problems: formatProblems(starterArrays) },
        { title: "Linked Lists", problems: formatProblems(starterLinked) },
        { title: "Stacks & Queues", problems: formatProblems(starterStacks) },
        { title: "Math & Bit Manipulation", problems: formatProblems(starterMath) },
      ],
    },
    {
      title: "Algorithmic Patterns",
      byAdmin: true,
      categories: [
        { title: "Two Pointers", problems: formatProblems(twoPointers) },
        { title: "Sliding Window", problems: formatProblems(slidingWindow) },
        { title: "Binary Search", problems: formatProblems(binarySearch) },
        { title: "Greedy", problems: formatProblems(greedy) },
      ],
    },
    {
      title: "Classic Data Structures",
      byAdmin: true,
      categories: [
        { title: "Trees", problems: formatProblems(trees) },
        { title: "Graphs", problems: formatProblems(graphs) },
        { title: "Heaps & Priority Queues", problems: formatProblems(heaps) },
        { title: "Hashing", problems: formatProblems(hashing) },
      ],
    },
    {
      title: "Dynamic Programming & Recursion",
      byAdmin: true,
      categories: [
        { title: "Basic DP", problems: formatProblems(basicDP) },
        { title: "Subset/Knapsack", problems: formatProblems(knapsack) },
        { title: "String DP", problems: formatProblems(stringDP) },
        { title: "Combinatorics/Recursion", problems: formatProblems(combinatorics) },
      ],
    },
  ];

  // Insert lists
  for (const list of lists) {
    await List.create(list);
  }

  console.log("Curated recommended lists seeded!");
} 