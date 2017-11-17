/*global beforeEach afterEach it describe:true */
/*eslint no-undef: "error"*/
process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server");
const sinon = require("sinon");

const Piscine = require("../models/Piscine");

chai.use(chaiHttp);

describe("database", () => {
  it("should connect to database", done => {
    const db = require("../database");
    should.exist(db.db);
    done();
  });
});

describe("api", () => {
  Piscine.collection.drop(() => null);

  beforeEach(done => {
    const newPiscine = new Piscine({
      nom: "Test"
    });
    newPiscine.save(() => {
      done();
    });
  });

  describe("home", () => {
    it("should connect to home API", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("piscines", () => {
    it("should list ALL piscines on /piscines GET", done => {
      chai
        .request(server)
        .get("/piscines")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("array");
          should.not.exist(err);
          done();
        });
    });
    it("should return 500 if connection failed", done => {
      sinon
        .mock(Piscine)
        .expects("find")
        .yields("error", null);
      chai
        .request(server)
        .get("/piscines")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    it("should list a SINGLE blob on /blob/<id> GET");
    it("should add a SINGLE piscine on /piscines POST", done => {
      chai
        .request(server)
        .post("/piscines")
        .send({
          nom: "NOM",
          adresse: "ADRESSE",
          tel: "TEL",
          description: "DESCRIPTION"
        })
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.be.a("object");
          res.body.should.have.property("nom");
          res.body.should.have.property("adresse");
          res.body.should.have.property("tel");
          res.body.should.have.property("description");
          res.body.should.have.property("_id");
          res.body.nom.should.equal("NOM");
          res.body.adresse.should.equal("ADRESSE");
          res.body.tel.should.equal("TEL");
          res.body.description.should.equal("DESCRIPTION");
          done();
        });
    });
    it("should update a SINGLE blob on /blob/<id> PUT");
    it("should delete a SINGLE blob on /blob/<id> DELETE");
  });

  afterEach(done => {
    Piscine.collection.drop(() => done());
  });
});
