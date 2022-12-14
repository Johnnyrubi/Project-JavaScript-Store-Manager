const { ObjectId } = require('mongodb');
const connection = require('./connection');

const products = async () => connection()
  .then((db) => db.collection('products'));

const findOne = async (name) => products()
  .then((prod) => prod.findOne({ name }));

const create = async (name, quantity) => products()
  .then((prod) => prod.insertOne({ name, quantity }));

const getId = async (id) => products()
  .then((prod) => prod.findOne(ObjectId(id)));

const getAll = async () => products()
  .then((prod) => prod.find().toArray());

const updateById = async (id, name, quantity) => products()
  .then((prod) => prod.updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));

const deleteById = async (id) => products()
  .then((prod) => prod.deleteOne({ _id: ObjectId(id) }));

module.exports = { create, getId, getAll, updateById, deleteById, findOne };
