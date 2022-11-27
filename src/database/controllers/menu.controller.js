async function create(tb_menus, menu) {
    let resultU = null;

    try {
        const result = await tb_menus.findByPk(1);

        if (result) {
            resultU = await result.update(menu);
        } else {
            resultU = await tb_menus.create(menu);
        }
    } catch (e) {
        console.error(e);
    }

    return resultU;
}

module.exports = {
    create
}
