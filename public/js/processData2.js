let selectCompanies = document.getElementById('shipment');

fetch('http://localhost:3000/enviromentUrlShipments')
    .then(res => res.json())
    .then(res => {
        fetch(res.url)
            .then(res => res.json())
            .then(res => {
                for (e of res) {
                    var opt = document.createElement("option");
                    opt.value = e.id;
                    opt.innerHTML = e.id;
                    selectCompanies.appendChild(opt);
                }
            })
    })
    .catch(error => {
        console.log("error request", error);
    })