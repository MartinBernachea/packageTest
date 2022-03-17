let selectCompanies = document.getElementById('companie');

fetch('http://localhost:3000/enviromentUrlCompanies')
    .then(res => res.json())
    .then(res => {
        fetch(res.url)
            .then(res => res.json())
            .then(res => {
                for (e of res) {
                    var opt = document.createElement("option");
                    opt.value = e.id;
                    opt.innerHTML = e.name;
                    selectCompanies.appendChild(opt);
                }
            })
    })
    .catch(error => {
        console.log("error request", error);
    })