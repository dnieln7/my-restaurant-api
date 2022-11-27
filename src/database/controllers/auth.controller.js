require('dotenv').config({
    path: '../../.env'
});

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function login(tb_employees, auth) {
    const response = {
        successful: false,
        message: "Internal server error",
        token: "",
        role: "",
    };

    const employee = await tb_employees.findOne({where: {username: auth.username}});

    if (employee) {
        const matches = await bcrypt.compare(auth.password, employee.password);

        if (matches) {
            const token = jwt.sign(
                {
                    sub: employee.id,
                    username: employee.username,
                    role: employee.role,
                    issuer: process.env.ISSUER
                },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: "25m"
                },
            );

            response.successful = true;
            response.message = "Logged";
            response.token = token;
            response.role = employee.role;
        } else {
            response.message = "Wrong password!";
        }
    } else {
        response.message = "User not found!"
    }

    return response;
}

async function signUp(tb_employees, employee) {
    const response = {
        successful: false,
        message: "Internal server error",
        result: null
    };

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(employee.password, salt);

        employee.password = hash;

        const user = await tb_employees.create(employee);

        user.password = "";

        response.successful = true;
        response.message = "Signed up";
        response.result = user;
    } catch (e) {
        response.message = e.toString();
    }

    return response;
}

async function update(tb_employees, id, employee) {
    const response = {
        successful: false,
        message: "Internal server error",
        result: null
    };

    try {
        const result = await tb_employees.findByPk(id);

        if (result) {
            let resultU;

            if (employee.password === "N/A") {
                resultU = await result.update(employee, {
                    fields: [
                        'username',
                        'role'
                    ]
                });
            } else {
                resultU = await result.update(employee);
            }

            resultU.password = "";

            response.successful = true;
            response.message = "User updated";
            response.result = resultU;
        } else {
            response.message = "User not found";
        }

    } catch (e) {
        response.message = e.toString();
    }

    return response;
}

function verifyToken(token, roles) {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        if(!decoded.role || !decoded.issuer) {
            return false;
        }

        return roles.includes(decoded.role) && decoded.issuer === process.env.ISSUER;
    } catch (error) {
        console.error('Invalid token');

        return false;
    }
}

module.exports = {
    login,
    signUp,
    update,
    verifyToken
};
