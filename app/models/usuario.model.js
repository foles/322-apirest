module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        rol: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        ap_paterno: {
            type: Sequelize.STRING
        },
        ap_materno: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING
        },
        fecha_nac: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
};