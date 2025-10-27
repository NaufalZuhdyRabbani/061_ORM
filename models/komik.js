module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        author: {
            type: DataTypes.STRING,
        }
    });
    return Komik;
}
