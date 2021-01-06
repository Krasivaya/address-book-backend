const db = require('../models')
const Contact = db.address_book
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const contact = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    blocked: req.body.blocked || false,
  }

  Contact.create(contact)
    .then(data => res.send(data))
    .catch(error => res.status(500)
      .send(error.message))
};

exports.getAll = (req, res) => {
  const name = req.query.name;

  const whereAs = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Contact.findAll({ where: whereAs })
    .then(data => res.send(data))
    .catch(error => res.status(500).send(error.message))
}

exports.getAllBlocked = (req, res) => {
  Contact.findAll({ where: { blocked: true } })
    .then(data => res.send(data))
    .catch(error => res.status(500).send(error.message))
}

exports.getOne = (req, res) => {
  const id = req.params.id;

  Contact.findByPk(id)
    .then(data => res.send(data))
    .catch(error => res.status(500).send(error.message))
}

exports.updateOne = (req, res) => {
  const id = req.params.id;

  Contact.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: 'Contact has been updated successfully' })
      else res.send({ message: `Cannot update Contact with id=${id}` })
    })
    .catch(error => res.status(500).send(error.message))
}

exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Contact.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: 'Contact has been deleted successfully' })
      else res.send({ message: `Cannot delete Contact with id=${id}` })
    })
    .catch(error => res.status(500).send(error.message))
}

exports.deleteAll = (req, res) => {
  Contact.destroy({ where: {} })
    .then(nums => res.send({ message: `${nums} Contacts has been deleted successfully` }))
    .catch(error => res.status(500).send(error.message))
}