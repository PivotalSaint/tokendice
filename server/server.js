const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas/index')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
.then(() => {
    console.log("MongoDB Connected");
    return server.listen({port:3000})
})
.then((res) => {
    console.log(`Server running at ${res.url}`)
});
