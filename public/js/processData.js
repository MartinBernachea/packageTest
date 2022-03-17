let selectCompanies = document.getElementById('companie');

fetch('http://localhost:3000/enviromentUrlCompanies')
    .then(r => r.json())
    .then(q => {
        fetch("https://testpackage123.herokuapp.com/companies")
            .then(res => res.json())
            .then(res => {
                console.log("v",res)
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