module.exports = (sequelize, type) => {
	const Ciudad = sequelize.define("ciudades", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},

		ciudad: type.STRING,
	});

	return Ciudad;
};
