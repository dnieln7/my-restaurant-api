async function update(tb_orders, id, status) {
    let resultU = null;

    try {
        resultU = await tb_orders.update({fulfilled: status}, {where: {id: id}});

    } catch (e) {
        console.error(e);
    }

    return {
        rows: resultU === null ? 0 : resultU[0] === null ? 0 : resultU[0]
    };
}

module.exports = {
    update
}
