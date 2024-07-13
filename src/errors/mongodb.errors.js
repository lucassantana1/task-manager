const notFoundError = (res) => {
    return res
        .status(404)
        .send("Este dado nao foi encontrado no banco de dados.");
};

module.exports = {
    notFoundError,
};
