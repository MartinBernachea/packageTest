let selectCompanies = document.getElementById('shipment');

fetch('http://localhost:3000/shipments')
    .then(res => res.json())
    .then(res => {
        for (e of res) {
            var opt = document.createElement("option");
            opt.value = e.id;
            opt.innerHTML = e.id;
            selectCompanies.appendChild(opt);
        }
    })
    .catch(err => console.error(err));
