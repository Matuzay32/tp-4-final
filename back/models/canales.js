module.exports = (sequelize, type) => {
	const Canales = sequelize.define("canales", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: type.STRING,
	});

	return Canales;
};
