const chai = require("chai");;
const chaiHttp = require('chai-http');
const app = require('./../app');;

chai.use(chaiHttp)
describe('Testing API with Mocha - Chai', function() {
    it('Testing /companies (GET)', function() {
        chai
            .request(app)
            .get('/companies')
            .end(async function(err, res) {
                let data = await JSON.parse(res);
                chai.expect(data).to.be.an('array')
            })
    })
    it('Testing /shipments (GET)', function() {
        chai
            .request(app)
            .get('/shipments')
            .end(async function(err, res) {
                let data = await JSON.parse(res);
                chai.expect(data).to.be.an('array')
            })
    })
    it('Testing /shipmentStatus (GET)', function() {
        chai
            .request(app)
            .get('/shipmentStatus/2')
            .end(async function(err, res) {
                let data = await JSON.parse(res);
                chai.expect(data).to.be.an('array')
            })
    })
})