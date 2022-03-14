const fs = require('fs');

const controlador = {
    index: (req, res) => {
        res.render('index');
    },

    getCompanies: (req, res) => {
        const companiesData = JSON.parse(fs.readFileSync(__dirname + '/../database/companiesData.json'));
        res.json(companiesData);
    },

    createCompanie: (req, res) => {
        const companiesData = JSON.parse(fs.readFileSync(__dirname + '/../database/companiesData.json'));  
        let newID = (companiesData[companiesData.length-1].id)+1;
        let newData ={
            id: newID,
            name: req.body.name,
            apiUrl: req.body.apiUrl,
        }
        companiesData.push(newData);
        fs.writeFileSync(__dirname + '/../database/companiesData.json',JSON.stringify(companiesData,null,' '));
        res.send("Empresa agregada");
    },

    sendData: (req, res) => {
        const tagsData = JSON.parse(fs.readFileSync(__dirname + '/../database/tagsData.json'));
        let newID = (tagsData[tagsData.length-1].id)+1;
        let newData ={
            id: newID,
            origin: req.body.origin,
            destination: req.body.destination,
            companieID: req.body.companie
        }
        tagsData.push(newData);
        fs.writeFileSync(__dirname + '/../database/tagsData.json',JSON.stringify(tagsData,null,' '));
        res.send("Listo");
    }
}

module.exports = controlador;