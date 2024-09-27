import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDatabase } from "./config/database";
import Article from "./models/article.model";
const app: Express = express();
const port: number = 3000;
connectDatabase();
//Rest API
// app.get("/articles", async (req: Request, res: Response) => {
//   const articles = await Article.find({
//     deleted: false
//   })
//   console.log(articles);
//   res.json({
//     articles: articles
//   });
// });
app.get("/articles", async (req: Request, res: Response) => {
  const articles = await Article.find({
    deleted: false
  });
  res.json({
    articles: articles
  });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});