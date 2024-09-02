import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

// Configure dotenv based on the environment
if (process.env['NODE_ENV'] === 'production') {
  dotenv.config({ path: '.env.prod' });
} else {
  dotenv.config({ path: '.env.dev' });
}

const PORT = process.env["PORT"];

app.get("/", (_request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});