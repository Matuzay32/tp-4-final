module.exports = (sequelize, type) => {
	const Provincia = sequelize.define("provincias", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		provincia: type.STRING,
	});

	return Provincia;
};
