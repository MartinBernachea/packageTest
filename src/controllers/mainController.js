const fs = require('fs');
const pdf = require('html-pdf');

const controlador = {

    index: (req, res) => {
        res.render('index');
    },

    test: (req, res) => {
        res.render('test');
    },

    getCompanies: (req, res) => {
        const companiesData = JSON.parse(fs.readFileSync(__dirname + '/../database/companiesData.json'));
        res.json(companiesData);
    },

    createCompanie: (req, res) => {
        const companiesData = JSON.parse(fs.readFileSync(__dirname + '/../database/companiesData.json'));
        let newID = (companiesData[companiesData.length - 1].id) + 1;
        let newData = {
            id: newID,
            name: req.body.name,
            apiUrl: req.body.apiUrl,
        }
        companiesData.push(newData);
        fs.writeFileSync(__dirname + '/../database/companiesData.json', JSON.stringify(companiesData, null, ' '));
        res.json({ code: 200, companie_id: newID, description: "Companie created" });
    },

    getShipments: (req, res) => {
        const shipmentsData = JSON.parse(fs.readFileSync(__dirname + '/../database/shipmentsData.json'));
        res.json(shipmentsData);
    },

    createShipment: (req, res) => {
        const tagsData = JSON.parse(fs.readFileSync(__dirname + '/../database/shipmentsData.json'));
        let newID = (tagsData[tagsData.length - 1].id) + 1;

        let newData = {
            id: newID,
            address_from: {
                name: req.body.nameo,
                street1: req.body.addresso,
                city: req.body.cityo,
                province: req.body.provo,
                postal_code: "72450",
                country_code: "MX"
            },
            address_to: {
                name: req.body.named,
                street1: req.body.addressd,
                city: req.body.cityd,
                province: req.body.provd,
                postal_code: "72450",
                country_code: "MX"
            },
            "parcels": [{
                length: req.body.lengthp,
                width: req.body.widthp,
                height: req.body.heightp,
                dimensions_unit: "CM",
                weight: req.body.weightp,
                weight_unit: "KG"
            }],
            companieID: req.body.companie,
            status: "pending"
        };
        tagsData.push(newData);
        fs.writeFileSync(__dirname + '/../database/shipmentsData.json', JSON.stringify(tagsData, null, ' '));
        res.json({ code: 200, shipment_id: newID, description: "Shipment created" });
    },

    checkStatus: (req, res) => {

        const tagsData = JSON.parse(fs.readFileSync(__dirname + '/../database/shipmentsData.json'));
        let SearchID = req.body.id_shipment;
        const elementSearch = tagsData.find(element => element.id == SearchID);

        if (elementSearch != undefined) {
            if (elementSearch.status == "completed") {
                res.redirect('/document/' + SearchID);
            } else {
                res.json({ code: 200, shipment_id: SearchID, status: elementSearch.status });
            }
        } else {
            res.json({ error: "Element not found" });
        }
    },

    returnDocument: async (req, res) => {
        const tagsData = JSON.parse(fs.readFileSync(__dirname + '/../database/shipmentsData.json'));
        let SearchID = req.params.id;
        const elementSearch = tagsData.find(element => element.id == SearchID);

        const content = `
            <h1>Multi-carrier Shipping</h1>
            <h3>Shipment Data</h3>
            <p>Number of shipment: ${elementSearch.id}</p>
            <p>
            Origin: 
            ${elementSearch.address_from.street1}, 
            ${elementSearch.address_from.province}, 
            ${elementSearch.address_from.city} 
            (${elementSearch.address_from.postal_code})
            </p>
            <p>
            Destination: 
            ${elementSearch.address_to.street1}, 
            ${elementSearch.address_to.province}, 
            ${elementSearch.address_to.city} 
            (${elementSearch.address_to.postal_code})
            </p>
            `;

        function finalPDF(filePath){
                res.download(filePath);
        }

        await pdf.create(content).toFile(__dirname + '/../../public/files/shipment' + elementSearch.id + '.pdf', function(err, res) {
            if (err) console.log(err);
            let fp=__dirname + '/../../public/files/shipment' + elementSearch.id + '.pdf'
            finalPDF(fp);
        })

    }
}


module.exports = controlador;