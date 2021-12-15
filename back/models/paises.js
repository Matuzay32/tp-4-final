module.exports = (sequelize, type) => {
    const Paises = sequelize.define("paises", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        pais: type.STRING,

    })


    return Paises;
}
