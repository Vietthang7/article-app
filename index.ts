import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDatabase } from "./config/database";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs/index.typeDef";
import { resolvers } from "./resolvers/index.resolver";
const startServer = async () => {
  connectDatabase();
  const app: Express = express();
  const port: number = 3000;

  //Graphql
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql"
  });
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
startServer();