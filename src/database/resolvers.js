const {AuthenticationError} = require('apollo-server-errors');

const authController = require('./controllers/auth.controller');
const menuController = require('./controllers/menu.controller');
const orderController = require('./controllers/order.controller');

const resolvers = {
    Query: {
        login: (_, inputs, {tb_employees}) => authController.login(tb_employees, inputs.auth),
        employees: (_, __, {tb_employees, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return tb_employees.findAll()
        },
        memories: (_, __, {tb_memories}) => tb_memories.findAll(),
        meals: (_, __, {tb_meals, token}) => tb_meals.findAll(),
        menu: (_, __, {tb_menus}) => tb_menus.findByPk(1),
        orders: (_, __, {tb_orders, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return tb_orders.findAll()
        },
    },
    Mutation: {
        signUp: (_, inputs, {tb_employees}) => authController.signUp(tb_employees, inputs.employee),
        updateEmployee: (_, inputs, {tb_employees, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return authController.update(tb_employees, inputs.id, inputs.employee)
        },
        deleteEmployee: async (_, inputs, {tb_employees, token}) => {
            if (!isAdmin(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            const rows = await tb_employees.destroy({where: {id: inputs.id}});

            return {successful: rows > 0};
        },
        createMemory: (_, inputs, {tb_memories}) => tb_memories.create(inputs.memory),
        createMeal: (_, inputs, {tb_meals, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return tb_meals.create(inputs.meal)
        },
        deleteMeal: async (_, inputs, {tb_meals, token}) => {
            if (!isAdmin(token)) {
                throw new AuthenticationError('Only admin users can delete meals');
            }

            const rows = await tb_meals.destroy({where: {id: inputs.id}});

            return {successful: rows > 0};
        },
        createMenu: (_, inputs, {tb_menus, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return menuController.create(tb_menus, inputs.menu)
        },
        createOrder: (_, inputs, {tb_orders}) => tb_orders.create(inputs.order),
        updateOrderStatus: (_, inputs, {tb_orders, token}) => {
            if (!isAdminOrEmployee(token)) {
                throw new AuthenticationError('Your are not allowed to see this');
            }

            return orderController.update(tb_orders, inputs.id, inputs.status)
        },
        deleteOrder: async (_, inputs, {tb_orders, token}) => {
            if (!isAdmin(token)) {
                throw new AuthenticationError('Only admin users can delete orders');
            }

            const rows = await tb_orders.destroy({where: {id: inputs.id}});

            return {successful: rows > 0};
        },
    }
};

function isAdminOrEmployee(token) {
    return token !== '' && authController.verifyToken(token, ['admin', 'employee']);
}

function isAdmin(token) {
    return token !== '' && authController.verifyToken(token, ['admin']);
}

module.exports = resolvers;
