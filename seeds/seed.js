const sequelize = require('../config/connection');
const { User, FavTrails } = require('../models');

const userData = require('./userData.json');
const favTrailsData = require('./favTrailsData.json');

console.log(FavTrails);
const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true
	});

	await FavTrails.bulkCreate(favTrailsData, {
		individualHooks: true,
		returning: true
	});

	process.exit(0);
};

seedDatabase();
