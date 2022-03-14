const fs = require('fs');

const controlador = {
    index: (req, res) => {
        res.render('index');
    },

    getCompanies: (req, res) => {
        const companiesData = JSON.parse(fs.readFileSync(__dirname + '/../database/companies.json'));
        res.json(companiesData);
    }
}

module.exports = controlador;