const User = require('./User');
const FavTrails = require('./FavTrails');

console.log(FavTrails);
User.hasMany(FavTrails, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

FavTrails.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, FavTrails };