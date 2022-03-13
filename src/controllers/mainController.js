let menu = [
            {
                id: 1,
                nombre: "Carpaccio fresco",
                descripcion: "Entrada Carpaccio de salmón con cítricos",
                precio: 65.50,
                imgPath: "Carpaccio-de-salmon.jpg"
            },
            {
                id: 2,
                nombre: "Risotto de berenjena",
                descripcion: "Risotto de berenjena y queso de cabra",
                precio: 58.00,
                imgPath: "Risotto-berenjena-queso-cabra.jpg"
            },
            {
                id: 3,
                nombre: "Mousse de arroz",
                descripcion:"Mousse de arroz con leche y aroma de azahar",
                precio: 27.50,
                imgPath: "Mousse-de-arroz-con-leche.jpg"
            },
            {
                id: 4,
                nombre: "Espárragos blancos",
                descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
                precio: 37.50,
                imgPath: "esparragos.png"
            },
        ]

const controlador = 
{
    	index: (req, res) => {	
             res.render('index',{platos: menu});
        },

        detail: (req, res) => {	
            let id = req.params.id;
            let platoEncontrado;

            for (let i=0;i<menu.length;i++){
                if (menu[i].id==id){
                    platoEncontrado=menu[i];
                    break;
                }
            }

            res.render('detalleMenu',{platoDetalle: platoEncontrado});
        }
}

module.exports = controlador;
