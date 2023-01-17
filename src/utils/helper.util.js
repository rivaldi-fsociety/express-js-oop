function validation(value, res){
  res.status(422).json({
    'status' : 422,
    'message' : `${value} cannot be empty.`
  })
  return false
}

function succes(message, res){
  res.status(200).json({
    'status' : 200,
    'message' : message,
  })
}

function error(res){
  res.status(500).json({
    'status' : 500,
    'message' : 'Something went wrong!',
  })
}

module.exports = {
  validation,
  succes,
  error
}
