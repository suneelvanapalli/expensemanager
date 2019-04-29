import { GraphQLSchema , GraphQLString, GraphQLObjectType }  from 'graphql';

const RootQueryType = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        me: {
            type: GraphQLString,
            description: "this is a test descr" ,
            resolve: (obj,args,ctx) =>{
                return "this is my world!";
            }
        }
    } 
});


export const nSchema = new GraphQLSchema({
     query : RootQueryType
});

//export default nSchema;

