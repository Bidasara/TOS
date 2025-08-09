export const ques = [
    {
        num: 1,
        title: "Two Sum",
        difficulty: "Easy",
        tag: "easy-,array,hash-map",
        hint:"Look-back -> Store -> move-forward",
        link: "https://leetcode.com/problems/two-sum/"
    },
    {
        num: 2,
        title: "Add Two Numbers",
        difficulty: "Medium",
        tag: "medium-,linked-list,single-linked-list,",
        hint:"Create new one as you move,Carry extra",
        link: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
        num: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        tag:"string,sliding-window,hash-map,two-pointer",
        hint:"store,shorten the substring till condition not met,increase otherwise",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        num: 4,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        tag:"medium,two-pointer,array",
        hint:"travel through both array at the same time",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    },
    {
        num: 5,
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        tag:"array,palindrome,medium+,hard(o(n)),manacher's algorithm",
        hint:"start from centre for each index",
        link: "https://leetcode.com/problems/longest-palindromic-substring/"
    },
    {
        num: 6,
        title: "Zigzag Conversion",
        difficulty: "Medium",
        tag:"array,pattern",
        hint:"find pattern between next char in each row",
        link: "https://leetcode.com/problems/zigzag-conversion/"
    },
    {
        num: 7,
        title: "Reverse Integer",
        difficulty: "Medium",
        tag:"pattern,math",
        hint:"%10,standard algo's like to_string() and stol()",
        link: "https://leetcode.com/problems/reverse-integer/"
    },
    {
        num: 8,
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        tag:"string,math",
        hint:"traverse over string and do as told till point 3,check before adding if it will surpass int limits or not",
        link: "https://leetcode.com/problems/string-to-integer-atoi/"
    },
    {
        num: 9,
        title: "Palindrome Number",
        difficulty: "Easy",
        tag:"reversing",
        hint:"make the reverse number and compare",
        link: "https://leetcode.com/problems/palindrome-number/"
    },
    {
        num: 10,
        title: "Regular Expression Matching",
        difficulty: "Hard",
        tag:"hard-,dp,memoization",
        hint:"if can't think greedy do if else on each index and each operation,if * take it or don't on each index,for optimal do memoization",
        link: "https://leetcode.com/problems/regular-expression-matching/"
    },
    {
        num: 11,
        title: "Container With Most Water",
        difficulty: "Medium",
        tag:"array,two-pointer,greedy",
        hint:"for bigger container start from both ends,think greedy at every step in two-pointer",
        link: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        num: 12,
        title: "Integer to Roman",
        difficulty: "Medium",
        tag:"math,hash-table,tedious",
        hint:"look out for edge cases,do as description says 😂 really",
        link: "https://leetcode.com/problems/integer-to-roman/"
    },
    {
        num: 13,
        title: "Roman to Integer",
        difficulty: "Easy",
        tag:"math,easy+,hash-map",
        hint:"check if current and next index makeup 9.. or 4.. something",
        link: "https://leetcode.com/problems/roman-to-integer/"
    },
    {
        num: 14,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        tag:"multi-pointer,array",
        hint:"look out for edge cases like [\"\"] or [\"\",\"\"]",
        link: "https://leetcode.com/problems/longest-common-prefix/"
    },
    {
        num: 15,
        title: "3Sum",
        difficulty: "Medium",
        tag:"multi-pointer,array,sliding-window",
        hint:"no-order -> sort it,for each i start j & k on ends",
        link: "https://leetcode.com/problems/3sum/"
    },
    {
        num: 16,
        title: "3Sum Closest",
        difficulty: "Medium",
        tag:"multi-pointer,array,sliding-window",
        hint:"no-order -> sort it,for each i start j & k on ends",
        link: "https://leetcode.com/problems/3sum-closest/"
    },
    {
        num: 17,
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        tag:"hash-map,back-tracking,string,medium-",
        hint:"dp yup",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
    },
    {
        num: 18,
        title: "4Sum",
        difficulty: "Medium",
        tag:"multi-pointer,array,sliding-window",
        hint:"no order -> sort it,for each i j, start k & l on ends",
        link: "https://leetcode.com/problems/4sum/"
    },
    {
        num: 19,
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        tag:"medium-,two-pointer,linked-list",
        hint:"move someone N times forward,prev->next = prev->next->next",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    },
    {
        num: 20,
        title: "Valid Parentheses",
        difficulty: "Easy",
        tag:"stack,string",
        hint:"stack to store open brackets & remove if found corresponding close ones",
        link: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        num: 21,
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        tag:"linked-list,two-pointer",
        hint:"move along the two lists with two-pointers with smallest val first",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
        num: 22,
        title: "Generate Parentheses",
        difficulty: "Medium",
        tag:"medium-,back-tracking",
        hint:"at every index try adding \( if not all used, or add \) if number of open \> close ones",
        link: "https://leetcode.com/problems/generate-parentheses/"
    },
    {
        num: 23,
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        tag:"medium,priority-queue",
        hint:"use priority queue to get smallest value node(use custom comparator for that)",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/"
    },
    {
        num: 24,
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        tag:"medium-,pattern,linked-list",
        hint:"consider a->b->c->d where need to change interchange bc so a->c b->d c->b a=b b=d continue...",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/"
    },
    {
        num: 25,
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        tag:"tedious,pattern,linked-list",
        hint:"you find the pattern or you don't so don't worry these type not asked in interview",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
    {
        num: 26,
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        tag:"easy+,two-pointer,array",
        hint:"move 2nd ptr till it equals last value of 1st ptr, then swap",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
    },
    {
        num: 27,
        title: "Remove Element",
        difficulty: "Easy",
        tag:"easy+,two-pointer,array",
        hint:"move 2nd ptr till it equals target value , then swap",
        link: "https://leetcode.com/problems/remove-element/"
    },
    {
        num: 28,
        title: "Find the Index of the First Occurrence in a String",
        difficulty: "Easy",
        tag: "medium-(for Rabin Karp Algo),hard+(for KMP Algo),array,two-pointer",
        hint:"check at every index for m*n,Rabin & KMP for optimal,Rabin ok but dont blame yourself if can't think of KMP 😊",
        link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
    },
    {
        num: 29,
        title: "Divide Two Integers",
        difficulty: "Medium",
        tag:"math,bit-manipulaton",
        hint:"divisor<<p is divisor x 2^p, remove greatest smaller divisor<<p from dividend and add corresponding val to ans and loop",
        link: "https://leetcode.com/problems/divide-two-integers/"
    },
    {
        num: 30,
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        tag:"string,sliding-window,hash-table",
        hint:"store all string in hash,take window of length words.size() starting from i(0 to words[0].size()) instead of window at each i in s.size(), use s.substr() for ease,still don't understand ? don't worry watch a tutorial or ask chatgpt to explain in detail the solution and solve yourself",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"
    },
    {
        num: 31,
        title: "Next Permutation",
        difficulty: "Medium",
        tag:"two-pointer,array",
        hint:"take random number and think how to make it the next one, find from end the i where nums[i] < nums[i+1] now think who to swap this i with to get next permutation, swap i with smallest greater than nums[ind] from i+1 to end ",
        link: "https://leetcode.com/problems/next-permutation/"
    },
    {
        num: 32,
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/"
    },
    {
        num: 33,
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
        num: 34,
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
    },
    {
        num: 35,
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/"
    },
    {
        num: 36,
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        num: 37,
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/"
    },
    {
        num: 38,
        title: "Count and Say",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-and-say/"
    },
    {
        num: 39,
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/"
    },
    {
        num: 40,
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/"
    },
    {
        num: 41,
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/"
    },
    {
        num: 42,
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/"
    },
    {
        num: 43,
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/"
    },
    {
        num: 44,
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/"
    },
    {
        num: 45,
        title: "Jump Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-ii/"
    },
    {
        num: 46,
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/"
    },
    {
        num: 47,
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/"
    },
    {
        num: 48,
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/"
    },
    {
        num: 49,
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/"
    },
    {
        num: 50,
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/"
    },
    {
        num: 51,
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/"
    },
    {
        num: 52,
        title: "N-Queens II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens-ii/"
    },
    {
        num: 53,
        title: "Maximum Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/"
    },
    {
        num: 54,
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/"
    },
    {
        num: 55,
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/"
    },
    {
        num: 56,
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/"
    },
    {
        num: 57,
        title: "Insert Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-interval/"
    },
    {
        num: 58,
        title: "Length of Last Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/length-of-last-word/"
    },
    {
        num: 59,
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/"
    },
    {
        num: 60,
        title: "Permutation Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/permutation-sequence/"
    },
    {
        num: 61,
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/"
    },
    {
        num: 62,
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/"
    },
    {
        num: 63,
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/"
    },
    {
        num: 64,
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/"
    },
    {
        num: 65,
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/"
    },
    {
        num: 66,
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/"
    },
    {
        num: 67,
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/"
    },
    {
        num: 68,
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/"
    },
    {
        num: 69,
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/"
    },
    {
        num: 70,
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/"
    },
    {
        num: 71,
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/"
    },
    {
        num: 72,
        title: "Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/edit-distance/"
    },
    {
        num: 73,
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/"
    },
    {
        num: 74,
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/"
    },
    {
        num: 75,
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/"
    },
    {
        num: 76,
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
        num: 77,
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/"
    },
    {
        num: 78,
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/"
    },
    {
        num: 79,
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/"
    },
    {
        num: 80,
        title: "Remove Duplicates from Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"
    },
    {
        num: 81,
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
    },
    {
        num: 82,
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/"
    },
    {
        num: 83,
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
    },
    {
        num: 84,
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    {
        num: 85,
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/"
    },
    {
        num: 86,
        title: "Partition List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-list/"
    },
    {
        num: 87,
        title: "Scramble String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/scramble-string/"
    },
    {
        num: 88,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/"
    },
    {
        num: 89,
        title: "Gray Code",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gray-code/"
    },
    {
        num: 90,
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/"
    },
    {
        num: 91,
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/"
    },
    {
        num: 92,
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/"
    },
    {
        num: 93,
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/"
    },
    {
        num: 94,
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
    },
    {
        num: 95,
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/"
    },
    {
        num: 96,
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/"
    },
    {
        num: 97,
        title: "Interleaving String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interleaving-string/"
    },
    {
        num: 98,
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    {
        num: 99,
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/"
    },
    {
        num: 100,
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/"
    },
    {
        num: 101,
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/"
    },
    {
        num: 102,
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
        num: 103,
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
    },
    {
        num: 104,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    {
        num: 105,
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
    },
    {
        num: 106,
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
    },
    {
        num: 107,
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/"
    },
    {
        num: 108,
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
    },
    {
        num: 109,
        title: "Convert Sorted List to Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/"
    },
    {
        num: 110,
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/"
    },
    {
        num: 111,
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
    },
    {
        num: 112,
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/"
    },
    {
        num: 113,
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/"
    },
    {
        num: 114,
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
    },
    {
        num: 115,
        title: "Distinct Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences/"
    },
    {
        num: 116,
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
    },
    {
        num: 117,
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
    },
    {
        num: 118,
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/"
    },
    {
        num: 119,
        title: "Pascal's Triangle II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle-ii/"
    },
    {
        num: 120,
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/"
    },
    {
        num: 121,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
        num: 122,
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
    },
    {
        num: 123,
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
    },
    {
        num: 124,
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
    },
    {
        num: 125,
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/"
    },
    {
        num: 126,
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/"
    },
    {
        num: 127,
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/"
    },
    {
        num: 128,
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/"
    },
    {
        num: 129,
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
    },
    {
        num: 130,
        title: "Surrounded Regions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/"
    },
    {
        num: 131,
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/"
    },
    {
        num: 132,
        title: "Palindrome Partitioning II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-ii/"
    },
    {
        num: 133,
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/"
    },
    {
        num: 134,
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/"
    },
    {
        num: 135,
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/"
    },
    {
        num: 136,
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/"
    },
    {
        num: 137,
        title: "Single Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/"
    },
    {
        num: 138,
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    },
    {
        num: 139,
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/"
    },
    {
        num: 140,
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/"
    },
    {
        num: 141,
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
        num: 142,
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/"
    },
    {
        num: 143,
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/"
    },
    {
        num: 144,
        title: "Binary Tree Preorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/"
    },
    {
        num: 145,
        title: "Binary Tree Postorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/"
    },
    {
        num: 146,
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/"
    },
    {
        num: 147,
        title: "Insertion Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insertion-sort-list/"
    },
    {
        num: 148,
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/"
    },
    {
        num: 149,
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/"
    },
    {
        num: 150,
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    }
    ,
    {
        num: 151,
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/"
    },
    {
        num: 152,
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/"
    },
    {
        num: 153,
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
        num: 154,
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"
    },
    {
        num: 155,
        title: "Min Stack",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-stack/"
    },
    {
        num: 156,
        title: "Binary Tree Upside Down",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-upside-down/"
    },
    {
        num: 157,
        title: "Read N Characters Given Read4",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/read-n-characters-given-read4/"
    },
    {
        num: 158,
        title: "Read N Characters Given read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/"
    }
    ,
    {
        num: 159,
        title: "Longest Substring with At Most Two Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/"
    },
    {
        num: 160,
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
    },
    {
        num: 161,
        title: "One Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/one-edit-distance/"
    },
    {
        num: 162,
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/"
    },
    {
        num: 163,
        title: "Missing Ranges",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-ranges/"
    }
    ,
    {
        num: 164,
        title: "Maximum Gap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-gap/"
    },
    {
        num: 165,
        title: "Compare Version Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-version-numbers/"
    },
    {
        num: 166,
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/"
    },
    {
        num: 167,
        title: "Two Sum II - Input array is sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
    },
    {
        num: 168,
        title: "Excel Sheet Column Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-title/"
    },
    {
        num: 169,
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/"
    },
    {
        num: 170,
        title: "Two Sum III - Data structure design",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iii-data-structure-design/"
    },
    {
        num: 171,
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/"
    },
    {
        num: 172,
        title: "Factorial Trailing Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/"
    },
    {
        num: 173,
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/"
    },
    {
        num: 174,
        title: "Dungeon Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dungeon-game/"
    },
    {
        num: 175,
        title: "Combine Two Tables",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/combine-two-tables/"
    },
    {
        num: 176,
        title: "Second Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/second-highest-salary/"
    },
    {
        num: 177,
        title: "Nth Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-highest-salary/"
    },
    {
        num: 178,
        title: "Rank Scores",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-scores/"
    },
    {
        num: 179,
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/"
    },
    {
        num: 180,
        title: "Consecutive Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/consecutive-numbers/"
    },
    {
        num: 181,
        title: "Employees Earning More Than Their Managers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/"
    },
    {
        num: 182,
        title: "Duplicate Emails",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/duplicate-emails/"
    },
    {
        num: 183,
        title: "Customers Who Never Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customers-who-never-order/"
    },
    {
        num: 184,
        title: "Department Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/department-highest-salary/"
    },
    {
        num: 185,
        title: "Department Top Three Salaries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/department-top-three-salaries/"
    },
    {
        num: 186,
        title: "Reverse Words in a String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-ii/"
    },
    {
        num: 187,
        title: "Repeated DNA Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-dna-sequences/"
    },
    {
        num: 188,
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
    },
    {
        num: 189,
        title: "Rotate Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-array/"
    },
    {
        num: 190,
        title: "Reverse Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/"
    },
    {
        num: 191,
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/"
    },
    {
        num: 192,
        title: "Word Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-frequency/"
    },
    {
        num: 193,
        title: "Valid Phone Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-phone-numbers/"
    },
    {
        num: 194,
        title: "Transpose File",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/transpose-file/"
    },
    {
        num: 195,
        title: "Tenth Line",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/tenth-line/"
    },
    {
        num: 196,
        title: "Delete Duplicate Emails",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-duplicate-emails/"
    },
    {
        num: 197,
        title: "Rising Temperature",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rising-temperature/"
    },
    {
        num: 198,
        title: "House Robber",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber/"
    },
    {
        num: 199,
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/"
    },
    {
        num: 200,
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/"
    },
    {
        num: 201,
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
    },
    {
        num: 202,
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/"
    },
    {
        num: 203,
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/"
    },
    {
        num: 204,
        title: "Count Primes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-primes/"
    },
    {
        num: 205,
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/"
    },
    {
        num: 206,
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
        num: 207,
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/"
    },
    {
        num: 208,
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/"
    },
    {
        num: 209,
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/"
    },
    {
        num: 210,
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/"
    },
    {
        num: 211,
        title: "Design Add and Search Words Data Structure",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/"
    },
    {
        num: 212,
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/"
    },
    {
        num: 213,
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/"
    },
    {
        num: 214,
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/"
    },
    {
        num: 215,
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
    },
    {
        num: 216,
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/"
    },
    {
        num: 217,
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        num: 218,
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/"
    },
    {
        num: 219,
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/"
    },
    {
        num: 220,
        title: "Contains Duplicate III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/contains-duplicate-iii/"
    },
    {
        num: 221,
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/"
    },
    {
        num: 222,
        title: "Count Complete Tree Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/"
    },
    {
        num: 223,
        title: "Rectangle Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangle-area/"
    },
    {
        num: 224,
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/"
    },
    {
        num: 225,
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/"
    },
    {
        num: 226,
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/"
    },
    {
        num: 227,
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/"
    },
    {
        num: 228,
        title: "Summary Ranges",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/summary-ranges/"
    },
    {
        num: 229,
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/"
    },
    {
        num: 230,
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
    },
    {
        num: 231,
        title: "Power of Two",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-two/"
    },
    {
        num: 232,
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/"
    },
    {
        num: 233,
        title: "Number of Digit One",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-digit-one/"
    },
    {
        num: 234,
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/"
    },
    {
        num: 235,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    },
    {
        num: 236,
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
    },
    {
        num: 237,
        title: "Delete Node in a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/"
    },
    {
        num: 238,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
        num: 239,
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/"
    },
    {
        num: 240,
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/"
    },
    {
        num: 241,
        title: "Different Ways to Add Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/different-ways-to-add-parentheses/"
    },
    {
        num: 242,
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/"
    },
    {
        num: 243,
        title: "Shortest Word Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-word-distance/"
    },
    {
        num: 244,
        title: "Shortest Word Distance II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-word-distance-ii/"
    },
    {
        num: 245,
        title: "Shortest Word Distance III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-word-distance-iii/"
    },
    {
        num: 246,
        title: "Strobogrammatic Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/strobogrammatic-number/"
    },
    {
        num: 247,
        title: "Strobogrammatic Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strobogrammatic-number-ii/"
    },
    {
        num: 248,
        title: "Strobogrammatic Number III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strobogrammatic-number-iii/"
    },
    {
        num: 249,
        title: "Group Shifted Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-shifted-strings/"
    },
    {
        num: 250,
        title: "Count Univalue Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-univalue-subtrees/"
    },
    {
        num: 251,
        title: "Flatten 2D Vector",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-2d-vector/"
    },
    {
        num: 252,
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/"
    },
    {
        num: 253,
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/"
    },
    {
        num: 254,
        title: "Factor Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/factor-combinations/"
    },
    {
        num: 255,
        title: "Verify Preorder Sequence in Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/"
    },
    {
        num: 256,
        title: "Paint House",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/paint-house/"
    },
    {
        num: 257,
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/"
    },
    {
        num: 258,
        title: "Add Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-digits/"
    },
    {
        num: 259,
        title: "3Sum Smaller",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-smaller/"
    },
    {
        num: 260,
        title: "Single Number III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-iii/"
    },
    {
        num: 261,
        title: "Graph Valid Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/graph-valid-tree/"
    },
    {
        num: 262,
        title: "Trips and Users",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trips-and-users/"
    },
    {
        num: 263,
        title: "Ugly Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ugly-number/"
    },
    {
        num: 264,
        title: "Ugly Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ugly-number-ii/"
    },
    {
        num: 265,
        title: "Paint House II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/paint-house-ii/"
    },
    {
        num: 266,
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/"
    },
    {
        num: 267,
        title: "Palindrome Permutation II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-permutation-ii/"
    },
    {
        num: 268,
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/"
    },
    {
        num: 269,
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/"
    },
    {
        num: 270,
        title: "Closest Binary Search Tree Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value/"
    },
    {
        num: 271,
        title: "Encode and Decode Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-strings/"
    },
    {
        num: 272,
        title: "Closest Binary Search Tree Value II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value-ii/"
    },
    {
        num: 273,
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/"
    },
    {
        num: 274,
        title: "H-Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index/"
    },
    {
        num: 275,
        title: "H-Index II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index-ii/"
    },
    {
        num: 276,
        title: "Paint Fence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/paint-fence/"
    },
    {
        num: 277,
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/"
    },
    {
        num: 278,
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/"
    },
    {
        num: 279,
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/"
    },
    {
        num: 280,
        title: "Wiggle Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort/"
    },
    {
        num: 281,
        title: "Zigzag Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-iterator/"
    },
    {
        num: 282,
        title: "Expression Add Operators",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/expression-add-operators/"
    },
    {
        num: 283,
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/"
    },
    {
        num: 284,
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/"
    },
    {
        num: 285,
        title: "Inorder Successor in BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/"
    },
    {
        num: 286,
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/"
    },
    {
        num: 287,
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/"
    },
    {
        num: 288,
        title: "Unique Word Abbreviation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-word-abbreviation/"
    },
    {
        num: 289,
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/"
    },
    {
        num: 290,
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/"
    },
    {
        num: 291,
        title: "Word Pattern II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-pattern-ii/"
    },
    {
        num: 292,
        title: "Nim Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nim-game/"
    },
    {
        num: 293,
        title: "Flip Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flip-game/"
    },
    {
        num: 294,
        title: "Flip Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-game-ii/"
    },
    {
        num: 295,
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/"
    },
    {
        num: 296,
        title: "Best Meeting Point",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-meeting-point/"
    },
    {
        num: 297,
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
    },
    {
        num: 298,
        title: "Binary Tree Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/"
    },
    {
        num: 299,
        title: "Bulls and Cows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulls-and-cows/"
    },
    {
        num: 300,
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/"
    },
    {
        num: 301,
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/"
    },
    {
        num: 302,
        title: "Smallest Rectangle Enclosing Black Pixels",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/"
    },
    {
        num: 303,
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/"
    },
    {
        num: 304,
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/"
    },
    {
        num: 305,
        title: "Number of Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/"
    },
    {
        num: 306,
        title: "Additive Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/additive-number/"
    },
    {
        num: 307,
        title: "Range Sum Query - Mutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/"
    },
    {
        num: 308,
        title: "Range Sum Query 2D - Mutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-mutable/"
    },
    {
        num: 309,
        title: "Best Time to Buy and Sell Stock with Cooldown",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
    },
    {
        num: 310,
        title: "Minimum Height Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-height-trees/"
    },
    {
        num: 311,
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/"
    },
    {
        num: 312,
        title: "Burst Balloons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/burst-balloons/"
    },
    {
        num: 313,
        title: "Super Ugly Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/super-ugly-number/"
    },
    {
        num: 314,
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/"
    },
    {
        num: 315,
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
    },
    {
        num: 316,
        title: "Remove Duplicate Letters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicate-letters/"
    },
    {
        num: 317,
        title: "Shortest Distance from All Buildings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/"
    },
    {
        num: 318,
        title: "Maximum Product of Word Lengths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-of-word-lengths/"
    },
    {
        num: 319,
        title: "Bulb Switcher",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher/"
    },
    {
        num: 320,
        title: "Generalized Abbreviation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generalized-abbreviation/"
    },
    {
        num: 321,
        title: "Create Maximum Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/create-maximum-number/"
    },
    {
        num: 322,
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/"
    },
    {
        num: 323,
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
    },
    {
        num: 324,
        title: "Wiggle Sort II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort-ii/"
    },
    {
        num: 325,
        title: "Maximum Size Subarray Sum Equals k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/"
    },
    {
        num: 326,
        title: "Power of Three",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-three/"
    },
    {
        num: 327,
        title: "Count of Range Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-range-sum/"
    },
    {
        num: 328,
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/"
    },
    {
        num: 329,
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
    },
    {
        num: 330,
        title: "Patching Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/patching-array/"
    },
    {
        num: 331,
        title: "Verify Preorder Serialization of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/"
    },
    {
        num: 332,
        title: "Reconstruct Itinerary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reconstruct-itinerary/"
    },
    {
        num: 333,
        title: "Largest BST Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-bst-subtree/"
    },
    {
        num: 334,
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-triplet-subsequence/"
    },
    {
        num: 335,
        title: "Self Crossing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/self-crossing/"
    },
    {
        num: 336,
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/"
    },
    {
        num: 337,
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/"
    },
    {
        num: 338,
        title: "Counting Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counting-bits/"
    },
    {
        num: 339,
        title: "Nested List Weight Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nested-list-weight-sum/"
    },
    {
        num: 340,
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"
    },
    {
        num: 341,
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/"
    },
    {
        num: 342,
        title: "Power of Four",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-four/"
    },
    {
        num: 343,
        title: "Integer Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-break/"
    },
    {
        num: 344,
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/"
    },
    {
        num: 345,
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/"
    },
    {
        num: 346,
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/"
    },
    {
        num: 347,
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
        num: 348,
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/"
    },
    {
        num: 349,
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/"
    },
    {
        num: 350,
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/"
    },
    {
        num: 351,
        title: "Android Unlock Patterns",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/android-unlock-patterns/"
    },
    {
        num: 352,
        title: "Data Stream as Disjoint Intervals",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"
    },
    {
        num: 353,
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/"
    },
    {
        num: 354,
        title: "Russian Doll Envelopes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/russian-doll-envelopes/"
    },
    {
        num: 355,
        title: "Design Twitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-twitter/"
    },
    {
        num: 356,
        title: "Line Reflection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/line-reflection/"
    },
    {
        num: 357,
        title: "Count Numbers with Unique Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-numbers-with-unique-digits/"
    },
    {
        num: 358,
        title: "Rearrange String k Distance Apart",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/"
    },
    {
        num: 359,
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/"
    },
    {
        num: 360,
        title: "Sort Transformed Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-transformed-array/"
    },
    {
        num: 361,
        title: "Bomb Enemy",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bomb-enemy/"
    },
    {
        num: 362,
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/"
    },
    {
        num: 363,
        title: "Max Sum of Rectangle No Larger Than K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/"
    },
    {
        num: 364,
        title: "Nested List Weight Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nested-list-weight-sum-ii/"
    },
    {
        num: 365,
        title: "Water and Jug Problem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/water-and-jug-problem/"
    },
    {
        num: 366,
        title: "Find Leaves of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-leaves-of-binary-tree/"
    },
    {
        num: 367,
        title: "Valid Perfect Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-perfect-square/"
    },
    {
        num: 368,
        title: "Largest Divisible Subset",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-divisible-subset/"
    },
    {
        num: 369,
        title: "Plus One Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/plus-one-linked-list/"
    },
    {
        num: 370,
        title: "Range Addition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-addition/"
    },
    {
        num: 371,
        title: "Sum of Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-two-integers/"
    },
    {
        num: 372,
        title: "Super Pow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/super-pow/"
    },
    {
        num: 373,
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
    },
    {
        num: 374,
        title: "Guess Number Higher or Lower",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/guess-number-higher-or-lower/"
    },
    {
        num: 375,
        title: "Guess Number Higher or Lower II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/"
    },
    {
        num: 376,
        title: "Wiggle Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-subsequence/"
    },
    {
        num: 377,
        title: "Combination Sum IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iv/"
    },
    {
        num: 378,
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
    },
    {
        num: 379,
        title: "Design Phone Directory",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-phone-directory/"
    },
    {
        num: 380,
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/"
    },
    {
        num: 381,
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/"
    },
    {
        num: 382,
        title: "Linked List Random Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-random-node/"
    },
    {
        num: 383,
        title: "Ransom Note",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ransom-note/"
    },
    {
        num: 384,
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/"
    },
    {
        num: 385,
        title: "Mini Parser",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/mini-parser/"
    },
    {
        num: 386,
        title: "Lexicographical Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographical-numbers/"
    },
    {
        num: 387,
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/"
    },
    {
        num: 388,
        title: "Longest Absolute File Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-absolute-file-path/"
    },
    {
        num: 389,
        title: "Find the Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference/"
    },
    {
        num: 390,
        title: "Elimination Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/elimination-game/"
    },
    {
        num: 391,
        title: "Perfect Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/perfect-rectangle/"
    },
    {
        num: 392,
        title: "Is Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-subsequence/"
    },
    {
        num: 393,
        title: "UTF-8 Validation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/utf-8-validation/"
    },
    {
        num: 394,
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/"
    },
    {
        num: 395,
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/"
    },
    {
        num: 396,
        title: "Rotate Function",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-function/"
    },
    {
        num: 397,
        title: "Integer Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-replacement/"
    },
    {
        num: 398,
        title: "Random Pick Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-index/"
    },
    {
        num: 399,
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/"
    },
    {
        num: 400,
        title: "Nth Digit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-digit/"
    },
    {
        num: 401,
        title: "Binary Watch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-watch/"
    },
    {
        num: 402,
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/"
    },
    {
        num: 403,
        title: "Frog Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-jump/"
    },
    {
        num: 404,
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/"
    },
    {
        num: 405,
        title: "Convert a Number to Hexadecimal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/"
    },
    {
        num: 406,
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/"
    },
    {
        num: 407,
        title: "Trapping Rain Water II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water-ii/"
    },
    {
        num: 408,
        title: "Valid Word Abbreviation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-word-abbreviation/"
    },
    {
        num: 409,
        title: "Longest Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-palindrome/"
    },
    {
        num: 410,
        title: "Split Array Largest Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-largest-sum/"
    },
    {
        num: 411,
        title: "Minimum Unique Word Abbreviation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-unique-word-abbreviation/"
    },
    {
        num: 412,
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/"
    },
    {
        num: 413,
        title: "Arithmetic Slices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-slices/"
    },
    {
        num: 414,
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/"
    },
    {
        num: 415,
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/"
    },
    {
        num: 416,
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/"
    },
    {
        num: 417,
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/"
    },
    {
        num: 418,
        title: "Sentence Screen Fitting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sentence-screen-fitting/"
    },
    {
        num: 419,
        title: "Battleships in a Board",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/battleships-in-a-board/"
    },
    {
        num: 420,
        title: "Strong Password Checker",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strong-password-checker/"
    },
    {
        num: 421,
        title: "Maximum XOR of Two Numbers in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
    },
    {
        num: 422,
        title: "Valid Word Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-word-square/"
    },
    {
        num: 423,
        title: "Reconstruct Original Digits from English",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-original-digits-from-english/"
    },
    {
        num: 424,
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
        num: 425,
        title: "Word Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-squares/"
    },
    {
        num: 426,
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/"
    },
    {
        num: 427,
        title: "Construct Quad Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-quad-tree/"
    },
    {
        num: 428,
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/"
    },
    {
        num: 429,
        title: "N-ary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/n-ary-tree-level-order-traversal/"
    },
    {
        num: 430,
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
    },
    {
        num: 431,
        title: "Encode N-ary Tree to Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/"
    },
    {
        num: 432,
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/"
    },
    {
        num: 433,
        title: "Minimum Genetic Mutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-genetic-mutation/"
    },
    {
        num: 434,
        title: "Number of Segments in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-segments-in-a-string/"
    },
    {
        num: 435,
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/"
    },
    {
        num: 436,
        title: "Find Right Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-right-interval/"
    },
    {
        num: 437,
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/"
    },
    {
        num: 438,
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
    },
    {
        num: 439,
        title: "Ternary Expression Parser",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ternary-expression-parser/"
    },
    {
        num: 440,
        title: "K-th Smallest in Lexicographical Order",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/"
    },
    {
        num: 441,
        title: "Arranging Coins",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/arranging-coins/"
    },
    {
        num: 442,
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/"
    },
    {
        num: 443,
        title: "String Compression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-compression/"
    },
    {
        num: 444,
        title: "Sequence Reconstruction",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sequence-reconstruction/"
    },
    {
        num: 445,
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/"
    },
    {
        num: 446,
        title: "Arithmetic Slices II - Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/"
    },
    {
        num: 447,
        title: "Number of Boomerangs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-boomerangs/"
    },
    {
        num: 448,
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
    },
    {
        num: 449,
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/"
    },
    {
        num: 450,
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/"
    },
    {
        num: 451,
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/"
    },
    {
        num: 452,
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
    },
    {
        num: 453,
        title: "Minimum Moves to Equal Array Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/"
    },
    {
        num: 454,
        title: "4Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum-ii/"
    },
    {
        num: 455,
        title: "Assign Cookies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/assign-cookies/"
    },
    {
        num: 456,
        title: "132 Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/132-pattern/"
    },
    {
        num: 457,
        title: "Circular Array Loop",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/circular-array-loop/"
    },
    {
        num: 458,
        title: "Poor Pigs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/poor-pigs/"
    },
    {
        num: 459,
        title: "Repeated Substring Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-substring-pattern/"
    },
    {
        num: 460,
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/"
    },
    {
        num: 461,
        title: "Hamming Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/hamming-distance/"
    },
    {
        num: 462,
        title: "Minimum Moves to Equal Array Elements II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/"
    },
    {
        num: 463,
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/"
    },
    {
        num: 464,
        title: "Can I Win",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/can-i-win/"
    },
    {
        num: 465,
        title: "Optimal Account Balancing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/optimal-account-balancing/"
    },
    {
        num: 466,
        title: "Count The Repetitions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-the-repetitions/"
    },
    {
        num: 467,
        title: "Unique Substrings in Wraparound String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-substrings-in-wraparound-string/"
    },
    {
        num: 468,
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/"
    },
    {
        num: 469,
        title: "Convex Polygon",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convex-polygon/"
    },
    {
        num: 470,
        title: "Implement Rand10() Using Rand7()",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-rand10-using-rand7/"
    },
    {
        num: 471,
        title: "Encode String with Shortest Length",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/encode-string-with-shortest-length/"
    },
    {
        num: 472,
        title: "Concatenated Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/concatenated-words/"
    },
    {
        num: 473,
        title: "Matchsticks to Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/matchsticks-to-square/"
    },
    {
        num: 474,
        title: "Ones and Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ones-and-zeroes/"
    },
    {
        num: 475,
        title: "Heaters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/heaters/"
    },
    {
        num: 476,
        title: "Number Complement",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-complement/"
    },
    {
        num: 477,
        title: "Total Hamming Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/total-hamming-distance/"
    },
    {
        num: 478,
        title: "Generate Random Point in a Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-random-point-in-a-circle/"
    },
    {
        num: 479,
        title: "Largest Palindrome Product",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-palindrome-product/"
    },
    {
        num: 480,
        title: "Sliding Window Median",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-median/"
    },
    {
        num: 481,
        title: "Magical String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/magical-string/"
    },
    {
        num: 482,
        title: "License Key Formatting",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/license-key-formatting/"
    },
    {
        num: 483,
        title: "Smallest Good Base",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-good-base/"
    },
    {
        num: 484,
        title: "Find Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-permutation/"
    },
    {
        num: 485,
        title: "Max Consecutive Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-consecutive-ones/"
    },
    {
        num: 486,
        title: "Predict the Winner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/predict-the-winner/"
    },
    {
        num: 487,
        title: "Max Consecutive Ones II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-ii/"
    },
    {
        num: 488,
        title: "Zuma Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/zuma-game/"
    },
    {
        num: 489,
        title: "Robot Room Cleaner",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/robot-room-cleaner/"
    },
    {
        num: 490,
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/"
    },
    {
        num: 491,
        title: "Non Decreasing Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-decreasing-subsequences/"
    },
    {
        num: 492,
        title: "Construct the Rectangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/construct-the-rectangle/"
    },
    {
        num: 493,
        title: "Reverse Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-pairs/"
    },
    {
        num: 494,
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/"
    },
    {
        num: 495,
        title: "Teemo Attacking",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/teemo-attacking/"
    },
    {
        num: 496,
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/"
    },
    {
        num: 497,
        title: "Random Point in Non-overlapping Rectangles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/"
    },
    {
        num: 498,
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/"
    },
    {
        num: 499,
        title: "The Maze III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-maze-iii/"
    },
    {
        num: 500,
        title: "Keyboard Row",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/keyboard-row/"
    },
    {
        num: 501,
        title: "Find Mode in Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-mode-in-binary-search-tree/"
    },
    {
        num: 502,
        title: "IPO",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/ipo/"
    },
    {
        num: 503,
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/"
    },
    {
        num: 504,
        title: "Base 7",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/base-7/"
    },
    {
        num: 505,
        title: "The Maze II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze-ii/"
    },
    {
        num: 506,
        title: "Relative Ranks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/relative-ranks/"
    },
    {
        num: 507,
        title: "Perfect Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/perfect-number/"
    },
    {
        num: 508,
        title: "Most Frequent Subtree Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-frequent-subtree-sum/"
    },
    {
        num: 509,
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/"
    },
    {
        num: 510,
        title: "Inorder Successor in BST II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst-ii/"
    },
    {
        num: 511,
        title: "Game Play Analysis I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/game-play-analysis-i/"
    },
    {
        num: 512,
        title: "Game Play Analysis II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/game-play-analysis-ii/"
    },
    {
        num: 513,
        title: "Find Bottom Left Tree Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-bottom-left-tree-value/"
    },
    {
        num: 514,
        title: "Freedom Trail",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/freedom-trail/"
    },
    {
        num: 515,
        title: "Find Largest Value in Each Tree Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/"
    },
    {
        num: 516,
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/"
    },
    {
        num: 517,
        title: "Super Washing Machines",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-washing-machines/"
    },
    {
        num: 518,
        title: "Coin Change II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-ii/"
    },
    {
        num: 519,
        title: "Random Flip Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-flip-matrix/"
    },
    {
        num: 520,
        title: "Detect Capital",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/detect-capital/"
    },
    {
        num: 521,
        title: "Longest Uncommon Subsequence I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-uncommon-subsequence-i/"
    },
    {
        num: 522,
        title: "Longest Uncommon Subsequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-uncommon-subsequence-ii/"
    },
    {
        num: 523,
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/"
    },
    {
        num: 524,
        title: "Longest Word in Dictionary through Deleting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/"
    },
    {
        num: 525,
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/"
    },
    {
        num: 526,
        title: "Beautiful Arrangement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-arrangement/"
    },
    {
        num: 527,
        title: "Word Abbreviation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-abbreviation/"
    },
    {
        num: 528,
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/"
    },
    {
        num: 529,
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/"
    },
    {
        num: 530,
        title: "Minimum Absolute Difference in BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/"
    },
    {
        num: 531,
        title: "Lonely Pixel I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lonely-pixel-i/"
    },
    {
        num: 532,
        title: "K-diff Pairs in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/"
    },
    {
        num: 533,
        title: "Lonely Pixel II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lonely-pixel-ii/"
    },
    {
        num: 534,
        title: "Game Play Analysis III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-play-analysis-iii/"
    },
    {
        num: 535,
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/"
    },
    {
        num: 536,
        title: "Construct Binary Tree from String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-string/"
    },
    {
        num: 537,
        title: "Complex Number Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/complex-number-multiplication/"
    },
    {
        num: 538,
        title: "Convert BST to Greater Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-bst-to-greater-tree/"
    },
    {
        num: 539,
        title: "Minimum Time Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-difference/"
    },
    {
        num: 540,
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/"
    },
    {
        num: 541,
        title: "Reverse String II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string-ii/"
    },
    {
        num: 542,
        title: "01 Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/01-matrix/"
    },
    {
        num: 543,
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/"
    },
    {
        num: 544,
        title: "Output Contest Matches",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/output-contest-matches/"
    },
    {
        num: 545,
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/"
    },
    {
        num: 546,
        title: "Remove Boxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-boxes/"
    },
    {
        num: 547,
        title: "Number of Provinces",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-provinces/"
    },
    {
        num: 548,
        title: "Split Array with Same Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-with-same-average/"
    },
    {
        num: 549,
        title: "Binary Tree Longest Consecutive Sequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/"
    },
    {
        num: 550,
        title: "Game Play Analysis IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-play-analysis-iv/"
    },
    {
        num: 551,
        title: "Student Attendance Record I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/student-attendance-record-i/"
    },
    {
        num: 552,
        title: "Student Attendance Record II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/student-attendance-record-ii/"
    },
    {
        num: 553,
        title: "Optimal Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/optimal-division/"
    },
    {
        num: 554,
        title: "Brick Wall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brick-wall/"
    },
    {
        num: 555,
        title: "Split Concatenated Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-concatenated-strings/"
    },
    {
        num: 556,
        title: "Next Greater Element III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-iii/"
    },
    {
        num: 557,
        title: "Reverse Words in a String III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/"
    },
    {
        num: 558,
        title: "Logical OR of Two Binary Grids Represented as Quad-Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/"
    },
    {
        num: 559,
        title: "Maximum Depth of N-ary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"
    },
    {
        num: 560,
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    {
        num: 561,
        title: "Array Partition",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition/"
    },
    {
        num: 562,
        title: "Longest Line of Consecutive One in Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/"
    },
    {
        num: 563,
        title: "Binary Tree Tilt",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-tilt/"
    },
    {
        num: 564,
        title: "Find the Closest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-closest-palindrome/"
    },
    {
        num: 565,
        title: "Array Nesting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-nesting/"
    },
    {
        num: 566,
        title: "Reshape the Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reshape-the-matrix/"
    },
    {
        num: 567,
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/"
    },
    {
        num: 568,
        title: "Maximum Vacation Days",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-vacation-days/"
    },
    {
        num: 569,
        title: "Median Employee Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/median-employee-salary/"
    },
    {
        num: 570,
        title: "Managers with at Least 5 Direct Reports",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/"
    },
    {
        num: 571,
        title: "Find Median Given Frequency of Numbers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-given-frequency-of-numbers/"
    },
    {
        num: 572,
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/"
    },
    {
        num: 573,
        title: "Squirrel Simulation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/squirrel-simulation/"
    },
    {
        num: 574,
        title: "Winning Candidate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/winning-candidate/"
    },
    {
        num: 575,
        title: "Distribute Candies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/distribute-candies/"
    },
    {
        num: 576,
        title: "Out of Boundary Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/out-of-boundary-paths/"
    },
    {
        num: 577,
        title: "Employee Bonus",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employee-bonus/"
    },
    {
        num: 578,
        title: "Get Highest Answer Rate Question",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-highest-answer-rate-question/"
    },
    {
        num: 579,
        title: "Find Cumulative Salary of an Employee",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-cumulative-salary-of-an-employee/"
    },
    {
        num: 580,
        title: "Count Student Number in Departments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-student-number-in-departments/"
    },
    {
        num: 581,
        title: "Shortest Unsorted Continuous Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/"
    },
    {
        num: 582,
        title: "Kill Process",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kill-process/"
    },
    {
        num: 583,
        title: "Delete Operation for Two Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-operation-for-two-strings/"
    },
    {
        num: 584,
        title: "Find Customer Referee",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-customer-referee/"
    },
    {
        num: 585,
        title: "Investments in 2016",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/investments-in-2016/"
    },
    {
        num: 586,
        title: "Customer Placing the Largest Number of Orders",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/"
    },
    {
        num: 587,
        title: "Erect the Fence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/erect-the-fence/"
    },
    {
        num: 588,
        title: "Design In-Memory File System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-in-memory-file-system/"
    },
    {
        num: 589,
        title: "N-ary Tree Preorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/"
    },
    {
        num: 590,
        title: "N-ary Tree Postorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-ary-tree-postorder-traversal/"
    },
    {
        num: 591,
        title: "Tag Validator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tag-validator/"
    },
    {
        num: 592,
        title: "Fraction Addition and Subtraction",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-addition-and-subtraction/"
    },
    {
        num: 593,
        title: "Valid Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-square/"
    },
    {
        num: 594,
        title: "Longest Harmonious Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-harmonious-subsequence/"
    },
    {
        num: 595,
        title: "Big Countries",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/big-countries/"
    },
    {
        num: 596,
        title: "Classes With at Least 5 Students",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/classes-with-at-least-5-students/"
    },
    {
        num: 597,
        title: "Friend Requests I: Overall Acceptance Rate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/"
    },
    {
        num: 598,
        title: "Range Addition II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-addition-ii/"
    },
    {
        num: 599,
        title: "Minimum Index Sum of Two Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-index-sum-of-two-lists/"
    },
    {
        num: 600,
        title: "Non-negative Integers without Consecutive Ones",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/"
    },
    {
        num: 601,
        title: "Human Traffic of Stadium",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/human-traffic-of-stadium/"
    },
    {
        num: 602,
        title: "Friend Requests II: Who Has the Most Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/"
    },
    {
        num: 603,
        title: "Consecutive Available Seats",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/consecutive-available-seats/"
    },
    {
        num: 604,
        title: "Design Compressed String Iterator",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-compressed-string-iterator/"
    },
    {
        num: 605,
        title: "Can Place Flowers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-place-flowers/"
    },
    {
        num: 606,
        title: "Construct String from Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-string-from-binary-tree/"
    },
    {
        num: 607,
        title: "Sales Person",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-person/"
    },
    {
        num: 608,
        title: "Tree Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tree-node/"
    },
    {
        num: 609,
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/"
    },
    {
        num: 610,
        title: "Triangle Judgement",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/triangle-judgement/"
    },
    {
        num: 611,
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/"
    },
    {
        num: 612,
        title: "Shortest Distance in a Plane",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-distance-in-a-plane/"
    },
    {
        num: 613,
        title: "Shortest Distance in a line",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-distance-in-a-line/"
    },
    {
        num: 614,
        title: "Second Degree Follower",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/second-degree-follower/"
    },
    {
        num: 615,
        title: "Average Salary: Departments vs Company",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/average-salary-departments-vs-company/"
    },
    {
        num: 616,
        title: "Add Bold Tag in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-bold-tag-in-string/"
    },
    {
        num: 617,
        title: "Merge Two Binary Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-binary-trees/"
    },
    {
        num: 618,
        title: "Students Report By Geography",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/students-report-by-geography/"
    },
    {
        num: 619,
        title: "Biggest Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/biggest-single-number/"
    },
    {
        num: 620,
        title: "Not Boring Movies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/not-boring-movies/"
    },
    {
        num: 621,
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/"
    },
    {
        num: 622,
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/"
    },
    {
        num: 623,
        title: "Add One Row to Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-one-row-to-tree/"
    },
    {
        num: 624,
        title: "Maximum Distance in Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-distance-in-arrays/"
    },
    {
        num: 625,
        title: "Minimum Factorization",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-factorization/"
    },
    {
        num: 626,
        title: "Exchange Seats",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exchange-seats/"
    },
    {
        num: 627,
        title: "Swap Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/swap-salary/"
    },
    {
        num: 628,
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/"
    },
    {
        num: 629,
        title: "K Inverse Pairs Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-inverse-pairs-array/"
    },
    {
        num: 630,
        title: "Course Schedule III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/course-schedule-iii/"
    },
    {
        num: 631,
        title: "Design Excel Sum Formula",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-excel-sum-formula/"
    },
    {
        num: 632,
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
    },
    {
        num: 633,
        title: "Sum of Square Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-square-numbers/"
    },
    {
        num: 634,
        title: "Find the Derangement of an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-derangement-of-an-array/"
    },
    {
        num: 635,
        title: "Design Log Storage System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-log-storage-system/"
    },
    {
        num: 636,
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/"
    },
    {
        num: 637,
        title: "Average of Levels in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/"
    },
    {
        num: 638,
        title: "Shopping Offers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shopping-offers/"
    },
    {
        num: 639,
        title: "Decode Ways II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/decode-ways-ii/"
    },
    {
        num: 640,
        title: "Solve the Equation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/solve-the-equation/"
    },
    {
        num: 641,
        title: "Design Circular Deque",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-deque/"
    },
    {
        num: 642,
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/"
    },
    {
        num: 643,
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/"
    },
    {
        num: 644,
        title: "Maximum Average Subarray II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-average-subarray-ii/"
    },
    {
        num: 645,
        title: "Set Mismatch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/set-mismatch/"
    },
    {
        num: 646,
        title: "Maximum Length of Pair Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/"
    },
    {
        num: 647,
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/"
    },
    {
        num: 648,
        title: "Replace Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/replace-words/"
    },
    {
        num: 649,
        title: "Dota2 Senate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/dota2-senate/"
    },
    {
        num: 650,
        title: "2 Keys Keyboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/2-keys-keyboard/"
    },
    {
        num: 651,
        title: "4 Keys Keyboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4-keys-keyboard/"
    },
    {
        num: 652,
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/"
    },
    {
        num: 653,
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
    },
    {
        num: 654,
        title: "Maximum Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree/"
    },
    {
        num: 655,
        title: "Print Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-binary-tree/"
    },
    {
        num: 656,
        title: "Coin Path",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/coin-path/"
    },
    {
        num: 657,
        title: "Robot Return to Origin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/robot-return-to-origin/"
    },
    {
        num: 658,
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/"
    },
    {
        num: 659,
        title: "Split Array into Consecutive Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-array-into-consecutive-subsequences/"
    },
    {
        num: 660,
        title: "Remove 9",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-9/"
    },
    {
        num: 661,
        title: "Image Smoother",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/image-smoother/"
    },
    {
        num: 662,
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/"
    },
    {
        num: 663,
        title: "Equal Tree Partition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/equal-tree-partition/"
    },
    {
        num: 664,
        title: "Strange Printer",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strange-printer/"
    },
    {
        num: 665,
        title: "Non-decreasing Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-decreasing-array/"
    },
    {
        num: 666,
        title: "Path Sum IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iv/"
    },
    {
        num: 667,
        title: "Beautiful Arrangement II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-arrangement-ii/"
    },
    {
        num: 668,
        title: "Kth Smallest Number in Multiplication Table",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/"
    },
    {
        num: 669,
        title: "Trim a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/"
    },
    {
        num: 670,
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/"
    },
    {
        num: 671,
        title: "Second Minimum Node In a Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/"
    },
    {
        num: 672,
        title: "Bulb Switcher II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher-ii/"
    },
    {
        num: 673,
        title: "Number of Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
    },
    {
        num: 674,
        title: "Longest Continuous Increasing Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/"
    },
    {
        num: 675,
        title: "Cut Off Trees for Golf Event",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cut-off-trees-for-golf-event/"
    },
    {
        num: 676,
        title: "Implement Magic Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-magic-dictionary/"
    },
    {
        num: 677,
        title: "Map Sum Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/map-sum-pairs/"
    },
    {
        num: 678,
        title: "Valid Parenthesis String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-parenthesis-string/"
    },
    {
        num: 679,
        title: "24 Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/24-game/"
    },
    {
        num: 680,
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/"
    },
    {
        num: 681,
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/"
    },
    {
        num: 682,
        title: "Baseball Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/baseball-game/"
    },
    {
        num: 683,
        title: "K Empty Slots",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-empty-slots/"
    },
    {
        num: 684,
        title: "Redundant Connection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/redundant-connection/"
    },
    {
        num: 685,
        title: "Redundant Connection II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/redundant-connection-ii/"
    },
    {
        num: 686,
        title: "Repeated String Match",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-string-match/"
    },
    {
        num: 687,
        title: "Longest Univalue Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-univalue-path/"
    },
    {
        num: 688,
        title: "Knight Probability in Chessboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-probability-in-chessboard/"
    },
    {
        num: 689,
        title: "Maximum Sum of 3 Non-Overlapping Subarrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/"
    },
    {
        num: 690,
        title: "Employee Importance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/employee-importance/"
    },
    {
        num: 691,
        title: "Sticklers to Spell Word",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stickers-to-spell-word/"
    },
    {
        num: 692,
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/"
    },
    {
        num: 693,
        title: "Binary Number with Alternating Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-number-with-alternating-bits/"
    },
    {
        num: 694,
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/"
    },
    {
        num: 695,
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/"
    },
    {
        num: 696,
        title: "Count Binary Substrings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-binary-substrings/"
    },
    {
        num: 697,
        title: "Degree of an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/degree-of-an-array/"
    },
    {
        num: 698,
        title: "Partition to K Equal Sum Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"
    },
    {
        num: 699,
        title: "Falling Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/falling-squares/"
    },
    {
        num: 700,
        title: "Search in a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-in-a-binary-search-tree/"
    },
    {
        num: 701,
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
    },
    {
        num: 702,
        title: "Search in a Sorted Array of Unknown Size",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/"
    },
    {
        num: 703,
        title: "Kth Largest Element in a Stream",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
    },
    {
        num: 704,
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/"
    },
    {
        num: 705,
        title: "Design HashSet",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashset/"
    },
    {
        num: 706,
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/"
    },
    {
        num: 707,
        title: "Design Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-linked-list/"
    },
    {
        num: 708,
        title: "Insert into a Sorted Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/"
    },
    {
        num: 709,
        title: "To Lower Case",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/to-lower-case/"
    },
    {
        num: 710,
        title: "Random Pick with Blacklist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/random-pick-with-blacklist/"
    },
    {
        num: 711,
        title: "Number of Distinct Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-distinct-islands-ii/"
    },
    {
        num: 712,
        title: "Minimum ASCII Delete Sum for Two Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/"
    },
    {
        num: 713,
        title: "Subarray Product Less Than K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-product-less-than-k/"
    },
    {
        num: 714,
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
    },
    {
        num: 715,
        title: "Range Module",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/range-module/"
    },
    {
        num: 716,
        title: "Max Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-stack/"
    },
    {
        num: 717,
        title: "1-bit and 2-bit Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/1-bit-and-2-bit-characters/"
    },
    {
        num: 718,
        title: "Maximum Length of Repeated Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/"
    },
    {
        num: 719,
        title: "Find K-th Smallest Pair Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/"
    },
    {
        num: 720,
        title: "Longest Word in Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-word-in-dictionary/"
    },
    {
        num: 721,
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/"
    },
    {
        num: 722,
        title: "Remove Comments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-comments/"
    },
    {
        num: 723,
        title: "Candy Crush",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/candy-crush/"
    },
    {
        num: 724,
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/"
    },
    {
        num: 725,
        title: "Split Linked List in Parts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-linked-list-in-parts/"
    },
    {
        num: 726,
        title: "Number of Atoms",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-atoms/"
    },
    {
        num: 727,
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/"
    },
    {
        num: 728,
        title: "Self Dividing Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/self-dividing-numbers/"
    },
    {
        num: 729,
        title: "My Calendar I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-i/"
    },
    {
        num: 730,
        title: "Count Different Palindromic Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-different-palindromic-subsequences/"
    },
    {
        num: 731,
        title: "My Calendar II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-ii/"
    },
    {
        num: 732,
        title: "My Calendar III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/my-calendar-iii/"
    },
    {
        num: 733,
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/"
    },
    {
        num: 734,
        title: "Sentence Similarity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sentence-similarity/"
    },
    {
        num: 735,
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/"
    },
    {
        num: 736,
        title: "Parse Lisp Expression",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parse-lisp-expression/"
    },
    {
        num: 737,
        title: "Sentence Similarity II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sentence-similarity-ii/"
    },
    {
        num: 738,
        title: "Monotone Increasing Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/monotone-increasing-digits/"
    },
    {
        num: 739,
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/"
    },
    {
        num: 740,
        title: "Delete and Earn",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-and-earn/"
    },
    {
        num: 741,
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/"
    },
    {
        num: 742,
        title: "Closest Leaf in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-leaf-in-a-binary-tree/"
    },
    {
        num: 743,
        title: "Network Delay Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/network-delay-time/"
    },
    {
        num: 744,
        title: "Find Smallest Letter Greater Than Target",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/"
    },
    {
        num: 745,
        title: "Prefix and Suffix Search",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/prefix-and-suffix-search/"
    },
    {
        num: 746,
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/"
    },
    {
        num: 747,
        title: "Largest Number At Least Twice of Others",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/"
    },
    {
        num: 748,
        title: "Shortest Completing Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-completing-word/"
    },
    {
        num: 749,
        title: "Contain Virus",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/contain-virus/"
    },
    {
        num: 750,
        title: "Number of Corner Rectangles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-corner-rectangles/"
    },
    {
        num: 751,
        title: "IP to CIDR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ip-to-cidr/"
    },
    {
        num: 752,
        title: "Open the Lock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/open-the-lock/"
    },
    {
        num: 753,
        title: "Cracking the Safe",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cracking-the-safe/"
    },
    {
        num: 754,
        title: "Reach a Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reach-a-number/"
    },
    {
        num: 755,
        title: "Pour Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pour-water/"
    },
    {
        num: 756,
        title: "Pyramid Transition Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pyramid-transition-matrix/"
    },
    {
        num: 757,
        title: "Set Intersection Size At Least Two",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/set-intersection-size-at-least-two/"
    },
    {
        num: 758,
        title: "Bold Words in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bold-words-in-string/"
    },
    {
        num: 759,
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/"
    },
    {
        num: 760,
        title: "Find Anagram Mappings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-anagram-mappings/"
    },
    {
        num: 761,
        title: "Special Binary String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/special-binary-string/"
    },
    {
        num: 762,
        title: "Prime Number of Set Bits in Binary Representation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/"
    },
    {
        num: 763,
        title: "Partition Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-labels/"
    },
    {
        num: 764,
        title: "Largest Plus Sign",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-plus-sign/"
    },
    {
        num: 765,
        title: "Couples Holding Hands",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/couples-holding-hands/"
    },
    {
        num: 766,
        title: "Toeplitz Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/toeplitz-matrix/"
    },
    {
        num: 767,
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/"
    },
    {
        num: 768,
        title: "Max Chunks To Make Sorted II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/"
    },
    {
        num: 769,
        title: "Max Chunks To Make Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-chunks-to-make-sorted/"
    },
    {
        num: 770,
        title: "Basic Calculator IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iv/"
    },
    {
        num: 771,
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/"
    },
    {
        num: 772,
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/"
    },
    {
        num: 773,
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/"
    },
    {
        num: 774,
        title: "Minimize Max Distance to Gas Station",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/"
    },
    {
        num: 775,
        title: "Global and Local Inversions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/global-and-local-inversions/"
    },
    {
        num: 776,
        title: "Split BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-bst/"
    },
    {
        num: 777,
        title: "Swap Adjacent in LR String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-adjacent-in-lr-string/"
    },
    {
        num: 778,
        title: "Swim in Rising Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/swim-in-rising-water/"
    },
    {
        num: 779,
        title: "K-th Symbol in Grammar",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-th-symbol-in-grammar/"
    },
    {
        num: 780,
        title: "Reaching Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reaching-points/"
    },
    {
        num: 781,
        title: "Rabbits in Forest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rabbits-in-forest/"
    },
    {
        num: 782,
        title: "Transform to Chessboard",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/transform-to-chessboard/"
    },
    {
        num: 783,
        title: "Minimum Distance Between BST Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-distance-between-bst-nodes/"
    },
    {
        num: 784,
        title: "Letter Case Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-case-permutation/"
    },
    {
        num: 785,
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/"
    },
    {
        num: 786,
        title: "K-th Smallest Prime Fraction",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-th-smallest-prime-fraction/"
    },
    {
        num: 787,
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
    },
    {
        num: 788,
        title: "Rotated Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotated-digits/"
    },
    {
        num: 789,
        title: "Escape The Ghosts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/escape-the-ghosts/"
    },
    {
        num: 790,
        title: "Domino and Tromino Tiling",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/domino-and-tromino-tiling/"
    },
    {
        num: 791,
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/"
    },
    {
        num: 792,
        title: "Number of Matching Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-matching-subsequences/"
    },
    {
        num: 793,
        title: "Preimage Size of Factorial Zeroes Function",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/"
    },
    {
        num: 794,
        title: "Valid Tic-Tac-Toe State",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-tic-tac-toe-state/"
    },
    {
        num: 795,
        title: "Number of Subarrays with Bounded Maximum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/"
    },
    {
        num: 796,
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/"
    },
    {
        num: 797,
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-to-target/"
    },
    {
        num: 798,
        title: "Smallest Rotation with Highest Score",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-rotation-with-highest-score/"
    },
    {
        num: 799,
        title: "Champagne Tower",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/champagne-tower/"
    },
    {
        num: 800,
        title: "Similar RGB Color",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/similar-rgb-color/"
    },
    {
        num: 801,
        title: "Minimum Swaps To Make Sequences Increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/"
    },
    {
        num: 802,
        title: "Find Eventual Safe States",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-eventual-safe-states/"
    },
    {
        num: 803,
        title: "Bricks Falling When Hit",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/bricks-falling-when-hit/"
    },
    {
        num: 804,
        title: "Unique Morse Code Words",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-morse-code-words/"
    },
    {
        num: 805,
        title: "Split Array With Same Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-with-same-average/"
    },
    {
        num: 806,
        title: "Number of Lines To Write String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-lines-to-write-string/"
    },
    {
        num: 807,
        title: "Max Increase to Keep City Skyline",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-increase-to-keep-city-skyline/"
    },
    {
        num: 808,
        title: "Soup Servings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/soup-servings/"
    },
    {
        num: 809,
        title: "Expressive Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/expressive-words/"
    },
    {
        num: 810,
        title: "Chalkboard XOR Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/chalkboard-xor-game/"
    },
    {
        num: 811,
        title: "Subdomain Visit Count",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subdomain-visit-count/"
    },
    {
        num: 812,
        title: "Largest Triangle Area",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-triangle-area/"
    },
    {
        num: 813,
        title: "Largest Sum of Averages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-sum-of-averages/"
    },
    {
        num: 814,
        title: "Binary Tree Pruning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-pruning/"
    },
    {
        num: 815,
        title: "Bus Routes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/bus-routes/"
    },
    {
        num: 816,
        title: "Ambiguous Coordinates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ambiguous-coordinates/"
    },
    {
        num: 817,
        title: "Linked List Components",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-components/"
    },
    {
        num: 818,
        title: "Race Car",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/race-car/"
    },
    {
        num: 819,
        title: "Most Common Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-common-word/"
    },
    {
        num: 820,
        title: "Short Encoding of Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/short-encoding-of-words/"
    },
    {
        num: 821,
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/"
    },
    {
        num: 822,
        title: "Card Flipping Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/card-flipping-game/"
    },
    {
        num: 823,
        title: "Binary Trees With Factors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-trees-with-factors/"
    },
    {
        num: 824,
        title: "Goat Latin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/goat-latin/"
    },
    {
        num: 825,
        title: "Friends Of Appropriate Ages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friends-of-appropriate-ages/"
    },
    {
        num: 826,
        title: "Most Profit Assigning Work",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-profit-assigning-work/"
    },
    {
        num: 827,
        title: "Making A Large Island",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/making-a-large-island/"
    },
    {
        num: 828,
        title: "Count Unique Characters of All Substrings of a Given String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/"
    },
    {
        num: 829,
        title: "Consecutive Numbers Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/consecutive-numbers-sum/"
    },
    {
        num: 830,
        title: "Positions of Large Groups",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/positions-of-large-groups/"
    },
    {
        num: 831,
        title: "Masking Personal Information",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/masking-personal-information/"
    },
    {
        num: 832,
        title: "Flipping an Image",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flipping-an-image/"
    },
    {
        num: 833,
        title: "Find And Replace in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-in-string/"
    },
    {
        num: 834,
        title: "Sum of Distances in Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-distances-in-tree/"
    },
    {
        num: 835,
        title: "Image Overlap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/image-overlap/"
    },
    {
        num: 836,
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/"
    },
    {
        num: 837,
        title: "New 21 Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/new-21-game/"
    },
    {
        num: 838,
        title: "Push Dominoes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/push-dominoes/"
    },
    {
        num: 839,
        title: "Similar String Groups",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/similar-string-groups/"
    },
    {
        num: 840,
        title: "Magic Squares In Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/magic-squares-in-grid/"
    },
    {
        num: 841,
        title: "Keys and Rooms",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/keys-and-rooms/"
    },
    {
        num: 842,
        title: "Split Array into Fibonacci Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-array-into-fibonacci-sequence/"
    },
    {
        num: 843,
        title: "Guess the Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/guess-the-word/"
    },
    {
        num: 844,
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/"
    },
    {
        num: 845,
        title: "Longest Mountain in Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-mountain-in-array/"
    },
    {
        num: 846,
        title: "Hand of Straights",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/hand-of-straights/"
    },
    {
        num: 847,
        title: "Shortest Path Visiting All Nodes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"
    },
    {
        num: 848,
        title: "Shifting Letters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shifting-letters/"
    },
    {
        num: 849,
        title: "Maximize Distance to Closest Person",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-distance-to-closest-person/"
    },
    {
        num: 850,
        title: "Rectangle Area II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rectangle-area-ii/"
    },
    {
        num: 851,
        title: "Loud and Rich",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/loud-and-rich/"
    },
    {
        num: 852,
        title: "Peak Index in a Mountain Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/"
    },
    {
        num: 853,
        title: "Car Fleet",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/car-fleet/"
    },
    {
        num: 854,
        title: "K-Similar Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-similar-strings/"
    },
    {
        num: 855,
        title: "Exam Room",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exam-room/"
    },
    {
        num: 856,
        title: "Score of Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/score-of-parentheses/"
    },
    {
        num: 857,
        title: "Minimum Cost to Hire K Workers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/"
    },
    {
        num: 858,
        title: "Mirror Reflection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/mirror-reflection/"
    },
    {
        num: 859,
        title: "Buddy Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/buddy-strings/"
    },
    {
        num: 860,
        title: "Lemonade Change",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lemonade-change/"
    },
    {
        num: 861,
        title: "Score After Flipping Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/score-after-flipping-matrix/"
    },
    {
        num: 862,
        title: "Shortest Subarray with Sum at Least K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
    },
    {
        num: 863,
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
    },
    {
        num: 864,
        title: "Shortest Path to Get All Keys",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-to-get-all-keys/"
    },
    {
        num: 865,
        title: "Smallest Subtree with all the Deepest Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/"
    },
    {
        num: 866,
        title: "Prime Palindrome",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prime-palindrome/"
    },
    {
        num: 867,
        title: "Transpose Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/transpose-matrix/"
    },
    {
        num: 868,
        title: "Binary Gap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-gap/"
    },
    {
        num: 869,
        title: "Reordered Power of 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reordered-power-of-2/"
    },
    {
        num: 870,
        title: "Advantage Shuffle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/advantage-shuffle/"
    },
    {
        num: 871,
        title: "Minimum Number of Refueling Stops",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/"
    },
    {
        num: 872,
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/leaf-similar-trees/"
    },
    {
        num: 873,
        title: "Length of Longest Fibonacci Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/"
    },
    {
        num: 874,
        title: "Walking Robot Simulation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walking-robot-simulation/"
    },
    {
        num: 875,
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/"
    },
    {
        num: 876,
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/"
    },
    {
        num: 877,
        title: "Stone Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game/"
    },
    {
        num: 878,
        title: "Nth Magical Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/nth-magical-number/"
    },
    {
        num: 879,
        title: "Profitable Schemes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/profitable-schemes/"
    },
    {
        num: 880,
        title: "Decoded String at Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decoded-string-at-index/"
    },
    {
        num: 881,
        title: "Boats to Save People",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boats-to-save-people/"
    },
    {
        num: 882,
        title: "Reachable Nodes In Subdivided Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/"
    },
    {
        num: 883,
        title: "Projection Area of 3D Shapes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/projection-area-of-3d-shapes/"
    },
    {
        num: 884,
        title: "Uncommon Words from Two Sentences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/uncommon-words-from-two-sentences/"
    },
    {
        num: 885,
        title: "Spiral Matrix III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-iii/"
    },
    {
        num: 886,
        title: "Possible Bipartition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/possible-bipartition/"
    },
    {
        num: 887,
        title: "Super Egg Drop",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-egg-drop/"
    },
    {
        num: 888,
        title: "Fair Candy Swap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fair-candy-swap/"
    },
    {
        num: 889,
        title: "Construct Binary Tree from Preorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/"
    },
    {
        num: 890,
        title: "Find and Replace Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-pattern/"
    },
    {
        num: 891,
        title: "Sum of Subsequence Widths",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-subsequence-widths/"
    },
    {
        num: 892,
        title: "Surface Area of 3D Shapes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/surface-area-of-3d-shapes/"
    },
    {
        num: 893,
        title: "Groups of Special-Equivalent Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/groups-of-special-equivalent-strings/"
    },
    {
        num: 894,
        title: "All Possible Full Binary Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-possible-full-binary-trees/"
    },
    {
        num: 895,
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/"
    },
    {
        num: 896,
        title: "Monotonic Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/monotonic-array/"
    },
    {
        num: 897,
        title: "Increasing Order Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/increasing-order-search-tree/"
    },
    {
        num: 898,
        title: "Bitwise ORs of Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-ors-of-subarrays/"
    },
    {
        num: 899,
        title: "Orderly Queue",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/orderly-queue/"
    },
    {
        num: 900,
        title: "RLE Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rle-iterator/"
    },
    {
        num: 901,
        title: "Online Stock Span",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-stock-span/"
    },
    {
        num: 902,
        title: "Numbers At Most N Given Digit Set",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/"
    },
    {
        num: 903,
        title: "Valid Permutations for DI Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-permutations-for-di-sequence/"
    },
    {
        num: 904,
        title: "Fruit Into Baskets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/"
    },
    {
        num: 905,
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/"
    },
    {
        num: 906,
        title: "Super Palindromes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-palindromes/"
    },
    {
        num: 907,
        title: "Sum of Subarray Minimums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-minimums/"
    },
    {
        num: 908,
        title: "Smallest Range I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/smallest-range-i/"
    },
    {
        num: 909,
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/"
    },
    {
        num: 910,
        title: "Smallest Range II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-range-ii/"
    },
    {
        num: 911,
        title: "Online Election",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-election/"
    },
    {
        num: 912,
        title: "Sort an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/"
    },
    {
        num: 913,
        title: "Cat and Mouse",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cat-and-mouse/"
    },
    {
        num: 914,
        title: "X of a Kind in a Deck of Cards",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/"
    },
    {
        num: 915,
        title: "Partition Array into Disjoint Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/"
    },
    {
        num: 916,
        title: "Word Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-subsets/"
    },
    {
        num: 917,
        title: "Reverse Only Letters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-only-letters/"
    },
    {
        num: 918,
        title: "Maximum Sum Circular Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/"
    },
    {
        num: 919,
        title: "Complete Binary Tree Inserter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/complete-binary-tree-inserter/"
    },
    {
        num: 920,
        title: "Number of Music Playlists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-music-playlists/"
    },
    {
        num: 921,
        title: "Minimum Add to Make Parentheses Valid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/"
    },
    {
        num: 922,
        title: "Sort Array By Parity II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity-ii/"
    },
    {
        num: 923,
        title: "3Sum With Multiplicity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-with-multiplicity/"
    },
    {
        num: 924,
        title: "Minimize Malware Spread",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread/"
    },
    {
        num: 925,
        title: "Long Pressed Name",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/long-pressed-name/"
    },
    {
        num: 926,
        title: "Flip String to Monotone Increasing",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-string-to-monotone-increasing/"
    },
    {
        num: 927,
        title: "Three Equal Parts",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/three-equal-parts/"
    },
    {
        num: 928,
        title: "Minimize Malware Spread II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread-ii/"
    },
    {
        num: 929,
        title: "Unique Email Addresses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-email-addresses/"
    },
    {
        num: 930,
        title: "Binary Subarrays With Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-subarrays-with-sum/"
    },
    {
        num: 931,
        title: "Minimum Falling Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-falling-path-sum/"
    },
    {
        num: 932,
        title: "Beautiful Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-array/"
    },
    {
        num: 933,
        title: "Number of Recent Calls",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-recent-calls/"
    },
    {
        num: 934,
        title: "Shortest Bridge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-bridge/"
    },
    {
        num: 935,
        title: "Knight Dialer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-dialer/"
    },
    {
        num: 936,
        title: "Stamping The Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stamping-the-sequence/"
    },
    {
        num: 937,
        title: "Reorder Data in Log Files",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-data-in-log-files/"
    },
    {
        num: 938,
        title: "Range Sum of BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-of-bst/"
    },
    {
        num: 939,
        title: "Minimum Area Rectangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle/"
    },
    {
        num: 940,
        title: "Distinct Subsequences II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences-ii/"
    },
    {
        num: 941,
        title: "Valid Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-mountain-array/"
    },
    {
        num: 942,
        title: "DI String Match",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/di-string-match/"
    },
    {
        num: 943,
        title: "Find the Shortest Superstring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-shortest-superstring/"
    },
    {
        num: 944,
        title: "Delete Columns to Make Sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-columns-to-make-sorted/"
    },
    {
        num: 945,
        title: "Minimum Increment to Make Array Unique",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-increment-to-make-array-unique/"
    },
    {
        num: 946,
        title: "Validate Stack Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-stack-sequences/"
    },
    {
        num: 947,
        title: "Most Stones Removed with Same Row or Column",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
    },
    {
        num: 948,
        title: "Bag of Tokens",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bag-of-tokens/"
    },
    {
        num: 949,
        title: "Largest Time for Given Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-time-for-given-digits/"
    },
    {
        num: 950,
        title: "Reveal Cards In Increasing Order",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reveal-cards-in-increasing-order/"
    },
    {
        num: 951,
        title: "Flip Equivalent Binary Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-equivalent-binary-trees/"
    },
    {
        num: 952,
        title: "Largest Component Size by Common Factor",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-component-size-by-common-factor/"
    },
    {
        num: 953,
        title: "Verifying an Alien Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/verifying-an-alien-dictionary/"
    },
    {
        num: 954,
        title: "Array of Doubled Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-of-doubled-pairs/"
    },
    {
        num: 955,
        title: "Delete Columns to Make Sorted II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-columns-to-make-sorted-ii/"
    },
    {
        num: 956,
        title: "Tallest Billboard",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tallest-billboard/"
    },
    {
        num: 957,
        title: "Prison Cells After N Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prison-cells-after-n-days/"
    },
    {
        num: 958,
        title: "Check Completeness of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-completeness-of-a-binary-tree/"
    },
    {
        num: 959,
        title: "Regions Cut By Slashes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/regions-cut-by-slashes/"
    },
    {
        num: 960,
        title: "Delete Columns to Make Sorted III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/delete-columns-to-make-sorted-iii/"
    },
    {
        num: 961,
        title: "N-Repeated Element in Size 2N Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-repeated-element-in-size-2n-array/"
    },
    {
        num: 962,
        title: "Maximum Width Ramp",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-ramp/"
    },
    {
        num: 963,
        title: "Minimum Area Rectangle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle-ii/"
    },
    {
        num: 964,
        title: "Least Operators to Express Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/least-operators-to-express-number/"
    },
    {
        num: 965,
        title: "Univalued Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/univalued-binary-tree/"
    },
    {
        num: 966,
        title: "Vowel Spellchecker",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vowel-spellchecker/"
    },
    {
        num: 967,
        title: "Numbers With Same Consecutive Differences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/numbers-with-same-consecutive-differences/"
    },
    {
        num: 968,
        title: "Binary Tree Cameras",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-cameras/"
    },
    {
        num: 969,
        title: "Pancake Sorting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pancake-sorting/"
    },
    {
        num: 970,
        title: "Powerful Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powerful-integers/"
    },
    {
        num: 971,
        title: "Flip Binary Tree To Match Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/"
    },
    {
        num: 972,
        title: "Equal Rational Numbers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/equal-rational-numbers/"
    },
    {
        num: 973,
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/"
    },
    {
        num: 974,
        title: "Subarray Sums Divisible by K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/"
    },
    {
        num: 975,
        title: "Odd Even Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/odd-even-jump/"
    },
    {
        num: 976,
        title: "Largest Perimeter Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-perimeter-triangle/"
    },
    {
        num: 977,
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/"
    },
    {
        num: 978,
        title: "Longest Turbulent Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-turbulent-subarray/"
    },
    {
        num: 979,
        title: "Distribute Coins in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distribute-coins-in-binary-tree/"
    },
    {
        num: 980,
        title: "Unique Paths III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/unique-paths-iii/"
    },
    {
        num: 981,
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/"
    },
    {
        num: 982,
        title: "Triples with Bitwise AND Equal To Zero",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/"
    },
    {
        num: 983,
        title: "Minimum Cost For Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/"
    },
    {
        num: 984,
        title: "String Without AAA or BBB",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-without-aaa-or-bbb/"
    },
    {
        num: 985,
        title: "Sum of Even Numbers After Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-even-numbers-after-queries/"
    },
    {
        num: 986,
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/"
    },
    {
        num: 987,
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
    },
    {
        num: 988,
        title: "Smallest String Starting From Leaf",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-string-starting-from-leaf/"
    },
    {
        num: 989,
        title: "Add to Array-Form of Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-to-array-form-of-integer/"
    },
    {
        num: 990,
        title: "Satisfiability of Equality Equations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/satisfiability-of-equality-equations/"
    },
    {
        num: 991,
        title: "Broken Calculator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/broken-calculator/"
    },
    {
        num: 992,
        title: "Subarrays with K Different Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarrays-with-k-different-integers/"
    },
    {
        num: 993,
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/"
    },
    {
        num: 994,
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/"
    },
    {
        num: 995,
        title: "Minimum Number of K Consecutive Bit Flips",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/"
    },
    {
        num: 996,
        title: "Number of Squareful Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-squareful-arrays/"
    },
    {
        num: 997,
        title: "Find the Town Judge",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-town-judge/"
    },
    {
        num: 998,
        title: "Maximum Binary Tree II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree-ii/"
    },
    {
        num: 999,
        title: "Available Captures for Rook",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/available-captures-for-rook/"
    },
    {
        num: 1000,
        title: "Minimum Cost to Merge Stones",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-merge-stones/"
    },
    {
        num: 1001,
        title: "Grid Illumination",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/grid-illumination/"
    },
    {
        num: 1002,
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/"
    },
    {
        num: 1003,
        title: "Check If Word Is Valid After Substitutions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/"
    },
    {
        num: 1004,
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/"
    },
    {
        num: 1005,
        title: "Maximize Sum Of Array After K Negations",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/"
    },
    {
        num: 1006,
        title: "Clumsy Factorial",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clumsy-factorial/"
    },
    {
        num: 1007,
        title: "Minimum Domino Rotations For Equal Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/"
    },
    {
        num: 1008,
        title: "Construct Binary Search Tree from Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
    },
    {
        num: 1009,
        title: "Complement of Base 10 Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/complement-of-base-10-integer/"
    },
    {
        num: 1010,
        title: "Pairs of Songs With Total Durations Divisible by 60",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/"
    },
    {
        num: 1011,
        title: "Capacity To Ship Packages Within D Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
    },
    {
        num: 1012,
        title: "Numbers With Repeated Digits",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/numbers-with-repeated-digits/"
    },
    {
        num: 1013,
        title: "Partition Array Into Three Parts With Equal Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/"
    },
    {
        num: 1014,
        title: "Best Sightseeing Pair",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-sightseeing-pair/"
    },
    {
        num: 1015,
        title: "Smallest Integer Divisible by K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-integer-divisible-by-k/"
    },
    {
        num: 1016,
        title: "Binary String With Substrings Representing 1 To N",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/"
    },
    {
        num: 1017,
        title: "Convert to Base -2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-to-base-2/"
    },
    {
        num: 1018,
        title: "Binary Prefix Divisible By 5",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-prefix-divisible-by-5/"
    },
    {
        num: 1019,
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/"
    },
    {
        num: 1020,
        title: "Number of Enclaves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-enclaves/"
    },
    {
        num: 1021,
        title: "Remove Outermost Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-outermost-parentheses/"
    },
    {
        num: 1022,
        title: "Sum of Root To Leaf Binary Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/"
    },
    {
        num: 1023,
        title: "Camelcase Matching",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/camelcase-matching/"
    },
    {
        num: 1024,
        title: "Video Stitching",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/video-stitching/"
    },
    {
        num: 1025,
        title: "Divisor Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/divisor-game/"
    },
    {
        num: 1026,
        title: "Maximum Difference Between Node and Ancestor",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/"
    },
    {
        num: 1027,
        title: "Longest Arithmetic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-arithmetic-subsequence/"
    },
    {
        num: 1028,
        title: "Recover a Tree From Preorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/"
    },
    {
        num: 1029,
        title: "Two City Scheduling",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-city-scheduling/"
    },
    {
        num: 1030,
        title: "Matrix Cells in Distance Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/matrix-cells-in-distance-order/"
    },
    {
        num: 1031,
        title: "Maximum Sum of Two Non-Overlapping Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/"
    },
    {
        num: 1032,
        title: "Stream of Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stream-of-characters/"
    },
    {
        num: 1033,
        title: "Moving Stones Until Consecutive",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/moving-stones-until-consecutive/"
    },
    {
        num: 1034,
        title: "Coloring A Border",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coloring-a-border/"
    },
    {
        num: 1035,
        title: "Uncrossed Lines",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/uncrossed-lines/"
    },
    {
        num: 1036,
        title: "Escape a Large Maze",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/escape-a-large-maze/"
    },
    {
        num: 1037,
        title: "Valid Boomerang",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-boomerang/"
    },
    {
        num: 1038,
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/"
    },
    {
        num: 1039,
        title: "Minimum Score Triangulation of Polygon",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/"
    },
    {
        num: 1040,
        title: "Moving Stones Until Consecutive II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/moving-stones-until-consecutive-ii/"
    },
    {
        num: 1041,
        title: "Robot Bounded In Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/robot-bounded-in-circle/"
    },
    {
        num: 1042,
        title: "Flower Planting With No Adjacent",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flower-planting-with-no-adjacent/"
    },
    {
        num: 1043,
        title: "Partition Array for Maximum Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-array-for-maximum-sum/"
    },
    {
        num: 1044,
        title: "Longest Duplicate Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-duplicate-substring/"
    },
    {
        num: 1045,
        title: "Customers Who Bought All Products",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/customers-who-bought-all-products/"
    },
    {
        num: 1046,
        title: "Last Stone Weight",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/last-stone-weight/"
    },
    {
        num: 1047,
        title: "Remove All Adjacent Duplicates In String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"
    },
    {
        num: 1048,
        title: "Longest String Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-string-chain/"
    },
    {
        num: 1049,
        title: "Last Stone Weight II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/last-stone-weight-ii/"
    },
    {
        num: 1050,
        title: "Actors and Directors Who Cooperated At Least Three Times",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/"
    },
    {
        num: 1051,
        title: "Height Checker",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/height-checker/"
    },
    {
        num: 1052,
        title: "Grumpy Bookstore Owner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/grumpy-bookstore-owner/"
    },
    {
        num: 1053,
        title: "Previous Permutation With One Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/previous-permutation-with-one-swap/"
    },
    {
        num: 1054,
        title: "Distant Barcodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distant-barcodes/"
    },
    {
        num: 1055,
        title: "Shortest Way to Form String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-way-to-form-string/"
    },
    {
        num: 1056,
        title: "Confusing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/confusing-number/"
    },
    {
        num: 1057,
        title: "Campus Bikes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/campus-bikes/"
    },
    {
        num: 1058,
        title: "Minimize Rounding Error to Meet Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-rounding-error-to-meet-target/"
    },
    {
        num: 1059,
        title: "All Paths from Source Lead to Destination",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/"
    },
    {
        num: 1060,
        title: "Missing Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-element-in-sorted-array/"
    },
    {
        num: 1061,
        title: "Lexicographically Smallest Equivalent String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographically-smallest-equivalent-string/"
    },
    {
        num: 1062,
        title: "Longest Repeating Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-substring/"
    },
    {
        num: 1063,
        title: "Number of Valid Subarrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-valid-subarrays/"
    },
    {
        num: 1064,
        title: "Fixed Point",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fixed-point/"
    },
    {
        num: 1065,
        title: "Index Pairs of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/index-pairs-of-a-string/"
    },
    {
        num: 1066,
        title: "Campus Bikes II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/campus-bikes-ii/"
    },
    {
        num: 1067,
        title: "Digit Count in Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/digit-count-in-range/"
    },
    {
        num: 1068,
        title: "Product Sales Analysis I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/product-sales-analysis-i/"
    },
    {
        num: 1069,
        title: "Product Sales Analysis II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/product-sales-analysis-ii/"
    },
    {
        num: 1070,
        title: "Product Sales Analysis III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-sales-analysis-iii/"
    },
    {
        num: 1071,
        title: "Greatest Common Divisor of Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/greatest-common-divisor-of-strings/"
    },
    {
        num: 1072,
        title: "Flip Columns For Maximum Number of Equal Rows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/"
    },
    {
        num: 1073,
        title: "Adding Two Negabinary Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/adding-two-negabinary-numbers/"
    },
    {
        num: 1074,
        title: "Number of Submatrices That Sum to Target",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"
    },
    {
        num: 1075,
        title: "Project Employees I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/project-employees-i/"
    },
    {
        num: 1076,
        title: "Project Employees II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/project-employees-ii/"
    },
    {
        num: 1077,
        title: "Project Employees III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/project-employees-iii/"
    },
    {
        num: 1078,
        title: "Occurrences After Bigram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/occurrences-after-bigram/"
    },
    {
        num: 1079,
        title: "Letter Tile Possibilities",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-tile-possibilities/"
    },
    {
        num: 1080,
        title: "Insufficient Nodes in Root to Leaf Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/"
    },
    {
        num: 1081,
        title: "Smallest Subsequence of Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/"
    },
    {
        num: 1082,
        title: "Sales Analysis I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-i/"
    },
    {
        num: 1083,
        title: "Sales Analysis II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-ii/"
    },
    {
        num: 1084,
        title: "Sales Analysis III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-iii/"
    },
    {
        num: 1085,
        title: "Sum of Digits in the Minimum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/"
    },
    {
        num: 1086,
        title: "High Five",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/high-five/"
    },
    {
        num: 1087,
        title: "Brace Expansion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brace-expansion/"
    },
    {
        num: 1088,
        title: "Confusing Number II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/confusing-number-ii/"
    },
    {
        num: 1089,
        title: "Duplicate Zeros",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/duplicate-zeros/"
    },
    {
        num: 1090,
        title: "Largest Values From Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-values-from-labels/"
    },
    {
        num: 1091,
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
    },
    {
        num: 1092,
        title: "Shortest Common Supersequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-common-supersequence/"
    },
    {
        num: 1093,
        title: "Statistics from a Large Sample",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/statistics-from-a-large-sample/"
    },
    {
        num: 1094,
        title: "Car Pooling",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/car-pooling/"
    },
    {
        num: 1095,
        title: "Find in Mountain Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-in-mountain-array/"
    },
    {
        num: 1096,
        title: "Brace Expansion II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/brace-expansion-ii/"
    },
    {
        num: 1097,
        title: "Game Play Analysis V",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/game-play-analysis-v/"
    },
    {
        num: 1098,
        title: "Unpopular Books",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unpopular-books/"
    },
    {
        num: 1099,
        title: "Two Sum Less Than K",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-less-than-k/"
    },
    {
        num: 1100,
        title: "Find K-Length Substrings With No Repeated Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/"
    },
    {
        num: 1101,
        title: "The Earliest Moment When Everyone Become Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/"
    },
    {
        num: 1102,
        title: "Path With Maximum Minimum Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-minimum-value/"
    },
    {
        num: 1103,
        title: "Distribute Candies to People",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/distribute-candies-to-people/"
    },
    {
        num: 1104,
        title: "Path In Zigzag Labelled Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/"
    },
    {
        num: 1105,
        title: "Filling Bookcase Shelves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/filling-bookcase-shelves/"
    },
    {
        num: 1106,
        title: "Parsing A Boolean Expression",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parsing-a-boolean-expression/"
    },
    {
        num: 1107,
        title: "New Users Daily Count",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/new-users-daily-count/"
    },
    {
        num: 1108,
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/"
    },
    {
        num: 1109,
        title: "Corporate Flight Bookings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/corporate-flight-bookings/"
    },
    {
        num: 1110,
        title: "Delete Nodes And Return Forest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-nodes-and-return-forest/"
    },
    {
        num: 1111,
        title: "Maximum Nesting Depth of Two Valid Parentheses Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/"
    },
    {
        num: 1112,
        title: "Highest Grade For Each Student",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/highest-grade-for-each-student/"
    },
    {
        num: 1113,
        title: "Reported Posts",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reported-posts/"
    },
    {
        num: 1114,
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/"
    },
    {
        num: 1115,
        title: "Print FooBar Alternately",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-foobar-alternately/"
    },
    {
        num: 1116,
        title: "Print Zero Even Odd",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-zero-even-odd/"
    },
    {
        num: 1117,
        title: "Building H2O",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/building-h2o/"
    },
    {
        num: 1118,
        title: "Number of Days in a Month",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-days-in-a-month/"
    },
    {
        num: 1119,
        title: "Remove Vowels from a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-vowels-from-a-string/"
    },
    {
        num: 1120,
        title: "Maximum Average Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-average-subtree/"
    },
    {
        num: 1121,
        title: "Divide Array Into Increasing Sequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/divide-array-into-increasing-sequences/"
    },
    {
        num: 1122,
        title: "Relative Sort Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/relative-sort-array/"
    },
    {
        num: 1123,
        title: "Lowest Common Ancestor of Deepest Leaves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/"
    },
    {
        num: 1124,
        title: "Longest Well-Performing Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-well-performing-interval/"
    },
    {
        num: 1125,
        title: "Smallest Sufficient Team",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-sufficient-team/"
    },
    {
        num: 1126,
        title: "Active Businesses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/active-businesses/"
    },
    {
        num: 1127,
        title: "User Purchase Platform",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/user-purchase-platform/"
    },
    {
        num: 1128,
        title: "Number of Equivalent Domino Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-equivalent-domino-pairs/"
    },
    {
        num: 1129,
        title: "Shortest Path with Alternating Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-with-alternating-colors/"
    },
    {
        num: 1130,
        title: "Minimum Cost Tree From Leaf Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/"
    },
    {
        num: 1131,
        title: "Maximum of Absolute Value Expression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-of-absolute-value-expression/"
    },
    {
        num: 1132,
        title: "Reported Posts II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reported-posts-ii/"
    },
    {
        num: 1133,
        title: "Largest Unique Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-unique-number/"
    },
    {
        num: 1134,
        title: "Armstrong Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/armstrong-number/"
    },
    {
        num: 1135,
        title: "Connecting Cities With Minimum Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/"
    },
    {
        num: 1136,
        title: "Parallel Courses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/parallel-courses/"
    },
    {
        num: 1137,
        title: "N-th Tribonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-th-tribonacci-number/"
    },
    {
        num: 1138,
        title: "Alphabet Board Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/alphabet-board-path/"
    },
    {
        num: 1139,
        title: "Largest 1-Bordered Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-1-bordered-square/"
    },
    {
        num: 1140,
        title: "Stone Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game-ii/"
    },
    {
        num: 1141,
        title: "User Activity for the Past 30 Days I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/"
    },
    {
        num: 1142,
        title: "User Activity for the Past 30 Days II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/"
    },
    {
        num: 1143,
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence/"
    },
    {
        num: 1144,
        title: "Decrease Elements To Make Array Zigzag",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/"
    },
    {
        num: 1145,
        title: "Binary Tree Coloring Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-coloring-game/"
    },
    {
        num: 1146,
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/"
    },
    {
        num: 1147,
        title: "Longest Chunked Palindrome Decomposition",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-chunked-palindrome-decomposition/"
    },
    {
        num: 1148,
        title: "Article Views I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/article-views-i/"
    },
    {
        num: 1149,
        title: "Article Views II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/article-views-ii/"
    },
    {
        num: 1150,
        title: "Check If a Number Is Majority Element in a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/"
    },
    {
        num: 1151,
        title: "Minimum Swaps to Group All 1's Together",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/"
    },
    {
        num: 1152,
        title: "Analyze User Website Visit Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/analyze-user-website-visit-pattern/"
    },
    {
        num: 1153,
        title: "String Transforms Into Another String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/string-transforms-into-another-string/"
    },
    {
        num: 1154,
        title: "Day of the Year",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/day-of-the-year/"
    },
    {
        num: 1155,
        title: "Number of Dice Rolls With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/"
    },
    {
        num: 1156,
        title: "Swap For Longest Repeated Character Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-for-longest-repeated-character-substring/"
    },
    {
        num: 1157,
        title: "Online Majority Element In Subarray",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/online-majority-element-in-subarray/"
    },
    {
        num: 1158,
        title: "Market Analysis I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/market-analysis-i/"
    },
    {
        num: 1159,
        title: "Market Analysis II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/market-analysis-ii/"
    },
    {
        num: 1160,
        title: "Find Words That Can Be Formed by Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/"
    },
    {
        num: 1161,
        title: "Maximum Level Sum of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/"
    },
    {
        num: 1162,
        title: "As Far from Land as Possible",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/as-far-from-land-as-possible/"
    },
    {
        num: 1163,
        title: "Last Substring in Lexicographical Order",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/last-substring-in-lexicographical-order/"
    },
    {
        num: 1164,
        title: "Product Price at a Given Date",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-price-at-a-given-date/"
    },
    {
        num: 1165,
        title: "Single-Row Keyboard",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-row-keyboard/"
    },
    {
        num: 1166,
        title: "Design File System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-file-system/"
    },
    {
        num: 1167,
        title: "Minimum Cost to Connect Sticks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/"
    },
    {
        num: 1168,
        title: "Optimize Water Distribution in a Village",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/"
    },
    {
        num: 1169,
        title: "Invalid Transactions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/invalid-transactions/"
    },
    {
        num: 1170,
        title: "Compare Strings by Frequency of the Smallest Character",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/"
    },
    {
        num: 1171,
        title: "Remove Zero Sum Consecutive Nodes from Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/"
    },
    {
        num: 1172,
        title: "Dinner Plate Stacks",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dinner-plate-stacks/"
    },
    {
        num: 1173,
        title: "Immediate Food Delivery I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/immediate-food-delivery-i/"
    },
    {
        num: 1174,
        title: "Immediate Food Delivery II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/immediate-food-delivery-ii/"
    },
    {
        num: 1175,
        title: "Prime Arrangements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/prime-arrangements/"
    },
    {
        num: 1176,
        title: "Diet Plan Performance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diet-plan-performance/"
    },
    {
        num: 1177,
        title: "Can Make Palindrome from Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/can-make-palindrome-from-substring/"
    },
    {
        num: 1178,
        title: "Number of Valid Words for Each Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/"
    },
    {
        num: 1179,
        title: "Reformat Department Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-department-table/"
    },
    {
        num: 1180,
        title: "Count Substrings with Only One Distinct Letter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/"
    },
    {
        num: 1181,
        title: "Before and After Puzzle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/before-and-after-puzzle/"
    },
    {
        num: 1182,
        title: "Shortest Distance to Target Color",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-distance-to-target-color/"
    },
    {
        num: 1183,
        title: "Maximum Number of Ones",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-ones/"
    },
    {
        num: 1184,
        title: "Distance Between Bus Stops",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/distance-between-bus-stops/"
    },
    {
        num: 1185,
        title: "Day of the Week",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/day-of-the-week/"
    },
    {
        num: 1186,
        title: "Maximum Subarray Sum with One Deletion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/"
    },
    {
        num: 1187,
        title: "Make Array Strictly Increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-array-strictly-increasing/"
    },
    {
        num: 1188,
        title: "Design Bounded Blocking Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bounded-blocking-queue/"
    },
    {
        num: 1189,
        title: "Maximum Number of Balloons",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-balloons/"
    },
    {
        num: 1190,
        title: "Reverse Substrings Between Each Pair of Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/"
    },
    {
        num: 1191,
        title: "K-Concatenation Maximum Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-concatenation-maximum-sum/"
    },
    {
        num: 1192,
        title: "Critical Connections in a Network",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/"
    },
    {
        num: 1193,
        title: "Monthly Transactions I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/monthly-transactions-i/"
    },
    {
        num: 1194,
        title: "Tournament Winners",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tournament-winners/"
    },
    {
        num: 1195,
        title: "Fizz Buzz Multithreaded",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fizz-buzz-multithreaded/"
    },
    {
        num: 1196,
        title: "How Many Apples Can You Put into the Basket",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/"
    },
    {
        num: 1197,
        title: "Minimum Knight Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-knight-moves/"
    },
    {
        num: 1198,
        title: "Find Smallest Common Element in All Rows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-smallest-common-element-in-all-rows/"
    },
    {
        num: 1199,
        title: "Minimum Time to Build Blocks",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-build-blocks/"
    },
    {
        num: 1200,
        title: "Minimum Absolute Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-absolute-difference/"
    },
    {
        num: 1201,
        title: "Ugly Number III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ugly-number-iii/"
    },
    {
        num: 1202,
        title: "Smallest String With Swaps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-string-with-swaps/"
    },
    {
        num: 1203,
        title: "Sort Items by Groups Respecting Dependencies",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/"
    },
    {
        num: 1204,
        title: "Last Person to Fit in the Bus",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/last-person-to-fit-in-the-bus/"
    },
    {
        num: 1205,
        title: "Monthly Transactions II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/monthly-transactions-ii/"
    },
    {
        num: 1206,
        title: "Design Skiplist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-skiplist/"
    },
    {
        num: 1207,
        title: "Unique Number of Occurrences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-number-of-occurrences/"
    },
    {
        num: 1208,
        title: "Get Equal Substrings Within Budget",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-equal-substrings-within-budget/"
    },
    {
        num: 1209,
        title: "Remove All Adjacent Duplicates in String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/"
    },
    {
        num: 1210,
        title: "Minimum Moves to Reach Target with Rotations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/"
    },
    {
        num: 1211,
        title: "Queries Quality and Percentage",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/queries-quality-and-percentage/"
    },
    {
        num: 1212,
        title: "Team Scores in Football Tournament",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/team-scores-in-football-tournament/"
    },
    {
        num: 1213,
        title: "Intersection of Three Sorted Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-three-sorted-arrays/"
    },
    {
        num: 1214,
        title: "Two Sum BSTs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-sum-bsts/"
    },
    {
        num: 1215,
        title: "Stepping Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stepping-numbers/"
    },
    {
        num: 1216,
        title: "Valid Palindrome III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-palindrome-iii/"
    },
    {
        num: 1217,
        title: "Minimum Cost to Move Chips to The Same Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/"
    },
    {
        num: 1218,
        title: "Longest Arithmetic Subsequence of Given Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/"
    },
    {
        num: 1219,
        title: "Path with Maximum Gold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-gold/"
    },
    {
        num: 1220,
        title: "Count Vowels Permutation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-vowels-permutation/"
    },
    {
        num: 1221,
        title: "Split a String in Balanced Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/"
    },
    {
        num: 1222,
        title: "Queens That Can Attack the King",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queens-that-can-attack-the-king/"
    },
    {
        num: 1223,
        title: "Dice Roll Simulation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dice-roll-simulation/"
    },
    {
        num: 1224,
        title: "Maximum Equal Frequency",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-equal-frequency/"
    },
    {
        num: 1225,
        title: "Report Contiguous Dates",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/report-contiguous-dates/"
    },
    {
        num: 1226,
        title: "The Dining Philosophers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-dining-philosophers/"
    },
    {
        num: 1227,
        title: "Airplane Seat Assignment Probability",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/airplane-seat-assignment-probability/"
    },
    {
        num: 1228,
        title: "Missing Number In Arithmetic Progression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number-in-arithmetic-progression/"
    },
    {
        num: 1229,
        title: "Meeting Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-scheduler/"
    },
    {
        num: 1230,
        title: "Toss Strange Coins",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/toss-strange-coins/"
    },
    {
        num: 1231,
        title: "Divide Chocolate",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/divide-chocolate/"
    },
    {
        num: 1232,
        title: "Check If It Is a Straight Line",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-it-is-a-straight-line/"
    },
    {
        num: 1233,
        title: "Remove Sub-Folders from the Filesystem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/"
    },
    {
        num: 1234,
        title: "Replace the Substring for Balanced String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/replace-the-substring-for-balanced-string/"
    },
    {
        num: 1235,
        title: "Maximum Profit in Job Scheduling",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
    },
    {
        num: 1236,
        title: "Web Crawler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler/"
    },
    {
        num: 1237,
        title: "Find Positive Integer Solution for a Given Equation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/"
    },
    {
        num: 1238,
        title: "Circular Permutation in Binary Representation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/circular-permutation-in-binary-representation/"
    },
    {
        num: 1239,
        title: "Maximum Length of a Concatenated String with Unique Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/"
    },
    {
        num: 1240,
        title: "Tiling a Rectangle with the Fewest Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/"
    },
    {
        num: 1241,
        title: "Number of Comments per Post",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-comments-per-post/"
    },
    {
        num: 1242,
        title: "Web Crawler Multithreaded",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler-multithreaded/"
    },
    {
        num: 1243,
        title: "Array Transformation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-transformation/"
    },
    {
        num: 1244,
        title: "Design A Leaderboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-leaderboard/"
    },
    {
        num: 1245,
        title: "Tree Diameter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tree-diameter/"
    },
    {
        num: 1246,
        title: "Palindrome Removal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-removal/"
    },
    {
        num: 1247,
        title: "Minimum Swaps to Make Strings Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/"
    },
    {
        num: 1248,
        title: "Count Number of Nice Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-nice-subarrays/"
    },
    {
        num: 1249,
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"
    },
    {
        num: 1250,
        title: "Check If It Is a Good Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-it-is-a-good-array/"
    },
    {
        num: 1251,
        title: "Average Selling Price",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-selling-price/"
    },
    {
        num: 1252,
        title: "Cells with Odd Values in a Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/"
    },
    {
        num: 1253,
        title: "Reconstruct a 2-Row Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/"
    },
    {
        num: 1254,
        title: "Number of Closed Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-closed-islands/"
    },
    {
        num: 1255,
        title: "Maximum Score Words Formed by Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/"
    },
    {
        num: 1256,
        title: "Encode Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-number/"
    },
    {
        num: 1257,
        title: "Smallest Common Region",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-common-region/"
    },
    {
        num: 1258,
        title: "Synonymous Sentences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/synonymous-sentences/"
    },
    {
        num: 1259,
        title: "Handshakes That Don't Cross",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/handshakes-that-dont-cross/"
    },
    {
        num: 1260,
        title: "Shift 2D Grid",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shift-2d-grid/"
    },
    {
        num: 1261,
        title: "Find Elements in a Contaminated Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/"
    },
    {
        num: 1262,
        title: "Greatest Sum Divisible by Three",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/greatest-sum-divisible-by-three/"
    },
    {
        num: 1263,
        title: "Minimum Moves to Move a Box to Their Target Location",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/"
    },
    {
        num: 1264,
        title: "Page Recommendations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/page-recommendations/"
    },
    {
        num: 1265,
        title: "Print Immutable Linked List in Reverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-immutable-linked-list-in-reverse/"
    },
    {
        num: 1266,
        title: "Minimum Time Visiting All Points",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-time-visiting-all-points/"
    },
    {
        num: 1267,
        title: "Count Servers that Communicate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-servers-that-communicate/"
    },
    {
        num: 1268,
        title: "Search Suggestions System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-suggestions-system/"
    },
    {
        num: 1269,
        title: "Number of Ways to Stay in the Same Place After Some Steps",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/"
    },
    {
        num: 1270,
        title: "All People Report to the Given Manager",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-people-report-to-the-given-manager/"
    },
    {
        num: 1271,
        title: "Hexspeak",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/hexspeak/"
    },
    {
        num: 1272,
        title: "Remove Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-interval/"
    },
    {
        num: 1273,
        title: "Delete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-tree-nodes/"
    },
    {
        num: 1274,
        title: "Number of Ships in a Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ships-in-a-rectangle/"
    },
    {
        num: 1275,
        title: "Find Winner on a Tic Tac Toe Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/"
    },
    {
        num: 1276,
        title: "Number of Burgers with No Waste of Ingredients",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/"
    },
    {
        num: 1277,
        title: "Count Square Submatrices with All Ones",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"
    },
    {
        num: 1278,
        title: "Palindrome Partitioning III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-iii/"
    },
    {
        num: 1279,
        title: "Traffic Light Controlled Intersection",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/traffic-light-controlled-intersection/"
    },
    {
        num: 1280,
        title: "Students and Examinations",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/students-and-examinations/"
    },
    {
        num: 1281,
        title: "Subtract the Product and Sum of Digits of an Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"
    },
    {
        num: 1282,
        title: "Group the People Given the Group Size They Belong To",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/"
    },
    {
        num: 1283,
        title: "Find the Smallest Divisor Given a Threshold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"
    },
    {
        num: 1284,
        title: "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/"
    },
    {
        num: 1285,
        title: "Find the Start and End Number of Continuous Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/"
    },
    {
        num: 1286,
        title: "Iterator for Combination",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/iterator-for-combination/"
    },
    {
        num: 1287,
        title: "Element Appearing More Than 25% In Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/"
    },
    {
        num: 1288,
        title: "Remove Covered Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-covered-intervals/"
    },
    {
        num: 1289,
        title: "Minimum Falling Path Sum II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-falling-path-sum-ii/"
    },
    {
        num: 1290,
        title: "Convert Binary Number in a Linked List to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/"
    },
    {
        num: 1291,
        title: "Sequential Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sequential-digits/"
    },
    {
        num: 1292,
        title: "Maximum Side Length of a Square with Sum Less than or Equal to Threshold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/"
    },
    {
        num: 1293,
        title: "Shortest Path in a Grid with Obstacles Elimination",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/"
    },
    {
        num: 1294,
        title: "Weather Type in Each Country",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/weather-type-in-each-country/"
    },
    {
        num: 1295,
        title: "Find Numbers with Even Number of Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/"
    },
    {
        num: 1296,
        title: "Divide Array in Sets of K Consecutive Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/"
    },
    {
        num: 1297,
        title: "Maximum Number of Occurrences of a Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/"
    },
    {
        num: 1298,
        title: "Maximum Candies You Can Get from Boxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/"
    },
    {
        num: 1299,
        title: "Replace Elements with Greatest Element on Right Side",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/"
    },
    {
        num: 1300,
        title: "Sum of Mutated Array Closest to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/"
    },
    {
        num: 1301,
        title: "Number of Paths with Max Score",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-paths-with-max-score/"
    },
    {
        num: 1302,
        title: "Deepest Leaves Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/deepest-leaves-sum/"
    },
    {
        num: 1303,
        title: "Find the Team Size",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-team-size/"
    },
    {
        num: 1304,
        title: "Find N Unique Integers Sum up to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/"
    },
    {
        num: 1305,
        title: "All Elements in Two Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"
    },
    {
        num: 1306,
        title: "Jump Game III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-iii/"
    },
    {
        num: 1307,
        title: "Verbal Arithmetic Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/verbal-arithmetic-puzzle/"
    },
    {
        num: 1308,
        title: "Running Total for Different Genders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/running-total-for-different-genders/"
    },
    {
        num: 1309,
        title: "Decrypt String from Alphabet to Integer Mapping",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/"
    },
    {
        num: 1310,
        title: "XOR Queries of a Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/xor-queries-of-a-subarray/"
    },
    {
        num: 1311,
        title: "Get Watched Videos by Your Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-watched-videos-by-your-friends/"
    },
    {
        num: 1312,
        title: "Minimum Insertion Steps to Make a String Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
    },
    {
        num: 1313,
        title: "Decompress Run-Length Encoded List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decompress-run-length-encoded-list/"
    },
    {
        num: 1314,
        title: "Matrix Block Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/matrix-block-sum/"
    },
    {
        num: 1315,
        title: "Sum of Nodes with Even-Valued Grandparent",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/"
    },
    {
        num: 1316,
        title: "Distinct Echo Substrings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-echo-substrings/"
    },
    {
        num: 1317,
        title: "Convert Integer to the Sum of Two No-Zero Integers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/"
    },
    {
        num: 1318,
        title: "Minimum Flips to Make a OR b Equal to c",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"
    },
    {
        num: 1319,
        title: "Number of Operations to Make Network Connected",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
    },
    {
        num: 1320,
        title: "Minimum Distance to Type a Word Using Two Fingers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/"
    },
    {
        num: 1321,
        title: "Restaurant Growth",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restaurant-growth/"
    },
    {
        num: 1322,
        title: "Ads Performance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ads-performance/"
    },
    {
        num: 1323,
        title: "Maximum 69 Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-69-number/"
    },
    {
        num: 1324,
        title: "Print Words Vertically",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-words-vertically/"
    },
    {
        num: 1325,
        title: "Delete Leaves With a Given Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-leaves-with-a-given-value/"
    },
    {
        num: 1326,
        title: "Minimum Number of Taps to Open to Water a Garden",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/"
    },
    {
        num: 1327,
        title: "List the Products Ordered in a Period",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/list-the-products-ordered-in-a-period/"
    },
    {
        num: 1328,
        title: "Break a Palindrome",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/break-a-palindrome/"
    },
    {
        num: 1329,
        title: "Sort the Matrix Diagonally",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-the-matrix-diagonally/"
    },
    {
        num: 1330,
        title: "Reverse Subarray To Maximize Array Value",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/"
    },
    {
        num: 1331,
        title: "Rank Transform of an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rank-transform-of-an-array/"
    },
    {
        num: 1332,
        title: "Remove Palindromic Subsequences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-palindromic-subsequences/"
    },
    {
        num: 1333,
        title: "Filter Restaurants by Vegan-Friendly, Price and Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/"
    },
    {
        num: 1334,
        title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
    },
    {
        num: 1335,
        title: "Minimum Difficulty of a Job Schedule",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/"
    },
    {
        num: 1336,
        title: "Number of Transactions per Visit",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-transactions-per-visit/"
    },
    {
        num: 1337,
        title: "The K Weakest Rows in a Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"
    },
    {
        num: 1338,
        title: "Reduce Array Size to The Half",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reduce-array-size-to-the-half/"
    },
    {
        num: 1339,
        title: "Maximum Product of Splitted Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/"
    },
    {
        num: 1340,
        title: "Jump Game V",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-v/"
    },
    {
        num: 1341,
        title: "Movie Rating",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/movie-rating/"
    },
    {
        num: 1342,
        title: "Number of Steps to Reduce a Number to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"
    },
    {
        num: 1343,
        title: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/"
    },
    {
        num: 1344,
        title: "Angle Between Hands of a Clock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/angle-between-hands-of-a-clock/"
    },
    {
        num: 1345,
        title: "Jump Game IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-iv/"
    },
    {
        num: 1346,
        title: "Check If N and Its Double Exist",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-n-and-its-double-exist/"
    },
    {
        num: 1347,
        title: "Minimum Number of Steps to Make Two Strings Anagram",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/"
    },
    {
        num: 1348,
        title: "Tweet Counts Per Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tweet-counts-per-frequency/"
    },
    {
        num: 1349,
        title: "Maximum Students Taking Exam",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-students-taking-exam/"
    },
    {
        num: 1350,
        title: "Students With Invalid Departments",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/students-with-invalid-departments/"
    },
    {
        num: 1351,
        title: "Count Negative Numbers in a Sorted Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/"
    },
    {
        num: 1352,
        title: "Product of the Last K Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-the-last-k-numbers/"
    },
    {
        num: 1353,
        title: "Maximum Number of Events That Can Be Attended",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/"
    },
    {
        num: 1354,
        title: "Construct Target Array With Multiple Sums",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/construct-target-array-with-multiple-sums/"
    },
    {
        num: 1355,
        title: "Activity participants",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/activity-participants/"
    },
    {
        num: 1356,
        title: "Sort Integers by The Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/"
    },
    {
        num: 1357,
        title: "Apply Discount Every n Orders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-discount-every-n-orders/"
    },
    {
        num: 1358,
        title: "Number of Substrings Containing All Three Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"
    },
    {
        num: 1359,
        title: "Count All Valid Pickup and Delivery Options",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"
    },
    {
        num: 1360,
        title: "Number of Days Between Two Dates",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-days-between-two-dates/"
    },
    {
        num: 1361,
        title: "Validate Binary Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-tree-nodes/"
    },
    {
        num: 1362,
        title: "Closest Divisors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-divisors/"
    },
    {
        num: 1363,
        title: "Largest Multiple of Three",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-multiple-of-three/"
    },
    {
        num: 1364,
        title: "Number of Trusted Contacts of a Customer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/"
    },
    {
        num: 1365,
        title: "How Many Numbers Are Smaller Than the Current Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/"
    },
    {
        num: 1366,
        title: "Rank Teams by Votes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-teams-by-votes/"
    },
    {
        num: 1367,
        title: "Linked List in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-in-binary-tree/"
    },
    {
        num: 1368,
        title: "Minimum Cost to Make at Least One Valid Path in a Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"
    },
    {
        num: 1369,
        title: "Get the Second Most Recent Activity",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/get-the-second-most-recent-activity/"
    },
    {
        num: 1370,
        title: "Increasing Decreasing String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/increasing-decreasing-string/"
    },
    {
        num: 1371,
        title: "Find the Longest Substring Containing Vowels in Even Counts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"
    },
    {
        num: 1372,
        title: "Longest ZigZag Path in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/"
    },
    {
        num: 1373,
        title: "Maximum Sum BST in Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/"
    },
    {
        num: 1374,
        title: "Generate a String With Characters That Have Odd Counts",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/"
    },
    {
        num: 1375,
        title: "Number of Times Binary String Is Prefix-Aligned",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/"
    },
    {
        num: 1376,
        title: "Time Needed to Inform All Employees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-needed-to-inform-all-employees/"
    },
    {
        num: 1377,
        title: "Frog Position After T Seconds",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-position-after-t-seconds/"
    },
    {
        num: 1378,
        title: "Replace Employee ID With The Unique Identifier",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/"
    },
    {
        num: 1379,
        title: "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/"
    },
    {
        num: 1380,
        title: "Lucky Numbers in a Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lucky-numbers-in-a-matrix/"
    },
    {
        num: 1381,
        title: "Design a Stack With Increment Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-stack-with-increment-operation/"
    },
    {
        num: 1382,
        title: "Balance a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/balance-a-binary-search-tree/"
    },
    {
        num: 1383,
        title: "Maximum Performance of a Team",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-performance-of-a-team/"
    },
    {
        num: 1384,
        title: "Total Sales Amount by Year",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/total-sales-amount-by-year/"
    },
    {
        num: 1385,
        title: "Find the Distance Value Between Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/"
    },
    {
        num: 1386,
        title: "Cinema Seat Allocation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cinema-seat-allocation/"
    },
    {
        num: 1387,
        title: "Sort Integers by The Power Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-integers-by-the-power-value/"
    },
    {
        num: 1388,
        title: "Pizza With 3n Slices",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/pizza-with-3n-slices/"
    },
    {
        num: 1389,
        title: "Create Target Array in the Given Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-target-array-in-the-given-order/"
    },
    {
        num: 1390,
        title: "Four Divisors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/four-divisors/"
    },
    {
        num: 1391,
        title: "Check if There is a Valid Path in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/"
    },
    {
        num: 1392,
        title: "Longest Happy Prefix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-happy-prefix/"
    },
    {
        num: 1393,
        title: "Capital Gain/Loss",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/capital-gainloss/"
    },
    {
        num: 1394,
        title: "Find Lucky Integer in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-lucky-integer-in-an-array/"
    },
    {
        num: 1395,
        title: "Count Number of Teams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-teams/"
    },
    {
        num: 1396,
        title: "Design Underground System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-underground-system/"
    },
    {
        num: 1397,
        title: "Find All Good Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-all-good-strings/"
    },
    {
        num: 1398,
        title: "Customers Who Bought Products A and B but Not C",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/"
    },
    {
        num: 1399,
        title: "Count Largest Group",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-largest-group/"
    },
    {
        num: 1400,
        title: "Construct K Palindrome Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-k-palindrome-strings/"
    },
    {
        num: 1401,
        title: "Circle and Rectangle Overlapping",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/circle-and-rectangle-overlapping/"
    },
    {
        num: 1402,
        title: "Reducing Dishes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reducing-dishes/"
    },
    {
        num: 1403,
        title: "Minimum Subsequence in Non-Increasing Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/"
    },
    {
        num: 1404,
        title: "Number of Steps to Reduce a Number in Binary Representation to One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/"
    },
    {
        num: 1405,
        title: "Longest Happy String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-happy-string/"
    },
    {
        num: 1406,
        title: "Stone Game III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-iii/"
    },
    {
        num: 1407,
        title: "Top Travellers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/top-travellers/"
    },
    {
        num: 1408,
        title: "String Matching in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-matching-in-an-array/"
    },
    {
        num: 1409,
        title: "Queries on a Permutation With Key",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queries-on-a-permutation-with-key/"
    },
    {
        num: 1410,
        title: "HTML Entity Parser",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/html-entity-parser/"
    },
    {
        num: 1411,
        title: "Number of Ways to Paint N × 3 Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/"
    },
    {
        num: 1412,
        title: "Find the Quiet Students in All Exams",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-quiet-students-in-all-exams/"
    },
    {
        num: 1413,
        title: "Minimum Value to Get Positive Step by Step Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/"
    },
    {
        num: 1414,
        title: "Find the Minimum Number of Fibonacci Numbers Whose Sum Is K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/"
    },
    {
        num: 1415,
        title: "The k-th Lexicographical String of All Happy Strings of Length n",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/"
    },
    {
        num: 1416,
        title: "Restore The Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/restore-the-array/"
    },
    {
        num: 1417,
        title: "Reformat The String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-the-string/"
    },
    {
        num: 1418,
        title: "Display Table of Food Orders in a Restaurant",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/"
    },
    {
        num: 1419,
        title: "Minimum Number of Frogs Croaking",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-frogs-croaking/"
    },
    {
        num: 1420,
        title: "Build Array Where You Can Find The Maximum Exactly K Comparisons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/"
    },
    {
        num: 1421,
        title: "NPV Queries",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/npv-queries/"
    },
    {
        num: 1422,
        title: "Maximum Score After Splitting a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-score-after-splitting-a-string/"
    },
    {
        num: 1423,
        title: "Maximum Points You Can Obtain from Cards",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"
    },
    {
        num: 1424,
        title: "Diagonal Traverse II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse-ii/"
    },
    {
        num: 1425,
        title: "Constrained Subsequence Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/constrained-subsequence-sum/"
    },
    {
        num: 1426,
        title: "Counting Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counting-elements/"
    },
    {
        num: 1427,
        title: "Perform String Shifts",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/perform-string-shifts/"
    },
    {
        num: 1428,
        title: "Leftmost Column with at Least a One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/leftmost-column-with-at-least-a-one/"
    },
    {
        num: 1429,
        title: "First Unique Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/first-unique-number/"
    },
    {
        num: 1430,
        title: "Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/"
    },
    {
        num: 1431,
        title: "Kids With the Greatest Number of Candies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/"
    },
    {
        num: 1432,
        title: "Max Difference You Can Get From Changing an Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/"
    },
    {
        num: 1433,
        title: "Check If a String Can Break Another String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-a-string-can-break-another-string/"
    },
    {
        num: 1434,
        title: "Number of Ways to Wear Different Hats to Each Other",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/"
    },
    {
        num: 1435,
        title: "Create a Session Bar Chart",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-a-session-bar-chart/"
    },
    {
        num: 1436,
        title: "Destination City",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/destination-city/"
    },
    {
        num: 1437,
        title: "Check If All 1's Are at Least Length K Places Away",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/"
    },
    {
        num: 1438,
        title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/"
    },
    {
        num: 1439,
        title: "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/"
    },
    {
        num: 1440,
        title: "Evaluate Boolean Expression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-boolean-expression/"
    },
    {
        num: 1441,
        title: "Build an Array With Stack Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/build-an-array-with-stack-operations/"
    },
    {
        num: 1442,
        title: "Count Triplets That Can Form Two Arrays of Equal XOR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/"
    },
    {
        num: 1443,
        title: "Minimum Time to Collect All Apples in a Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/"
    },
    {
        num: 1444,
        title: "Number of Ways of Cutting a Pizza",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/"
    },
    {
        num: 1445,
        title: "Apples & Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apples-oranges/"
    },
    {
        num: 1446,
        title: "Consecutive Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/consecutive-characters/"
    },
    {
        num: 1447,
        title: "Simplified Fractions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplified-fractions/"
    },
    {
        num: 1448,
        title: "Count Good Nodes in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
    },
    {
        num: 1449,
        title: "Form Largest Integer With Digits That Add up to Target",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/"
    },
    {
        num: 1450,
        title: "Number of Students Doing Homework at a Given Time",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/"
    },
    {
        num: 1451,
        title: "Rearrange Words in a Sentence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rearrange-words-in-a-sentence/"
    },
    {
        num: 1452,
        title: "People Whose List of Favorite Companies Is Not a Subset of Another List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/"
    },
    {
        num: 1453,
        title: "Maximum Number of Darts Inside of a Circular Dartboard",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/"
    },
    {
        num: 1454,
        title: "Active Users",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/active-users/"
    },
    {
        num: 1455,
        title: "Check If a Word Occurs As a Prefix of Any Word in a Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/"
    },
    {
        num: 1456,
        title: "Maximum Number of Vowels in a Substring of Given Length",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/"
    },
    {
        num: 1457,
        title: "Pseudo-Palindromic Paths in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"
    },
    {
        num: 1458,
        title: "Max Dot Product of Two Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-dot-product-of-two-subsequences/"
    },
    {
        num: 1459,
        title: "Rectangles Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangles-area/"
    },
    {
        num: 1460,
        title: "Make Two Arrays Equal by Reversing Subarrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/"
    },
    {
        num: 1461,
        title: "Check If a String Contains All Binary Codes of Size K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/"
    },
    {
        num: 1462,
        title: "Course Schedule IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-iv/"
    },
    {
        num: 1463,
        title: "Cherry Pickup II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup-ii/"
    },
    {
        num: 1464,
        title: "Maximum Product of Two Elements in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"
    },
    {
        num: 1465,
        title: "Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/"
    },
    {
        num: 1466,
        title: "Reorder Routes to Make All Paths Lead to the City Zero",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/"
    },
    {
        num: 1467,
        title: "Probability of a Two Boxes Having The Same Number of Distinct Balls",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/"
    },
    {
        num: 1468,
        title: "Calculate Salaries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/calculate-salaries/"
    },
    {
        num: 1469,
        title: "Find All The Lonely Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-the-lonely-nodes/"
    },
    {
        num: 1470,
        title: "Shuffle the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-the-array/"
    },
    {
        num: 1471,
        title: "The k Strongest Values in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-k-strongest-values-in-an-array/"
    },
    {
        num: 1472,
        title: "Design Browser History",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-browser-history/"
    },
    {
        num: 1473,
        title: "Paint House III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/paint-house-iii/"
    },
    {
        num: 1474,
        title: "Delete N Nodes After M Nodes of a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/"
    },
    {
        num: 1475,
        title: "Final Prices With a Special Discount in a Shop",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"
    },
    {
        num: 1476,
        title: "Subrectangle Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subrectangle-queries/"
    },
    {
        num: 1477,
        title: "Find Two Non-overlapping Sub-arrays Each With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/"
    },
    {
        num: 1478,
        title: "Allocate Mailboxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/allocate-mailboxes/"
    },
    {
        num: 1479,
        title: "Sales by Day of the Week",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sales-by-day-of-the-week/"
    },
    {
        num: 1480,
        title: "Running Sum of 1d Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/running-sum-of-1d-array/"
    },
    {
        num: 1481,
        title: "Least Number of Unique Integers after K Removals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/"
    },
    {
        num: 1482,
        title: "Minimum Number of Days to Make m Bouquets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
    },
    {
        num: 1483,
        title: "Kth Ancestor of a Tree Node",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
    },
    {
        num: 1484,
        title: "Group Sold Products By The Date",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/group-sold-products-by-the-date/"
    },
    {
        num: 1485,
        title: "Clone Binary Tree With Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-binary-tree-with-random-pointer/"
    },
    {
        num: 1486,
        title: "XOR Operation in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/xor-operation-in-an-array/"
    },
    {
        num: 1487,
        title: "Making File Names Unique",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/making-file-names-unique/"
    },
    {
        num: 1488,
        title: "Avoid Flood in The City",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/avoid-flood-in-the-city/"
    },
    {
        num: 1489,
        title: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/"
    },
    {
        num: 1490,
        title: "Clone N-ary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-n-ary-tree/"
    },
    {
        num: 1491,
        title: "Average Salary Excluding the Minimum and Maximum Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"
    },
    {
        num: 1492,
        title: "The kth Factor of n",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-kth-factor-of-n/"
    },
    {
        num: 1493,
        title: "Longest Subarray of 1's After Deleting One Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/"
    },
    {
        num: 1494,
        title: "Parallel Courses II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parallel-courses-ii/"
    },
    {
        num: 1495,
        title: "Friendly Movies Streamed Last Month",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/friendly-movies-streamed-last-month/"
    },
    {
        num: 1496,
        title: "Path Crossing",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-crossing/"
    },
    {
        num: 1497,
        title: "Check If Array Pairs Are Divisible by k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/"
    },
    {
        num: 1498,
        title: "Number of Subsequences That Satisfy the Given Sum Condition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/"
    },
    {
        num: 1499,
        title: "Max Value of Equation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-value-of-equation/"
    },
    {
        num: 1500,
        title: "Design a File Sharing System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-file-sharing-system/"
    },
    {
        num: 1501,
        title: "Countries You Can Safely Invest In",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/countries-you-can-safely-invest-in/"
    },
    {
        num: 1502,
        title: "Can Make Arithmetic Progression From Sequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"
    },
    {
        num: 1503,
        title: "Last Moment Before All Ants Fall Out of a Plank",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/"
    },
    {
        num: 1504,
        title: "Count Submatrices With All Ones",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-submatrices-with-all-ones/"
    },
    {
        num: 1505,
        title: "Minimum Possible Integer After at Most K Adjacent Swaps On Digits",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/"
    },
    {
        num: 1506,
        title: "Find Root of N-Ary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-root-of-n-ary-tree/"
    },
    {
        num: 1507,
        title: "Reformat Date",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-date/"
    },
    {
        num: 1508,
        title: "Range Sum of Sorted Subarray Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/"
    },
    {
        num: 1509,
        title: "Minimum Difference Between Largest and Smallest Value in Three Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/"
    },
    {
        num: 1510,
        title: "Stone Game IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-iv/"
    },
    {
        num: 1511,
        title: "Customer Order Frequency",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customer-order-frequency/"
    },
    {
        num: 1512,
        title: "Number of Good Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-good-pairs/"
    },
    {
        num: 1513,
        title: "Number of Substrings With Only 1s",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-substrings-with-only-1s/"
    },
    {
        num: 1514,
        title: "Path with Maximum Probability",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-probability/"
    },
    {
        num: 1515,
        title: "Best Position for a Service Centre",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-position-for-a-service-centre/"
    },
    {
        num: 1516,
        title: "Move Sub-Tree of N-Ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/"
    },
    {
        num: 1517,
        title: "Find Users With Valid E-Mails",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-users-with-valid-e-mails/"
    },
    {
        num: 1518,
        title: "Water Bottles",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/water-bottles/"
    },
    {
        num: 1519,
        title: "Number of Nodes in the Sub-Tree With the Same Label",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/"
    },
    {
        num: 1520,
        title: "Maximum Number of Non-Overlapping Substrings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/"
    },
    {
        num: 1521,
        title: "Find a Value of a Mysterious Function Closest to Target",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/"
    },
    {
        num: 1522,
        title: "Diameter of N-Ary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diameter-of-n-ary-tree/"
    },
    {
        num: 1523,
        title: "Count Odd Numbers in an Interval Range",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"
    },
    {
        num: 1524,
        title: "Number of Sub-arrays With Odd Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/"
    },
    {
        num: 1525,
        title: "Number of Good Ways to Split a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-good-ways-to-split-a-string/"
    },
    {
        num: 1526,
        title: "Minimum Number of Increments on Subarrays to Form a Target Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/"
    },
    {
        num: 1527,
        title: "Patients With a Condition",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/patients-with-a-condition/"
    },
    {
        num: 1528,
        title: "Shuffle String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-string/"
    },
    {
        num: 1529,
        title: "Minimum Suffix Flips",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-suffix-flips/"
    },
    {
        num: 1530,
        title: "Number of Good Leaf Nodes Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/"
    },
    {
        num: 1531,
        title: "String Compression II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/string-compression-ii/"
    },
    {
        num: 1532,
        title: "The Most Recent Three Orders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-most-recent-three-orders/"
    },
    {
        num: 1533,
        title: "Find the Index of the Large Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-index-of-the-large-integer/"
    },
    {
        num: 1534,
        title: "Count Good Triplets",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-good-triplets/"
    },
    {
        num: 1535,
        title: "Find the Winner of an Array Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-winner-of-an-array-game/"
    },
    {
        num: 1536,
        title: "Minimum Swaps to Arrange a Binary Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/"
    },
    {
        num: 1537,
        title: "Get the Maximum Score",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/get-the-maximum-score/"
    },
    {
        num: 1538,
        title: "Guess the Majority in a Hidden Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/"
    },
    {
        num: 1539,
        title: "Kth Missing Positive Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-missing-positive-number/"
    },
    {
        num: 1540,
        title: "Can Convert String in K Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/can-convert-string-in-k-moves/"
    },
    {
        num: 1541,
        title: "Minimum Insertions to Balance a Parentheses String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/"
    },
    {
        num: 1542,
        title: "Find Longest Awesome Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-longest-awesome-substring/"
    },
    {
        num: 1543,
        title: "Fix Product Name Format",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fix-product-name-format/"
    },
    {
        num: 1544,
        title: "Make The String Great",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/make-the-string-great/"
    },
    {
        num: 1545,
        title: "Find Kth Bit in Nth Binary String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/"
    },
    {
        num: 1546,
        title: "Maximum Number of Non-Overlapping Subarrays With Sum Equals Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/"
    },
    {
        num: 1547,
        title: "Minimum Cost to Cut a Stick",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
    },
    {
        num: 1548,
        title: "The Most Similar Path in a Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-most-similar-path-in-a-graph/"
    },
    {
        num: 1549,
        title: "The Most Recent Orders for Each Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-most-recent-orders-for-each-product/"
    },
    {
        num: 1550,
        title: "Three Consecutive Odds",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/three-consecutive-odds/"
    },
    {
        num: 1551,
        title: "Minimum Operations to Make Array Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-array-equal/"
    },
    {
        num: 1552,
        title: "Magnetic Force Between Two Balls",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/magnetic-force-between-two-balls/"
    },
    {
        num: 1553,
        title: "Minimum Number of Days to Eat N Oranges",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/"
    },
    {
        num: 1554,
        title: "Strings Differ by One Character",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strings-differ-by-one-character/"
    },
    {
        num: 1555,
        title: "Bank Account Summary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bank-account-summary/"
    },
    {
        num: 1556,
        title: "Thousand Separator",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/thousand-separator/"
    },
    {
        num: 1557,
        title: "Minimum Number of Vertices to Reach All Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/"
    },
    {
        num: 1558,
        title: "Minimum Numbers of Function Calls to Make Target Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/"
    },
    {
        num: 1559,
        title: "Detect Cycles in 2D Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/detect-cycles-in-2d-grid/"
    },
    {
        num: 1560,
        title: "Most Visited Sector in a Circular Track",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-visited-sector-in-a-circular-track/"
    },
    {
        num: 1561,
        title: "Maximum Number of Coins You Can Get",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-coins-you-can-get/"
    },
    {
        num: 1562,
        title: "Find Latest Group of Size M",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-latest-group-of-size-m/"
    },
    {
        num: 1563,
        title: "Stone Game V",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-v/"
    },
    {
        num: 1564,
        title: "Put Boxes Into the Warehouse I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/put-boxes-into-the-warehouse-i/"
    },
    {
        num: 1565,
        title: "Unique Orders and Customers Per Month",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-orders-and-customers-per-month/"
    },
    {
        num: 1566,
        title: "Detect Pattern of Length M Repeated K or More Times",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/"
    },
    {
        num: 1567,
        title: "Maximum Length of Subarray With Positive Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/"
    },
    {
        num: 1568,
        title: "Minimum Number of Days to Disconnect Island",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/"
    },
    {
        num: 1569,
        title: "Number of Ways to Reorder Array to Get Same BST",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/"
    },
    {
        num: 1570,
        title: "Dot Product of Two Sparse Vectors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/dot-product-of-two-sparse-vectors/"
    },
    {
        num: 1571,
        title: "Warehouse Manager",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/warehouse-manager/"
    },
    {
        num: 1572,
        title: "Matrix Diagonal Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/matrix-diagonal-sum/"
    },
    {
        num: 1573,
        title: "Number of Ways to Split a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-split-a-string/"
    },
    {
        num: 1574,
        title: "Shortest Subarray to be Removed to Make Array Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/"
    },
    {
        num: 1575,
        title: "Count All Possible Routes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-all-possible-routes/"
    },
    {
        num: 1576,
        title: "Replace All ?'s to Avoid Consecutive Repeating Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/"
    },
    {
        num: 1577,
        title: "Number of Ways Where Square of Number Is Equal to Product of Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/"
    },
    {
        num: 1578,
        title: "Minimum Time to Make Rope Colorful",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-to-make-rope-colorful/"
    },
    {
        num: 1579,
        title: "Remove Max Number of Edges to Keep Graph Fully Traversable",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/"
    },
    {
        num: 1580,
        title: "Put Boxes Into the Warehouse II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/"
    },
    {
        num: 1581,
        title: "Customer Who Visited but Did Not Make Any Transactions",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/"
    },
    {
        num: 1582,
        title: "Special Positions in a Binary Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/special-positions-in-a-binary-matrix/"
    },
    {
        num: 1583,
        title: "Count Unhappy Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-unhappy-friends/"
    },
    {
        num: 1584,
        title: "Min Cost to Connect All Points",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-cost-to-connect-all-points/"
    },
    {
        num: 1585,
        title: "Check If String Is Transformable With Substring Sort Operations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/"
    },
    {
        num: 1586,
        title: "Binary Search Tree Iterator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator-ii/"
    },
    {
        num: 1587,
        title: "Bank Account Summary II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bank-account-summary-ii/"
    },
    {
        num: 1588,
        title: "Sum of All Odd Length Subarrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/"
    },
    {
        num: 1589,
        title: "Maximum Sum Obtained of Any Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/"
    },
    {
        num: 1590,
        title: "Make Sum Divisible by P",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-sum-divisible-by-p/"
    },
    {
        num: 1591,
        title: "Strange Printer II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strange-printer-ii/"
    },
    {
        num: 1592,
        title: "Rearrange Spaces Between Words",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rearrange-spaces-between-words/"
    },
    {
        num: 1593,
        title: "Split a String Into the Max Number of Unique Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/"
    },
    {
        num: 1594,
        title: "Maximum Non Negative Product in a Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/"
    },
    {
        num: 1595,
        title: "Minimum Cost to Connect Two Groups of Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/"
    },
    {
        num: 1596,
        title: "The Most Frequently Ordered Products for Each Customer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/"
    },
    {
        num: 1597,
        title: "Build Binary Expression Tree From Infix Expression",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/"
    },
    {
        num: 1598,
        title: "Crawler Log Folder",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/crawler-log-folder/"
    },
    {
        num: 1599,
        title: "Maximum Profit of Operating a Centennial Wheel",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/"
    },
    {
        num: 1600,
        title: "Throne Inheritance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/throne-inheritance/"
    },
    {
        num: 1601,
        title: "Maximum Number of Achievable Transfer Requests",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/"
    },
    {
        num: 1602,
        title: "Find Nearest Right Node in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/"
    },
    {
        num: 1603,
        title: "Design Parking System",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-parking-system/"
    },
    {
        num: 1604,
        title: "Alert Using Same Key-Card Three or More Times in a One Hour Period",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/"
    },
    {
        num: 1605,
        title: "Find Valid Matrix Given Row and Column Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/"
    },
    {
        num: 1606,
        title: "Find Servers That Handled Most Number of Requests",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/"
    },
    {
        num: 1607,
        title: "Sellers With No Sales",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sellers-with-no-sales/"
    },
    {
        num: 1608,
        title: "Special Array With X Elements Greater Than or Equal X",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/"
    },
    {
        num: 1609,
        title: "Even Odd Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/even-odd-tree/"
    },
    {
        num: 1610,
        title: "Maximum Number of Visible Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-visible-points/"
    },
    {
        num: 1611,
        title: "Minimum One Bit Operations to Make Integers Zero",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/"
    },
    {
        num: 1612,
        title: "Check If Two Expression Trees are Equivalent",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/"
    },
    {
        num: 1613,
        title: "Find the Missing IDs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-missing-ids/"
    },
    {
        num: 1614,
        title: "Maximum Nesting Depth of the Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"
    },
    {
        num: 1615,
        title: "Maximal Network Rank",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-network-rank/"
    },
    {
        num: 1616,
        title: "Split Two Strings to Make Palindrome",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-two-strings-to-make-palindrome/"
    },
    {
        num: 1617,
        title: "Count Subtrees With Max Distance Between Cities",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/"
    },
    {
        num: 1618,
        title: "Maximum Font to Fit a Sentence in a Screen",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/"
    },
    {
        num: 1619,
        title: "Mean of Array After Removing Some Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/mean-of-array-after-removing-some-elements/"
    },
    {
        num: 1620,
        title: "Coordinate With Maximum Network Quality",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coordinate-with-maximum-network-quality/"
    },
    {
        num: 1621,
        title: "Number of Sets of K Non-Overlapping Line Segments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/"
    },
    {
        num: 1622,
        title: "Fancy Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/fancy-sequence/"
    },
    {
        num: 1623,
        title: "All Valid Triplets That Can Represent a Country",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/"
    },
    {
        num: 1624,
        title: "Largest Substring Between Two Equal Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-substring-between-two-equal-characters/"
    },
    {
        num: 1625,
        title: "Lexicographically Smallest String After Applying Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/"
    },
    {
        num: 1626,
        title: "Best Team With No Conflicts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-team-with-no-conflicts/"
    },
    {
        num: 1627,
        title: "Graph Connectivity With Threshold",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/graph-connectivity-with-threshold/"
    },
    {
        num: 1628,
        title: "Design an Expression Tree With Evaluate Function",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/"
    },
    {
        num: 1629,
        title: "Slowest Key",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/slowest-key/"
    },
    {
        num: 1630,
        title: "Arithmetic Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-subarrays/"
    },
    {
        num: 1631,
        title: "Path With Minimum Effort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-minimum-effort/"
    },
    {
        num: 1632,
        title: "Rank Transform of a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rank-transform-of-a-matrix/"
    },
    {
        num: 1633,
        title: "Percentage of Users Attended a Contest",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/percentage-of-users-attended-a-contest/"
    },
    {
        num: 1634,
        title: "Add Two Polynomials Represented as Linked Lists",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/"
    },
    {
        num: 1635,
        title: "Hopper Company Queries I",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/hopper-company-queries-i/"
    },
    {
        num: 1636,
        title: "Sort Array by Increasing Frequency",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/"
    },
    {
        num: 1637,
        title: "Widest Vertical Area Between Two Points Containing No Points",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/"
    },
    {
        num: 1638,
        title: "Count Substrings That Differ by One Character",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-substrings-that-differ-by-one-character/"
    },
    {
        num: 1639,
        title: "Number of Ways to Form a Target String Given a Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/"
    },
    {
        num: 1640,
        title: "Check Array Formation Through Concatenation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-array-formation-through-concatenation/"
    },
    {
        num: 1641,
        title: "Count Sorted Vowel Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-sorted-vowel-strings/"
    },
    {
        num: 1642,
        title: "Furthest Building You Can Reach",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/furthest-building-you-can-reach/"
    },
    {
        num: 1643,
        title: "Kth Smallest Instructions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/kth-smallest-instructions/"
    },
    {
        num: 1644,
        title: "Lowest Common Ancestor of a Binary Tree II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/"
    },
    {
        num: 1645,
        title: "Hopper Company Queries II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/hopper-company-queries-ii/"
    },
    {
        num: 1646,
        title: "Get Maximum in Generated Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/get-maximum-in-generated-array/"
    },
    {
        num: 1647,
        title: "Minimum Deletions to Make Character Frequencies Unique",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/"
    },
    {
        num: 1648,
        title: "Sell Diminishing-Valued Colored Balls",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sell-diminishing-valued-colored-balls/"
    },
    {
        num: 1649,
        title: "Create Sorted Array through Instructions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/create-sorted-array-through-instructions/"
    },
    {
        num: 1650,
        title: "Lowest Common Ancestor of a Binary Tree III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/"
    },
    {
        num: 1651,
        title: "Hopper Company Queries III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/hopper-company-queries-iii/"
    },
    {
        num: 1652,
        title: "Defuse the Bomb",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defuse-the-bomb/"
    },
    {
        num: 1653,
        title: "Minimum Deletions to Make String Balanced",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/"
    },
    {
        num: 1654,
        title: "Minimum Jumps to Reach Home",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-jumps-to-reach-home/"
    },
    {
        num: 1655,
        title: "Distribute Repeating Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distribute-repeating-integers/"
    },
    {
        num: 1656,
        title: "Design an Ordered Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-an-ordered-stream/"
    },
    {
        num: 1657,
        title: "Determine if Two Strings Are Close",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/determine-if-two-strings-are-close/"
    },
    {
        num: 1658,
        title: "Minimum Operations to Reduce X to Zero",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/"
    },
    {
        num: 1659,
        title: "Maximize Grid Happiness",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-grid-happiness/"
    },
    {
        num: 1660,
        title: "Correct a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/correct-a-binary-tree/"
    },
    {
        num: 1661,
        title: "Average Time of Process per Machine",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-time-of-process-per-machine/"
    },
    {
        num: 1662,
        title: "Check If Two String Arrays are Equivalent",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/"
    },
    {
        num: 1663,
        title: "Smallest String With A Given Numeric Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/"
    },
    {
        num: 1664,
        title: "Ways to Make a Fair Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ways-to-make-a-fair-array/"
    },
    {
        num: 1665,
        title: "Minimum Initial Energy to Finish Tasks",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/"
    },
    {
        num: 1666,
        title: "Change the Root of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/change-the-root-of-a-binary-tree/"
    },
    {
        num: 1667,
        title: "Fix Names in a Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fix-names-in-a-table/"
    },
    {
        num: 1668,
        title: "Maximum Repeating Substring",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-repeating-substring/"
    },
    {
        num: 1669,
        title: "Merge In Between Linked Lists",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-in-between-linked-lists/"
    },
    {
        num: 1670,
        title: "Design Front Middle Back Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-front-middle-back-queue/"
    },
    {
        num: 1671,
        title: "Minimum Number of Removals to Make Mountain Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/"
    },
    {
        num: 1672,
        title: "Richest Customer Wealth",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/richest-customer-wealth/"
    },
    {
        num: 1673,
        title: "Find the Most Competitive Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/"
    },
    {
        num: 1674,
        title: "Minimum Moves to Make Array Complementary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-moves-to-make-array-complementary/"
    },
    {
        num: 1675,
        title: "Minimize Deviation in Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-deviation-in-array/"
    },
    {
        num: 1676,
        title: "Lowest Common Ancestor of a Binary Tree IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/"
    },
    {
        num: 1677,
        title: "Product's Worth Over Invoices",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/products-worth-over-invoices/"
    },
    {
        num: 1678,
        title: "Goal Parser Interpretation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/goal-parser-interpretation/"
    },
    {
        num: 1679,
        title: "Max Number of K-Sum Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-number-of-k-sum-pairs/"
    },
    {
        num: 1680,
        title: "Concatenation of Consecutive Binary Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/"
    },
    {
        num: 1681,
        title: "Minimum Incompatibility",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-incompatibility/"
    },
    {
        num: 1682,
        title: "Longest Palindromic Subsequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence-ii/"
    },
    {
        num: 1683,
        title: "Invalid Tweets",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invalid-tweets/"
    },
    {
        num: 1684,
        title: "Count the Number of Consistent Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-the-number-of-consistent-strings/"
    },
    {
        num: 1685,
        title: "Sum of Absolute Differences in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/"
    },
    {
        num: 1686,
        title: "Stone Game VI",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game-vi/"
    },
    {
        num: 1687,
        title: "Delivering Boxes from Storage to Ports",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/"
    },
    {
        num: 1688,
        title: "Count of Matches in Tournament",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-of-matches-in-tournament/"
    },
    {
        num: 1689,
        title: "Partitioning Into Minimum Number Of Deci-Binary Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/"
    },
    {
        num: 1690,
        title: "Stone Game VII",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game-vii/"
    },
    {
        num: 1691,
        title: "Maximum Height by Stacking Cuboids",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/"
    },
    {
        num: 1692,
        title: "Count Ways to Distribute Candies",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-ways-to-distribute-candies/"
    },
    {
        num: 1693,
        title: "Daily Leads and Partners",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/daily-leads-and-partners/"
    },
    {
        num: 1694,
        title: "Reformat Phone Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-phone-number/"
    },
    {
        num: 1695,
        title: "Maximum Erasure Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-erasure-value/"
    },
    {
        num: 1696,
        title: "Jump Game VI",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-vi/"
    },
    {
        num: 1697,
        title: "Checking Existence of Edge Length Limited Paths",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/"
    },
    {
        num: 1698,
        title: "Number of Distinct Substrings in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/"
    },
    {
        num: 1699,
        title: "Number of Calls Between Two Persons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-calls-between-two-persons/"
    },
    {
        num: 1700,
        title: "Number of Students Unable to Eat Lunch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/"
    },
    {
        num: 1701,
        title: "Average Waiting Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/average-waiting-time/"
    },
    {
        num: 1702,
        title: "Maximum Binary String After Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-string-after-change/"
    },
    {
        num: 1703,
        title: "Minimum Adjacent Swaps for K Consecutive Ones",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/"
    },
    {
        num: 1704,
        title: "Determine if String Halves Are Alike",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-if-string-halves-are-alike/"
    },
    {
        num: 1705,
        title: "Maximum Number of Eaten Apples",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-eaten-apples/"
    },
    {
        num: 1706,
        title: "Where Will the Ball Fall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/where-will-the-ball-fall/"
    },
    {
        num: 1707,
        title: "Maximum XOR With an Element From Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
    },
    {
        num: 1708,
        title: "Largest Subarray Length K",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-subarray-length-k/"
    },
    {
        num: 1709,
        title: "Biggest Window Between Visits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/biggest-window-between-visits/"
    },
    {
        num: 1710,
        title: "Maximum Units on a Truck",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-units-on-a-truck/"
    },
    {
        num: 1711,
        title: "Count Good Meals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-good-meals/"
    },
    {
        num: 1712,
        title: "Ways to Split Array Into Three Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/"
    },
    {
        num: 1713,
        title: "Minimum Operations to Make a Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/"
    },
    {
        num: 1714,
        title: "Sum Of Special Evenly-Spaced Elements In Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/"
    },
    {
        num: 1715,
        title: "Count Apples and Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-apples-and-oranges/"
    },
    {
        num: 1716,
        title: "Calculate Money in Leetcode Bank",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculate-money-in-leetcode-bank/"
    },
    {
        num: 1717,
        title: "Maximum Score From Removing Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-score-from-removing-substrings/"
    },
    {
        num: 1718,
        title: "Construct the Lexicographically Largest Valid Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/"
    },
    {
        num: 1719,
        title: "Number Of Ways To Reconstruct A Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/"
    },
    {
        num: 1720,
        title: "Decode XORed Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decode-xored-array/"
    },
    {
        num: 1721,
        title: "Swapping Nodes in a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/"
    },
    {
        num: 1722,
        title: "Minimize Hamming Distance After Swap Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/"
    },
    {
        num: 1723,
        title: "Find Minimum Time to Finish All Jobs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/"
    },
    {
        num: 1724,
        title: "Checking Existence of Edge Length Limited Paths II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/"
    },
    {
        num: 1725,
        title: "Number Of Rectangles That Can Form The Largest Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/"
    },
    {
        num: 1726,
        title: "Tuple with Same Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tuple-with-same-product/"
    },
    {
        num: 1727,
        title: "Largest Submatrix With Rearrangements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-submatrix-with-rearrangements/"
    },
    {
        num: 1728,
        title: "Cat and Mouse II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cat-and-mouse-ii/"
    },
    {
        num: 1729,
        title: "Find Followers Count",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-followers-count/"
    },
    {
        num: 1730,
        title: "Shortest Path to Get Food",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-to-get-food/"
    },
    {
        num: 1731,
        title: "The Number of Employees Which Report to Each Employee",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/"
    },
    {
        num: 1732,
        title: "Find the Highest Altitude",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-highest-altitude/"
    },
    {
        num: 1733,
        title: "Minimum Number of People to Teach",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-people-to-teach/"
    },
    {
        num: 1734,
        title: "Decode XORed Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-xored-permutation/"
    },
    {
        num: 1735,
        title: "Count Ways to Make Array With Product",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-ways-to-make-array-with-product/"
    },
    {
        num: 1736,
        title: "Latest Time by Replacing Hidden Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/"
    },
    {
        num: 1737,
        title: "Change Minimum Characters to Satisfy One of Three Conditions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/"
    },
    {
        num: 1738,
        title: "Find Kth Largest XOR Coordinate Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/"
    },
    {
        num: 1739,
        title: "Building Boxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/building-boxes/"
    },
    {
        num: 1740,
        title: "Find Distance in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-distance-in-a-binary-tree/"
    },
    {
        num: 1741,
        title: "Find Total Time Spent by Each Employee",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-total-time-spent-by-each-employee/"
    },
    {
        num: 1742,
        title: "Maximum Number of Balls in a Box",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-balls-in-a-box/"
    },
    {
        num: 1743,
        title: "Restore the Array From Adjacent Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/"
    },
    {
        num: 1744,
        title: "Can You Eat Your Favorite Candy on Your Favorite Day?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/"
    },
    {
        num: 1745,
        title: "Palindrome Partitioning IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-iv/"
    },
    {
        num: 1746,
        title: "Maximum Subarray Sum After One Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/"
    },
    {
        num: 1747,
        title: "Leetflex Banned Accounts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/leetflex-banned-accounts/"
    },
    {
        num: 1748,
        title: "Sum of Unique Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-unique-elements/"
    },
    {
        num: 1749,
        title: "Maximum Absolute Sum of Any Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/"
    },
    {
        num: 1750,
        title: "Minimum Length of String After Deleting Similar Ends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/"
    },
    {
        num: 1751,
        title: "Maximum Number of Events That Can Be Attended II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/"
    },
    {
        num: 1752,
        title: "Check if Array Is Sorted and Rotated",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"
    },
    {
        num: 1753,
        title: "Maximum Score From Removing Stones",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-score-from-removing-stones/"
    },
    {
        num: 1754,
        title: "Largest Merge Of Two Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-merge-of-two-strings/"
    },
    {
        num: 1755,
        title: "Closest Subsequence Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-subsequence-sum/"
    },
    {
        num: 1756,
        title: "Design Most Recently Used Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-most-recently-used-queue/"
    },
    {
        num: 1757,
        title: "Recyclable and Low Fat Products",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/recyclable-and-low-fat-products/"
    },
    {
        num: 1758,
        title: "Minimum Changes To Make Alternating Binary String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/"
    },
    {
        num: 1759,
        title: "Count Number of Homogenous Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-homogenous-substrings/"
    },
    {
        num: 1760,
        title: "Minimum Limit of Balls in a Bag",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/"
    },
    {
        num: 1761,
        title: "Minimum Degree of a Connected Trio in a Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/"
    },
    {
        num: 1762,
        title: "Buildings With an Ocean View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/buildings-with-an-ocean-view/"
    },
    {
        num: 1763,
        title: "Longest Nice Substring",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-nice-substring/"
    },
    {
        num: 1764,
        title: "Form Array by Concatenating Subarrays of Another Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/"
    },
    {
        num: 1765,
        title: "Map of Highest Peak",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/map-of-highest-peak/"
    },
    {
        num: 1766,
        title: "Tree of Coprimes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tree-of-coprimes/"
    },
    {
        num: 1767,
        title: "Find the Subtasks That Did Not Execute",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/"
    },
    {
        num: 1768,
        title: "Merge Strings Alternately",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-strings-alternately/"
    },
    {
        num: 1769,
        title: "Minimum Number of Operations to Move All Balls to Each Box",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/"
    },
    {
        num: 1770,
        title: "Maximum Score from Performing Multiplication Operations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/"
    },
    {
        num: 1771,
        title: "Maximize Palindrome Length From Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/"
    },
    {
        num: 1772,
        title: "Sort Features by Popularity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-features-by-popularity/"
    },
    {
        num: 1773,
        title: "Count Items Matching a Rule",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-items-matching-a-rule/"
    },
    {
        num: 1774,
        title: "Closest Dessert Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-dessert-cost/"
    },
    {
        num: 1775,
        title: "Equal Sum Arrays With Minimum Number of Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/"
    },
    {
        num: 1776,
        title: "Car Fleet II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/car-fleet-ii/"
    },
    {
        num: 1777,
        title: "Product's Price for Each Store",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/products-price-for-each-store/"
    },
    {
        num: 1778,
        title: "Shortest Path in a Hidden Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-a-hidden-grid/"
    },
    {
        num: 1779,
        title: "Find Nearest Point That Has the Same X or Y Coordinate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/"
    },
    {
        num: 1780,
        title: "Check if Number is a Sum of Powers of Three",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/"
    },
    {
        num: 1781,
        title: "Sum of Beauty of All Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/"
    },
    {
        num: 1782,
        title: "Count Pairs of Nodes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-pairs-of-nodes/"
    },
    {
        num: 1783,
        title: "Grand Slam Titles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/grand-slam-titles/"
    },
    {
        num: 1784,
        title: "Check if Binary String Has at Most One Segment of Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/"
    },
    {
        num: 1785,
        title: "Minimum Elements to Add to Form a Given Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/"
    },
    {
        num: 1786,
        title: "Number of Restricted Paths From First to Last Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/"
    },
    {
        num: 1787,
        title: "Make the XOR of All Segments Equal to Zero",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/"
    },
    {
        num: 1788,
        title: "Maximize the Beauty of the Garden",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-the-beauty-of-the-garden/"
    },
    {
        num: 1789,
        title: "Primary Department for Each Employee",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/primary-department-for-each-employee/"
    },
    {
        num: 1790,
        title: "Check if One String Swap Can Make Strings Equal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"
    },
    {
        num: 1791,
        title: "Find Center of Star Graph",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-center-of-star-graph/"
    },
    {
        num: 1792,
        title: "Maximum Average Pass Ratio",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-average-pass-ratio/"
    },
    {
        num: 1793,
        title: "Maximum Score of a Good Subarray",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-of-a-good-subarray/"
    },
    {
        num: 1794,
        title: "Count Pairs of Equal Substrings With Minimum Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/"
    },
    {
        num: 1795,
        title: "Rearrange Products Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rearrange-products-table/"
    },
    {
        num: 1796,
        title: "Second Largest Digit in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-largest-digit-in-a-string/"
    },
    {
        num: 1797,
        title: "Design Authentication Manager",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-authentication-manager/"
    },
    {
        num: 1798,
        title: "Maximum Number of Consecutive Values You Can Make",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/"
    },
    {
        num: 1799,
        title: "Maximize Score After N Operations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-score-after-n-operations/"
    },
    {
        num: 1800,
        title: "Maximum Ascending Subarray Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-ascending-subarray-sum/"
    },
    {
        num: 1801,
        title: "Number of Orders in the Backlog",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-orders-in-the-backlog/"
    },
    {
        num: 1802,
        title: "Maximum Value at a Given Index in a Bounded Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/"
    },
    {
        num: 1803,
        title: "Count Pairs With XOR in a Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/"
    },
    {
        num: 1804,
        title: "Implement Trie II (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-ii-prefix-tree/"
    },
    {
        num: 1805,
        title: "Number of Different Integers in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-different-integers-in-a-string/"
    },
    {
        num: 1806,
        title: "Minimum Number of Operations to Reinitialize a Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/"
    },
    {
        num: 1807,
        title: "Evaluate the Bracket Pairs of a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/"
    },
    {
        num: 1808,
        title: "Maximize Number of Nice Divisors",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-number-of-nice-divisors/"
    },
    {
        num: 1809,
        title: "Ad-Free Sessions",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ad-free-sessions/"
    },
    {
        num: 1810,
        title: "Minimum Path Cost in a Hidden Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/"
    },
    {
        num: 1811,
        title: "Find Interview Candidates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-interview-candidates/"
    },
    {
        num: 1812,
        title: "Determine Color of a Chessboard Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-color-of-a-chessboard-square/"
    },
    {
        num: 1813,
        title: "Sentence Similarity III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sentence-similarity-iii/"
    },
    {
        num: 1814,
        title: "Count Nice Pairs in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-nice-pairs-in-an-array/"
    },
    {
        num: 1815,
        title: "Maximum Number of Groups Getting Fresh Donuts",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/"
    },
    {
        num: 1816,
        title: "Truncate Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/truncate-sentence/"
    },
    {
        num: 1817,
        title: "Finding the Users Active Minutes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/finding-the-users-active-minutes/"
    },
    {
        num: 1818,
        title: "Minimum Absolute Sum Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-absolute-sum-difference/"
    },
    {
        num: 1819,
        title: "Number of Different Subsequences GCDs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-different-subsequences-gcds/"
    },
    {
        num: 1820,
        title: "Maximum Number of Accepted Invitations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-accepted-invitations/"
    },
    {
        num: 1821,
        title: "Find Customers With Positive Revenue this Year",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/"
    },
    {
        num: 1822,
        title: "Sign of the Product of an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sign-of-the-product-of-an-array/"
    },
    {
        num: 1823,
        title: "Find the Winner of the Circular Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/"
    },
    {
        num: 1824,
        title: "Minimum Sideway Jumps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-sideway-jumps/"
    },
    {
        num: 1825,
        title: "Finding MK Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/finding-mk-average/"
    },
    {
        num: 1826,
        title: "Faulty Sensor",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/faulty-sensor/"
    },
    {
        num: 1827,
        title: "Minimum Operations to Make the Array Increasing",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/"
    },
    {
        num: 1828,
        title: "Queries on Number of Points Inside a Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/"
    },
    {
        num: 1829,
        title: "Maximum XOR for Each Query",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-xor-for-each-query/"
    },
    {
        num: 1830,
        title: "Minimum Number of Operations to Make String Sorted",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/"
    },
    {
        num: 1831,
        title: "Maximum Transaction Each Day",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-transaction-each-day/"
    },
    {
        num: 1832,
        title: "Check if the Sentence Is Pangram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/"
    },
    {
        num: 1833,
        title: "Maximum Ice Cream Bars",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-ice-cream-bars/"
    },
    {
        num: 1834,
        title: "Single-Threaded CPU",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-threaded-cpu/"
    },
    {
        num: 1835,
        title: "Find XOR Sum of All Pairs Bitwise AND",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/"
    },
    {
        num: 1836,
        title: "Remove Duplicates From an Unsorted Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/"
    },
    {
        num: 1837,
        title: "Sum of Digits in Base K",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-digits-in-base-k/"
    },
    {
        num: 1838,
        title: "Frequency of the Most Frequent Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/"
    },
    {
        num: 1839,
        title: "Longest Substring Of All Vowels in Order",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/"
    },
    {
        num: 1840,
        title: "Maximum Building Height",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-building-height/"
    },
    {
        num: 1841,
        title: "League Statistics",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/league-statistics/"
    },
    {
        num: 1842,
        title: "Next Palindrome Using Same Digits",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/next-palindrome-using-same-digits/"
    },
    {
        num: 1843,
        title: "Suspicious Bank Accounts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/suspicious-bank-accounts/"
    },
    {
        num: 1844,
        title: "Replace All Digits with Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-all-digits-with-characters/"
    },
    {
        num: 1845,
        title: "Seat Reservation Manager",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/seat-reservation-manager/"
    },
    {
        num: 1846,
        title: "Maximum Element After Decreasing and Rearranging",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/"
    },
    {
        num: 1847,
        title: "Closest Room",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-room/"
    },
    {
        num: 1848,
        title: "Minimum Distance to the Target Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-distance-to-the-target-element/"
    },
    {
        num: 1849,
        title: "Splitting a String Into Descending Consecutive Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/"
    },
    {
        num: 1850,
        title: "Minimum Adjacent Swaps to Reach the Kth Smallest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/"
    },
    {
        num: 1851,
        title: "Minimum Interval to Include Each Query",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/"
    },
    {
        num: 1852,
        title: "Distinct Numbers in Each Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distinct-numbers-in-each-subarray/"
    },
    {
        num: 1853,
        title: "Convert Date Format",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-date-format/"
    },
    {
        num: 1854,
        title: "Maximum Population Year",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-population-year/"
    },
    {
        num: 1855,
        title: "Maximum Distance Between a Pair of Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/"
    },
    {
        num: 1856,
        title: "Maximum Subarray Min-Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray-min-product/"
    },
    {
        num: 1857,
        title: "Largest Color Value in a Directed Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/"
    },
    {
        num: 1858,
        title: "Longest Word With All Prefixes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-word-with-all-prefixes/"
    },
    {
        num: 1859,
        title: "Sorting the Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sorting-the-sentence/"
    },
    {
        num: 1860,
        title: "Incremental Memory Leak",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/incremental-memory-leak/"
    },
    {
        num: 1861,
        title: "Rotating the Box",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotating-the-box/"
    },
    {
        num: 1862,
        title: "Sum of Floored Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-floored-pairs/"
    },
    {
        num: 1863,
        title: "Sum of All Subset XOR Totals",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-all-subset-xor-totals/"
    },
    {
        num: 1864,
        title: "Minimum Number of Swaps to Make the Binary String Alternating",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/"
    },
    {
        num: 1865,
        title: "Finding Pairs With a Certain Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/finding-pairs-with-a-certain-sum/"
    },
    {
        num: 1866,
        title: "Number of Ways to Rearrange Sticks With K Sticks Visible",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/"
    },
    {
        num: 1867,
        title: "Orders With Maximum Quantity Above Average",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/orders-with-maximum-quantity-above-average/"
    },
    {
        num: 1868,
        title: "Product of Two Run-Length Encoded Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/"
    },
    {
        num: 1869,
        title: "Longer Contiguous Segments of Ones than Zeros",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/"
    },
    {
        num: 1870,
        title: "Minimum Speed to Arrive on Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/"
    },
    {
        num: 1871,
        title: "Jump Game VII",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-vii/"
    },
    {
        num: 1872,
        title: "Stone Game VIII",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-viii/"
    },
    {
        num: 1873,
        title: "Calculate Special Bonus",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculate-special-bonus/"
    },
    {
        num: 1874,
        title: "Minimize Product Sum of Two Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-product-sum-of-two-arrays/"
    },
    {
        num: 1875,
        title: "Group Employees of the Same Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-employees-of-the-same-salary/"
    },
    {
        num: 1876,
        title: "Substrings of Size Three with Distinct Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/"
    },
    {
        num: 1877,
        title: "Minimize Maximum Pair Sum in Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/"
    },
    {
        num: 1878,
        title: "Get Biggest Three Rhombus Sums in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/"
    },
    {
        num: 1879,
        title: "Minimum XOR Sum of Two Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/"
    },
    {
        num: 1880,
        title: "Check if Word Equals Summation of Two Words",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/"
    },
    {
        num: 1881,
        title: "Maximum Value after Insertion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-value-after-insertion/"
    },
    {
        num: 1882,
        title: "Process Tasks Using Servers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/process-tasks-using-servers/"
    },
    {
        num: 1883,
        title: "Minimum Skips to Arrive at Meeting On Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/"
    },
    {
        num: 1884,
        title: "Egg Drop With 2 Eggs and N Floors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/"
    },
    {
        num: 1885,
        title: "Count Pairs in Two Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-pairs-in-two-arrays/"
    },
    {
        num: 1886,
        title: "Determine Whether Matrix Can Be Obtained By Rotation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/"
    },
    {
        num: 1887,
        title: "Reduction Operations to Make the Array Elements Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/"
    },
    {
        num: 1888,
        title: "Minimum Number of Flips to Make the Binary String Alternating",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/"
    },
    {
        num: 1889,
        title: "Minimum Space Wasted From Packaging",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-space-wasted-from-packaging/"
    },
    {
        num: 1890,
        title: "The Latest Login in 2020",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-latest-login-in-2020/"
    },
    {
        num: 1891,
        title: "Cutting Ribbons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cutting-ribbons/"
    },
    {
        num: 1892,
        title: "Page Recommendations II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/page-recommendations-ii/"
    },
    {
        num: 1893,
        title: "Check if All the Integers in a Range Are Covered",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/"
    },
    {
        num: 1894,
        title: "Find the Student that Will Replace the Chalk",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/"
    },
    {
        num: 1895,
        title: "Largest Magic Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-magic-square/"
    },
    {
        num: 1896,
        title: "Minimum Cost to Change the Final Value of Expression",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/"
    },
    {
        num: 1897,
        title: "Redistribute Characters to Make All Strings Equal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/"
    },
    {
        num: 1898,
        title: "Maximum Number of Removable Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-removable-characters/"
    },
    {
        num: 1899,
        title: "Merge Triplets to Form Target Triplet",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/"
    },
    {
        num: 1900,
        title: "The Earliest and Latest Rounds Where Players Compete",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/"
    },
    {
        num: 1901,
        title: "Find a Peak Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-a-peak-element-ii/"
    },
    {
        num: 1902,
        title: "Depth of BST Given Insertion Order",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/depth-of-bst-given-insertion-order/"
    },
    {
        num: 1903,
        title: "Largest Odd Number in String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-odd-number-in-string/"
    },
    {
        num: 1904,
        title: "The Number of Full Rounds You Have Played",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/"
    },
    {
        num: 1905,
        title: "Count Sub Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-sub-islands/"
    },
    {
        num: 1906,
        title: "Minimum Absolute Difference Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-absolute-difference-queries/"
    },
    {
        num: 1907,
        title: "Count Salary Categories",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-salary-categories/"
    },
    {
        num: 1908,
        title: "Game of Nim",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-nim/"
    },
    {
        num: 1909,
        title: "Remove One Element to Make the Array Strictly Increasing",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/"
    },
    {
        num: 1910,
        title: "Remove All Occurrences of a Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/"
    },
    {
        num: 1911,
        title: "Maximum Alternating Subsequence Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-alternating-subsequence-sum/"
    },
    {
        num: 1912,
        title: "Design Movie Rental System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-movie-rental-system/"
    },
    {
        num: 1913,
        title: "Maximum Product Difference Between Two Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-difference-between-two-pairs/"
    },
    {
        num: 1914,
        title: "Cyclically Rotating a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cyclically-rotating-a-grid/"
    },
    {
        num: 1915,
        title: "Number of Wonderful Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-wonderful-substrings/"
    },
    {
        num: 1916,
        title: "Count Ways to Build Rooms in an Ant Colony",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/"
    },
    {
        num: 1917,
        title: "Leetcodify Friends Recommendations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/leetcodify-friends-recommendations/"
    },
    {
        num: 1918,
        title: "Kth Smallest Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-subarray-sum/"
    },
    {
        num: 1919,
        title: "Leetcodify Similar Friends",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/leetcodify-similar-friends/"
    },
    {
        num: 1920,
        title: "Build Array from Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/build-array-from-permutation/"
    },
    {
        num: 1921,
        title: "Eliminate Maximum Number of Monsters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/eliminate-maximum-number-of-monsters/"
    },
    {
        num: 1922,
        title: "Count Good Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-good-numbers/"
    },
    {
        num: 1923,
        title: "Longest Common Subpath",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-common-subpath/"
    },
    {
        num: 1924,
        title: "Erect the Fence II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/erect-the-fence-ii/"
    },
    {
        num: 1925,
        title: "Count Square Sum Triples",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-square-sum-triples/"
    },
    {
        num: 1926,
        title: "Nearest Exit from Entrance in Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/"
    },
    {
        num: 1927,
        title: "Sum Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-game/"
    },
    {
        num: 1928,
        title: "Minimum Cost to Reach Destination in Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/"
    },
    {
        num: 1929,
        title: "Concatenation of Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/concatenation-of-array/"
    },
    {
        num: 1930,
        title: "Unique Length-3 Palindromic Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-length-3-palindromic-subsequences/"
    },
    {
        num: 1931,
        title: "Painting a Grid With Three Different Colors",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/painting-a-grid-with-three-different-colors/"
    },
    {
        num: 1932,
        title: "Merge BSTs to Create Single BST",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-bsts-to-create-single-bst/"
    },
    {
        num: 1933,
        title: "Check if String Is Decomposable Into Value-Equal Substrings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/"
    },
    {
        num: 1934,
        title: "Confirmation Rate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/confirmation-rate/"
    },
    {
        num: 1935,
        title: "Maximum Number of Words You Can Type",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-words-you-can-type/"
    },
    {
        num: 1936,
        title: "Add Minimum Number of Rungs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-minimum-number-of-rungs/"
    },
    {
        num: 1937,
        title: "Maximum Number of Points with Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-points-with-cost/"
    },
    {
        num: 1938,
        title: "Maximum Genetic Difference Query",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-genetic-difference-query/"
    },
    {
        num: 1939,
        title: "Users that Actively Request Confirmation Messages",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/users-that-actively-request-confirmation-messages/"
    },
    {
        num: 1940,
        title: "Longest Common Subsequence Between Sorted Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/"
    },
    {
        num: 1941,
        title: "Check if All Characters Have Equal Number of Occurrences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/"
    },
    {
        num: 1942,
        title: "The Number of the Smallest Unoccupied Chair",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/"
    },
    {
        num: 1943,
        title: "Describe the Painting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/describe-the-painting/"
    },
    {
        num: 1944,
        title: "Number of Visible People in a Queue",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-visible-people-in-a-queue/"
    },
    {
        num: 1945,
        title: "Sum of Digits of String After Convert",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-digits-of-string-after-convert/"
    },
    {
        num: 1946,
        title: "Largest Number After Mutating Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number-after-mutating-substring/"
    },
    {
        num: 1947,
        title: "Maximum Compatibility Score Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-compatibility-score-sum/"
    },
    {
        num: 1948,
        title: "Delete Duplicate Folders in System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/delete-duplicate-folders-in-system/"
    },
    {
        num: 1949,
        title: "Strong Friendship",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strong-friendship/"
    },
    {
        num: 1950,
        title: "Maximum of Minimum Values in All Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/"
    },
    {
        num: 1951,
        title: "All the Pairs With the Maximum Number of Common Followers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/"
    },
    {
        num: 1952,
        title: "Three Divisors",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/three-divisors/"
    },
    {
        num: 1953,
        title: "Maximum Number of Weeks for Which You Can Work",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/"
    },
    {
        num: 1954,
        title: "Minimum Garden Perimeter to Collect Enough Apples",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/"
    },
    {
        num: 1955,
        title: "Count Number of Special Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-number-of-special-subsequences/"
    },
    {
        num: 1956,
        title: "Minimum Time For K Virus Variants to Spread",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/"
    },
    {
        num: 1957,
        title: "Delete Characters to Make Fancy String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-characters-to-make-fancy-string/"
    },
    {
        num: 1958,
        title: "Check if Move is Legal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-move-is-legal/"
    },
    {
        num: 1959,
        title: "Minimum Total Space Wasted With K Resizing Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/"
    },
    {
        num: 1960,
        title: "Maximum Product of the Length of Two Palindromic Substrings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/"
    },
    {
        num: 1961,
        title: "Check If String Is a Prefix of Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/"
    },
    {
        num: 1962,
        title: "Remove Stones to Minimize the Total",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-stones-to-minimize-the-total/"
    },
    {
        num: 1963,
        title: "Minimum Number of Swaps to Make the String Balanced",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/"
    },
    {
        num: 1964,
        title: "Find the Longest Valid Obstacle Course at Each Position",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/"
    },
    {
        num: 1965,
        title: "Employees With Missing Information",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-with-missing-information/"
    },
    {
        num: 1966,
        title: "Binary Searchable Numbers in an Unsorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/"
    },
    {
        num: 1967,
        title: "Number of Strings That Appear as Substrings in Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/"
    },
    {
        num: 1968,
        title: "Array With Elements Not Equal to Average of Neighbors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/"
    },
    {
        num: 1969,
        title: "Minimum Non-Zero Product of the Array Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/"
    },
    {
        num: 1970,
        title: "Last Day Where You Can Still Cross",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/last-day-where-you-can-still-cross/"
    },
    {
        num: 1971,
        title: "Find if Path Exists in Graph",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-if-path-exists-in-graph/"
    },
    {
        num: 1972,
        title: "First and Last Call on the Same Day",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-and-last-call-on-the-same-day/"
    },
    {
        num: 1973,
        title: "Count Nodes Equal to Sum of Descendants",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/"
    },
    {
        num: 1974,
        title: "Minimum Time to Type Word Using Special Typewriter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/"
    },
    {
        num: 1975,
        title: "Maximum Matrix Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-matrix-sum/"
    },
    {
        num: 1976,
        title: "Number of Ways to Arrive at Destination",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
    },
    {
        num: 1977,
        title: "Number of Ways to Separate Numbers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-separate-numbers/"
    },
    {
        num: 1978,
        title: "Employees Whose Manager Left the Company",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-whose-manager-left-the-company/"
    },
    {
        num: 1979,
        title: "Find Greatest Common Divisor of Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/"
    },
    {
        num: 1980,
        title: "Find Unique Binary String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-unique-binary-string/"
    },
    {
        num: 1981,
        title: "Minimize the Difference Between Target and Chosen Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/"
    },
    {
        num: 1982,
        title: "Find Array Given Subset Sums",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-array-given-subset-sums/"
    },
    {
        num: 1983,
        title: "Widest Pair of Indices With Equal Range Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/"
    },
    {
        num: 1984,
        title: "Minimum Difference Between Highest and Lowest of K Scores",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/"
    },
    {
        num: 1985,
        title: "Find the Kth Largest Integer in the Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/"
    },
    {
        num: 1986,
        title: "Minimum Number of Work Sessions to Finish the Tasks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/"
    },
    {
        num: 1987,
        title: "Number of Unique Good Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-unique-good-subsequences/"
    },
    {
        num: 1988,
        title: "Find Cutoff Score for Each School",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-cutoff-score-for-each-school/"
    },
    {
        num: 1989,
        title: "Maximum Number of People That Can Be Caught in Tag",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/"
    },
    {
        num: 1990,
        title: "Count the Number of Experiments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-experiments/"
    },
    {
        num: 1991,
        title: "Find the Middle Index in Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-middle-index-in-array/"
    },
    {
        num: 1992,
        title: "Find All Groups of Farmland",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-groups-of-farmland/"
    },
    {
        num: 1993,
        title: "Operations on Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/operations-on-tree/"
    },
    {
        num: 1994,
        title: "The Number of Good Subsets",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-number-of-good-subsets/"
    },
    {
        num: 1995,
        title: "Count Special Quadruplets",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-special-quadruplets/"
    },
    {
        num: 1996,
        title: "The Number of Weak Characters in the Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/"
    },
    {
        num: 1997,
        title: "First Day Where You Have Been in All the Rooms",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/"
    },
    {
        num: 1998,
        title: "GCD Sort of an Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/gcd-sort-of-an-array/"
    },
    {
        num: 1999,
        title: "Smallest Greater Multiple Made of Two Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/"
    },
    {
        num: 2000,
        title: "Reverse Prefix of Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-prefix-of-word/"
    },
    {
        num: 2001,
        title: "Number of Pairs of Interchangeable Rectangles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/"
    },
    {
        num: 2002,
        title: "Maximum Product of the Length of Two Palindromic Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/"
    },
    {
        num: 2003,
        title: "Smallest Missing Genetic Value in Each Subtree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/"
    },
    {
        num: 2004,
        title: "The Number of Seniors and Juniors to Join the Company",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/"
    },
    {
        num: 2005,
        title: "Subtree Removal Game with Fibonacci Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/"
    },
    {
        num: 2006,
        title: "Count Number of Pairs With Absolute Difference K",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/"
    },
    {
        num: 2007,
        title: "Find Original Array From Doubled Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-original-array-from-doubled-array/"
    },
    {
        num: 2008,
        title: "Maximum Earnings From Taxi",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-earnings-from-taxi/"
    },
    {
        num: 2009,
        title: "Minimum Number of Operations to Make Array Continuous",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/"
    },
    {
        num: 2010,
        title: "The Number of Seniors and Juniors to Join the Company II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/"
    },
    {
        num: 2011,
        title: "Final Value of Variable After Performing Operations",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/"
    },
    {
        num: 2012,
        title: "Sum of Beauty in the Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-beauty-in-the-array/"
    },
    {
        num: 2013,
        title: "Detect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/detect-squares/"
    },
    {
        num: 2014,
        title: "Longest Subsequence Repeated K Times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-subsequence-repeated-k-times/"
    },
    {
        num: 2015,
        title: "Average Height of Buildings in Each Segment",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/average-height-of-buildings-in-each-segment/"
    },
    {
        num: 2016,
        title: "Maximum Difference Between Increasing Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-difference-between-increasing-elements/"
    },
    {
        num: 2017,
        title: "Grid Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/grid-game/"
    },
    {
        num: 2018,
        title: "Check if Word Can Be Placed In Crossword",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/"
    },
    {
        num: 2019,
        title: "The Score of Students Solving Math Expression",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-score-of-students-solving-math-expression/"
    },
    {
        num: 2020,
        title: "Number of Accounts That Did Not Stream",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-accounts-that-did-not-stream/"
    },
    {
        num: 2021,
        title: "Brightest Position on Street",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brightest-position-on-street/"
    },
    {
        num: 2022,
        title: "Convert 1D Array Into 2D Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-1d-array-into-2d-array/"
    },
    {
        num: 2023,
        title: "Number of Pairs of Strings With Concatenation Equal to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/"
    },
    {
        num: 2024,
        title: "Maximize the Confusion of an Exam",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-the-confusion-of-an-exam/"
    },
    {
        num: 2025,
        title: "Maximum Number of Ways to Partition an Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/"
    },
    {
        num: 2026,
        title: "Low-Quality Problems",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/low-quality-problems/"
    },
    {
        num: 2027,
        title: "Minimum Moves to Convert String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-moves-to-convert-string/"
    },
    {
        num: 2028,
        title: "Find Missing Observations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-missing-observations/"
    },
    {
        num: 2029,
        title: "Stone Game IX",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game-ix/"
    },
    {
        num: 2030,
        title: "Smallest K-Length Subsequence With Occurrences of a Letter",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/"
    },
    {
        num: 2031,
        title: "Count Subarrays With More Ones Than Zeros",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/"
    },
    {
        num: 2032,
        title: "Two Out of Three",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-out-of-three/"
    },
    {
        num: 2033,
        title: "Minimum Operations to Make a Uni-Value Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/"
    },
    {
        num: 2034,
        title: "Stock Price Fluctuation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stock-price-fluctuation/"
    },
    {
        num: 2035,
        title: "Partition Array Into Two Arrays to Minimize Sum Difference",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/"
    },
    {
        num: 2036,
        title: "Maximum Alternating Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-alternating-subarray-sum/"
    },
    {
        num: 2037,
        title: "Minimum Number of Moves to Seat Everyone",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/"
    },
    {
        num: 2038,
        title: "Remove Colored Pieces if Both Neighbors are the Same Color",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/"
    },
    {
        num: 2039,
        title: "The Time When the Network Becomes Idle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-time-when-the-network-becomes-idle/"
    },
    {
        num: 2040,
        title: "Kth Smallest Product of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/"
    },
    {
        num: 2041,
        title: "Accepted Candidates From the Interviews",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accepted-candidates-from-the-interviews/"
    },
    {
        num: 2042,
        title: "Check if Numbers Are Ascending in a Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/"
    },
    {
        num: 2043,
        title: "Simple Bank System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simple-bank-system/"
    },
    {
        num: 2044,
        title: "Count Number of Maximum Bitwise-OR Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/"
    },
    {
        num: 2045,
        title: "Second Minimum Time to Reach Destination",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/second-minimum-time-to-reach-destination/"
    },
    {
        num: 2046,
        title: "Sort Linked List Already Sorted Using Absolute Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/"
    },
    {
        num: 2047,
        title: "Number of Valid Words in a Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-valid-words-in-a-sentence/"
    },
    {
        num: 2048,
        title: "Next Greater Numerically Balanced Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-numerically-balanced-number/"
    },
    {
        num: 2049,
        title: "Count Nodes With the Highest Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-nodes-with-the-highest-score/"
    },
    {
        num: 2050,
        title: "Parallel Courses III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parallel-courses-iii/"
    },
    {
        num: 2051,
        title: "The Category of Each Member in the Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-category-of-each-member-in-the-store/"
    },
    {
        num: 2052,
        title: "Minimum Cost to Separate Sentence Into Rows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/"
    },
    {
        num: 2053,
        title: "Kth Distinct String in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-distinct-string-in-an-array/"
    },
    {
        num: 2054,
        title: "Two Best Non-Overlapping Events",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-best-non-overlapping-events/"
    },
    {
        num: 2055,
        title: "Plates Between Candles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/plates-between-candles/"
    },
    {
        num: 2056,
        title: "Number of Valid Move Combinations On Chessboard",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/"
    },
    {
        num: 2057,
        title: "Smallest Index With Equal Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/smallest-index-with-equal-value/"
    },
    {
        num: 2058,
        title: "Find the Minimum and Maximum Number of Nodes Between Critical Points",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/"
    },
    {
        num: 2059,
        title: "Minimum Operations to Convert Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-convert-number/"
    },
    {
        num: 2060,
        title: "Check if an Original String Exists Given Two Encoded Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/"
    },
    {
        num: 2061,
        title: "Number of Spaces Cleaning Robot Cleaned",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/"
    },
    {
        num: 2062,
        title: "Count Vowel Substrings of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-vowel-substrings-of-a-string/"
    },
    {
        num: 2063,
        title: "Vowels of All Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vowels-of-all-substrings/"
    },
    {
        num: 2064,
        title: "Minimized Maximum of Products Distributed to Any Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/"
    },
    {
        num: 2065,
        title: "Maximum Path Quality of a Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-path-quality-of-a-graph/"
    },
    {
        num: 2066,
        title: "Account Balance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/account-balance/"
    },
    {
        num: 2067,
        title: "Number of Equal Count Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-equal-count-substrings/"
    },
    {
        num: 2068,
        title: "Check Whether Two Strings are Almost Equivalent",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/"
    },
    {
        num: 2069,
        title: "Walking Robot Simulation II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walking-robot-simulation-ii/"
    },
    {
        num: 2070,
        title: "Most Beautiful Item for Each Query",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-beautiful-item-for-each-query/"
    },
    {
        num: 2071,
        title: "Maximum Number of Tasks You Can Assign",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/"
    },
    {
        num: 2072,
        title: "The Winner University",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-winner-university/"
    },
    {
        num: 2073,
        title: "Time Needed to Buy Tickets",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/time-needed-to-buy-tickets/"
    },
    {
        num: 2074,
        title: "Reverse Nodes in Even Length Groups",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/"
    },
    {
        num: 2075,
        title: "Decode the Slanted Ciphertext",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-the-slanted-ciphertext/"
    },
    {
        num: 2076,
        title: "Process Restricted Friend Requests",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/process-restricted-friend-requests/"
    },
    {
        num: 2077,
        title: "Paths in Maze That Lead to Same Room",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/"
    },
    {
        num: 2078,
        title: "Two Furthest Houses With Different Colors",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-furthest-houses-with-different-colors/"
    },
    {
        num: 2079,
        title: "Watering Plants",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/watering-plants/"
    },
    {
        num: 2080,
        title: "Range Frequency Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-frequency-queries/"
    },
    {
        num: 2081,
        title: "Sum of k-Mirror Numbers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-k-mirror-numbers/"
    },
    {
        num: 2082,
        title: "The Number of Rich Customers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-number-of-rich-customers/"
    },
    {
        num: 2083,
        title: "Substrings That Begin and End With the Same Letter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/"
    },
    {
        num: 2084,
        title: "Drop Type 1 Orders for Customers With Type 0 Orders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/"
    },
    {
        num: 2085,
        title: "Count Common Words With One Occurrence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-common-words-with-one-occurrence/"
    },
    {
        num: 2086,
        title: "Minimum Number of Food Buckets to Feed the Hamsters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/"
    },
    {
        num: 2087,
        title: "Minimum Cost Homecoming of a Robot in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/"
    },
    {
        num: 2088,
        title: "Count Fertile Pyramids in a Land",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-fertile-pyramids-in-a-land/"
    },
    {
        num: 2089,
        title: "Find Target Indices After Sorting Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-target-indices-after-sorting-array/"
    },
    {
        num: 2090,
        title: "K Radius Subarray Averages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-radius-subarray-averages/"
    },
    {
        num: 2091,
        title: "Removing Minimum and Maximum From Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/removing-minimum-and-maximum-from-array/"
    },
    {
        num: 2092,
        title: "Find All People With Secret",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-all-people-with-secret/"
    },
    {
        num: 2093,
        title: "Minimum Cost to Reach City With Discounts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/"
    },
    {
        num: 2094,
        title: "Finding 3-Digit Even Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/finding-3-digit-even-numbers/"
    },
    {
        num: 2095,
        title: "Delete the Middle Node of a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"
    },
    {
        num: 2096,
        title: "Step-By-Step Directions From a Binary Tree Node to Another",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/"
    },
    {
        num: 2097,
        title: "Valid Arrangement of Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-arrangement-of-pairs/"
    },
    {
        num: 2098,
        title: "Subsequence of Size K With the Largest Even Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/"
    },
    {
        num: 2099,
        title: "Find Subsequence of Length K With the Largest Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/"
    },
    {
        num: 2100,
        title: "Find Good Days to Rob the Bank",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-good-days-to-rob-the-bank/"
    },
    {
        num: 2101,
        title: "Detonate the Maximum Bombs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/detonate-the-maximum-bombs/"
    },
    {
        num: 2102,
        title: "Sequentially Ordinal Rank Tracker",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sequentially-ordinal-rank-tracker/"
    },
    {
        num: 2103,
        title: "Rings and Rods",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rings-and-rods/"
    },
    {
        num: 2104,
        title: "Sum of Subarray Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-ranges/"
    },
    {
        num: 2105,
        title: "Watering Plants II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/watering-plants-ii/"
    },
    {
        num: 2106,
        title: "Maximum Fruits Harvested After at Most K Steps",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/"
    },
    {
        num: 2107,
        title: "Number of Unique Flavors After Sharing K Candies",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/"
    },
    {
        num: 2108,
        title: "Find First Palindromic String in the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"
    },
    {
        num: 2109,
        title: "Adding Spaces to a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/adding-spaces-to-a-string/"
    },
    {
        num: 2110,
        title: "Number of Smooth Descent Periods of a Stock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/"
    },
    {
        num: 2111,
        title: "Minimum Operations to Make the Array K-Increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/"
    },
    {
        num: 2112,
        title: "The Airport With the Most Traffic",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-airport-with-the-most-traffic/"
    },
    {
        num: 2113,
        title: "Elements in Array After Removing and Replacing Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/"
    },
    {
        num: 2114,
        title: "Maximum Number of Words Found in Sentences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/"
    },
    {
        num: 2115,
        title: "Find All Possible Recipes from Given Supplies",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/"
    },
    {
        num: 2116,
        title: "Check if a Parentheses String Can Be Valid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/"
    },
    {
        num: 2117,
        title: "Abbreviating the Product of a Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/abbreviating-the-product-of-a-range/"
    },
    {
        num: 2118,
        title: "Build the Equation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/build-the-equation/"
    },
    {
        num: 2119,
        title: "A Number After a Double Reversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/a-number-after-a-double-reversal/"
    },
    {
        num: 2120,
        title: "Execution of All Suffix Instructions Staying in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/"
    },
    {
        num: 2121,
        title: "Intervals Between Identical Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/intervals-between-identical-elements/"
    },
    {
        num: 2122,
        title: "Recover the Original Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-the-original-array/"
    },
    {
        num: 2123,
        title: "Minimum Operations to Remove Adjacent Ones in Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/"
    },
    {
        num: 2124,
        title: "Check if All A's Appears Before All B's",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/"
    },
    {
        num: 2125,
        title: "Number of Laser Beams in a Bank",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-laser-beams-in-a-bank/"
    },
    {
        num: 2126,
        title: "Destroying Asteroids",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/destroying-asteroids/"
    },
    {
        num: 2127,
        title: "Maximum Employees to Be Invited to a Meeting",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"
    },
    {
        num: 2128,
        title: "Remove All Ones With Row and Column Flips",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/"
    },
    {
        num: 2129,
        title: "Capitalize the Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/capitalize-the-title/"
    },
    {
        num: 2130,
        title: "Maximum Twin Sum of a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/"
    },
    {
        num: 2131,
        title: "Longest Palindrome by Concatenating Two Letter Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/"
    },
    {
        num: 2132,
        title: "Stamping the Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stamping-the-grid/"
    },
    {
        num: 2133,
        title: "Check if Every Row and Column Contains All Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/"
    },
    {
        num: 2134,
        title: "Minimum Swaps to Group All 1's Together II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/"
    },
    {
        num: 2135,
        title: "Count Words Obtained After Adding a Letter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/"
    },
    {
        num: 2136,
        title: "Earliest Possible Day of Full Bloom",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/earliest-possible-day-of-full-bloom/"
    },
    {
        num: 2137,
        title: "Pour Water Between Buckets to Make Water Levels Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/"
    },
    {
        num: 2138,
        title: "Divide a String Into Groups of Size k",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/"
    },
    {
        num: 2139,
        title: "Minimum Moves to Reach Target Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-moves-to-reach-target-score/"
    },
    {
        num: 2140,
        title: "Solving Questions With Brainpower",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/solving-questions-with-brainpower/"
    },
    {
        num: 2141,
        title: "Maximum Running Time of N Computers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-running-time-of-n-computers/"
    },
    {
        num: 2142,
        title: "The Number of Passengers in Each Bus I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/"
    },
    {
        num: 2143,
        title: "Choose Numbers From Two Arrays in Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/"
    },
    {
        num: 2144,
        title: "Minimum Cost of Buying Candies With Discount",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/"
    },
    {
        num: 2145,
        title: "Count the Hidden Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-hidden-sequences/"
    },
    {
        num: 2146,
        title: "K Highest Ranked Items Within a Price Range",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/"
    },
    {
        num: 2147,
        title: "Number of Ways to Divide a Long Corridor",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/"
    },
    {
        num: 2148,
        title: "Count Elements With Strictly Smaller and Greater Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/"
    },
    {
        num: 2149,
        title: "Rearrange Array Elements by Sign",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rearrange-array-elements-by-sign/"
    },
    {
        num: 2150,
        title: "Find All Lonely Numbers in the Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/"
    },
    {
        num: 2151,
        title: "Maximum Good People Based on Statements",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-good-people-based-on-statements/"
    },
    {
        num: 2152,
        title: "Minimum Number of Lines to Cover Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/"
    },
    {
        num: 2153,
        title: "The Number of Passengers in Each Bus II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/"
    },
    {
        num: 2154,
        title: "Keep Multiplying Found Values by Two",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/keep-multiplying-found-values-by-two/"
    },
    {
        num: 2155,
        title: "All Divisions With the Highest Score of a Binary Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/"
    },
    {
        num: 2156,
        title: "Find Substring With Given Hash Value",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-substring-with-given-hash-value/"
    },
    {
        num: 2157,
        title: "Groups of Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/groups-of-strings/"
    },
    {
        num: 2158,
        title: "Amount of New Area Painted Each Day",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/amount-of-new-area-painted-each-day/"
    },
    {
        num: 2159,
        title: "Order Two Columns Independently",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/order-two-columns-independently/"
    },
    {
        num: 2160,
        title: "Minimum Sum of Four Digit Number After Splitting Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/"
    },
    {
        num: 2161,
        title: "Partition Array According to Given Pivot",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-array-according-to-given-pivot/"
    },
    {
        num: 2162,
        title: "Minimum Cost to Set Cooking Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-set-cooking-time/"
    },
    {
        num: 2163,
        title: "Minimum Difference in Sums After Removal of Elements",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/"
    },
    {
        num: 2164,
        title: "Sort Even and Odd Indices Independently",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-even-and-odd-indices-independently/"
    },
    {
        num: 2165,
        title: "Smallest Value of the Rearranged Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-value-of-the-rearranged-number/"
    },
    {
        num: 2166,
        title: "Design Bitset",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bitset/"
    },
    {
        num: 2167,
        title: "Minimum Time to Remove All Cars Containing Illegal Goods",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/"
    },
    {
        num: 2168,
        title: "Unique Substrings With Equal Digit Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/"
    },
    {
        num: 2169,
        title: "Count Operations to Obtain Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-operations-to-obtain-zero/"
    },
    {
        num: 2170,
        title: "Minimum Operations to Make the Array Alternating",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/"
    },
    {
        num: 2171,
        title: "Removing Minimum Number of Magic Beans",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/removing-minimum-number-of-magic-beans/"
    },
    {
        num: 2172,
        title: "Maximum AND Sum of Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-and-sum-of-array/"
    },
    {
        num: 2173,
        title: "Longest Winning Streak",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-winning-streak/"
    },
    {
        num: 2174,
        title: "Remove All Ones With Row and Column Flips II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/"
    },
    {
        num: 2175,
        title: "The Change in Global Rankings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-change-in-global-rankings/"
    },
    {
        num: 2176,
        title: "Count Equal and Divisible Pairs in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"
    },
    {
        num: 2177,
        title: "Find Three Consecutive Integers That Sum to a Given Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/"
    },
    {
        num: 2178,
        title: "Maximum Split of Positive Even Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-split-of-positive-even-integers/"
    },
    {
        num: 2179,
        title: "Count Good Triplets in an Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-good-triplets-in-an-array/"
    },
    {
        num: 2180,
        title: "Count Integers With Even Digit Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-integers-with-even-digit-sum/"
    },
    {
        num: 2181,
        title: "Merge Nodes in Between Zeros",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-nodes-in-between-zeros/"
    },
    {
        num: 2182,
        title: "Construct String With Repeat Limit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-string-with-repeat-limit/"
    },
    {
        num: 2183,
        title: "Count Array Pairs Divisible by K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-array-pairs-divisible-by-k/"
    },
    {
        num: 2184,
        title: "Number of Ways to Build Sturdy Brick Wall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/"
    },
    {
        num: 2185,
        title: "Counting Words With a Given Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counting-words-with-a-given-prefix/"
    },
    {
        num: 2186,
        title: "Minimum Number of Steps to Make Two Strings Anagram II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/"
    },
    {
        num: 2187,
        title: "Minimum Time to Complete Trips",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-to-complete-trips/"
    },
    {
        num: 2188,
        title: "Minimum Time to Finish the Race",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-finish-the-race/"
    },
    {
        num: 2189,
        title: "Number of Ways to Build House of Cards",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/"
    },
    {
        num: 2190,
        title: "Most Frequent Number Following Key In an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"
    },
    {
        num: 2191,
        title: "Sort the Jumbled Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-the-jumbled-numbers/"
    },
    {
        num: 2192,
        title: "All Ancestors of a Node in a Directed Acyclic Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/"
    },
    {
        num: 2193,
        title: "Minimum Number of Moves to Make Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"
    },
    {
        num: 2194,
        title: "Cells in a Range on an Excel Sheet",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"
    },
    {
        num: 2195,
        title: "Append K Integers With Minimal Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/append-k-integers-with-minimal-sum/"
    },
    {
        num: 2196,
        title: "Create Binary Tree From Descriptions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/create-binary-tree-from-descriptions/"
    },
    {
        num: 2197,
        title: "Replace Non-Coprime Numbers in Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"
    },
    {
        num: 2198,
        title: "Number of Single Divisor Triplets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-single-divisor-triplets/"
    },
    {
        num: 2199,
        title: "Finding the Topic of each Post",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/finding-the-topic-of-each-post/"
    },
    {
        num: 2200,
        title: "Find All K-Distant Indices in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"
    },
    {
        num: 2201,
        title: "Count Artifacts That Can Be Extracted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"
    },
    {
        num: 2202,
        title: "Maximize the Topmost Element After K Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/"
    },
    {
        num: 2203,
        title: "Minimum Weighted Subgraph With the Required Paths",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"
    },
    {
        num: 2204,
        title: "Distance to a Cycle in Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/"
    },
    {
        num: 2205,
        title: "The Number of Users That Are Eligible for Discount",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/"
    },
    {
        num: 2206,
        title: "Divide Array Into Equal Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/divide-array-into-equal-pairs/"
    },
    {
        num: 2207,
        title: "Maximize Number of Subsequences in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/"
    },
    {
        num: 2208,
        title: "Minimum Operations to Halve Array Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"
    },
    {
        num: 2209,
        title: "Minimum White Tiles After Covering With Carpets",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/"
    },
    {
        num: 2210,
        title: "Count Hills and Valleys in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-hills-and-valleys-in-an-array/"
    },
    {
        num: 2211,
        title: "Count Collisions on a Road",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-collisions-on-a-road/"
    },
    {
        num: 2212,
        title: "Maximum Points in an Archery Competition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-points-in-an-archery-competition/"
    },
    {
        num: 2213,
        title: "Longest Substring of One Repeating Character",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-of-one-repeating-character/"
    },
    {
        num: 2214,
        title: "Minimum Health to Beat Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-health-to-beat-game/"
    },
    {
        num: 2215,
        title: "Find the Difference of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference-of-two-arrays/"
    },
    {
        num: 2216,
        title: "Minimum Deletions to Make Array Beautiful",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/"
    },
    {
        num: 2217,
        title: "Find Palindrome With Fixed Length",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-palindrome-with-fixed-length/"
    },
    {
        num: 2218,
        title: "Maximum Value of K Coins From Piles",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/"
    },
    {
        num: 2219,
        title: "Maximum Sum Score of Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-score-of-array/"
    },
    {
        num: 2220,
        title: "Minimum Bit Flips to Convert Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/"
    },
    {
        num: 2221,
        title: "Find Triangular Sum of an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-triangular-sum-of-an-array/"
    },
    {
        num: 2222,
        title: "Number of Ways to Select Buildings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-select-buildings/"
    },
    {
        num: 2223,
        title: "Sum of Scores of Built Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-scores-of-built-strings/"
    },
    {
        num: 2224,
        title: "Minimum Number of Operations to Convert Time",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/"
    },
    {
        num: 2225,
        title: "Find Players With Zero or One Losses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-players-with-zero-or-one-losses/"
    },
    {
        num: 2226,
        title: "Maximum Candies Allocated to K Children",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"
    },
    {
        num: 2227,
        title: "Encrypt and Decrypt Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/encrypt-and-decrypt-strings/"
    },
    {
        num: 2228,
        title: "Users with Two Purchases Within Seven Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/users-with-two-purchases-within-seven-days/"
    },
    {
        num: 2229,
        title: "Check if an Array Is Consecutive",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-an-array-is-consecutive/"
    },
    {
        num: 2230,
        title: "The Users that are Eligible for Discount",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-users-that-are-eligible-for-discount/"
    },
    {
        num: 2231,
        title: "Largest Number After Digit Swaps by Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"
    },
    {
        num: 2232,
        title: "Minimize Result by Adding Parentheses to Expression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/"
    },
    {
        num: 2233,
        title: "Maximum Product After K Increments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-after-k-increments/"
    },
    {
        num: 2234,
        title: "Maximum Total Beauty of the Gardens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/"
    },
    {
        num: 2235,
        title: "Add Two Integers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-two-integers/"
    },
    {
        num: 2236,
        title: "Root Equals Sum of Children",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/root-equals-sum-of-children/"
    },
    {
        num: 2237,
        title: "Count Positions on Street With Required Brightness",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-positions-on-street-with-required-brightness/"
    },
    {
        num: 2238,
        title: "Number of Times a Driver Was a Passenger",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/"
    },
    {
        num: 2239,
        title: "Find Closest Number to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-closest-number-to-zero/"
    },
    {
        num: 2240,
        title: "Number of Ways to Buy Pens and Pencils",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/"
    },
    {
        num: 2241,
        title: "Design an ATM Machine",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-an-atm-machine/"
    },
    {
        num: 2242,
        title: "Maximum Score of a Node Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-of-a-node-sequence/"
    },
    {
        num: 2243,
        title: "Calculate Digit Sum of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculate-digit-sum-of-a-string/"
    },
    {
        num: 2244,
        title: "Minimum Rounds to Complete All Tasks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/"
    },
    {
        num: 2245,
        title: "Maximum Trailing Zeros in a Cornered Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/"
    },
    {
        num: 2246,
        title: "Longest Path With Different Adjacent Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/"
    },
    {
        num: 2247,
        title: "Maximum Cost of Trip With K Highways",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/"
    },
    {
        num: 2248,
        title: "Intersection of Multiple Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-multiple-arrays/"
    },
    {
        num: 2249,
        title: "Count Lattice Points Inside a Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-lattice-points-inside-a-circle/"
    },
    {
        num: 2250,
        title: "Count Number of Rectangles Containing Each Point",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/"
    },
    {
        num: 2251,
        title: "Number of Flowers in Full Bloom",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/"
    },
    {
        num: 2252,
        title: "Dynamic Pivoting of a Table",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dynamic-pivoting-of-a-table/"
    },
    {
        num: 2253,
        title: "Dynamic Unpivoting of a Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/dynamic-unpivoting-of-a-table/"
    },
    {
        num: 2254,
        title: "Design Video Sharing Platform",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-video-sharing-platform/"
    },
    {
        num: 2255,
        title: "Count Prefixes of a Given String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-prefixes-of-a-given-string/"
    },
    {
        num: 2256,
        title: "Minimum Average Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-average-difference/"
    },
    {
        num: 2257,
        title: "Count Unguarded Cells in the Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-unguarded-cells-in-the-grid/"
    },
    {
        num: 2258,
        title: "Escape the Spreading Fire",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/escape-the-spreading-fire/"
    },
    {
        num: 2259,
        title: "Remove Digit From Number to Maximize Result",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/"
    },
    {
        num: 2260,
        title: "Minimum Consecutive Cards to Pick Up",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"
    },
    {
        num: 2261,
        title: "K Divisible Elements Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-divisible-elements-subarrays/"
    },
    {
        num: 2262,
        title: "Total Appeal of A String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/total-appeal-of-a-string/"
    },
    {
        num: 2263,
        title: "Make Array Non-decreasing or Non-increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/"
    },
    {
        num: 2264,
        title: "Largest 3-Same-Digit Number in String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-3-same-digit-number-in-string/"
    },
    {
        num: 2265,
        title: "Count Nodes Equal to Average of Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/"
    },
    {
        num: 2266,
        title: "Count Number of Texts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-texts/"
    },
    {
        num: 2267,
        title: "Check if There Is a Valid Parentheses String Path",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/"
    },
    {
        num: 2268,
        title: "Minimum Number of Keypresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-keypresses/"
    },
    {
        num: 2269,
        title: "Find the K-Beauty of a Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/"
    },
    {
        num: 2270,
        title: "Number of Ways to Split Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-split-array/"
    },
    {
        num: 2271,
        title: "Maximum White Tiles Covered by a Carpet",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/"
    },
    {
        num: 2272,
        title: "Substring With Largest Variance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-largest-variance/"
    },
    {
        num: 2273,
        title: "Find Resultant Array After Removing Anagrams",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"
    },
    {
        num: 2274,
        title: "Maximum Consecutive Floors Without Special Floors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/"
    },
    {
        num: 2275,
        title: "Largest Combination With Bitwise AND Greater Than Zero",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/"
    },
    {
        num: 2276,
        title: "Count Integers in Intervals",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-integers-in-intervals/"
    },
    {
        num: 2277,
        title: "Closest Node to Path in Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-node-to-path-in-tree/"
    },
    {
        num: 2278,
        title: "Percentage of Letter in String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/percentage-of-letter-in-string/"
    },
    {
        num: 2279,
        title: "Maximum Bags With Full Capacity of Rocks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/"
    },
    {
        num: 2280,
        title: "Minimum Lines to Represent a Line Chart",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/"
    },
    {
        num: 2281,
        title: "Sum of Total Strength of Wizards",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-total-strength-of-wizards/"
    },
    {
        num: 2282,
        title: "Number of People That Can Be Seen in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/"
    },
    {
        num: 2283,
        title: "Check if Number Has Equal Digit Count and Digit Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/"
    },
    {
        num: 2284,
        title: "Sender With Largest Word Count",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sender-with-largest-word-count/"
    },
    {
        num: 2285,
        title: "Maximum Total Importance of Roads",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-total-importance-of-roads/"
    },
    {
        num: 2286,
        title: "Booking Concert Tickets in Groups",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/booking-concert-tickets-in-groups/"
    },
    {
        num: 2287,
        title: "Rearrange Characters to Make Target String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rearrange-characters-to-make-target-string/"
    },
    {
        num: 2288,
        title: "Apply Discount to Prices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-discount-to-prices/"
    },
    {
        num: 2289,
        title: "Steps to Make Array Non-decreasing",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/steps-to-make-array-non-decreasing/"
    },
    {
        num: 2290,
        title: "Minimum Obstacle Removal to Reach Corner",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/"
    },
    {
        num: 2291,
        title: "Maximum Profit From Trading Stocks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-profit-from-trading-stocks/"
    },
    {
        num: 2292,
        title: "Products With Three or More Orders in Two Consecutive Years",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/"
    },
    {
        num: 2293,
        title: "Min Max Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-max-game/"
    },
    {
        num: 2294,
        title: "Partition Array Such That Maximum Difference Is K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/"
    },
    {
        num: 2295,
        title: "Replace Elements in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/replace-elements-in-an-array/"
    },
    {
        num: 2296,
        title: "Design a Text Editor",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-a-text-editor/"
    },
    {
        num: 2297,
        title: "Jump Game VIII",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-viii/"
    },
    {
        num: 2298,
        title: "Tasks Count in the Weekend",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tasks-count-in-the-weekend/"
    },
    {
        num: 2299,
        title: "Strong Password Checker II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/strong-password-checker-ii/"
    },
    {
        num: 2300,
        title: "Successful Pairs of Spells and Potions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/"
    },
    {
        num: 2301,
        title: "Match Substring After Replacement",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/match-substring-after-replacement/"
    },
    {
        num: 2302,
        title: "Count Subarrays With Score Less Than K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/"
    },
    {
        num: 2303,
        title: "Calculate Amount Paid in Taxes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculate-amount-paid-in-taxes/"
    },
    {
        num: 2304,
        title: "Minimum Path Cost in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-cost-in-a-grid/"
    },
    {
        num: 2305,
        title: "Fair Distribution of Cookies",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fair-distribution-of-cookies/"
    },
    {
        num: 2306,
        title: "Naming a Company",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/naming-a-company/"
    },
    {
        num: 2307,
        title: "Check for Contradictions in Equations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-for-contradictions-in-equations/"
    },
    {
        num: 2308,
        title: "Arrange Table by Gender",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arrange-table-by-gender/"
    },
    {
        num: 2309,
        title: "Greatest English Letter in Upper and Lower Case",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/"
    },
    {
        num: 2310,
        title: "Sum of Numbers With Units Digit K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/"
    },
    {
        num: 2311,
        title: "Longest Binary Subsequence Less Than or Equal to K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/"
    },
    {
        num: 2312,
        title: "Selling Pieces of Wood",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/selling-pieces-of-wood/"
    },
    {
        num: 2313,
        title: "Minimum Flips in Binary Tree to Get Result",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/"
    },
    {
        num: 2314,
        title: "The First Day of the Maximum Recorded Degree in Each City",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/"
    },
    {
        num: 2315,
        title: "Count Asterisks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-asterisks/"
    },
    {
        num: 2316,
        title: "Count Unreachable Pairs of Nodes in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/"
    },
    {
        num: 2317,
        title: "Maximum XOR After Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-xor-after-operations/"
    },
    {
        num: 2318,
        title: "Number of Distinct Roll Sequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-distinct-roll-sequences/"
    },
    {
        num: 2319,
        title: "Check if Matrix Is X-Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-matrix-is-x-matrix/"
    },
    {
        num: 2320,
        title: "Count Number of Ways to Place Houses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-ways-to-place-houses/"
    },
    {
        num: 2321,
        title: "Maximum Score Of Spliced Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-of-spliced-array/"
    },
    {
        num: 2322,
        title: "Minimum Score After Removals on a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/"
    },
    {
        num: 2323,
        title: "Find Minimum Time to Finish All Jobs II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/"
    },
    {
        num: 2324,
        title: "Product Sales Analysis IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-sales-analysis-iv/"
    },
    {
        num: 2325,
        title: "Decode the Message",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decode-the-message/"
    },
    {
        num: 2326,
        title: "Spiral Matrix IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-iv/"
    },
    {
        num: 2327,
        title: "Number of People Aware of a Secret",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-people-aware-of-a-secret/"
    },
    {
        num: 2328,
        title: "Number of Increasing Paths in a Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/"
    },
    {
        num: 2329,
        title: "Product Sales Analysis V",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/product-sales-analysis-v/"
    },
    {
        num: 2330,
        title: "Valid Palindrome IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-palindrome-iv/"
    },
    {
        num: 2331,
        title: "Evaluate Boolean Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/evaluate-boolean-binary-tree/"
    },
    {
        num: 2332,
        title: "The Latest Time to Catch a Bus",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-latest-time-to-catch-a-bus/"
    },
    {
        num: 2333,
        title: "Minimum Sum of Squared Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-sum-of-squared-difference/"
    },
    {
        num: 2334,
        title: "Subarray With Elements Greater Than Varying Threshold",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/"
    },
    {
        num: 2335,
        title: "Minimum Amount of Time to Fill Cups",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/"
    },
    {
        num: 2336,
        title: "Smallest Number in Infinite Set",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-number-in-infinite-set/"
    },
    {
        num: 2337,
        title: "Move Pieces to Obtain a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/move-pieces-to-obtain-a-string/"
    },
    {
        num: 2338,
        title: "Count the Number of Ideal Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-the-number-of-ideal-arrays/"
    },
    {
        num: 2339,
        title: "All the Matches of the League",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/all-the-matches-of-the-league/"
    },
    {
        num: 2340,
        title: "Minimum Adjacent Swaps to Make a Valid Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/"
    },
    {
        num: 2341,
        title: "Maximum Number of Pairs in Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array/"
    },
    {
        num: 2342,
        title: "Max Sum of a Pair With Equal Sum of Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/"
    },
    {
        num: 2343,
        title: "Query Kth Smallest Trimmed Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/query-kth-smallest-trimmed-number/"
    },
    {
        num: 2344,
        title: "Minimum Deletions to Make Array Divisible",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/"
    },
    {
        num: 2345,
        title: "Finding the Number of Visible Mountains",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/finding-the-number-of-visible-mountains/"
    },
    {
        num: 2346,
        title: "Compute the Rank as a Percentage",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compute-the-rank-as-a-percentage/"
    },
    {
        num: 2347,
        title: "Best Poker Hand",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-poker-hand/"
    },
    {
        num: 2348,
        title: "Number of Zero-Filled Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/"
    },
    {
        num: 2349,
        title: "Design a Number Container System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-number-container-system/"
    },
    {
        num: 2350,
        title: "Shortest Impossible Sequence of Rolls",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/"
    },
    {
        num: 2351,
        title: "First Letter to Appear Twice",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-letter-to-appear-twice/"
    },
    {
        num: 2352,
        title: "Equal Row and Column Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/equal-row-and-column-pairs/"
    },
    {
        num: 2353,
        title: "Design a Food Rating System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-food-rating-system/"
    },
    {
        num: 2354,
        title: "Number of Excellent Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-excellent-pairs/"
    },
    {
        num: 2355,
        title: "Maximum Number of Books You Can Take",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-books-you-can-take/"
    },
    {
        num: 2356,
        title: "Number of Unique Subjects Taught by Each Teacher",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/"
    },
    {
        num: 2357,
        title: "Make Array Zero by Subtracting Equal Amounts",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/"
    },
    {
        num: 2358,
        title: "Maximum Number of Groups Entering a Competition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/"
    },
    {
        num: 2359,
        title: "Find Closest Node to Given Two Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-closest-node-to-given-two-nodes/"
    },
    {
        num: 2360,
        title: "Longest Cycle in a Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-cycle-in-a-graph/"
    },
    {
        num: 2361,
        title: "Minimum Costs Using the Train Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-costs-using-the-train-line/"
    },
    {
        num: 2362,
        title: "Generate the Invoice",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/generate-the-invoice/"
    },
    {
        num: 2363,
        title: "Merge Similar Items",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-similar-items/"
    },
    {
        num: 2364,
        title: "Count Number of Bad Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-bad-pairs/"
    },
    {
        num: 2365,
        title: "Task Scheduler II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler-ii/"
    },
    {
        num: 2366,
        title: "Minimum Replacements to Sort the Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-replacements-to-sort-the-array/"
    },
    {
        num: 2367,
        title: "Number of Arithmetic Triplets",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-arithmetic-triplets/"
    },
    {
        num: 2368,
        title: "Reachable Nodes With Restrictions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reachable-nodes-with-restrictions/"
    },
    {
        num: 2369,
        title: "Check if There is a Valid Partition For The Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/"
    },
    {
        num: 2370,
        title: "Longest Ideal Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-ideal-subsequence/"
    },
    {
        num: 2371,
        title: "Minimize Maximum Value in a Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-maximum-value-in-a-grid/"
    },
    {
        num: 2372,
        title: "Calculate the Influence of Each Salesperson",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/"
    },
    {
        num: 2373,
        title: "Largest Local Values in a Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-local-values-in-a-matrix/"
    },
    {
        num: 2374,
        title: "Node With Highest Edge Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/node-with-highest-edge-score/"
    },
    {
        num: 2375,
        title: "Construct Smallest Number From DI String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-smallest-number-from-di-string/"
    },
    {
        num: 2376,
        title: "Count Special Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-special-integers/"
    },
    {
        num: 2377,
        title: "Sort the Olympic Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-the-olympic-table/"
    },
    {
        num: 2378,
        title: "Choose Edges to Maximize Score in a Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/"
    },
    {
        num: 2379,
        title: "Minimum Recolors to Get K Consecutive Black Blocks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/"
    },
    {
        num: 2380,
        title: "Time Needed to Rearrange a Binary String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/"
    },
    {
        num: 2381,
        title: "Shifting Letters II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shifting-letters-ii/"
    },
    {
        num: 2382,
        title: "Maximum Segment Sum After Removals",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-segment-sum-after-removals/"
    },
    {
        num: 2383,
        title: "Minimum Hours of Training to Win a Competition",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/"
    },
    {
        num: 2384,
        title: "Largest Palindromic Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-palindromic-number/"
    },
    {
        num: 2385,
        title: "Amount of Time for Binary Tree to Be Infected",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/"
    },
    {
        num: 2386,
        title: "Find the K-Sum of an Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-k-sum-of-an-array/"
    },
    {
        num: 2387,
        title: "Median of a Row Wise Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/"
    },
    {
        num: 2388,
        title: "Change Null Values in a Table to the Previous Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/"
    },
    {
        num: 2389,
        title: "Longest Subsequence With Limited Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-subsequence-with-limited-sum/"
    },
    {
        num: 2390,
        title: "Removing Stars From a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/removing-stars-from-a-string/"
    },
    {
        num: 2391,
        title: "Minimum Amount of Time to Collect Garbage",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/"
    },
    {
        num: 2392,
        title: "Build a Matrix With Conditions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/build-a-matrix-with-conditions/"
    },
    {
        num: 2393,
        title: "Count Strictly Increasing Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-strictly-increasing-subarrays/"
    },
    {
        num: 2394,
        title: "Employees with Deductions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/employees-with-deductions/"
    },
    {
        num: 2395,
        title: "Find Subarrays With Equal Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-subarrays-with-equal-sum/"
    },
    {
        num: 2396,
        title: "Strictly Palindromic Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strictly-palindromic-number/"
    },
    {
        num: 2397,
        title: "Maximum Rows Covered by Columns",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-rows-covered-by-columns/"
    },
    {
        num: 2398,
        title: "Maximum Number of Robots Within Budget",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-robots-within-budget/"
    },
    {
        num: 2399,
        title: "Check Distances Between Same Letters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-distances-between-same-letters/"
    },
    {
        num: 2400,
        title: "Number of Ways to Reach a Position After Exactly k Steps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/"
    },
    {
        num: 2401,
        title: "Longest Nice Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-nice-subarray/"
    },
    {
        num: 2402,
        title: "Meeting Rooms III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/meeting-rooms-iii/"
    },
    {
        num: 2403,
        title: "Minimum Time to Kill All Monsters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-kill-all-monsters/"
    },
    {
        num: 2404,
        title: "Most Frequent Even Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-frequent-even-element/"
    },
    {
        num: 2405,
        title: "Optimal Partition of String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/optimal-partition-of-string/"
    },
    {
        num: 2406,
        title: "Divide Intervals Into Minimum Number of Groups",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/"
    },
    {
        num: 2407,
        title: "Longest Increasing Subsequence II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-subsequence-ii/"
    },
    {
        num: 2408,
        title: "Design SQL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-sql/"
    },
    {
        num: 2409,
        title: "Count Days Spent Together",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-days-spent-together/"
    },
    {
        num: 2410,
        title: "Maximum Matching of Players With Trainers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-matching-of-players-with-trainers/"
    },
    {
        num: 2411,
        title: "Smallest Subarrays With Maximum Bitwise OR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/"
    },
    {
        num: 2412,
        title: "Minimum Money Required Before Transactions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-money-required-before-transactions/"
    },
    {
        num: 2413,
        title: "Smallest Even Multiple",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/smallest-even-multiple/"
    },
    {
        num: 2414,
        title: "Length of the Longest Alphabetical Continuous Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/"
    },
    {
        num: 2415,
        title: "Reverse Odd Levels of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/"
    },
    {
        num: 2416,
        title: "Sum of Prefix Scores of Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-prefix-scores-of-strings/"
    },
    {
        num: 2417,
        title: "Closest Fair Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-fair-integer/"
    },
    {
        num: 2418,
        title: "Sort the People",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-the-people/"
    },
    {
        num: 2419,
        title: "Longest Subarray With Maximum Bitwise AND",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/"
    },
    {
        num: 2420,
        title: "Find All Good Indices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-good-indices/"
    },
    {
        num: 2421,
        title: "Number of Good Paths",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-good-paths/"
    },
    {
        num: 2422,
        title: "Merge Operations to Turn Array Into a Palindrome",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/"
    },
    {
        num: 2423,
        title: "Remove Letter To Equalize Frequency",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-letter-to-equalize-frequency/"
    },
    {
        num: 2424,
        title: "Longest Uploaded Prefix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-uploaded-prefix/"
    },
    {
        num: 2425,
        title: "Bitwise XOR of All Pairings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-xor-of-all-pairings/"
    },
    {
        num: 2426,
        title: "Number of Pairs Satisfying Inequality",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-pairs-satisfying-inequality/"
    },
    {
        num: 2427,
        title: "Number of Common Factors",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-common-factors/"
    },
    {
        num: 2428,
        title: "Maximum Sum of an Hourglass",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-an-hourglass/"
    },
    {
        num: 2429,
        title: "Minimize XOR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-xor/"
    },
    {
        num: 2430,
        title: "Maximum Deletions on a String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-deletions-on-a-string/"
    },
    {
        num: 2431,
        title: "Maximize Total Tastiness of Purchased Fruits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/"
    },
    {
        num: 2432,
        title: "The Employee That Worked on the Longest Task",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/"
    },
    {
        num: 2433,
        title: "Find The Original Array of Prefix Xor",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"
    },
    {
        num: 2434,
        title: "Using a Robot to Print the Lexicographically Smallest String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/"
    },
    {
        num: 2435,
        title: "Paths in Matrix Whose Sum Is Divisible by K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/"
    },
    {
        num: 2436,
        title: "Minimum Split Into Subarrays With GCD Greater Than One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/"
    },
    {
        num: 2437,
        title: "Number of Valid Clock Times",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-valid-clock-times/"
    },
    {
        num: 2438,
        title: "Range Product Queries of Powers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-product-queries-of-powers/"
    },
    {
        num: 2439,
        title: "Minimize Maximum of Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-maximum-of-array/"
    },
    {
        num: 2440,
        title: "Create Components With Same Value",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/create-components-with-same-value/"
    },
    {
        num: 2441,
        title: "Largest Positive Integer That Exists With Its Negative",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/"
    },
    {
        num: 2442,
        title: "Count Number of Distinct Integers After Reverse Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/"
    },
    {
        num: 2443,
        title: "Sum of Number and Its Reverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-number-and-its-reverse/"
    },
    {
        num: 2444,
        title: "Count Subarrays With Fixed Bounds",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/"
    },
    {
        num: 2445,
        title: "Number of Nodes With Value One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-nodes-with-value-one/"
    },
    {
        num: 2446,
        title: "Determine if Two Events Have Conflict",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-if-two-events-have-conflict/"
    },
    {
        num: 2447,
        title: "Number of Subarrays With GCD Equal to K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/"
    },
    {
        num: 2448,
        title: "Minimum Cost to Make Array Equal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-make-array-equal/"
    },
    {
        num: 2449,
        title: "Minimum Number of Operations to Make Arrays Similar",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/"
    },
    {
        num: 2450,
        title: "Number of Distinct Binary Strings After Applying Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/"
    },
    {
        num: 2451,
        title: "Odd String Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/odd-string-difference/"
    },
    {
        num: 2452,
        title: "Words Within Two Edits of Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/words-within-two-edits-of-dictionary/"
    },
    {
        num: 2453,
        title: "Destroy Sequential Targets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/destroy-sequential-targets/"
    },
    {
        num: 2454,
        title: "Next Greater Element IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/next-greater-element-iv/"
    },
    {
        num: 2455,
        title: "Average Value of Even Numbers That Are Divisible by Three",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/"
    },
    {
        num: 2456,
        title: "Most Popular Video Creator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-popular-video-creator/"
    },
    {
        num: 2457,
        title: "Minimum Addition to Make Integer Beautiful",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/"
    },
    {
        num: 2458,
        title: "Height of Binary Tree After Subtree Removal Queries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/"
    },
    {
        num: 2459,
        title: "Sort Array by Moving Items to Empty Space",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/"
    },
    {
        num: 2460,
        title: "Apply Operations to an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/apply-operations-to-an-array/"
    },
    {
        num: 2461,
        title: "Maximum Sum of Distinct Subarrays With Length K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/"
    },
    {
        num: 2462,
        title: "Total Cost to Hire K Workers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/total-cost-to-hire-k-workers/"
    },
    {
        num: 2463,
        title: "Minimum Total Distance Traveled",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-total-distance-traveled/"
    },
    {
        num: 2464,
        title: "Minimum Subarrays in a Valid Split",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/"
    },
    {
        num: 2465,
        title: "Number of Distinct Averages",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-distinct-averages/"
    },
    {
        num: 2466,
        title: "Count Ways To Build Good Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-ways-to-build-good-strings/"
    },
    {
        num: 2467,
        title: "Most Profitable Path in a Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-profitable-path-in-a-tree/"
    },
    {
        num: 2468,
        title: "Split Message Based on Limit",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-message-based-on-limit/"
    },
    {
        num: 2469,
        title: "Convert the Temperature",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-the-temperature/"
    },
    {
        num: 2470,
        title: "Number of Subarrays With LCM Equal to K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/"
    },
    {
        num: 2471,
        title: "Minimum Number of Operations to Sort a Binary Tree by Level",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/"
    },
    {
        num: 2472,
        title: "Maximum Number of Non-Overlapping Palindrome Substrings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/"
    },
    {
        num: 2473,
        title: "Minimum Cost to Buy Apples",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-buy-apples/"
    },
    {
        num: 2474,
        title: "Customers With Strictly Increasing Purchases",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/customers-with-strictly-increasing-purchases/"
    },
    {
        num: 2475,
        title: "Number of Unequal Triplets in Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-unequal-triplets-in-array/"
    },
    {
        num: 2476,
        title: "Closest Nodes Queries in a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/"
    },
    {
        num: 2477,
        title: "Minimum Fuel Cost to Report to the Capital",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/"
    },
    {
        num: 2478,
        title: "Number of Beautiful Partitions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-beautiful-partitions/"
    },
    {
        num: 2479,
        title: "Maximum XOR of Two Non-Overlapping Subtrees",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/"
    },
    {
        num: 2480,
        title: "Form a Chemical Bond",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/form-a-chemical-bond/"
    },
    {
        num: 2481,
        title: "Minimum Cuts to Divide a Circle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/"
    },
    {
        num: 2482,
        title: "Difference Between Ones and Zeros in Row and Column",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/"
    },
    {
        num: 2483,
        title: "Minimum Penalty for a Shop",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-penalty-for-a-shop/"
    },
    {
        num: 2484,
        title: "Count Palindromic Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-palindromic-subsequences/"
    },
    {
        num: 2485,
        title: "Find the Pivot Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-pivot-integer/"
    },
    {
        num: 2486,
        title: "Append Characters to String to Make Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/"
    },
    {
        num: 2487,
        title: "Remove Nodes From Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nodes-from-linked-list/"
    },
    {
        num: 2488,
        title: "Count Subarrays With Median K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-subarrays-with-median-k/"
    },
    {
        num: 2489,
        title: "Number of Substrings With Fixed Ratio",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/"
    },
    {
        num: 2490,
        title: "Circular Sentence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/circular-sentence/"
    },
    {
        num: 2491,
        title: "Divide Players Into Teams of Equal Skill",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/"
    },
    {
        num: 2492,
        title: "Minimum Score of a Path Between Two Cities",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/"
    },
    {
        num: 2493,
        title: "Divide Nodes Into the Maximum Number of Groups",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/"
    },
    {
        num: 2494,
        title: "Merge Overlapping Events in the Same Hall",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/"
    },
    {
        num: 2495,
        title: "Number of Subarrays Having Even Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-having-even-product/"
    },
    {
        num: 2496,
        title: "Maximum Value of a String in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/"
    },
    {
        num: 2497,
        title: "Maximum Star Sum of a Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-star-sum-of-a-graph/"
    },
    {
        num: 2498,
        title: "Frog Jump II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/frog-jump-ii/"
    },
    {
        num: 2499,
        title: "Minimum Total Cost to Make Arrays Unequal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/"
    },
    {
        num: 2500,
        title: "Delete Greatest Value in Each Row",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-greatest-value-in-each-row/"
    },
    {
        num: 2501,
        title: "Longest Square Streak in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-square-streak-in-an-array/"
    },
    {
        num: 2502,
        title: "Design Memory Allocator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-memory-allocator/"
    },
    {
        num: 2503,
        title: "Maximum Number of Points from Grid Queries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/"
    },
    {
        num: 2504,
        title: "Concatenate the Name and the Profession",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/concatenate-the-name-and-the-profession/"
    },
    {
        num: 2505,
        title: "Bitwise OR of All Subsequence Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/"
    },
    {
        num: 2506,
        title: "Count Pairs Of Similar Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-pairs-of-similar-strings/"
    },
    {
        num: 2507,
        title: "Smallest Value After Replacing With Sum of Prime Factors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/"
    },
    {
        num: 2508,
        title: "Add Edges to Make Degrees of All Nodes Even",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/"
    },
    {
        num: 2509,
        title: "Cycle Length Queries in a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cycle-length-queries-in-a-tree/"
    },
    {
        num: 2510,
        title: "Check if There is a Path With Equal Number of 0's And 1's",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/"
    },
    {
        num: 2511,
        title: "Maximum Enemy Forts That Can Be Captured",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/"
    },
    {
        num: 2512,
        title: "Reward Top K Students",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reward-top-k-students/"
    },
    {
        num: 2513,
        title: "Minimize the Maximum of Two Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/"
    },
    {
        num: 2514,
        title: "Count Anagrams",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-anagrams/"
    },
    {
        num: 2515,
        title: "Shortest Distance to Target String in a Circular Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/"
    },
    {
        num: 2516,
        title: "Take K of Each Character From Left and Right",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/"
    },
    {
        num: 2517,
        title: "Maximum Tastiness of Candy Basket",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-tastiness-of-candy-basket/"
    },
    {
        num: 2518,
        title: "Number of Great Partitions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-great-partitions/"
    },
    {
        num: 2519,
        title: "Count the Number of K-Big Indices",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-the-number-of-k-big-indices/"
    },
    {
        num: 2520,
        title: "Count the Digits That Divide a Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-the-digits-that-divide-a-number/"
    },
    {
        num: 2521,
        title: "Distinct Prime Factors of Product of Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/"
    },
    {
        num: 2522,
        title: "Partition String Into Substrings With Values at Most K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/"
    },
    {
        num: 2523,
        title: "Closest Prime Numbers in Range",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-prime-numbers-in-range/"
    },
    {
        num: 2524,
        title: "Maximum Frequency Score of a Subarray",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/"
    },
    {
        num: 2525,
        title: "Categorize Box According to Criteria",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/categorize-box-according-to-criteria/"
    },
    {
        num: 2526,
        title: "Find Consecutive Integers from a Data Stream",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/"
    },
    {
        num: 2527,
        title: "Find Xor-Beauty of Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-xor-beauty-of-array/"
    },
    {
        num: 2528,
        title: "Maximize the Minimum Powered City",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-the-minimum-powered-city/"
    },
    {
        num: 2529,
        title: "Maximum Count of Positive Integer and Negative Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/"
    },
    {
        num: 2530,
        title: "Maximal Score After Applying K Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-score-after-applying-k-operations/"
    },
    {
        num: 2531,
        title: "Make Number of Distinct Characters Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-number-of-distinct-characters-equal/"
    },
    {
        num: 2532,
        title: "Time to Cross a Bridge",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/time-to-cross-a-bridge/"
    },
    {
        num: 2533,
        title: "Number of Good Binary Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-good-binary-strings/"
    },
    {
        num: 2534,
        title: "Time Taken to Cross the Door",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/time-taken-to-cross-the-door/"
    },
    {
        num: 2535,
        title: "Difference Between Element Sum and Digit Sum of an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/"
    },
    {
        num: 2536,
        title: "Increment Submatrices by One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increment-submatrices-by-one/"
    },
    {
        num: 2537,
        title: "Count the Number of Good Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-good-subarrays/"
    },
    {
        num: 2538,
        title: "Difference Between Maximum and Minimum Price Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/"
    },
    {
        num: 2539,
        title: "Count the Number of Good Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-good-subsequenses/"
    },
    {
        num: 2540,
        title: "Minimum Common Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-common-value/"
    },
    {
        num: 2541,
        title: "Minimum Operations to Make Array Equal II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/"
    },
    {
        num: 2542,
        title: "Maximum Subsequence Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subsequence-score/"
    },
    {
        num: 2543,
        title: "Check if Point Is Reachable",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-point-is-reachable/"
    },
    {
        num: 2544,
        title: "Alternating Digit Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/alternating-digit-sum/"
    },
    {
        num: 2545,
        title: "Sort the Students by Their Kth Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-the-students-by-their-kth-score/"
    },
    {
        num: 2546,
        title: "Apply Bitwise Operations to Make Strings Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/"
    },
    {
        num: 2547,
        title: "Minimum Cost to Split an Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-split-an-array/"
    },
    {
        num: 2548,
        title: "Maximum Price to Fill a Bag",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-price-to-fill-a-bag/"
    },
    {
        num: 2549,
        title: "Count Distinct Numbers on Board",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-distinct-numbers-on-board/"
    },
    {
        num: 2550,
        title: "Count Collisions of Monkeys on a Polygon",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/"
    },
    {
        num: 2551,
        title: "Put Marbles in Bags",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/put-marbles-in-bags/"
    },
    {
        num: 2552,
        title: "Count Increasing Quadruplets",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-increasing-quadruplets/"
    },
    {
        num: 2553,
        title: "Separate the Digits in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/separate-the-digits-in-an-array/"
    },
    {
        num: 2554,
        title: "Maximum Number of Integers to Choose From a Range I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/"
    },
    {
        num: 2555,
        title: "Maximize Win From Two Segments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-win-from-two-segments/"
    },
    {
        num: 2556,
        title: "Disconnect Path in a Binary Matrix by at Most One Flip",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/"
    },
    {
        num: 2557,
        title: "Maximum Number of Integers to Choose From a Range II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/"
    },
    {
        num: 2558,
        title: "Take Gifts From the Richest Pile",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/"
    },
    {
        num: 2559,
        title: "Count Vowel Strings in Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-vowel-strings-in-ranges/"
    },
    {
        num: 2560,
        title: "House Robber IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iv/"
    },
    {
        num: 2561,
        title: "Rearranging Fruits",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearranging-fruits/"
    },
    {
        num: 2562,
        title: "Find the Array Concatenation Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-array-concatenation-value/"
    },
    {
        num: 2563,
        title: "Count the Number of Fair Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-fair-pairs/"
    },
    {
        num: 2564,
        title: "Substring XOR Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/substring-xor-queries/"
    },
    {
        num: 2565,
        title: "Subsequence With the Minimum Score",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subsequence-with-the-minimum-score/"
    },
    {
        num: 2566,
        title: "Maximum Difference by Remapping a Digit",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/"
    },
    {
        num: 2567,
        title: "Minimum Score by Changing Two Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-score-by-changing-two-elements/"
    },
    {
        num: 2568,
        title: "Minimum Impossible OR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-impossible-or/"
    },
    {
        num: 2569,
        title: "Handling Sum Queries After Update",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/handling-sum-queries-after-update/"
    },
    {
        num: 2570,
        title: "Merge Two 2D Arrays by Summing Values",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/"
    },
    {
        num: 2571,
        title: "Minimum Operations to Reduce an Integer to 0",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"
    },
    {
        num: 2572,
        title: "Count the Number of Square-Free Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-square-free-subsets/"
    },
    {
        num: 2573,
        title: "Find the String with LCP",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-string-with-lcp/"
    },
    {
        num: 2574,
        title: "Left and Right Sum Differences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/left-and-right-sum-differences/"
    },
    {
        num: 2575,
        title: "Find the Divisibility Array of a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-divisibility-array-of-a-string/"
    },
    {
        num: 2576,
        title: "Find the Maximum Number of Marked Indices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/"
    },
    {
        num: 2577,
        title: "Minimum Time to Visit a Cell In a Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/"
    },
    {
        num: 2578,
        title: "Split With Minimum Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-with-minimum-sum/"
    },
    {
        num: 2579,
        title: "Count Total Number of Colored Cells",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-total-number-of-colored-cells/"
    },
    {
        num: 2580,
        title: "Count Ways to Group Overlapping Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/"
    },
    {
        num: 2581,
        title: "Count Number of Possible Root Nodes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-number-of-possible-root-nodes/"
    },
    {
        num: 2582,
        title: "Pass the Pillow",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pass-the-pillow/"
    },
    {
        num: 2583,
        title: "Kth Largest Sum in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/"
    },
    {
        num: 2584,
        title: "Split the Array to Make Coprime Products",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-the-array-to-make-coprime-products/"
    },
    {
        num: 2585,
        title: "Number of Ways to Earn Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-earn-points/"
    },
    {
        num: 2586,
        title: "Count the Number of Vowel Strings in Range",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/"
    },
    {
        num: 2587,
        title: "Rearrange Array to Maximize Prefix Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/"
    },
    {
        num: 2588,
        title: "Count the Number of Beautiful Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/"
    },
    {
        num: 2589,
        title: "Minimum Time to Complete All Tasks",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-complete-all-tasks/"
    },
    {
        num: 2590,
        title: "Design a Todo List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-todo-list/"
    },
    {
        num: 2591,
        title: "Distribute Money to Maximum Children",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/distribute-money-to-maximum-children/"
    },
    {
        num: 2592,
        title: "Maximize Greatness of an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-greatness-of-an-array/"
    },
    {
        num: 2593,
        title: "Find Score of an Array After Marking All Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/"
    },
    {
        num: 2594,
        title: "Minimum Time to Repair Cars",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-to-repair-cars/"
    },
    {
        num: 2595,
        title: "Number of Even and Odd Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-even-and-odd-bits/"
    },
    {
        num: 2596,
        title: "Check Knight Tour Configuration",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-knight-tour-configuration/"
    },
    {
        num: 2597,
        title: "The Number of Beautiful Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-number-of-beautiful-subsets/"
    },
    {
        num: 2598,
        title: "Smallest Missing Non-negative Integer After Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/"
    },
    {
        num: 2599,
        title: "Make the Prefix Sum Non-negative",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-the-prefix-sum-non-negative/"
    },
    {
        num: 2600,
        title: "K Items With the Maximum Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/k-items-with-the-maximum-sum/"
    },
    {
        num: 2601,
        title: "Prime Subtraction Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prime-subtraction-operation/"
    },
    {
        num: 2602,
        title: "Minimum Operations to Make All Array Elements Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/"
    },
    {
        num: 2603,
        title: "Collect Coins in a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/collect-coins-in-a-tree/"
    },
    {
        num: 2604,
        title: "Minimum Time to Eat All Grains",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-eat-all-grains/"
    },
    {
        num: 2605,
        title: "Form Smallest Number From Two Digit Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/"
    },
    {
        num: 2606,
        title: "Find the Substring With Maximum Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-substring-with-maximum-cost/"
    },
    {
        num: 2607,
        title: "Make K-Subarray Sums Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-k-subarray-sums-equal/"
    },
    {
        num: 2608,
        title: "Shortest Cycle in a Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-cycle-in-a-graph/"
    },
    {
        num: 2609,
        title: "Find the Longest Balanced Substring of a Binary String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/"
    },
    {
        num: 2610,
        title: "Convert an Array Into a 2D Array With Conditions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/"
    },
    {
        num: 2611,
        title: "Mice and Cheese",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/mice-and-cheese/"
    },
    {
        num: 2612,
        title: "Minimum Reverse Operations",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-reverse-operations/"
    },
    {
        num: 2613,
        title: "Beautiful Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/beautiful-pairs/"
    },
    {
        num: 2614,
        title: "Prime In Diagonal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/prime-in-diagonal/"
    },
    {
        num: 2615,
        title: "Sum of Distances",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-distances/"
    },
    {
        num: 2616,
        title: "Minimize the Maximum Difference of Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/"
    },
    {
        num: 2617,
        title: "Minimum Number of Visited Cells in a Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/"
    },
    {
        num: 2618,
        title: "Check if Object Instance of Class",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-object-instance-of-class/"
    },
    {
        num: 2619,
        title: "Array Prototype Last",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-prototype-last/"
    },
    {
        num: 2620,
        title: "Counter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counter/"
    },
    {
        num: 2621,
        title: "Sleep",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sleep/"
    },
    {
        num: 2622,
        title: "Cache With Time Limit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cache-with-time-limit/"
    },
    {
        num: 2623,
        title: "Memoize",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/memoize/"
    },
    {
        num: 2624,
        title: "Snail Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snail-traversal/"
    },
    {
        num: 2625,
        title: "Flatten Deeply Nested Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-deeply-nested-array/"
    },
    {
        num: 2626,
        title: "Array Reduce Transformation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-reduce-transformation/"
    },
    {
        num: 2627,
        title: "Debounce",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/debounce/"
    },
    {
        num: 2628,
        title: "JSON Deep Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/json-deep-equal/"
    },
    {
        num: 2629,
        title: "Function Composition",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/function-composition/"
    },
    {
        num: 2630,
        title: "Memoize II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/memoize-ii/"
    },
    {
        num: 2631,
        title: "Group By",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-by/"
    },
    {
        num: 2632,
        title: "Curry",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/curry/"
    },
    {
        num: 2633,
        title: "Convert Object to JSON String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-object-to-json-string/"
    },
    {
        num: 2634,
        title: "Filter Elements from Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/filter-elements-from-array/"
    },
    {
        num: 2635,
        title: "Apply Transform Over Each Element in Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/apply-transform-over-each-element-in-array/"
    },
    {
        num: 2636,
        title: "Promise Pool",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/promise-pool/"
    },
    {
        num: 2637,
        title: "Promise Time Limit",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/promise-time-limit/"
    },
    {
        num: 2638,
        title: "Count the Number of K-Free Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-k-free-subsets/"
    },
    {
        num: 2639,
        title: "Find the Width of Columns of a Grid",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/"
    },
    {
        num: 2640,
        title: "Find the Score of All Prefixes of an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/"
    },
    {
        num: 2641,
        title: "Cousins in Binary Tree II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cousins-in-binary-tree-ii/"
    },
    {
        num: 2642,
        title: "Design Graph With Shortest Path Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-graph-with-shortest-path-calculator/"
    },
    {
        num: 2643,
        title: "Row With Maximum Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/row-with-maximum-ones/"
    },
    {
        num: 2644,
        title: "Find the Maximum Divisibility Score",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-maximum-divisibility-score/"
    },
    {
        num: 2645,
        title: "Minimum Additions to Make Valid String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-additions-to-make-valid-string/"
    },
    {
        num: 2646,
        title: "Minimize the Total Price of the Trips",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-the-total-price-of-the-trips/"
    },
    {
        num: 2647,
        title: "Color the Triangle Red",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/color-the-triangle-red/"
    },
    {
        num: 2648,
        title: "Generate Fibonacci Sequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/generate-fibonacci-sequence/"
    },
    {
        num: 2649,
        title: "Nested Array Generator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nested-array-generator/"
    },
    {
        num: 2650,
        title: "Design Cancellable Function",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-cancellable-function/"
    },
    {
        num: 2651,
        title: "Calculate Delayed Arrival Time",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculate-delayed-arrival-time/"
    },
    {
        num: 2652,
        title: "Sum Multiples",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-multiples/"
    },
    {
        num: 2653,
        title: "Sliding Subarray Beauty",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sliding-subarray-beauty/"
    },
    {
        num: 2654,
        title: "Minimum Number of Operations to Make All Array Elements Equal to 1",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/"
    },
    {
        num: 2655,
        title: "Find Maximal Uncovered Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-maximal-uncovered-ranges/"
    },
    {
        num: 2656,
        title: "Maximum Sum With Exactly K Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/"
    },
    {
        num: 2657,
        title: "Find the Prefix Common Array of Two Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/"
    },
    {
        num: 2658,
        title: "Maximum Number of Fish in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/"
    },
    {
        num: 2659,
        title: "Make Array Empty",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-array-empty/"
    },
    {
        num: 2660,
        title: "Determine the Winner of a Bowling Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/"
    },
    {
        num: 2661,
        title: "First Completely Painted Row or Column",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/first-completely-painted-row-or-column/"
    },
    {
        num: 2662,
        title: "Minimum Cost of a Path With Special Roads",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/"
    },
    {
        num: 2663,
        title: "Lexicographically Smallest Beautiful String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lexicographically-smallest-beautiful-string/"
    },
    {
        num: 2664,
        title: "The Knight's Tour",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-knights-tour/"
    },
    {
        num: 2665,
        title: "Counter III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counter-iii/"
    },
    {
        num: 2666,
        title: "Allow One Function Call",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/allow-one-function-call/"
    },
    {
        num: 2667,
        title: "Create Hello World Function",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-hello-world-function/"
    },
    {
        num: 2668,
        title: "Find Latest Salaries",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-latest-salaries/"
    },
    {
        num: 2669,
        title: "Count Artist Occurences on Spotify Ranking List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/"
    },
    {
        num: 2670,
        title: "Find the Distinct Difference Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-distinct-difference-array/"
    },
    {
        num: 2671,
        title: "Frequency Tracker",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/frequency-tracker/"
    },
    {
        num: 2672,
        title: "Number of Adjacent Elements With the Same Color",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/"
    },
    {
        num: 2673,
        title: "Make Costs of Paths Equal in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/"
    },
    {
        num: 2674,
        title: "Split a Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-a-circular-linked-list/"
    },
    {
        num: 2675,
        title: "Array of Objects to Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/array-of-objects-to-matrix/"
    },
    {
        num: 2676,
        title: "Throttle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/throttle/"
    },
    {
        num: 2677,
        title: "Chunk Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/chunk-array/"
    },
    {
        num: 2678,
        title: "Number of Senior Citizens",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-senior-citizens/"
    },
    {
        num: 2679,
        title: "Sum in a Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-in-a-matrix/"
    },
    {
        num: 2680,
        title: "Maximum OR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-or/"
    },
    {
        num: 2681,
        title: "Power of Heroes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/power-of-heroes/"
    },
    {
        num: 2682,
        title: "Find the Losers of the Circular Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-losers-of-the-circular-game/"
    },
    {
        num: 2683,
        title: "Neighboring Bitwise XOR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/neighboring-bitwise-xor/"
    },
    {
        num: 2684,
        title: "Maximum Number of Moves in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/"
    },
    {
        num: 2685,
        title: "Count the Number of Complete Components",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-the-number-of-complete-components/"
    },
    {
        num: 2686,
        title: "Immediate Food Delivery III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/immediate-food-delivery-iii/"
    },
    {
        num: 2687,
        title: "Bikes Last Time Used",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bikes-last-time-used/"
    },
    {
        num: 2688,
        title: "Find Active Users",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-active-users/"
    },
    {
        num: 2689,
        title: "Extract Kth Character From The Rope Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/"
    },
    {
        num: 2690,
        title: "Infinite Method Object",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/infinite-method-object/"
    },
    {
        num: 2691,
        title: "Immutability Helper",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/immutability-helper/"
    },
    {
        num: 2692,
        title: "Make Objects Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-object-immutable/"
    },
    {
        num: 2693,
        title: "Call Function with Custom Context",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/call-function-with-custom-context/"
    },
    {
        num: 2694,
        title: "Event Emitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/event-emitter/"
    },
    {
        num: 2695,
        title: "Array Wrapper",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-wrapper/"
    },
    {
        num: 2696,
        title: "Minimum String Length After Removing Substrings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-string-length-after-removing-substrings/"
    },
    {
        num: 2697,
        title: "Lexicographically Smallest Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lexicographically-smallest-palindrome/"
    },
    {
        num: 2698,
        title: "Find the Punishment Number of an Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-punishment-number-of-an-integer/"
    },
    {
        num: 2699,
        title: "Modify Graph Edge Weights",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/modify-graph-edge-weights/"
    },
    {
        num: 2700,
        title: "Differences Between Two Objects",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/differences-between-two-objects/"
    },
    {
        num: 2701,
        title: "Consecutive Transactions with Increasing Amounts",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/"
    },
    {
        num: 2702,
        title: "Minimum Operations to Make Numbers Non-positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/"
    },
    {
        num: 2703,
        title: "Return Length of Arguments Passed",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/return-length-of-arguments-passed/"
    },
    {
        num: 2704,
        title: "To Be Or Not To Be",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/to-be-or-not-to-be/"
    },
    {
        num: 2705,
        title: "Compact Object",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compact-object/"
    },
    {
        num: 2706,
        title: "Buy Two Chocolates",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/buy-two-chocolates/"
    },
    {
        num: 2707,
        title: "Extra Characters in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/extra-characters-in-a-string/"
    },
    {
        num: 2708,
        title: "Maximum Strength of a Group",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-strength-of-a-group/"
    },
    {
        num: 2709,
        title: "Greatest Common Divisor Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/greatest-common-divisor-traversal/"
    },
    {
        num: 2710,
        title: "Remove Trailing Zeros From a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-trailing-zeros-from-a-string/"
    },
    {
        num: 2711,
        title: "Difference of Number of Distinct Values on Diagonals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/"
    },
    {
        num: 2712,
        title: "Minimum Cost to Make All Characters Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/"
    },
    {
        num: 2713,
        title: "Maximum Strictly Increasing Cells in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/"
    },
    {
        num: 2714,
        title: "Find Shortest Path with K Hops",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-shortest-path-with-k-hops/"
    },
    {
        num: 2715,
        title: "Timeout Cancellation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/timeout-cancellation/"
    },
    {
        num: 2716,
        title: "Minimize String Length",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimize-string-length/"
    },
    {
        num: 2717,
        title: "Semi-Ordered Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/semi-ordered-permutation/"
    },
    {
        num: 2718,
        title: "Sum of Matrix After Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-matrix-after-queries/"
    },
    {
        num: 2719,
        title: "Count of Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-integers/"
    },
    {
        num: 2720,
        title: "Popularity Percentage",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/popularity-percentage/"
    },
    {
        num: 2721,
        title: "Execute Asynchronous Functions in Parallel",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/"
    },
    {
        num: 2722,
        title: "Join Two Arrays by ID",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/join-two-arrays-by-id/"
    },
    {
        num: 2723,
        title: "Add Two Promises",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-two-promises/"
    },
    {
        num: 2724,
        title: "Sort By",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-by/"
    },
    {
        num: 2725,
        title: "Interval Cancellation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/interval-cancellation/"
    },
    {
        num: 2726,
        title: "Calculator with Method Chaining",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/calculator-with-method-chaining/"
    },
    {
        num: 2727,
        title: "Is Object Empty",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-object-empty/"
    },
    {
        num: 2728,
        title: "Count Houses in a Circular Street",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-houses-in-a-circular-street/"
    },
    {
        num: 2729,
        title: "Check if The Number is Fascinating",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-the-number-is-fascinating/"
    },
    {
        num: 2730,
        title: "Find the Longest Semi-Repetitive Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/"
    },
    {
        num: 2731,
        title: "Movement of Robots",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/movement-of-robots/"
    },
    {
        num: 2732,
        title: "Find a Good Subset of the Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-a-good-subset-of-the-matrix/"
    },
    {
        num: 2733,
        title: "Neither Minimum nor Maximum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/neither-minimum-nor-maximum/"
    },
    {
        num: 2734,
        title: "Lexicographically Smallest String After Substring Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/"
    },
    {
        num: 2735,
        title: "Collecting Chocolates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/collecting-chocolates/"
    },
    {
        num: 2736,
        title: "Maximum Sum Queries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-queries/"
    },
    {
        num: 2737,
        title: "Find the Closest Marked Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-closest-marked-node/"
    },
    {
        num: 2738,
        title: "Count Occurrences in Text",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-occurrences-in-text/"
    },
    {
        num: 2739,
        title: "Total Distance Traveled",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/total-distance-traveled/"
    },
    {
        num: 2740,
        title: "Find the Value of the Partition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-value-of-the-partition/"
    },
    {
        num: 2741,
        title: "Special Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/special-permutations/"
    },
    {
        num: 2742,
        title: "Painting the Walls",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/painting-the-walls/"
    },
    {
        num: 2743,
        title: "Count Substrings Without Repeating Character",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-substrings-without-repeating-character/"
    },
    {
        num: 2744,
        title: "Find Maximum Number of String Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-maximum-number-of-string-pairs/"
    },
    {
        num: 2745,
        title: "Construct the Longest New String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-the-longest-new-string/"
    },
    {
        num: 2746,
        title: "Decremental String Concatenation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decremental-string-concatenation/"
    },
    {
        num: 2747,
        title: "Count Zero Request Servers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-zero-request-servers/"
    },
    {
        num: 2748,
        title: "Number of Beautiful Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-beautiful-pairs/"
    },
    {
        num: 2749,
        title: "Minimum Operations to Make the Integer Zero",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/"
    },
    {
        num: 2750,
        title: "Ways to Split Array Into Good Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/"
    },
    {
        num: 2751,
        title: "Robot Collisions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/robot-collisions/"
    },
    {
        num: 2752,
        title: "Customers with Maximum Number of Transactions on Consecutive Days",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/"
    },
    {
        num: 2753,
        title: "Count Houses in a Circular Street II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-houses-in-a-circular-street-ii/"
    },
    {
        num: 2754,
        title: "Bind Function to Context",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bind-function-to-context/"
    },
    {
        num: 2755,
        title: "Deep Merge of Two Objects",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/deep-merge-of-two-objects/"
    },
    {
        num: 2756,
        title: "Query Batching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/query-batching/"
    },
    {
        num: 2757,
        title: "Generate Circular Array Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-circular-array-values/"
    },
    {
        num: 2758,
        title: "Next Day",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-day/"
    },
    {
        num: 2759,
        title: "Convert JSON String to Object",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/convert-json-string-to-object/"
    },
    {
        num: 2760,
        title: "Longest Even Odd Subarray With Threshold",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/"
    },
    {
        num: 2761,
        title: "Prime Pairs With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prime-pairs-with-target-sum/"
    },
    {
        num: 2762,
        title: "Continuous Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarrays/"
    },
    {
        num: 2763,
        title: "Sum of Imbalance Numbers of All Subarrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/"
    },
    {
        num: 2764,
        title: "Is Array a Preorder of Some ‌Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/"
    },
    {
        num: 2765,
        title: "Longest Alternating Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-alternating-subarray/"
    },
    {
        num: 2766,
        title: "Relocate Marbles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/relocate-marbles/"
    },
    {
        num: 2767,
        title: "Partition String Into Minimum Beautiful Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/"
    },
    {
        num: 2768,
        title: "Number of Black Blocks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-black-blocks/"
    },
    {
        num: 2769,
        title: "Find the Maximum Achievable Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-maximum-achievable-number/"
    },
    {
        num: 2770,
        title: "Maximum Number of Jumps to Reach the Last Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/"
    },
    {
        num: 2771,
        title: "Longest Non-decreasing Subarray From Two Arrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/"
    },
    {
        num: 2772,
        title: "Apply Operations to Make All Array Elements Equal to Zero",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/"
    },
    {
        num: 2773,
        title: "Height of Special Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/height-of-special-binary-tree/"
    },
    {
        num: 2774,
        title: "Array Upper Bound",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-upper-bound/"
    },
    {
        num: 2775,
        title: "Undefined to Null",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/undefined-to-null/"
    },
    {
        num: 2776,
        title: "Convert Callback Based Function to Promise Based Function",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/"
    },
    {
        num: 2777,
        title: "Date Range Generator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/date-range-generator/"
    },
    {
        num: 2778,
        title: "Sum of Squares of Special Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-squares-of-special-elements/"
    },
    {
        num: 2779,
        title: "Maximum Beauty of an Array After Applying Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/"
    },
    {
        num: 2780,
        title: "Minimum Index of a Valid Split",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-index-of-a-valid-split/"
    },
    {
        num: 2781,
        title: "Length of the Longest Valid Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/length-of-the-longest-valid-substring/"
    },
    {
        num: 2782,
        title: "Number of Unique Categories",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-unique-categories/"
    },
    {
        num: 2783,
        title: "Flight Occupancy and Waitlist Analysis",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/"
    },
    {
        num: 2784,
        title: "Check if Array is Good",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-array-is-good/"
    },
    {
        num: 2785,
        title: "Sort Vowels in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-vowels-in-a-string/"
    },
    {
        num: 2786,
        title: "Visit Array Positions to Maximize Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/visit-array-positions-to-maximize-score/"
    },
    {
        num: 2787,
        title: "Ways to Express an Integer as Sum of Powers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/"
    },
    {
        num: 2788,
        title: "Split Strings by Separator",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-strings-by-separator/"
    },
    {
        num: 2789,
        title: "Largest Element in an Array after Merge Operations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/"
    },
    {
        num: 2790,
        title: "Maximum Number of Groups With Increasing Length",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/"
    },
    {
        num: 2791,
        title: "Count Paths That Can Form a Palindrome in a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/"
    },
    {
        num: 2792,
        title: "Count Nodes That Are Great Enough",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-nodes-that-are-great-enough/"
    },
    {
        num: 2793,
        title: "Status of Flight Tickets",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/status-of-flight-tickets/"
    },
    {
        num: 2794,
        title: "Create Object from Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-object-from-two-arrays/"
    },
    {
        num: 2795,
        title: "Parallel Execution of Promises for Individual Results Retrieval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/"
    },
    {
        num: 2796,
        title: "Repeat String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeat-string/"
    },
    {
        num: 2797,
        title: "Partial Function with Placeholders",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/partial-function-with-placeholders/"
    },
    {
        num: 2798,
        title: "Number of Employees Who Met the Target",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-employees-who-met-the-target/"
    },
    {
        num: 2799,
        title: "Count Complete Subarrays in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-complete-subarrays-in-an-array/"
    },
    {
        num: 2800,
        title: "Shortest String That Contains Three Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-string-that-contains-three-strings/"
    },
    {
        num: 2801,
        title: "Count Stepping Numbers in Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-stepping-numbers-in-range/"
    },
    {
        num: 2802,
        title: "Find The K-th Lucky Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-k-th-lucky-number/"
    },
    {
        num: 2803,
        title: "Factorial Generator",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/factorial-generator/"
    },
    {
        num: 2804,
        title: "Array Prototype ForEach",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-prototype-foreach/"
    },
    {
        num: 2805,
        title: "Custom Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-interval/"
    },
    {
        num: 2806,
        title: "Account Balance After Rounded Purchase",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/account-balance-after-rounded-purchase/"
    },
    {
        num: 2807,
        title: "Insert Greatest Common Divisors in Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/"
    },
    {
        num: 2808,
        title: "Minimum Seconds to Equalize a Circular Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/"
    },
    {
        num: 2809,
        title: "Minimum Time to Make Array Sum At Most x",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/"
    },
    {
        num: 2810,
        title: "Faulty Keyboard",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/faulty-keyboard/"
    },
    {
        num: 2811,
        title: "Check if it is Possible to Split Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-it-is-possible-to-split-array/"
    },
    {
        num: 2812,
        title: "Find the Safest Path in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-safest-path-in-a-grid/"
    },
    {
        num: 2813,
        title: "Maximum Elegance of a K-Length Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/"
    },
    {
        num: 2814,
        title: "Minimum Time Takes to Reach Destination Without Drowning",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/"
    },
    {
        num: 2815,
        title: "Max Pair Sum in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-pair-sum-in-an-array/"
    },
    {
        num: 2816,
        title: "Double a Number Represented as a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/"
    },
    {
        num: 2817,
        title: "Minimum Absolute Difference Between Elements With Constraint",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/"
    },
    {
        num: 2818,
        title: "Apply Operations to Maximize Score",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/apply-operations-to-maximize-score/"
    },
    {
        num: 2819,
        title: "Minimum Relative Loss After Buying Chocolates",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/"
    },
    {
        num: 2820,
        title: "Election Results",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/election-results/"
    },
    {
        num: 2821,
        title: "Delay the Resolution of Each Promise",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delay-the-resolution-of-each-promise/"
    },
    {
        num: 2822,
        title: "Inversion of Object",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/inversion-of-object/"
    },
    {
        num: 2823,
        title: "Deep Object Filter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/deep-object-filter/"
    },
    {
        num: 2824,
        title: "Count Pairs Whose Sum is Less than Target",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/"
    },
    {
        num: 2825,
        title: "Make String a Subsequence Using Cyclic Increments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/"
    },
    {
        num: 2826,
        title: "Sorting Three Groups",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sorting-three-groups/"
    },
    {
        num: 2827,
        title: "Number of Beautiful Integers in the Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/"
    },
    {
        num: 2828,
        title: "Check if a String Is an Acronym of Words",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/"
    },
    {
        num: 2829,
        title: "Determine the Minimum Sum of a k-avoiding Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/"
    },
    {
        num: 2830,
        title: "Maximize the Profit as the Salesman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximize-the-profit-as-the-salesman/"
    },
    {
        num: 2831,
        title: "Find the Longest Equal Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-longest-equal-subarray/"
    },
    {
        num: 2832,
        title: "Maximal Range That Each Element Is Maximum in It",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/"
    },
    {
        num: 2833,
        title: "Furthest Point From Origin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/furthest-point-from-origin/"
    },
    {
        num: 2834,
        title: "Find the Minimum Possible Sum of a Beautiful Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/"
    },
    {
        num: 2835,
        title: "Minimum Operations to Form Subsequence With Target Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/"
    },
    {
        num: 2836,
        title: "Maximize Value of Function in a Ball Passing Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/"
    },
    {
        num: 2837,
        title: "Total Traveled Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/total-traveled-distance/"
    },
    {
        num: 2838,
        title: "Maximum Coins Heroes Can Collect",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-coins-heroes-can-collect/"
    },
    {
        num: 2839,
        title: "Check if Strings Can be Made Equal With Operations I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/"
    },
    {
        num: 2840,
        title: "Check if Strings Can be Made Equal With Operations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/"
    },
    {
        num: 2841,
        title: "Maximum Sum of Almost Unique Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/"
    },
    {
        num: 2842,
        title: "Count K-Subsequences of a String With Maximum Beauty",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/"
    },
    {
        num: 2843,
        title: "Count Symmetric Integers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-symmetric-integers/"
    },
    {
        num: 2844,
        title: "Minimum Operations to Make a Special Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-operations-to-make-a-special-number/"
    },
    {
        num: 2845,
        title: "Count of Interesting Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-of-interesting-subarrays/"
    },
    {
        num: 2846,
        title: "Minimum Edge Weight Equilibrium Queries in a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/"
    },
    {
        num: 2847,
        title: "Smallest Number With Given Digit Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-number-with-given-digit-product/"
    },
    {
        num: 2848,
        title: "Points That Intersect With Cars",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/points-that-intersect-with-cars/"
    },
    {
        num: 2849,
        title: "Determine if a Cell Is Reachable at a Given Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/"
    },
    {
        num: 2850,
        title: "Minimum Moves to Spread Stones Over Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/"
    },
    {
        num: 2851,
        title: "String Transformation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/string-transformation/"
    },
    {
        num: 2852,
        title: "Sum of Remoteness of All Cells",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-remoteness-of-all-cells/"
    },
    {
        num: 2853,
        title: "Highest Salaries Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/highest-salaries-difference/"
    },
    {
        num: 2854,
        title: "Rolling Average Steps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rolling-average-steps/"
    },
    {
        num: 2855,
        title: "Minimum Right Shifts to Sort the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/"
    },
    {
        num: 2856,
        title: "Minimum Array Length After Pair Removals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-array-length-after-pair-removals/"
    },
    {
        num: 2857,
        title: "Count Pairs of Points With Distance k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-pairs-of-points-with-distance-k/"
    },
    {
        num: 2858,
        title: "Minimum Edge Reversals So Every Node Is Reachable",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/"
    },
    {
        num: 2859,
        title: "Sum of Values at Indices With K Set Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/"
    },
    {
        num: 2860,
        title: "Happy Students",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/happy-students/"
    },
    {
        num: 2861,
        title: "Maximum Number of Alloys",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-alloys/"
    },
    {
        num: 2862,
        title: "Maximum Element-Sum of a Complete Subset of Indices",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/"
    },
    {
        num: 2863,
        title: "Maximum Length of Semi-Decreasing Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/"
    },
    {
        num: 2864,
        title: "Maximum Odd Binary Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-odd-binary-number/"
    },
    {
        num: 2865,
        title: "Beautiful Towers I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-towers-i/"
    },
    {
        num: 2866,
        title: "Beautiful Towers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-towers-ii/"
    },
    {
        num: 2867,
        title: "Count Valid Paths in a Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-valid-paths-in-a-tree/"
    },
    {
        num: 2868,
        title: "The Wording Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-wording-game/"
    },
    {
        num: 2869,
        title: "Minimum Operations to Collect Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-operations-to-collect-elements/"
    },
    {
        num: 2870,
        title: "Minimum Number of Operations to Make Array Empty",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/"
    },
    {
        num: 2871,
        title: "Split Array Into Maximum Number of Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/"
    },
    {
        num: 2872,
        title: "Maximum Number of K-Divisible Components",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-k-divisible-components/"
    },
    {
        num: 2873,
        title: "Maximum Value of an Ordered Triplet I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/"
    },
    {
        num: 2874,
        title: "Maximum Value of an Ordered Triplet II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/"
    },
    {
        num: 2875,
        title: "Minimum Size Subarray in Infinite Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/"
    },
    {
        num: 2876,
        title: "Count Visited Nodes in a Directed Graph",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/"
    },
    {
        num: 2877,
        title: "Create a DataFrame from List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-a-dataframe-from-list/"
    },
    {
        num: 2878,
        title: "Get the Size of a DataFrame",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/get-the-size-of-a-dataframe/"
    },
    {
        num: 2879,
        title: "Display the First Three Rows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/display-the-first-three-rows/"
    },
    {
        num: 2880,
        title: "Select Data",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/select-data/"
    },
    {
        num: 2881,
        title: "Create a New Column",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/create-a-new-column/"
    },
    {
        num: 2882,
        title: "Drop Duplicate Rows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/drop-duplicate-rows/"
    },
    {
        num: 2883,
        title: "Drop Missing Data",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/drop-missing-data/"
    },
    {
        num: 2884,
        title: "Modify Columns",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/modify-columns/"
    },
    {
        num: 2885,
        title: "Rename Columns",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rename-columns/"
    },
    {
        num: 2886,
        title: "Change Data Type",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/change-data-type/"
    },
    {
        num: 2887,
        title: "Fill Missing Data",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fill-missing-data/"
    },
    {
        num: 2888,
        title: "Reshape Data: Concatenate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reshape-data-concatenate/"
    },
    {
        num: 2889,
        title: "Reshape Data: Pivot",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reshape-data-pivot/"
    },
    {
        num: 2890,
        title: "Reshape Data: Melt",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reshape-data-melt/"
    },
    {
        num: 2891,
        title: "Method Chaining",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/method-chaining/"
    },
    {
        num: 2892,
        title: "Minimizing Array After Replacing Pairs With Their Product",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/"
    },
    {
        num: 2893,
        title: "Calculate Orders Within Each Interval",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/calculate-orders-within-each-interval/"
    },
    {
        num: 2894,
        title: "Divisible and Non-divisible Sums Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/"
    },
    {
        num: 2895,
        title: "Minimum Processing Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-processing-time/"
    },
    {
        num: 2896,
        title: "Apply Operations to Make Two Strings Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/"
    },
    {
        num: 2897,
        title: "Apply Operations on Array to Maximize Sum of Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/"
    },
    {
        num: 2898,
        title: "Maximum Linear Stock Score",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-linear-stock-score/"
    },
    {
        num: 2899,
        title: "Last Visited Integers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/last-visited-integers/"
    },
    {
        num: 2900,
        title: "Longest Unequal Adjacent Groups Subsequence I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/"
    },
    {
        "num": 2901,
        "title": "Longest Unequal Adjacent Groups Subsequence II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/"
    },
    {
        "num": 2902,
        "title": "Count of Sub-Multisets With Bounded Sum",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/"
    },
    {
        "num": 2903,
        "title": "Find Indices With Index and Value Difference I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/"
    },
    {
        "num": 2904,
        "title": "Shortest and Lexicographically Smallest Beautiful String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/"
    },
    {
        "num": 2905,
        "title": "Find Indices With Index and Value Difference II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/"
    },
    {
        "num": 2906,
        "title": "Construct Product Matrix",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/construct-product-matrix/"
    },
    {
        "num": 2907,
        "title": "Maximum Profitable Triplets With Increasing Prices I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/"
    },
    {
        "num": 2908,
        "title": "Minimum Sum of Mountain Triplets I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/"
    },
    {
        "num": 2909,
        "title": "Minimum Sum of Mountain Triplets II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/"
    },
    {
        "num": 2910,
        "title": "Minimum Number of Groups to Create a Valid Assignment",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/"
    },
    {
        "num": 2911,
        "title": "Minimum Changes to Make K Semi-palindromes",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/"
    },
    {
        "num": 2912,
        "title": "Number of Ways to Reach Destination in the Grid",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/"
    },
    {
        "num": 2913,
        "title": "Subarrays Distinct Element Sum of Squares I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/"
    },
    {
        "num": 2914,
        "title": "Minimum Number of Changes to Make Binary String Beautiful",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/"
    },
    {
        "num": 2915,
        "title": "Length of the Longest Subsequence That Sums to Target",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/"
    },
    {
        "num": 2916,
        "title": "Subarrays Distinct Element Sum of Squares II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/"
    },
    {
        "num": 2917,
        "title": "Find the K-or of an Array",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-k-or-of-an-array/"
    },
    {
        "num": 2918,
        "title": "Minimum Equal Sum of Two Arrays After Replacing Zeros",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/"
    },
    {
        "num": 2919,
        "title": "Minimum Increment Operations to Make Array Beautiful",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/"
    },
    {
        "num": 2920,
        "title": "Maximum Points After Collecting Coins From All Nodes",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/"
    },
    {
        "num": 2921,
        "title": "Maximum Profitable Triplets With Increasing Prices II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/"
    },
    {
        "num": 2922,
        "title": "Market Analysis III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/market-analysis-iii/"
    },
    {
        "num": 2923,
        "title": "Find Champion I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-champion-i/"
    },
    {
        "num": 2924,
        "title": "Find Champion II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-champion-ii/"
    },
    {
        "num": 2925,
        "title": "Maximum Score After Applying Operations on a Tree",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/"
    },
    {
        "num": 2926,
        "title": "Maximum Balanced Subsequence Sum",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-balanced-subsequence-sum/"
    },
    {
        "num": 2927,
        "title": "Distribute Candies Among Children III",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/distribute-candies-among-children-iii/"
    },
    {
        "num": 2928,
        "title": "Distribute Candies Among Children I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/distribute-candies-among-children-i/"
    },
    {
        "num": 2929,
        "title": "Distribute Candies Among Children II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/distribute-candies-among-children-ii/"
    },
    {
        "num": 2930,
        "title": "Number of Strings Which Can Be Rearranged to Contain Substring",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/"
    },
    {
        "num": 2931,
        "title": "Maximum Spending After Buying Items",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-spending-after-buying-items/"
    },
    {
        "num": 2932,
        "title": "Maximum Strong Pair XOR I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-strong-pair-xor-i/"
    },
    {
        "num": 2933,
        "title": "High-Access Employees",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/high-access-employees/"
    },
    {
        "num": 2934,
        "title": "Minimum Operations to Maximize Last Elements in Arrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/"
    },
    {
        "num": 2935,
        "title": "Maximum Strong Pair XOR II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-strong-pair-xor-ii/"
    },
    {
        "num": 2936,
        "title": "Number of Equal Numbers Blocks",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-equal-numbers-blocks/"
    },
    {
        "num": 2937,
        "title": "Make Three Strings Equal",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/make-three-strings-equal/"
    },
    {
        "num": 2938,
        "title": "Separate Black and White Balls",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/separate-black-and-white-balls/"
    },
    {
        "num": 2939,
        "title": "Maximum Xor Product",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-xor-product/"
    },
    {
        "num": 2940,
        "title": "Find Building Where Alice and Bob Can Meet",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/"
    },
    {
        "num": 2941,
        "title": "Maximum GCD-Sum of a Subarray",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/"
    },
    {
        "num": 2942,
        "title": "Find Words Containing Character",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-words-containing-character/"
    },
    {
        "num": 2943,
        "title": "Maximize Area of Square Hole in Grid",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/"
    },
    {
        "num": 2944,
        "title": "Minimum Number of Coins for Fruits",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-coins-for-fruits/"
    },
    {
        "num": 2945,
        "title": "Find Maximum Non-decreasing Array Length",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-maximum-non-decreasing-array-length/"
    },
    {
        "num": 2946,
        "title": "Matrix Similarity After Cyclic Shifts",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/"
    },
    {
        "num": 2947,
        "title": "Count Beautiful Substrings I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-beautiful-substrings-i/"
    },
    {
        "num": 2948,
        "title": "Make Lexicographically Smallest Array by Swapping Elements",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/"
    },
    {
        "num": 2949,
        "title": "Count Beautiful Substrings II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-beautiful-substrings-ii/"
    },
    {
        "num": 2950,
        "title": "Number of Divisible Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-divisible-substrings/"
    },
    {
        "num": 2951,
        "title": "Find the Peaks",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-peaks/"
    },
    {
        "num": 2952,
        "title": "Minimum Number of Coins to be Added",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-coins-to-be-added/"
    },
    {
        "num": 2953,
        "title": "Count Complete Substrings",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-complete-substrings/"
    },
    {
        "num": 2954,
        "title": "Count the Number of Infection Sequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-infection-sequences/"
    },
    {
        "num": 2955,
        "title": "Number of Same-End Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-same-end-substrings/"
    },
    {
        "num": 2956,
        "title": "Find Common Elements Between Two Arrays",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-common-elements-between-two-arrays/"
    },
    {
        "num": 2957,
        "title": "Remove Adjacent Almost-Equal Characters",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/remove-adjacent-almost-equal-characters/"
    },
    {
        "num": 2958,
        "title": "Length of Longest Subarray With at Most K Frequency",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/"
    },
    {
        "num": 2959,
        "title": "Number of Possible Sets of Closing Branches",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/"
    },
    {
        "num": 2960,
        "title": "Count Tested Devices After Test Operations",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-tested-devices-after-test-operations/"
    },
    {
        "num": 2961,
        "title": "Double Modular Exponentiation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/double-modular-exponentiation/"
    },
    {
        "num": 2962,
        "title": "Count Subarrays Where Max Element Appears at Least K Times",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/"
    },
    {
        "num": 2963,
        "title": "Count the Number of Good Partitions",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-good-partitions/"
    },
    {
        "num": 2964,
        "title": "Number of Divisible Triplet Sums",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-divisible-triplet-sums/"
    },
    {
        "num": 2965,
        "title": "Find Missing and Repeated Values",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-missing-and-repeated-values/"
    },
    {
        "num": 2966,
        "title": "Divide Array Into Arrays With Max Difference",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/"
    },
    {
        "num": 2967,
        "title": "Minimum Cost to Make Array Equalindromic",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/"
    },
    {
        "num": 2968,
        "title": "Apply Operations to Maximize Frequency Score",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/"
    },
    {
        "num": 2969,
        "title": "Minimum Number of Coins for Fruits II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/"
    },
    {
        "num": 2970,
        "title": "Count the Number of Incremovable Subarrays I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/"
    },
    {
        "num": 2971,
        "title": "Find Polygon With the Largest Perimeter",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/"
    },
    {
        "num": 2972,
        "title": "Count the Number of Incremovable Subarrays II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/"
    },
    {
        "num": 2973,
        "title": "Find Number of Coins to Place in Tree Nodes",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/"
    },
    {
        "num": 2974,
        "title": "Minimum Number Game",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-number-game/"
    },
    {
        "num": 2975,
        "title": "Maximum Square Area by Removing Fences From a Field",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/"
    },
    {
        "num": 2976,
        "title": "Minimum Cost to Convert String I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-to-convert-string-i/"
    },
    {
        "num": 2977,
        "title": "Minimum Cost to Convert String II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-to-convert-string-ii/"
    },
    {
        "num": 2978,
        "title": "Symmetric Coordinates",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/symmetric-coordinates/"
    },
    {
        "num": 2979,
        "title": "Most Expensive Item That Can Not Be Bought",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/"
    },
    {
        "num": 2980,
        "title": "Check if Bitwise OR Has Trailing Zeros",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/"
    },
    {
        "num": 2981,
        "title": "Find Longest Special Substring That Occurs Thrice I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/"
    },
    {
        "num": 2982,
        "title": "Find Longest Special Substring That Occurs Thrice II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/"
    },
    {
        "num": 2983,
        "title": "Palindrome Rearrangement Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/palindrome-rearrangement-queries/"
    },
    {
        "num": 2984,
        "title": "Find Peak Calling Hours for Each City",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-peak-calling-hours-for-each-city/"
    },
    {
        "num": 2985,
        "title": "Calculate Compressed Mean",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/calculate-compressed-mean/"
    },
    {
        "num": 2986,
        "title": "Find Third Transaction",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-third-transaction/"
    },
    {
        "num": 2987,
        "title": "Find Expensive Cities",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-expensive-cities/"
    },
    {
        "num": 2988,
        "title": "Manager of the Largest Department",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/manager-of-the-largest-department/"
    },
    {
        "num": 2989,
        "title": "Class Performance",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/class-performance/"
    },
    {
        "num": 2990,
        "title": "Loan Types",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/loan-types/"
    },
    {
        "num": 2991,
        "title": "Top Three Wineries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/top-three-wineries/"
    },
    {
        "num": 2992,
        "title": "Number of Self-Divisible Permutations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-self-divisible-permutations/"
    },
    {
        "num": 2993,
        "title": "Friday Purchases I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/friday-purchases-i/"
    },
    {
        "num": 2994,
        "title": "Friday Purchases II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/friday-purchases-ii/"
    },
    {
        "num": 2995,
        "title": "Viewers Turned Streamers",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/viewers-turned-streamers/"
    },
    {
        "num": 2996,
        "title": "Smallest Missing Integer Greater Than Sequential Prefix Sum",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/"
    },
    {
        "num": 2997,
        "title": "Minimum Number of Operations to Make Array XOR Equal to K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/"
    },
    {
        "num": 2998,
        "title": "Minimum Number of Operations to Make X and Y Equal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/"
    },
    {
        "num": 2999,
        "title": "Count the Number of Powerful Integers",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-powerful-integers/"
    },
    {
        "num": 3000,
        "title": "Maximum Area of Longest Diagonal Rectangle",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/"
    },
    {
        "num": 3001,
        "title": "Minimum Moves to Capture The Queen",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-moves-to-capture-the-queen/"
    },
    {
        "num": 3002,
        "title": "Maximum Size of a Set After Removals",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-size-of-a-set-after-removals/"
    },
    {
        "num": 3003,
        "title": "Maximize the Number of Partitions After Operations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/"
    },
    {
        "num": 3004,
        "title": "Maximum Subtree of the Same Color",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-subtree-of-the-same-color/"
    },
    {
        "num": 3005,
        "title": "Count Elements With Maximum Frequency",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-elements-with-maximum-frequency/"
    },
    {
        "num": 3006,
        "title": "Find Beautiful Indices in the Given Array I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/"
    },
    {
        "num": 3007,
        "title": "Maximum Number That Sum of the Prices Is Less Than or Equal to K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/"
    },
    {
        "num": 3008,
        "title": "Find Beautiful Indices in the Given Array II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/"
    },
    {
        "num": 3009,
        "title": "Maximum Number of Intersections on the Chart",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/"
    },
    {
        "num": 3010,
        "title": "Divide an Array Into Subarrays With Minimum Cost I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/"
    },
    {
        "num": 3011,
        "title": "Find if Array Can Be Sorted",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-if-array-can-be-sorted/"
    },
    {
        "num": 3012,
        "title": "Minimize Length of Array Using Operations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimize-length-of-array-using-operations/"
    },
    {
        "num": 3013,
        "title": "Divide an Array Into Subarrays With Minimum Cost II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/"
    },
    {
        "num": 3014,
        "title": "Minimum Number of Pushes to Type Word I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/"
    },
    {
        "num": 3015,
        "title": "Count the Number of Houses at a Certain Distance I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/"
    },
    {
        "num": 3016,
        "title": "Minimum Number of Pushes to Type Word II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/"
    },
    {
        "num": 3017,
        "title": "Count the Number of Houses at a Certain Distance II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/"
    },
    {
        "num": 3018,
        "title": "Maximum Number of Removal Queries That Can Be Processed I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/"
    },
    {
        "num": 3019,
        "title": "Number of Changing Keys",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/number-of-changing-keys/"
    },
    {
        "num": 3020,
        "title": "Find the Maximum Number of Elements in Subset",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/"
    },
    {
        "num": 3021,
        "title": "Alice and Bob Playing Flower Game",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/alice-and-bob-playing-flower-game/"
    },
    {
        "num": 3022,
        "title": "Minimize OR of Remaining Elements Using Operations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/"
    },
    {
        "num": 3023,
        "title": "Find Pattern in Infinite Stream I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-pattern-in-infinite-stream-i/"
    },
    {
        "num": 3024,
        "title": "Type of Triangle",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/type-of-triangle/"
    },
    {
        "num": 3025,
        "title": "Find the Number of Ways to Place People I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/"
    },
    {
        "num": 3026,
        "title": "Maximum Good Subarray Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-good-subarray-sum/"
    },
    {
        "num": 3027,
        "title": "Find the Number of Ways to Place People II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/"
    },
    {
        "num": 3028,
        "title": "Ant on the Boundary",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/ant-on-the-boundary/"
    },
    {
        "num": 3029,
        "title": "Minimum Time to Revert Word to Initial State I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/"
    },
    {
        "num": 3030,
        "title": "Find the Grid of Region Average",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-grid-of-region-average/"
    },
    {
        "num": 3031,
        "title": "Minimum Time to Revert Word to Initial State II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/"
    },
    {
        "num": 3032,
        "title": "Count Numbers With Unique Digits II",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-numbers-with-unique-digits-ii/"
    },
    {
        "num": 3033,
        "title": "Modify the Matrix",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/modify-the-matrix/"
    },
    {
        "num": 3034,
        "title": "Number of Subarrays That Match a Pattern I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/"
    },
    {
        "num": 3035,
        "title": "Maximum Palindromes After Operations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-palindromes-after-operations/"
    },
    {
        "num": 3036,
        "title": "Number of Subarrays That Match a Pattern II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/"
    },
    {
        "num": 3037,
        "title": "Find Pattern in Infinite Stream II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/"
    },
    {
        "num": 3038,
        "title": "Maximum Number of Operations With the Same Score I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/"
    },
    {
        "num": 3039,
        "title": "Apply Operations to Make String Empty",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/apply-operations-to-make-string-empty/"
    },
    {
        "num": 3040,
        "title": "Maximum Number of Operations With the Same Score II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/"
    },
    {
        "num": 3041,
        "title": "Maximize Consecutive Elements in an Array After Modification",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/"
    },
    {
        "num": 3042,
        "title": "Count Prefix and Suffix Pairs I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/"
    },
    {
        "num": 3043,
        "title": "Find the Length of the Longest Common Prefix",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/"
    },
    {
        "num": 3044,
        "title": "Most Frequent Prime",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/most-frequent-prime/"
    },
    {
        "num": 3045,
        "title": "Count Prefix and Suffix Pairs II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/"
    },
    {
        "num": 3046,
        "title": "Split the Array",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/split-the-array/"
    },
    {
        "num": 3047,
        "title": "Find the Largest Area of Square Inside Two Rectangles",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/"
    },
    {
        "num": 3048,
        "title": "Earliest Second to Mark Indices I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/earliest-second-to-mark-indices-i/"
    },
    {
        "num": 3049,
        "title": "Earliest Second to Mark Indices II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/earliest-second-to-mark-indices-ii/"
    },
    {
        "num": 3050,
        "title": "Pizza Toppings Cost Analysis",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/pizza-toppings-cost-analysis/"
    },
    {
        "num": 3051,
        "title": "Find Candidates for Data Scientist Position",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-candidates-for-data-scientist-position/"
    },
    {
        "num": 3052,
        "title": "Maximize Items",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-items/"
    },
    {
        "num": 3053,
        "title": "Classifying Triangles by Lengths",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/classifying-triangles-by-lengths/"
    },
    {
        "num": 3054,
        "title": "Binary Tree Nodes",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/binary-tree-nodes/"
    },
    {
        "num": 3055,
        "title": "Top Percentile Fraud",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/top-percentile-fraud/"
    },
    {
        "num": 3056,
        "title": "Snaps Analysis",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/snaps-analysis/"
    },
    {
        "num": 3057,
        "title": "Employees Project Allocation",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/employees-project-allocation/"
    },
    {
        "num": 3058,
        "title": "Friends With No Mutual Friends",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/friends-with-no-mutual-friends/"
    },
    {
        "num": 3059,
        "title": "Find All Unique Email Domains",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-all-unique-email-domains/"
    },
    {
        "num": 3060,
        "title": "User Activities within Time Bounds",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/user-activities-within-time-bounds/"
    },
    {
        "num": 3061,
        "title": "Calculate Trapping Rain Water",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/calculate-trapping-rain-water/"
    },
    {
        "num": 3062,
        "title": "Winner of the Linked List Game",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/winner-of-the-linked-list-game/"
    },
    {
        "num": 3063,
        "title": "Linked List Frequency",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/linked-list-frequency/"
    },
    {
        "num": 3064,
        "title": "Guess the Number Using Bitwise Questions I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/"
    },
    {
        "num": 3065,
        "title": "Minimum Operations to Exceed Threshold Value I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/"
    },
    {
        "num": 3066,
        "title": "Minimum Operations to Exceed Threshold Value II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/"
    },
    {
        "num": 3067,
        "title": "Count Pairs of Connectable Servers in a Weighted Tree Network",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/"
    },
    {
        "num": 3068,
        "title": "Find the Maximum Sum of Node Values",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-maximum-sum-of-node-values/"
    },
    {
        "num": 3069,
        "title": "Distribute Elements Into Two Arrays I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/distribute-elements-into-two-arrays-i/"
    },
    {
        "num": 3070,
        "title": "Count Submatrices with Top-Left Element and Sum Less Than k",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/"
    },
    {
        "num": 3071,
        "title": "Minimum Operations to Write the Letter Y on a Grid",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/"
    },
    {
        "num": 3072,
        "title": "Distribute Elements Into Two Arrays II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/"
    },
    {
        "num": 3073,
        "title": "Maximum Increasing Triplet Value",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-increasing-triplet-value/"
    },
    {
        "num": 3074,
        "title": "Apple Redistribution into Boxes",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/apple-redistribution-into-boxes/"
    },
    {
        "num": 3075,
        "title": "Maximize Happiness of Selected Children",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-happiness-of-selected-children/"
    },
    {
        "num": 3076,
        "title": "Shortest Uncommon Substring in an Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/"
    },
    {
        "num": 3077,
        "title": "Maximum Strength of K Disjoint Subarrays",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/"
    },
    {
        "num": 3078,
        "title": "Match Alphanumerical Pattern in Matrix I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/"
    },
    {
        "num": 3079,
        "title": "Find the Sum of Encrypted Integers",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-sum-of-encrypted-integers/"
    },
    {
        "num": 3080,
        "title": "Mark Elements on Array by Performing Queries",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/"
    },
    {
        "num": 3081,
        "title": "Replace Question Marks in String to Minimize Its Value",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/"
    },
    {
        "num": 3082,
        "title": "Find the Sum of the Power of All Subsequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/"
    },
    {
        "num": 3083,
        "title": "Existence of a Substring in a String and Its Reverse",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/"
    },
    {
        "num": 3084,
        "title": "Count Substrings Starting and Ending with Given Character",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/"
    },
    {
        "num": 3085,
        "title": "Minimum Deletions to Make String K-Special",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/"
    },
    {
        "num": 3086,
        "title": "Minimum Moves to Pick K Ones",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-moves-to-pick-k-ones/"
    },
    {
        "num": 3087,
        "title": "Find Trending Hashtags",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-trending-hashtags/"
    },
    {
        "num": 3088,
        "title": "Make String Anti-palindrome",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/make-string-anti-palindrome/"
    },
    {
        "num": 3089,
        "title": "Find Bursty Behavior",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-bursty-behavior/"
    },
    {
        "num": 3090,
        "title": "Maximum Length Substring With Two Occurrences",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/"
    },
    {
        "num": 3091,
        "title": "Apply Operations to Make Sum of Array Greater Than or Equal to k",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/"
    },
    {
        "num": 3092,
        "title": "Most Frequent IDs",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/most-frequent-ids/"
    },
    {
        "num": 3093,
        "title": "Longest Common Suffix Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-common-suffix-queries/"
    },
    {
        "num": 3094,
        "title": "Guess the Number Using Bitwise Questions II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/"
    },
    {
        "num": 3095,
        "title": "Shortest Subarray With OR at Least K I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/"
    },
    {
        "num": 3096,
        "title": "Minimum Levels to Gain More Points",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-levels-to-gain-more-points/"
    },
    {
        "num": 3097,
        "title": "Shortest Subarray With OR at Least K II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/"
    },
    {
        "num": 3098,
        "title": "Find the Sum of Subsequence Powers",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-sum-of-subsequence-powers/"
    },
    {
        "num": 3099,
        "title": "Harshad Number",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/harshad-number/"
    },
    {
        "num": 3100,
        "title": "Water Bottles II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/water-bottles-ii/"
    },
    {
        "num": 3101,
        "title": "Count Alternating Subarrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-alternating-subarrays/"
    },
    {
        "num": 3102,
        "title": "Minimize Manhattan Distances",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimize-manhattan-distances/"
    },
    {
        "num": 3103,
        "title": "Find Trending Hashtags II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-trending-hashtags-ii/"
    },
    {
        "num": 3104,
        "title": "Find Longest Self-Contained Substring",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-longest-self-contained-substring/"
    },
    {
        "num": 3105,
        "title": "Longest Strictly Increasing or Strictly Decreasing Subarray",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/"
    },
    {
        "num": 3106,
        "title": "Lexicographically Smallest String After Operations With Constraint",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/"
    },
    {
        "num": 3107,
        "title": "Minimum Operations to Make Median of Array Equal to K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/"
    },
    {
        "num": 3108,
        "title": "Minimum Cost Walk in Weighted Graph",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/"
    },
    {
        "num": 3109,
        "title": "Find the Index of Permutation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-index-of-permutation/"
    },
    {
        "num": 3110,
        "title": "Score of a String",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/score-of-a-string/"
    },
    {
        "num": 3111,
        "title": "Minimum Rectangles to Cover Points",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-rectangles-to-cover-points/"
    },
    {
        "num": 3112,
        "title": "Minimum Time to Visit Disappearing Nodes",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/"
    },
    {
        "num": 3113,
        "title": "Find the Number of Subarrays Where Boundary Elements Are Maximum",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/"
    },
    {
        "num": 3114,
        "title": "Latest Time You Can Obtain After Replacing Characters",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/"
    },
    {
        "num": 3115,
        "title": "Maximum Prime Difference",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-prime-difference/"
    },
    {
        "num": 3116,
        "title": "Kth Smallest Amount With Single Denomination Combination",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/"
    },
    {
        "num": 3117,
        "title": "Minimum Sum of Values by Dividing Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/"
    },
    {
        "num": 3118,
        "title": "Friday Purchase III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/friday-purchase-iii/"
    },
    {
        "num": 3119,
        "title": "Maximum Number of Potholes That Can Be Fixed",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/"
    },
    {
        "num": 3120,
        "title": "Count the Number of Special Characters I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-the-number-of-special-characters-i/"
    },
    {
        "num": 3121,
        "title": "Count the Number of Special Characters II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-the-number-of-special-characters-ii/"
    },
    {
        "num": 3122,
        "title": "Minimum Number of Operations to Satisfy Conditions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/"
    },
    {
        "num": 3123,
        "title": "Find Edges in Shortest Paths",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-edges-in-shortest-paths/"
    },
    {
        "num": 3124,
        "title": "Find Longest Calls",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-longest-calls/"
    },
    {
        "num": 3125,
        "title": "Maximum Number That Makes Result of Bitwise AND Zero",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/"
    },
    {
        "num": 3126,
        "title": "Server Utilization Time",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/server-utilization-time/"
    },
    {
        "num": 3127,
        "title": "Make a Square with the Same Color",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/make-a-square-with-the-same-color/"
    },
    {
        "num": 3128,
        "title": "Right Triangles",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/right-triangles/"
    },
    {
        "num": 3129,
        "title": "Find All Possible Stable Binary Arrays I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/"
    },
    {
        "num": 3130,
        "title": "Find All Possible Stable Binary Arrays II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/"
    },
    {
        "num": 3131,
        "title": "Find the Integer Added to Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-integer-added-to-array-i/"
    },
    {
        "num": 3132,
        "title": "Find the Integer Added to Array II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-integer-added-to-array-ii/"
    },
    {
        "num": 3133,
        "title": "Minimum Array End",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-array-end/"
    },
    {
        "num": 3134,
        "title": "Find the Median of the Uniqueness Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/"
    },
    {
        "num": 3135,
        "title": "Equalize Strings by Adding or Removing Characters at Ends",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/"
    },
    {
        "num": 3136,
        "title": "Valid Word",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/valid-word/"
    },
    {
        "num": 3137,
        "title": "Minimum Number of Operations to Make Word K-Periodic",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/"
    },
    {
        "num": 3138,
        "title": "Minimum Length of Anagram Concatenation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-length-of-anagram-concatenation/"
    },
    {
        "num": 3139,
        "title": "Minimum Cost to Equalize Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-to-equalize-array/"
    },
    {
        "num": 3140,
        "title": "Consecutive Available Seats II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/consecutive-available-seats-ii/"
    },
    {
        "num": 3141,
        "title": "Maximum Hamming Distances",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-hamming-distances/"
    },
    {
        "num": 3142,
        "title": "Check if Grid Satisfies Conditions",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-if-grid-satisfies-conditions/"
    },
    {
        "num": 3143,
        "title": "Maximum Points Inside the Square",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-points-inside-the-square/"
    },
    {
        "num": 3144,
        "title": "Minimum Substring Partition of Equal Character Frequency",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/"
    },
    {
        "num": 3145,
        "title": "Find Products of Elements of Big Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-products-of-elements-of-big-array/"
    },
    {
        "num": 3146,
        "title": "Permutation Difference between Two Strings",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/permutation-difference-between-two-strings/"
    },
    {
        "num": 3147,
        "title": "Taking Maximum Energy From the Mystic Dungeon",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/"
    },
    {
        "num": 3148,
        "title": "Maximum Difference Score in a Grid",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-difference-score-in-a-grid/"
    },
    {
        "num": 3149,
        "title": "Find the Minimum Cost Array Permutation",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-minimum-cost-array-permutation/"
    },
    {
        "num": 3150,
        "title": "Invalid Tweets II",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/invalid-tweets-ii/"
    },
    {
        "num": 3151,
        "title": "Special Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/special-array-i/"
    },
    {
        "num": 3152,
        "title": "Special Array II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/special-array-ii/"
    },
    {
        "num": 3153,
        "title": "Sum of Digit Differences of All Pairs",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/"
    },
    {
        "num": 3154,
        "title": "Find Number of Ways to Reach the K-th Stair",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/"
    },
    {
        "num": 3155,
        "title": "Maximum Number of Upgradable Servers",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-upgradable-servers/"
    },
    {
        "num": 3156,
        "title": "Employee Task Duration and Concurrent Tasks",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/"
    },
    {
        "num": 3157,
        "title": "Find the Level of Tree with Minimum Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/"
    },
    {
        "num": 3158,
        "title": "Find the XOR of Numbers Which Appear Twice",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/"
    },
    {
        "num": 3159,
        "title": "Find Occurrences of an Element in an Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/"
    },
    {
        "num": 3160,
        "title": "Find the Number of Distinct Colors Among the Balls",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/"
    },
    {
        "num": 3161,
        "title": "Block Placement Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/block-placement-queries/"
    },
    {
        "num": 3162,
        "title": "Find the Number of Good Pairs I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-number-of-good-pairs-i/"
    },
    {
        "num": 3163,
        "title": "String Compression III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/string-compression-iii/"
    },
    {
        "num": 3164,
        "title": "Find the Number of Good Pairs II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-number-of-good-pairs-ii/"
    },
    {
        "num": 3165,
        "title": "Maximum Sum of Subsequence With Non-adjacent Elements",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/"
    },
    {
        "num": 3166,
        "title": "Calculate Parking Fees and Duration",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/calculate-parking-fees-and-duration/"
    },
    {
        "num": 3167,
        "title": "Better Compression of String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/better-compression-of-string/"
    },
    {
        "num": 3168,
        "title": "Minimum Number of Chairs in a Waiting Room",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/"
    },
    {
        "num": 3169,
        "title": "Count Days Without Meetings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-days-without-meetings/"
    },
    {
        "num": 3170,
        "title": "Lexicographically Minimum String After Removing Stars",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/"
    },
    {
        "num": 3171,
        "title": "Find Subarray With Bitwise OR Closest to K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/"
    },
    {
        "num": 3172,
        "title": "Second Day Verification",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/second-day-verification/"
    },
    {
        "num": 3173,
        "title": "Bitwise OR of Adjacent Elements",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/bitwise-or-of-adjacent-elements/"
    },
    {
        "num": 3174,
        "title": "Clear Digits",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/clear-digits/"
    },
    {
        "num": 3175,
        "title": "Find The First Player to win K Games in a Row",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/"
    },
    {
        "num": 3176,
        "title": "Find the Maximum Length of a Good Subsequence I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/"
    },
    {
        "num": 3177,
        "title": "Find the Maximum Length of a Good Subsequence II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/"
    },
    {
        "num": 3178,
        "title": "Find the Child Who Has the Ball After K Seconds",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/"
    },
    {
        "num": 3179,
        "title": "Find the N-th Value After K Seconds",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/"
    },
    {
        "num": 3180,
        "title": "Maximum Total Reward Using Operations I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-total-reward-using-operations-i/"
    },
    {
        "num": 3181,
        "title": "Maximum Total Reward Using Operations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-total-reward-using-operations-ii/"
    },
    {
        "num": 3182,
        "title": "Find Top Scoring Students",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-top-scoring-students/"
    },
    {
        "num": 3183,
        "title": "The Number of Ways to Make the Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/"
    },
    {
        "num": 3184,
        "title": "Count Pairs That Form a Complete Day I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/"
    },
    {
        "num": 3185,
        "title": "Count Pairs That Form a Complete Day II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/"
    },
    {
        "num": 3186,
        "title": "Maximum Total Damage With Spell Casting",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-total-damage-with-spell-casting/"
    },
    {
        "num": 3187,
        "title": "Peaks in Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/peaks-in-array/"
    },
    {
        "num": 3188,
        "title": "Find Top Scoring Students II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-top-scoring-students-ii/"
    },
    {
        "num": 3189,
        "title": "Minimum Moves to Get a Peaceful Board",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/"
    },
    {
        "num": 3190,
        "title": "Find Minimum Operations to Make All Elements Divisible by Three",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/"
    },
    {
        "num": 3191,
        "title": "Minimum Operations to Make Binary Array Elements Equal to One I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/"
    },
    {
        "num": 3192,
        "title": "Minimum Operations to Make Binary Array Elements Equal to One II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/"
    },
    {
        "num": 3193,
        "title": "Count the Number of Inversions",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-inversions/"
    },
    {
        "num": 3194,
        "title": "Minimum Average of Smallest and Largest Elements",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/"
    },
    {
        "num": 3195,
        "title": "Find the Minimum Area to Cover All Ones I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/"
    },
    {
        "num": 3196,
        "title": "Maximize Total Cost of Alternating Subarrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/"
    },
    {
        "num": 3197,
        "title": "Find the Minimum Area to Cover All Ones II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/"
    },
    {
        "num": 3198,
        "title": "Find Cities in Each State",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-cities-in-each-state/"
    },
    {
        "num": 3199,
        "title": "Count Triplets with Even XOR Set Bits I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/"
    },
    {
        "num": 3200,
        "title": "Maximum Height of a Triangle",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-height-of-a-triangle/"
    },
    {
        "num": 3201,
        "title": "Find the Maximum Length of Valid Subsequence I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/"
    },
    {
        "num": 3202,
        "title": "Find the Maximum Length of Valid Subsequence II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/"
    },
    {
        "num": 3203,
        "title": "Find Minimum Diameter After Merging Two Trees",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/"
    },
    {
        "num": 3204,
        "title": "Bitwise User Permissions Analysis",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/bitwise-user-permissions-analysis/"
    },
    {
        "num": 3205,
        "title": "Maximum Array Hopping Score I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-array-hopping-score-i/"
    },
    {
        "num": 3206,
        "title": "Alternating Groups I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/alternating-groups-i/"
    },
    {
        "num": 3207,
        "title": "Maximum Points After Enemy Battles",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-points-after-enemy-battles/"
    },
    {
        "num": 3208,
        "title": "Alternating Groups II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/alternating-groups-ii/"
    },
    {
        "num": 3209,
        "title": "Number of Subarrays With AND Value of K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/"
    },
    {
        "num": 3210,
        "title": "Find the Encrypted String",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-encrypted-string/"
    },
    {
        "num": 3211,
        "title": "Generate Binary Strings Without Adjacent Zeros",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/"
    },
    {
        "num": 3212,
        "title": "Count Submatrices With Equal Frequency of X and Y",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/"
    },
    {
        "num": 3213,
        "title": "Construct String with Minimum Cost",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/construct-string-with-minimum-cost/"
    },
    {
        "num": 3214,
        "title": "Year on Year Growth Rate",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/year-on-year-growth-rate/"
    },
    {
        "num": 3215,
        "title": "Count Triplets with Even XOR Set Bits II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/"
    },
    {
        "num": 3216,
        "title": "Lexicographically Smallest String After a Swap",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/"
    },
    {
        "num": 3217,
        "title": "Delete Nodes From Linked List Present in Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/"
    },
    {
        "num": 3218,
        "title": "Minimum Cost for Cutting Cake I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/"
    },
    {
        "num": 3219,
        "title": "Minimum Cost for Cutting Cake II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/"
    },
    {
        "num": 3220,
        "title": "Odd and Even Transactions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/odd-and-even-transactions/"
    },
    {
        "num": 3221,
        "title": "Maximum Array Hopping Score II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-array-hopping-score-ii/"
    },
    {
        "num": 3222,
        "title": "Find the Winning Player in Coin Game",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-winning-player-in-coin-game/"
    },
    {
        "num": 3223,
        "title": "Minimum Length of String After Operations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-length-of-string-after-operations/"
    },
    {
        "num": 3224,
        "title": "Minimum Array Changes to Make Differences Equal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/"
    },
    {
        "num": 3225,
        "title": "Maximum Score From Grid Operations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-score-from-grid-operations/"
    },
    {
        "num": 3226,
        "title": "Number of Bit Changes to Make Two Integers Equal",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/"
    },
    {
        "num": 3227,
        "title": "Vowels Game in a String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/vowels-game-in-a-string/"
    },
    {
        "num": 3228,
        "title": "Maximum Number of Operations to Move Ones to the End",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/"
    },
    {
        "num": 3229,
        "title": "Minimum Operations to Make Array Equal to Target",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/"
    },
    {
        "num": 3230,
        "title": "Customer Purchasing Behavior Analysis",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/customer-purchasing-behavior-analysis/"
    },
    {
        "num": 3231,
        "title": "Minimum Number of Increasing Subsequence to Be Removed",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/"
    },
    {
        "num": 3232,
        "title": "Find if Digit Game Can Be Won",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-if-digit-game-can-be-won/"
    },
    {
        "num": 3233,
        "title": "Find the Count of Numbers Which Are Not Special",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/"
    },
    {
        "num": 3234,
        "title": "Count the Number of Substrings With Dominant Ones",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/"
    },
    {
        "num": 3235,
        "title": "Check if the Rectangle Corner Is Reachable",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/"
    },
    {
        "num": 3236,
        "title": "CEO Subordinate Hierarchy",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/ceo-subordinate-hierarchy/"
    },
    {
        "num": 3237,
        "title": "Alt and Tab Simulation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/alt-and-tab-simulation/"
    },
    {
        "num": 3238,
        "title": "Find the Number of Winning Players",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-number-of-winning-players/"
    },
    {
        "num": 3239,
        "title": "Minimum Number of Flips to Make Binary Grid Palindromic I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/"
    },
    {
        "num": 3240,
        "title": "Minimum Number of Flips to Make Binary Grid Palindromic II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/"
    },
    {
        "num": 3241,
        "title": "Time Taken to Mark All Nodes",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/time-taken-to-mark-all-nodes/"
    },
    {
        "num": 3242,
        "title": "Design Neighbor Sum Service",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/design-neighbor-sum-service/"
    },
    {
        "num": 3243,
        "title": "Shortest Distance After Road Addition Queries I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/"
    },
    {
        "num": 3244,
        "title": "Shortest Distance After Road Addition Queries II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/"
    },
    {
        "num": 3245,
        "title": "Alternating Groups III",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/alternating-groups-iii/"
    },
    {
        "num": 3246,
        "title": "Premier League Table Ranking",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/premier-league-table-ranking/"
    },
    {
        "num": 3247,
        "title": "Number of Subsequences with Odd Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-subsequences-with-odd-sum/"
    },
    {
        "num": 3248,
        "title": "Snake in Matrix",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/snake-in-matrix/"
    },
    {
        "num": 3249,
        "title": "Count the Number of Good Nodes",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-the-number-of-good-nodes/"
    },
    {
        "num": 3250,
        "title": "Find the Count of Monotonic Pairs I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/"
    },
    {
        "num": 3251,
        "title": "Find the Count of Monotonic Pairs II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/"
    },
    {
        "num": 3252,
        "title": "Premier League Table Ranking II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/premier-league-table-ranking-ii/"
    },
    {
        "num": 3253,
        "title": "Construct String with Minimum Cost (Easy)",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/construct-string-with-minimum-cost-(easy)/"
    },
    {
        "num": 3254,
        "title": "Find the Power of K-Size Subarrays I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/"
    },
    {
        "num": 3255,
        "title": "Find the Power of K-Size Subarrays II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/"
    },
    {
        "num": 3256,
        "title": "Maximum Value Sum by Placing Three Rooks I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/"
    },
    {
        "num": 3257,
        "title": "Maximum Value Sum by Placing Three Rooks II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/"
    },
    {
        "num": 3258,
        "title": "Count Substrings That Satisfy K-Constraint I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/"
    },
    {
        "num": 3259,
        "title": "Maximum Energy Boost From Two Drinks",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/"
    },
    {
        "num": 3260,
        "title": "Find the Largest Palindrome Divisible by K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/"
    },
    {
        "num": 3261,
        "title": "Count Substrings That Satisfy K-Constraint II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/"
    },
    {
        "num": 3262,
        "title": "Find Overlapping Shifts",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-overlapping-shifts/"
    },
    {
        "num": 3263,
        "title": "Convert Doubly Linked List to Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/"
    },
    {
        "num": 3264,
        "title": "Final Array State After K Multiplication Operations I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/"
    },
    {
        "num": 3265,
        "title": "Count Almost Equal Pairs I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-almost-equal-pairs-i/"
    },
    {
        "num": 3266,
        "title": "Final Array State After K Multiplication Operations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/"
    },
    {
        "num": 3267,
        "title": "Count Almost Equal Pairs II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-almost-equal-pairs-ii/"
    },
    {
        "num": 3268,
        "title": "Find Overlapping Shifts II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-overlapping-shifts-ii/"
    },
    {
        "num": 3269,
        "title": "Constructing Two Increasing Arrays",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/constructing-two-increasing-arrays/"
    },
    {
        "num": 3270,
        "title": "Find the Key of the Numbers",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-key-of-the-numbers/"
    },
    {
        "num": 3271,
        "title": "Hash Divided String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/hash-divided-string/"
    },
    {
        "num": 3272,
        "title": "Find the Count of Good Integers",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-count-of-good-integers/"
    },
    {
        "num": 3273,
        "title": "Minimum Amount of Damage Dealt to Bob",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/"
    },
    {
        "num": 3274,
        "title": "Check if Two Chessboard Squares Have the Same Color",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/"
    },
    {
        "num": 3275,
        "title": "K-th Nearest Obstacle Queries",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/k-th-nearest-obstacle-queries/"
    },
    {
        "num": 3276,
        "title": "Select Cells in Grid With Maximum Score",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/"
    },
    {
        "num": 3277,
        "title": "Maximum XOR Score Subarray Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-xor-score-subarray-queries/"
    },
    {
        "num": 3278,
        "title": "Find Candidates for Data Scientist Position II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/"
    },
    {
        "num": 3279,
        "title": "Maximum Total Area Occupied by Pistons",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/"
    },
    {
        "num": 3280,
        "title": "Convert Date to Binary",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/convert-date-to-binary/"
    },
    {
        "num": 3281,
        "title": "Maximize Score of Numbers in Ranges",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/"
    },
    {
        "num": 3282,
        "title": "Reach End of Array With Max Score",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/reach-end-of-array-with-max-score/"
    },
    {
        "num": 3283,
        "title": "Maximum Number of Moves to Kill All Pawns",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/"
    },
    {
        "num": 3284,
        "title": "Sum of Consecutive Subarrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sum-of-consecutive-subarrays/"
    },
    {
        "num": 3285,
        "title": "Find Indices of Stable Mountains",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-indices-of-stable-mountains/"
    },
    {
        "num": 3286,
        "title": "Find a Safe Walk Through a Grid",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-a-safe-walk-through-a-grid/"
    },
    {
        "num": 3287,
        "title": "Find the Maximum Sequence Value of Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/"
    },
    {
        "num": 3288,
        "title": "Length of the Longest Increasing Path",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/length-of-the-longest-increasing-path/"
    },
    {
        "num": 3289,
        "title": "The Two Sneaky Numbers of Digitville",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/"
    },
    {
        "num": 3290,
        "title": "Maximum Multiplication Score",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-multiplication-score/"
    },
    {
        "num": 3291,
        "title": "Minimum Number of Valid Strings to Form Target I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/"
    },
    {
        "num": 3292,
        "title": "Minimum Number of Valid Strings to Form Target II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/"
    },
    {
        "num": 3293,
        "title": "Calculate Product Final Price",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/calculate-product-final-price/"
    },
    {
        "num": 3294,
        "title": "Convert Doubly Linked List to Array II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/"
    },
    {
        "num": 3295,
        "title": "Report Spam Message",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/report-spam-message/"
    },
    {
        "num": 3296,
        "title": "Minimum Number of Seconds to Make Mountain Height Zero",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/"
    },
    {
        "num": 3297,
        "title": "Count Substrings That Can Be Rearranged to Contain a String I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/"
    },
    {
        "num": 3298,
        "title": "Count Substrings That Can Be Rearranged to Contain a String II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/"
    },
    {
        "num": 3299,
        "title": "Sum of Consecutive Subsequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/sum-of-consecutive-subsequences/"
    },
    {
        "num": 3300,
        "title": "Minimum Element After Replacement With Digit Sum",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/"
    },
    {
        "num": 3301,
        "title": "Maximize the Total Height of Unique Towers",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/"
    },
    {
        "num": 3302,
        "title": "Find the Lexicographically Smallest Valid Sequence",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/"
    },
    {
        "num": 3303,
        "title": "Find the Occurrence of First Almost Equal Substring",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/"
    },
    {
        "num": 3304,
        "title": "Find the K-th Character in String Game I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/"
    },
    {
        "num": 3305,
        "title": "Count of Substrings Containing Every Vowel and K Consonants I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/"
    },
    {
        "num": 3306,
        "title": "Count of Substrings Containing Every Vowel and K Consonants II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/"
    },
    {
        "num": 3307,
        "title": "Find the K-th Character in String Game II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/"
    },
    {
        "num": 3308,
        "title": "Find Top Performing Driver",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-top-performing-driver/"
    },
    {
        "num": 3309,
        "title": "Maximum Possible Number by Binary Concatenation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/"
    },
    {
        "num": 3310,
        "title": "Remove Methods From Project",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/remove-methods-from-project/"
    },
    {
        "num": 3311,
        "title": "Construct 2D Grid Matching Graph Layout",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/"
    },
    {
        "num": 3312,
        "title": "Sorted GCD Pair Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/sorted-gcd-pair-queries/"
    },
    {
        "num": 3313,
        "title": "Find the Last Marked Nodes in Tree",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/"
    },
    {
        "num": 3314,
        "title": "Construct the Minimum Bitwise Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/"
    },
    {
        "num": 3315,
        "title": "Construct the Minimum Bitwise Array II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/"
    },
    {
        "num": 3316,
        "title": "Find Maximum Removals From Source String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-maximum-removals-from-source-string/"
    },
    {
        "num": 3317,
        "title": "Find the Number of Possible Ways for an Event",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/"
    },
    {
        "num": 3318,
        "title": "Find X-Sum of All K-Long Subarrays I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/"
    },
    {
        "num": 3319,
        "title": "K-th Largest Perfect Subtree Size in Binary Tree",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/"
    },
    {
        "num": 3320,
        "title": "Count The Number of Winning Sequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-winning-sequences/"
    },
    {
        "num": 3321,
        "title": "Find X-Sum of All K-Long Subarrays II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/"
    },
    {
        "num": 3322,
        "title": "Premier League Table Ranking III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/premier-league-table-ranking-iii/"
    },
    {
        "num": 3323,
        "title": "Minimize Connected Groups by Inserting Interval",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/"
    },
    {
        "num": 3324,
        "title": "Find the Sequence of Strings Appeared on the Screen",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/"
    },
    {
        "num": 3325,
        "title": "Count Substrings With K-Frequency Characters I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/"
    },
    {
        "num": 3326,
        "title": "Minimum Division Operations to Make Array Non Decreasing",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/"
    },
    {
        "num": 3327,
        "title": "Check if DFS Strings Are Palindromes",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/"
    },
    {
        "num": 3328,
        "title": "Find Cities in Each State II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-cities-in-each-state-ii/"
    },
    {
        "num": 3329,
        "title": "Count Substrings With K-Frequency Characters II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/"
    },
    {
        "num": 3330,
        "title": "Find the Original Typed String I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-original-typed-string-i/"
    },
    {
        "num": 3331,
        "title": "Find Subtree Sizes After Changes",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-subtree-sizes-after-changes/"
    },
    {
        "num": 3332,
        "title": "Maximum Points Tourist Can Earn",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-points-tourist-can-earn/"
    },
    {
        "num": 3333,
        "title": "Find the Original Typed String II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-original-typed-string-ii/"
    },
    {
        "num": 3334,
        "title": "Find the Maximum Factor Score of Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-maximum-factor-score-of-array/"
    },
    {
        "num": 3335,
        "title": "Total Characters in String After Transformations I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/total-characters-in-string-after-transformations-i/"
    },
    {
        "num": 3336,
        "title": "Find the Number of Subsequences With Equal GCD",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/"
    },
    {
        "num": 3337,
        "title": "Total Characters in String After Transformations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/"
    },
    {
        "num": 3338,
        "title": "Second Highest Salary II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/second-highest-salary-ii/"
    },
    {
        "num": 3339,
        "title": "Find the Number of K-Even Arrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-number-of-k-even-arrays/"
    },
    {
        "num": 3340,
        "title": "Check Balanced String",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-balanced-string/"
    },
    {
        "num": 3341,
        "title": "Find Minimum Time to Reach Last Room I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/"
    },
    {
        "num": 3342,
        "title": "Find Minimum Time to Reach Last Room II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/"
    },
    {
        "num": 3343,
        "title": "Count Number of Balanced Permutations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-number-of-balanced-permutations/"
    },
    {
        "num": 3344,
        "title": "Maximum Sized Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-sized-array/"
    },
    {
        "num": 3345,
        "title": "Smallest Divisible Digit Product I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/smallest-divisible-digit-product-i/"
    },
    {
        "num": 3346,
        "title": "Maximum Frequency of an Element After Performing Operations I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/"
    },
    {
        "num": 3347,
        "title": "Maximum Frequency of an Element After Performing Operations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/"
    },
    {
        "num": 3348,
        "title": "Smallest Divisible Digit Product II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/smallest-divisible-digit-product-ii/"
    },
    {
        "num": 3349,
        "title": "Adjacent Increasing Subarrays Detection I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/"
    },
    {
        "num": 3350,
        "title": "Adjacent Increasing Subarrays Detection II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/"
    },
    {
        "num": 3351,
        "title": "Sum of Good Subsequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/sum-of-good-subsequences/"
    },
    {
        "num": 3352,
        "title": "Count K-Reducible Numbers Less Than N",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/"
    },
    {
        "num": 3353,
        "title": "Minimum Total Operations",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-total-operations/"
    },
    {
        "num": 3354,
        "title": "Make Array Elements Equal to Zero",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/make-array-elements-equal-to-zero/"
    },
    {
        "num": 3355,
        "title": "Zero Array Transformation I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/zero-array-transformation-i/"
    },
    {
        "num": 3356,
        "title": "Zero Array Transformation II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/zero-array-transformation-ii/"
    },
    {
        "num": 3357,
        "title": "Minimize the Maximum Adjacent Element Difference",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/"
    },
    {
        "num": 3358,
        "title": "Books with NULL Ratings",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/books-with-null-ratings/"
    },
    {
        "num": 3359,
        "title": "Find Sorted Submatrices With Maximum Element at Most K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-sorted-submatrices-with-maximum-element-at-most-k/"
    },
    {
        "num": 3360,
        "title": "Stone Removal Game",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/stone-removal-game/"
    },
    {
        "num": 3361,
        "title": "Shift Distance Between Two Strings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/shift-distance-between-two-strings/"
    },
    {
        "num": 3362,
        "title": "Zero Array Transformation III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/zero-array-transformation-iii/"
    },
    {
        "num": 3363,
        "title": "Find the Maximum Number of Fruits Collected",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/"
    },
    {
        "num": 3364,
        "title": "Minimum Positive Sum Subarray",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-positive-sum-subarray/"
    },
    {
        "num": 3365,
        "title": "Rearrange K Substrings to Form Target String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/"
    },
    {
        "num": 3366,
        "title": "Minimum Array Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-array-sum/"
    },
    {
        "num": 3367,
        "title": "Maximize Sum of Weights after Edge Removals",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/"
    },
    {
        "num": 3368,
        "title": "First Letter Capitalization",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/first-letter-capitalization/"
    },
    {
        "num": 3369,
        "title": "Design an Array Statistics Tracker",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/design-an-array-statistics-tracker/"
    },
    {
        "num": 3370,
        "title": "Smallest Number With All Set Bits",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/smallest-number-with-all-set-bits/"
    },
    {
        "num": 3371,
        "title": "Identify the Largest Outlier in an Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/"
    },
    {
        "num": 3372,
        "title": "Maximize the Number of Target Nodes After Connecting Trees I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/"
    },
    {
        "num": 3373,
        "title": "Maximize the Number of Target Nodes After Connecting Trees II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/"
    },
    {
        "num": 3374,
        "title": "First Letter Capitalization II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/first-letter-capitalization-ii/"
    },
    {
        "num": 3375,
        "title": "Minimum Operations to Make Array Values Equal to K",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/"
    },
    {
        "num": 3376,
        "title": "Minimum Time to Break Locks I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-break-locks-i/"
    },
    {
        "num": 3377,
        "title": "Digit Operations to Make Two Integers Equal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/"
    },
    {
        "num": 3378,
        "title": "Count Connected Components in LCM Graph",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-connected-components-in-lcm-graph/"
    },
    {
        "num": 3379,
        "title": "Transformed Array",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/transformed-array/"
    },
    {
        "num": 3380,
        "title": "Maximum Area Rectangle With Point Constraints I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/"
    },
    {
        "num": 3381,
        "title": "Maximum Subarray Sum With Length Divisible by K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/"
    },
    {
        "num": 3382,
        "title": "Maximum Area Rectangle With Point Constraints II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/"
    },
    {
        "num": 3383,
        "title": "Minimum Runes to Add to Cast Spell",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/"
    },
    {
        "num": 3384,
        "title": "Team Dominance by Pass Success",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/team-dominance-by-pass-success/"
    },
    {
        "num": 3385,
        "title": "Minimum Time to Break Locks II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-time-to-break-locks-ii/"
    },
    {
        "num": 3386,
        "title": "Button with Longest Push Time",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/button-with-longest-push-time/"
    },
    {
        "num": 3387,
        "title": "Maximize Amount After Two Days of Conversions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/"
    },
    {
        "num": 3388,
        "title": "Count Beautiful Splits in an Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-beautiful-splits-in-an-array/"
    },
    {
        "num": 3389,
        "title": "Minimum Operations to Make Character Frequencies Equal",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/"
    },
    {
        "num": 3390,
        "title": "Longest Team Pass Streak",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-team-pass-streak/"
    },
    {
        "num": 3391,
        "title": "Design a 3D Binary Matrix with Efficient Layer Tracking",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/design-a-3d-binary-matrix-with-efficient-layer-tracking/"
    },
    {
        "num": 3392,
        "title": "Count Subarrays of Length Three With a Condition",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/"
    },
    {
        "num": 3393,
        "title": "Count Paths With the Given XOR Value",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-paths-with-the-given-xor-value/"
    },
    {
        "num": 3394,
        "title": "Check if Grid can be Cut into Sections",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/"
    },
    {
        "num": 3395,
        "title": "Subsequences with a Unique Middle Mode I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/"
    },
    {
        "num": 3396,
        "title": "Minimum Number of Operations to Make Elements in Array Distinct",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/"
    },
    {
        "num": 3397,
        "title": "Maximum Number of Distinct Elements After Operations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/"
    },
    {
        "num": 3398,
        "title": "Smallest Substring With Identical Characters I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/smallest-substring-with-identical-characters-i/"
    },
    {
        "num": 3399,
        "title": "Smallest Substring With Identical Characters II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/"
    },
    {
        "num": 3400,
        "title": "Maximum Number of Matching Indices After Right Shifts",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-matching-indices-after-right-shifts/"
    },
    {
        "num": 3401,
        "title": "Find Circular Gift Exchange Chains",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-circular-gift-exchange-chains/"
    },
    {
        "num": 3402,
        "title": "Minimum Operations to Make Columns Strictly Increasing",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/"
    },
    {
        "num": 3403,
        "title": "Find the Lexicographically Largest String From the Box I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/"
    },
    {
        "num": 3404,
        "title": "Count Special Subsequences",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-special-subsequences/"
    },
    {
        "num": 3405,
        "title": "Count the Number of Arrays with K Matching Adjacent Elements",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/"
    },
    {
        "num": 3406,
        "title": "Find the Lexicographically Largest String From the Box II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/"
    },
    {
        "num": 3407,
        "title": "Substring Matching Pattern",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/substring-matching-pattern/"
    },
    {
        "num": 3408,
        "title": "Design Task Manager",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/design-task-manager/"
    },
    {
        "num": 3409,
        "title": "Longest Subsequence With Decreasing Adjacent Difference",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/"
    },
    {
        "num": 3410,
        "title": "Maximize Subarray Sum After Removing All Occurrences of One Element",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-subarray-sum-after-removing-all-occurrences-of-one-element/"
    },
    {
        "num": 3411,
        "title": "Maximum Subarray With Equal Products",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-subarray-with-equal-products/"
    },
    {
        "num": 3412,
        "title": "Find Mirror Score of a String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-mirror-score-of-a-string/"
    },
    {
        "num": 3413,
        "title": "Maximum Coins From K Consecutive Bags",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-coins-from-k-consecutive-bags/"
    },
    {
        "num": 3414,
        "title": "Maximum Score of Non-overlapping Intervals",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals/"
    },
    {
        "num": 3415,
        "title": "Find Products with Three Consecutive Digits",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-products-with-three-consecutive-digits/"
    },
    {
        "num": 3416,
        "title": "Subsequences with a Unique Middle Mode II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-ii/"
    },
    {
        "num": 3417,
        "title": "Zigzag Grid Traversal With Skip",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/zigzag-grid-traversal-with-skip/"
    },
    {
        "num": 3418,
        "title": "Maximum Amount of Money Robot Can Earn",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/"
    },
    {
        "num": 3419,
        "title": "Minimize the Maximum Edge Weight of Graph",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimize-the-maximum-edge-weight-of-graph/"
    },
    {
        "num": 3420,
        "title": "Count Non-Decreasing Subarrays After K Operations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations/"
    },
    {
        "num": 3421,
        "title": "Find Students Who Improved",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-students-who-improved/"
    },
    {
        "num": 3422,
        "title": "Minimum Operations to Make Subarray Elements Equal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-subarray-elements-equal/"
    },
    {
        "num": 3423,
        "title": "Maximum Difference Between Adjacent Elements in a Circular Array",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/"
    },
    {
        "num": 3424,
        "title": "Minimum Cost to Make Arrays Identical",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-to-make-arrays-identical/"
    },
    {
        "num": 3425,
        "title": "Longest Special Path",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-special-path/"
    },
    {
        "num": 3426,
        "title": "Manhattan Distances of All Arrangements of Pieces",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/manhattan-distances-of-all-arrangements-of-pieces/"
    },
    {
        "num": 3427,
        "title": "Sum of Variable Length Subarrays",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/sum-of-variable-length-subarrays/"
    },
    {
        "num": 3428,
        "title": "Maximum and Minimum Sums of at Most Size K Subsequences",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-and-minimum-sums-of-at-most-size-k-subsequences/"
    },
    {
        "num": 3429,
        "title": "Paint House IV",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/paint-house-iv/"
    },
    {
        "num": 3430,
        "title": "Maximum and Minimum Sums of at Most Size K Subarrays",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-and-minimum-sums-of-at-most-size-k-subarrays/"
    },
    {
        "num": 3431,
        "title": "Minimum Unlocked Indices to Sort Nums",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-unlocked-indices-to-sort-nums/"
    },
    {
        "num": 3432,
        "title": "Count Partitions with Even Sum Difference",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-partitions-with-even-sum-difference/"
    },
    {
        "num": 3433,
        "title": "Count Mentions Per User",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-mentions-per-user/"
    },
    {
        "num": 3434,
        "title": "Maximum Frequency After Subarray Operation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-frequency-after-subarray-operation/"
    },
    {
        "num": 3435,
        "title": "Frequencies of Shortest Supersequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/frequencies-of-shortest-supersequences/"
    },
    {
        "num": 3436,
        "title": "Find Valid Emails",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-valid-emails/"
    },
    {
        "num": 3437,
        "title": "Permutations III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/permutations-iii/"
    },
    {
        "num": 3438,
        "title": "Find Valid Pair of Adjacent Digits in String",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/"
    },
    {
        "num": 3439,
        "title": "Reschedule Meetings for Maximum Free Time I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/"
    },
    {
        "num": 3440,
        "title": "Reschedule Meetings for Maximum Free Time II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/"
    },
    {
        "num": 3441,
        "title": "Minimum Cost Good Caption",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-good-caption/"
    },
    {
        "num": 3442,
        "title": "Maximum Difference Between Even and Odd Frequency I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/"
    },
    {
        "num": 3443,
        "title": "Maximum Manhattan Distance After K Changes",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/"
    },
    {
        "num": 3444,
        "title": "Minimum Increments for Target Multiples in an Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-increments-for-target-multiples-in-an-array/"
    },
    {
        "num": 3445,
        "title": "Maximum Difference Between Even and Odd Frequency II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/"
    },
    {
        "num": 3446,
        "title": "Sort Matrix by Diagonals",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sort-matrix-by-diagonals/"
    },
    {
        "num": 3447,
        "title": "Assign Elements to Groups with Constraints",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/assign-elements-to-groups-with-constraints/"
    },
    {
        "num": 3448,
        "title": "Count Substrings Divisible By Last Digit",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-substrings-divisible-by-last-digit/"
    },
    {
        "num": 3449,
        "title": "Maximize the Minimum Game Score",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-the-minimum-game-score/"
    },
    {
        "num": 3450,
        "title": "Maximum Students on a Single Bench",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-students-on-a-single-bench/"
    },
    {
        "num": 3451,
        "title": "Find Invalid IP Addresses",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-invalid-ip-addresses/"
    },
    {
        "num": 3452,
        "title": "Sum of Good Numbers",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/sum-of-good-numbers/"
    },
    {
        "num": 3453,
        "title": "Separate Squares I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/separate-squares-i/"
    },
    {
        "num": 3454,
        "title": "Separate Squares II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/separate-squares-ii/"
    },
    {
        "num": 3455,
        "title": "Shortest Matching Substring",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/shortest-matching-substring/"
    },
    {
        "num": 3456,
        "title": "Find Special Substring of Length K",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-special-substring-of-length-k/"
    },
    {
        "num": 3457,
        "title": "Eat Pizzas!",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/eat-pizzas/"
    },
    {
        "num": 3458,
        "title": "Select K Disjoint Special Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/select-k-disjoint-special-substrings/"
    },
    {
        "num": 3459,
        "title": "Length of Longest V-Shaped Diagonal Segment",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/"
    },
    {
        "num": 3460,
        "title": "Longest Common Prefix After at Most One Removal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-common-prefix-after-at-most-one-removal/"
    },
    {
        "num": 3461,
        "title": "Check If Digits Are Equal in String After Operations I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/"
    },
    {
        "num": 3462,
        "title": "Maximum Sum With at Most K Elements",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-sum-with-at-most-k-elements/"
    },
    {
        "num": 3463,
        "title": "Check If Digits Are Equal in String After Operations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/"
    },
    {
        "num": 3464,
        "title": "Maximize the Distance Between Points on a Square",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/"
    },
    {
        "num": 3465,
        "title": "Find Products with Valid Serial Numbers",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-products-with-valid-serial-numbers/"
    },
    {
        "num": 3466,
        "title": "Maximum Coin Collection",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-coin-collection/"
    },
    {
        "num": 3467,
        "title": "Transform Array by Parity",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/transform-array-by-parity/"
    },
    {
        "num": 3468,
        "title": "Find the Number of Copy Arrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-number-of-copy-arrays/"
    },
    {
        "num": 3469,
        "title": "Find Minimum Cost to Remove Array Elements",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-minimum-cost-to-remove-array-elements/"
    },
    {
        "num": 3470,
        "title": "Permutations IV",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/permutations-iv/"
    },
    {
        "num": 3471,
        "title": "Find the Largest Almost Missing Integer",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-largest-almost-missing-integer/"
    },
    {
        "num": 3472,
        "title": "Longest Palindromic Subsequence After at Most K Operations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-palindromic-subsequence-after-at-most-k-operations/"
    },
    {
        "num": 3473,
        "title": "Sum of K Subarrays With Length at Least M",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sum-of-k-subarrays-with-length-at-least-m/"
    },
    {
        "num": 3474,
        "title": "Lexicographically Smallest Generated String",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/lexicographically-smallest-generated-string/"
    },
    {
        "num": 3475,
        "title": "DNA Pattern Recognition",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/dna-pattern-recognition/"
    },
    {
        "num": 3476,
        "title": "Maximize Profit from Task Assignment",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-profit-from-task-assignment/"
    },
    {
        "num": 3477,
        "title": "Fruits Into Baskets II",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/fruits-into-baskets-ii/"
    },
    {
        "num": 3478,
        "title": "Choose K Elements With Maximum Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/choose-k-elements-with-maximum-sum/"
    },
    {
        "num": 3479,
        "title": "Fruits Into Baskets III",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/fruits-into-baskets-iii/"
    },
    {
        "num": 3480,
        "title": "Maximize Subarrays After Removing One Conflicting Pair",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/"
    },
    {
        "num": 3481,
        "title": "Apply Substitutions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/apply-substitutions/"
    },
    {
        "num": 3482,
        "title": "Analyze Organization Hierarchy",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/analyze-organization-hierarchy/"
    },
    {
        "num": 3483,
        "title": "Unique 3-Digit Even Numbers",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/unique-3-digit-even-numbers/"
    },
    {
        "num": 3484,
        "title": "Design Spreadsheet",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/design-spreadsheet/"
    },
    {
        "num": 3485,
        "title": "Longest Common Prefix of K Strings After Removal",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-common-prefix-of-k-strings-after-removal/"
    },
    {
        "num": 3486,
        "title": "Longest Special Path II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-special-path-ii/"
    },
    {
        "num": 3487,
        "title": "Maximum Unique Subarray Sum After Deletion",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/"
    },
    {
        "num": 3488,
        "title": "Closest Equal Element Queries",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/closest-equal-element-queries/"
    },
    {
        "num": 3489,
        "title": "Zero Array Transformation IV",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/zero-array-transformation-iv/"
    },
    {
        "num": 3490,
        "title": "Count Beautiful Numbers",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-beautiful-numbers/"
    },
    {
        "num": 3491,
        "title": "Phone Number Prefix",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/phone-number-prefix/"
    },
    {
        "num": 3492,
        "title": "Maximum Containers on a Ship",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-containers-on-a-ship/"
    },
    {
        "num": 3493,
        "title": "Properties Graph",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/properties-graph/"
    },
    {
        "num": 3494,
        "title": "Find the Minimum Amount of Time to Brew Potions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/"
    },
    {
        "num": 3495,
        "title": "Minimum Operations to Make Array Elements Zero",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/"
    },
    {
        "num": 3496,
        "title": "Maximize Score After Pair Deletions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-score-after-pair-deletions/"
    },
    {
        "num": 3497,
        "title": "Analyze Subscription Conversion",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/analyze-subscription-conversion/"
    },
    {
        "num": 3498,
        "title": "Reverse Degree of a String",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/reverse-degree-of-a-string/"
    },
    {
        "num": 3499,
        "title": "Maximize Active Section with Trade I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-active-section-with-trade-i/"
    },
    {
        "num": 3500,
        "title": "Minimum Cost to Divide Array Into Subarrays",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-cost-to-divide-array-into-subarrays/"
    },
        {
        "num": 3501,
        "title": "Maximize Active Section with Trade II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-active-section-with-trade-ii/"
    },
    {
        "num": 3502,
        "title": "Minimum Cost to Reach Every Position",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-cost-to-reach-every-position/"
    },
    {
        "num": 3503,
        "title": "Longest Palindrome After Substring Concatenation I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-i/"
    },
    {
        "num": 3504,
        "title": "Longest Palindrome After Substring Concatenation II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-ii/"
    },
    {
        "num": 3505,
        "title": "Minimum Operations to Make Elements Within K Subarrays Equal",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/"
    },
    {
        "num": 3506,
        "title": "Find Time Required to Eliminate Bacterial Strains",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-time-required-to-eliminate-bacterial-strains/"
    },
    {
        "num": 3507,
        "title": "Minimum Pair Removal to Sort Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/"
    },
    {
        "num": 3508,
        "title": "Implement Router",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/implement-router/"
    },
    {
        "num": 3509,
        "title": "Maximum Product of Subsequences With an Alternating Sum Equal to K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-product-of-subsequences-with-an-alternating-sum-equal-to-k/"
    },
    {
        "num": 3510,
        "title": "Minimum Pair Removal to Sort Array II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/"
    },
    {
        "num": 3511,
        "title": "Make a Positive Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/make-a-positive-array/"
    },
    {
        "num": 3512,
        "title": "Minimum Operations to Make Array Sum Divisible by K",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/"
    },
    {
        "num": 3513,
        "title": "Number of Unique XOR Triplets I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-unique-xor-triplets-i/"
    },
    {
        "num": 3514,
        "title": "Number of Unique XOR Triplets II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-unique-xor-triplets-ii/"
    },
    {
        "num": 3515,
        "title": "Shortest Path in a Weighted Tree",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/shortest-path-in-a-weighted-tree/"
    },
    {
        "num": 3516,
        "title": "Find Closest Person",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-closest-person/"
    },
    {
        "num": 3517,
        "title": "Smallest Palindromic Rearrangement I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/smallest-palindromic-rearrangement-i/"
    },
    {
        "num": 3518,
        "title": "Smallest Palindromic Rearrangement II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/smallest-palindromic-rearrangement-ii/"
    },
    {
        "num": 3519,
        "title": "Count Numbers with Non-Decreasing Digits",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-numbers-with-non-decreasing-digits/"
    },
    {
        "num": 3520,
        "title": "Minimum Threshold for Inversion Pairs Count",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-threshold-for-inversion-pairs-count/"
    },
    {
        "num": 3521,
        "title": "Find Product Recommendation Pairs",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-product-recommendation-pairs/"
    },
    {
        "num": 3522,
        "title": "Calculate Score After Performing Instructions",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/calculate-score-after-performing-instructions/"
    },
    {
        "num": 3523,
        "title": "Make Array Non-decreasing",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/make-array-non-decreasing/"
    },
    {
        "num": 3524,
        "title": "Find X Value of Array I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-x-value-of-array-i/"
    },
    {
        "num": 3525,
        "title": "Find X Value of Array II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-x-value-of-array-ii/"
    },
    {
        "num": 3526,
        "title": "Range XOR Queries with Subarray Reversals",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/range-xor-queries-with-subarray-reversals/"
    },
    {
        "num": 3527,
        "title": "Find the Most Common Response",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-the-most-common-response/"
    },
    {
        "num": 3528,
        "title": "Unit Conversion I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/unit-conversion-i/"
    },
    {
        "num": 3529,
        "title": "Count Cells in Overlapping Horizontal and Vertical Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-cells-in-overlapping-horizontal-and-vertical-substrings/"
    },
    {
        "num": 3530,
        "title": "Maximum Profit from Valid Topological Order in DAG",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-profit-from-valid-topological-order-in-dag/"
    },
    {
        "num": 3531,
        "title": "Count Covered Buildings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-covered-buildings/"
    },
    {
        "num": 3532,
        "title": "Path Existence Queries in a Graph I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/path-existence-queries-in-a-graph-i/"
    },
    {
        "num": 3533,
        "title": "Concatenated Divisibility",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/concatenated-divisibility/"
    },
    {
        "num": 3534,
        "title": "Path Existence Queries in a Graph II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/path-existence-queries-in-a-graph-ii/"
    },
    {
        "num": 3535,
        "title": "Unit Conversion II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/unit-conversion-ii/"
    },
    {
        "num": 3536,
        "title": "Maximum Product of Two Digits",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/maximum-product-of-two-digits/"
    },
    {
        "num": 3537,
        "title": "Fill a Special Grid",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/fill-a-special-grid/"
    },
    {
        "num": 3538,
        "title": "Merge Operations for Minimum Travel Time",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/merge-operations-for-minimum-travel-time/"
    },
    {
        "num": 3539,
        "title": "Find Sum of Array Product of Magical Sequences",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/"
    },
    {
        "num": 3540,
        "title": "Minimum Time to Visit All Houses",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-visit-all-houses/"
    },
    {
        "num": 3541,
        "title": "Find Most Frequent Vowel and Consonant",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/"
    },
    {
        "num": 3542,
        "title": "Minimum Operations to Convert All Elements to Zero",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/"
    },
    {
        "num": 3543,
        "title": "Maximum Weighted K-Edge Path",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-weighted-k-edge-path/"
    },
    {
        "num": 3544,
        "title": "Subtree Inversion Sum",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/subtree-inversion-sum/"
    },
    {
        "num": 3545,
        "title": "Minimum Deletions for At Most K Distinct Characters",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/"
    },
    {
        "num": 3546,
        "title": "Equal Sum Grid Partition I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/equal-sum-grid-partition-i/"
    },
    {
        "num": 3547,
        "title": "Maximum Sum of Edge Values in a Graph",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-sum-of-edge-values-in-a-graph/"
    },
    {
        "num": 3548,
        "title": "Equal Sum Grid Partition II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/equal-sum-grid-partition-ii/"
    },
    {
        "num": 3549,
        "title": "Multiply Two Polynomials",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/multiply-two-polynomials/"
    },
    {
        "num": 3550,
        "title": "Smallest Index With Digit Sum Equal to Index",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/"
    },
    {
        "num": 3551,
        "title": "Minimum Swaps to Sort by Digit Sum",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/"
    },
    {
        "num": 3552,
        "title": "Grid Teleportation Traversal",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/grid-teleportation-traversal/"
    },
    {
        "num": 3553,
        "title": "Minimum Weighted Subgraph With the Required Paths II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths-ii/"
    },
    {
        "num": 3554,
        "title": "Find Category Recommendation Pairs",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-category-recommendation-pairs/"
    },
    {
        "num": 3555,
        "title": "Smallest Subarray to Sort in Every Sliding Window",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/smallest-subarray-to-sort-in-every-sliding-window/"
    },
    {
        "num": 3556,
        "title": "Sum of Largest Prime Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sum-of-largest-prime-substrings/"
    },
    {
        "num": 3557,
        "title": "Find Maximum Number of Non Intersecting Substrings",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/"
    },
    {
        "num": 3558,
        "title": "Number of Ways to Assign Edge Weights I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i/"
    },
    {
        "num": 3559,
        "title": "Number of Ways to Assign Edge Weights II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii/"
    },
    {
        "num": 3560,
        "title": "Find Minimum Log Transportation Cost",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-minimum-log-transportation-cost/"
    },
    {
        "num": 3561,
        "title": "Resulting String After Adjacent Removals",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/resulting-string-after-adjacent-removals/"
    },
    {
        "num": 3562,
        "title": "Maximum Profit from Trading Stocks with Discounts",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts/"
    },
    {
        "num": 3563,
        "title": "Lexicographically Smallest String After Adjacent Removals",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/lexicographically-smallest-string-after-adjacent-removals/"
    },
    {
        "num": 3564,
        "title": "Seasonal Sales Analysis",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/seasonal-sales-analysis/"
    },
    {
        "num": 3565,
        "title": "Sequential Grid Path Cover",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sequential-grid-path-cover/"
    },
    {
        "num": 3566,
        "title": "Partition Array into Two Equal Product Subsets",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/partition-array-into-two-equal-product-subsets/"
    },
    {
        "num": 3567,
        "title": "Minimum Absolute Difference in Sliding Submatrix",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/"
    },
    {
        "num": 3568,
        "title": "Minimum Moves to Clean the Classroom",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-moves-to-clean-the-classroom/"
    },
    {
        "num": 3569,
        "title": "Maximize Count of Distinct Primes After Split",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-count-of-distinct-primes-after-split/"
    },
    {
        "num": 3570,
        "title": "Find Books with No Available Copies",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-books-with-no-available-copies/"
    },
    {
        "num": 3571,
        "title": "Find the Shortest Superstring II",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-the-shortest-superstring-ii/"
    },
    {
        "num": 3572,
        "title": "Maximize Y-Sum by Picking a Triplet of Distinct X-Values",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximize-y-sum-by-picking-a-triplet-of-distinct-x-values/"
    },
    {
        "num": 3573,
        "title": "Best Time to Buy and Sell Stock V",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/"
    },
    {
        "num": 3574,
        "title": "Maximize Subarray GCD Score",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-subarray-gcd-score/"
    },
    {
        "num": 3575,
        "title": "Maximum Good Subtree Score",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximum-good-subtree-score/"
    },
    {
        "num": 3576,
        "title": "Transform Array to All Equal Elements",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/transform-array-to-all-equal-elements/"
    },
    {
        "num": 3577,
        "title": "Count the Number of Computer Unlocking Permutations",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/"
    },
    {
        "num": 3578,
        "title": "Count Partitions With Max-Min Difference at Most K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/"
    },
    {
        "num": 3579,
        "title": "Minimum Steps to Convert String with Operations",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-steps-to-convert-string-with-operations/"
    },
    {
        "num": 3580,
        "title": "Find Consistently Improving Employees",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-consistently-improving-employees/"
    },
    {
        "num": 3581,
        "title": "Count Odd Letters from Number",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/count-odd-letters-from-number/"
    },
    {
        "num": 3582,
        "title": "Generate Tag for Video Caption",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/generate-tag-for-video-caption/"
    },
    {
        "num": 3583,
        "title": "Count Special Triplets",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-special-triplets/"
    },
    {
        "num": 3584,
        "title": "Maximum Product of First and Last Elements of a Subsequence",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-product-of-first-and-last-elements-of-a-subsequence/"
    },
    {
        "num": 3585,
        "title": "Find Weighted Median Node in Tree",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-weighted-median-node-in-tree/"
    },
    {
        "num": 3586,
        "title": "Find COVID Recovery Patients",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-covid-recovery-patients/"
    },
    {
        "num": 3587,
        "title": "Minimum Adjacent Swaps to Alternate Parity",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-adjacent-swaps-to-alternate-parity/"
    },
    {
        "num": 3588,
        "title": "Find Maximum Area of a Triangle",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-maximum-area-of-a-triangle/"
    },
    {
        "num": 3589,
        "title": "Count Prime-Gap Balanced Subarrays",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-prime-gap-balanced-subarrays/"
    },
    {
        "num": 3590,
        "title": "Kth Smallest Path XOR Sum",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/kth-smallest-path-xor-sum/"
    },
    {
        "num": 3591,
        "title": "Check if Any Element Has Prime Frequency",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-if-any-element-has-prime-frequency/"
    },
    {
        "num": 3592,
        "title": "Inverse Coin Change",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/inverse-coin-change/"
    },
    {
        "num": 3593,
        "title": "Minimum Increments to Equalize Leaf Paths",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/"
    },
    {
        "num": 3594,
        "title": "Minimum Time to Transport All Individuals",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-time-to-transport-all-individuals/"
    },
    {
        "num": 3595,
        "title": "Once Twice",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/once-twice/"
    },
    {
        "num": 3596,
        "title": "Minimum Cost Path with Alternating Directions I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-path-with-alternating-directions-i/"
    },
    {
        "num": 3597,
        "title": "Partition String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/partition-string/"
    },
    {
        "num": 3598,
        "title": "Longest Common Prefix Between Adjacent Strings After Removals",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-common-prefix-between-adjacent-strings-after-removals/"
    },
    {
        "num": 3599,
        "title": "Partition Array to Minimize XOR",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/partition-array-to-minimize-xor/"
    },
    {
        "num": 3600,
        "title": "Maximize Spanning Tree Stability with Upgrades",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/maximize-spanning-tree-stability-with-upgrades/"
    },
    {
        "num": 3601,
        "title": "Find Drivers with Improved Fuel Efficiency",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-drivers-with-improved-fuel-efficiency/"
    },
    {
        "num": 3602,
        "title": "Hexadecimal and Hexatrigesimal Conversion",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/hexadecimal-and-hexatrigesimal-conversion/"
    },
    {
        "num": 3603,
        "title": "Minimum Cost Path with Alternating Directions II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-cost-path-with-alternating-directions-ii/"
    },
    {
        "num": 3604,
        "title": "Minimum Time to Reach Destination in Directed Graph",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-reach-destination-in-directed-graph/"
    },
    {
        "num": 3605,
        "title": "Minimum Stability Factor of Array",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-stability-factor-of-array/"
    },
    {
        "num": 3606,
        "title": "Coupon Code Validator",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/coupon-code-validator/"
    },
    {
        "num": 3607,
        "title": "Power Grid Maintenance",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/power-grid-maintenance/"
    },
    {
        "num": 3608,
        "title": "Minimum Time for K Connected Components",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-for-k-connected-components/"
    },
    {
        "num": 3609,
        "title": "Minimum Moves to Reach Target in Grid",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/minimum-moves-to-reach-target-in-grid/"
    },
    {
        "num": 3610,
        "title": "Minimum Number of Primes to Sum to Target",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-number-of-primes-to-sum-to-target/"
    },
    {
        "num": 3611,
        "title": "Find Overbooked Employees",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-overbooked-employees/"
    },
    {
        "num": 3612,
        "title": "Process String with Special Operations I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/process-string-with-special-operations-i/"
    },
    {
        "num": 3613,
        "title": "Minimize Maximum Component Cost",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimize-maximum-component-cost/"
    },
    {
        "num": 3614,
        "title": "Process String with Special Operations II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/process-string-with-special-operations-ii/"
    },
    {
        "num": 3615,
        "title": "Longest Palindromic Path in Graph",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/longest-palindromic-path-in-graph/"
    },
    {
        "num": 3616,
        "title": "Number of Student Replacements",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/number-of-student-replacements/"
    },
    {
        "num": 3617,
        "title": "Find Students with Study Spiral Pattern",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/find-students-with-study-spiral-pattern/"
    },
    {
        "num": 3618,
        "title": "Split Array by Prime Indices",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/split-array-by-prime-indices/"
    },
    {
        "num": 3619,
        "title": "Count Islands With Total Value Divisible by K",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/"
    },
    {
        "num": 3620,
        "title": "Network Recovery Pathways",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/network-recovery-pathways/"
    },
    {
        "num": 3621,
        "title": "Number of Integers With Popcount-Depth Equal to K I",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/"
    },
    {
        "num": 3622,
        "title": "Check Divisibility by Digit Sum and Product",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/"
    },
    {
        "num": 3623,
        "title": "Count Number of Trapezoids I",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/count-number-of-trapezoids-i/"
    },
    {
        "num": 3624,
        "title": "Number of Integers With Popcount-Depth Equal to K II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/"
    },
    {
        "num": 3625,
        "title": "Count Number of Trapezoids II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/count-number-of-trapezoids-ii/"
    },
    {
        "num": 3626,
        "title": "Find Stores with Inventory Imbalance",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/find-stores-with-inventory-imbalance/"
    },
    {
        "num": 3627,
        "title": "Maximum Median Sum of Subsequences of Size 3",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-median-sum-of-subsequences-of-size-3/"
    },
    {
        "num": 3628,
        "title": "Maximum Number of Subsequences After One Inserting",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-number-of-subsequences-after-one-inserting/"
    },
    {
        "num": 3629,
        "title": "Minimum Jumps to Reach End via Prime Teleportation",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation/"
    },
    {
        "num": 3630,
        "title": "Partition Array for Maximum XOR and AND",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/partition-array-for-maximum-xor-and-and/"
    },
    {
        "num": 3631,
        "title": "Sort Threats by Severity and Exploitability",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/sort-threats-by-severity-and-exploitability/"
    },
    {
        "num": 3632,
        "title": "Subarrays with XOR at Least K",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/subarrays-with-xor-at-least-k/"
    },
    {
        "num": 3633,
        "title": "Earliest Finish Time for Land and Water Rides I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i/"
    },
    {
        "num": 3634,
        "title": "Minimum Removals to Balance Array",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-removals-to-balance-array/"
    },
    {
        "num": 3635,
        "title": "Earliest Finish Time for Land and Water Rides II",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/"
    },
    {
        "num": 3636,
        "title": "Threshold Majority Queries",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/threshold-majority-queries/"
    },
    {
        "num": 3637,
        "title": "Trionic Array I",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/trionic-array-i/"
    },
    {
        "num": 3638,
        "title": "Maximum Balanced Shipments",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/maximum-balanced-shipments/"
    },
    {
        "num": 3639,
        "title": "Minimum Time to Activate String",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/minimum-time-to-activate-string/"
    },
    {
        "num": 3640,
        "title": "Trionic Array II",
        "difficulty": "Hard",
        "link": "https://leetcode.com/problems/trionic-array-ii/"
    },
    {
        "num": 3641,
        "title": "Longest Semi-Repeating Subarray",
        "difficulty": "Medium",
        "link": "https://leetcode.com/problems/longest-semi-repeating-subarray/"
    },
    {
        "num": 3642,
        "title": "Find Books with Polarized Opinions",
        "difficulty": "Easy",
        "link": "https://leetcode.com/problems/find-books-with-polarized-opinions/"
    },
]