const helper = require('../utils/helper.util');
const knex = require("../configs/db.config")

async function get(){
  const data = await knex.select('id', 'pet_name', 'type_of_pet','gender', 'dob').from('pet').where({
    is_active: true,
    is_deleted: false
  })

  const countData = await knex('pet').where({
    is_active: true,
    is_deleted: false
  }).count()

  return {
    countData,
    data
  }
}

async function getById(id){
  const data = await knex.select('id', 'pet_name', 'type_of_pet','gender', 'dob').from('pet').where({
    is_active: true,
    is_deleted: false,
    id : id
  })

  return {
    data
  }
}

async function create(post, res){
  let pet_name = post.pet_name
  let type_of_pet = post.type_of_pet
  let gender = post.gender
  let dob = post.dob

  if(pet_name == ""){
    helper.validation("Pet name", res)
  }
  if(type_of_pet == ""){
    helper.validation("Type of pet", res)
  }
  if(gender == ""){
    helper.validation("Pet gender", res)
  }

  let result = await knex('pet').insert({
    "pet_name": pet_name,
    "type_of_pet": type_of_pet,
    "gender": gender,
    "dob": dob
  })

  if(result){
    let message = 'Pet created successfully'
    helper.succes(message,res)
  }else{
    helper.error(res)
  }
}

async function update(id, post, res){
    let pet_name = post.pet_name
    let type_of_pet = post.type_of_pet
    let gender = post.gender
    let dob = post.dob
  
    if(pet_name == ""){
      helper.validation("Pet name", res)
    }
    if(type_of_pet == ""){
      helper.validation("Type of pet", res)
    }
    if(gender == ""){
      helper.validation("Pet gender", res)
    }

  let result = await knex('pet').where('id', id).update({
    "pet_name": pet_name,
    "type_of_pet": type_of_pet,
    "gender": gender,
    "dob": dob
  })

  if(result){
    let message = 'Pet updated successfully'
    helper.succes(message,res)
  }else{
    helper.error(res)
  }
}

async function remove(id, post, res){
  let value = post.is_active

  if(value === ""){
    helper.validation("Value", res)
  }

  let result = await knex('pet').where('id', id).update({
    "is_active": value
  })

  if(result){
    let message = 'Status data has been updated successfully'
    helper.succes(message,res)
  }else{
    helper.error(res)
  }
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove
}