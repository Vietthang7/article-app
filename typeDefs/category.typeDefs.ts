import { gql } from "apollo-server-express";

export const typeDefsCategory = gql`
  type Category {
    id:String,
    title:String,
    avatar:String,
    description:String
  }

  type Query {
    getListCategory: [Category],
    getCategory(id:String): Category
  }

  input CategoryInput {
    title:String,
    avatar:String,
    description:String
  }
  
  type Mutation {
    createCategory(category:CategoryInput): Category,
    deleteCategory(id:String) : Message,
    updateCategory(id:String,category:CategoryInput) : Category
  }
`;
