const {gql} = require('apollo-server');

const typeDefs = gql`    
    # Employee

    enum Role {
        admin
        employee
    }

    type Employee {
        id: ID
        username: String
        password: String
        role: Role
    }

    input EmployeeIn {
        username: String
        password: String
        role: String
    }
    
    input AuthIn {
        username: String
        password: String
    }
    
    type LoginResponse {
        successful: Boolean
        message: String
        token: String
        role: String
    }

    type SignUpResponse {
        successful: Boolean
        message: String
        result: Employee
    }

    # Memory

    type Memory {
        id: ID
        title: String
        picture: String
        date: String
    }

    input MemoryIn {
        title: String
        picture: String
        date: String
    }

    # Meal 

    enum MealType {
        Entrance
        Middle
        Stew
        Dessert
        Drink
    }

    type Meal {
        id: ID
        name: String
        description: String
        price: Float
        picture: String
        type: MealType
    }

    input MealIn {
        name: String
        description: String
        price: Float
        picture: String
        type: MealType
    }

    # Menu 

    type Menu {
        id: ID
        entrances: [Meal]
        middles: [Meal]
        stews: [Meal]
        desserts: [Meal]
        drinks: [Meal]
    }

    input MenuIn {
        entrances: [MealIn]!
        middles: [MealIn]!
        stews: [MealIn]!
        desserts: [MealIn]!
        drinks: [MealIn]!
    }

    # Order

    enum OrderType {
        delivery
        reservation
    }

    type Order {
        id: ID
        type: OrderType
        fulfilled: Boolean
        extras: String
        comments: String
        client_name: String
        client_phone: String
        client_address_street: String
        client_address_city: String
        client_address_pc: String
        client_address_references: String
        entrance: Meal
        middle: Meal
        stew: Meal
        dessert: Meal
        drink: Meal
        date: String
        total: Float
    }

    input OrderIn {
        type: OrderType
        fulfilled: Boolean
        extras: String
        comments: String
        client_name: String
        client_phone: String
        client_address_street: String
        client_address_city: String
        client_address_pc: String
        client_address_references: String
        entrance: MealIn!
        middle: MealIn
        stew: MealIn!
        dessert: MealIn
        drink: MealIn!
        date: String!
        total: Float!
    }

    type UpdateOrderStatusResponse {
        rows: Int!
    }
    
    type DeleteResponse {
        successful: Boolean
    }

    # Queries & Mutations

    type Query {
        login(auth: AuthIn!): LoginResponse
        employees: [Employee]!
        memories: [Memory]!
        meals: [Meal]!
        menu: Menu!
        orders: [Order]
    }

    type Mutation {
        signUp(employee: EmployeeIn!): SignUpResponse
        updateEmployee(id: ID!, employee: EmployeeIn!): SignUpResponse!
        deleteEmployee(id: ID!): DeleteResponse
        createMemory(memory: MemoryIn!): Memory
        createMeal(meal: MealIn!): Meal
        deleteMeal(id:ID!): DeleteResponse
        createMenu(menu: MenuIn!): Menu
        createOrder(order: OrderIn!): Order
        updateOrderStatus(id: ID!, status: Boolean): UpdateOrderStatusResponse!
        deleteOrder(id:ID!): DeleteResponse
    }
`;

module.exports = typeDefs;
