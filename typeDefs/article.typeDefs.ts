import { gql } from "apollo-server-express";

export const typeDefsArticle = gql`
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
      filterValue:String
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
