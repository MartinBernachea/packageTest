let selectCompanies = document.getElementById('companie');

fetch('/companies')
    .then(res => res.json())
    .then(res => {
        for (e of res) {
            var opt = document.createElement("option");
            opt.value = e.id;
            opt.innerHTML = e.name;
            selectCompanies.appendChild(opt);
        }
    })
    .catch(error => {
        console.log("error request", error);
    })