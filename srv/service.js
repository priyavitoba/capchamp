const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (srv) {

    srv.on('printhelloworld', req => {
        console.log(req.data.input)
        return `${req.data.input} world`
    })

    srv.on('add', req => {
        console.log(req.data)
        let result = req.data.num1 + req.data.num2;
        return result
    })
    srv.on('myfunction', req => {
        console.log(req.data.category)
        let res = {}
        if (req.data.category == 1) {
            res.product = 'BMW',
                res.price = '120',
                res.loc = 'Dallas'
        }        else
         {
            res.product = 'Audi',
            res.stock = '100',
            res.pricearray = [{
                "price": "100",
                "discount": "20%"
            }]
        }
        console.log( res);
        return res;
    })
})




