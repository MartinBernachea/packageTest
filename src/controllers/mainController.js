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
            address_from:
            {
                name: req.body.nameo,
                street1: req.body.addresso,
                city: req.body.cityo,
                province: req.body.provo,
                postal_code: "72450",
                country_code: "MX"
            },
            address_to:
            {
                name: req.body.named,
                street1: req.body.addressd,
                city: req.body.cityd,
                province: req.body.provd,
                postal_code: "72450",
                country_code: "MX"
            },
            "parcels": 
            [
                {
                    length: req.body.lengthp,
                    width: req.body.widthp,
                    height: req.body.heightp,
                    dimensions_unit: "CM",
                    weight: req.body.weightp,
                    weight_unit: "KG"
                }
            ],
            companieID: req.body.companie,
            status: "pending"
        };
        tagsData.push(newData);
        fs.writeFileSync(__dirname + '/../database/tagsData.json',JSON.stringify(tagsData,null,' '));
        res.send("Id de envio generado: " + newID);
    },

    checkStatus: (req, res) => {
        const tagsData = JSON.parse(fs.readFileSync(__dirname + '/../database/tagsData.json'));
        SearchID = req.params.id;
        const elementSearch = tagsData.find(element => element.companieID == SearchID);

        if(elementSearch!=undefined){
            res.send(elementSearch.status)
        }
        else{
            res.send("No encontrado")
        }
    }
}


// const pdf = require('html-pdf');

//         const content = `
//         <h1>Título en el PDF creado con el paquete html-pdf</h1>
//         <p>Generando un PDF con un HTML sencillo</p>
//         `;

//         pdf.create(content).toFile('./html-pdf.pdf', function(err, res) {
//             if (err){
//                 console.log(err);
//             } else {
//                 console.log(res);
//             }
//         });

module.exports = controlador;