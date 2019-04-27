import express from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb';
import  { buildSchema } from 'graphql';
import graphqlHttp = require('express-graphql');

const url = "mongodb://localhost:27017/test";

const schema = buildSchema(`
   type Query{
       hello: string
   }
`);

let root = {
    hello: () => {
      return 'Hello world!';
    },
  };

MongoClient.connect(url, (err,db) => {
    var dbo = db.db("admin");
     dbo.collection("test").find().toArray((err,result)=>{
        console.log(result);      
    });
    
});

const app = express();

app.use('/graphql', graphqlHttp({ schema: schema, rootValue: root, graphiql : true  }));

const port = 3000;
const serverName = 'test';

const server = app.listen(port, () => {
    console.log("app is running on port 3000");
});

export default server;