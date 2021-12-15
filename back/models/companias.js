module.exports = (sequelize, type) => {
	const Companias = sequelize.define("companias", {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		compania: type.STRING,
		numero: type.INTEGER,
	});

	return Companias;
};
