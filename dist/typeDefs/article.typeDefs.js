"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsArticle = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsArticle = (0, apollo_server_express_1.gql) `
  type Article {
    id:String,
    title:String,
    avatar:String,
    description:String,
    categoryId:String,
    category:Category

  }

  type Query {
    getListArticle(
      sortKey:String,
      sortValue:String,
      limitItems:Int,
      page:Int,
      filterKey:String,
      filterValue:String,
      keyword:String
    ): [Article],
    getArticle(id:String): Article
  }
  type Message {
    code: Int,
    message: String
  }

  input ArticleInput {
    title:String,
    avatar:String,
    description:String,
    categoryId:String
  }
  
  type Mutation {
    createArticle(article:ArticleInput): Article,
    deleteArticle(id:String) : Message,
    updateArticle(id:String,article:ArticleInput) : Article
  }
`;
