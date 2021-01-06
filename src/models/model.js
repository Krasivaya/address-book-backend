const models = (sequelize, Sequelize) => {
  const Contacts = sequelize.define('contacts', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone_number: {
      type: Sequelize.STRING
    },
    blocked: {
      type: Sequelize.BOOLEAN
    }
  });
  return Contacts
};

module.exports = models