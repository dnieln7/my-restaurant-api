const typeDefs = require('./schema');
const resolvers = require('../database/resolvers');
const {ApolloServer} = require('apollo-server');
const {tb_employees} = require('../database/models');
const {tb_memories} = require('../database/models');
const {tb_meals} = require('../database/models');
const {tb_menus} = require('../database/models');
const {tb_orders} = require('../database/models');

const port = process.env.PORT || 10010;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({req}) {
        const token = req.headers.authorization || '';

        return {tb_employees, tb_memories, tb_meals, tb_menus, tb_orders, token};
    }
});

server.listen({port: port}).then(({url}) => {
    console.log("Server is running on " + url + "!")
});

