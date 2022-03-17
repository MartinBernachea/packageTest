let selectCompanies = document.getElementById('companie');

let url='';

fetch('http://localhost:3000/companies')
    .then(res => res.json())
    .then(res => {
        for (e of res) {
            var opt = document.createElement("option");
            opt.value = e.id;
            opt.innerHTML = e.name;
            selectCompanies.appendChild(opt);
        }
    })
    .catch(
        fetch('https://testpackage123.herokuapp.com/companies')
        .then(res => res.json())
        .then(res => {
            for (e of res) {
                var opt = document.createElement("option");
                opt.value = e.id;
                opt.innerHTML = e.name;
                selectCompanies.appendChild(opt);
        }
    }));
