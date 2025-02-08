# Next.js 15 Dynamic Route Error: accessing router.query too early

This repository demonstrates a common error encountered when working with dynamic routes in Next.js 15.  Accessing `router.query` within a component before the route parameters are available leads to a runtime error: `Cannot read properties of undefined (reading 'id')`.

The `bug.js` file showcases the problematic code. The solution, presented in `bugSolution.js`, uses conditional rendering or `useEffect` to handle the situation gracefully. 

## How to reproduce:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit `/about` in your browser. You will encounter the error. 
6. Try the solution in bugSolution.js by running it in a different file and following instructions.