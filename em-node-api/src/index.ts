import express from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb';
import  { buildSchema, GraphQLString } from 'graphql';
import graphqlHttp = require('express-graphql');

import { nSchema  } from '../Schema';

const url = "mongodb://localhost:27017/test";



MongoClient.connect(url, (err,db) => {
    var dbo = db.db("admin");
     dbo.collection("test").find().toArray((err,result)=>{
        console.log(result);      
    });
    
});

const app = express();

app.use('/graphql', graphqlHttp({ schema:nSchema, graphiql : true  }));

const port = 3000;
const serverName = 'test';

const server = app.listen(port, () => {
    console.log("app is running on port 3000");
});

export default server;