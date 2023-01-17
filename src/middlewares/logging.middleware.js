const logRequest = (req, res, next) => {
    console.log(`a request ${req.method} has been made to : ${req.path}`);
    next()
}

module.exports = logRequest