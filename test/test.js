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
      nom: "NOM",
      adresse: "ADRESSE",
      tel: "TEL",
      description: "DESCRIPTION"
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
          should.not.exist(err);
          res.should.be.json;
          res.body.should.be.a("array");
          res.body.length.should.equal(1);
          res.body[0].should.have.property("nom");
          res.body[0].should.have.property("adresse");
          res.body[0].should.have.property("tel");
          res.body[0].should.have.property("description");
          res.body[0].should.have.property("_id");
          res.body[0].nom.should.equal("NOM");
          res.body[0].adresse.should.equal("ADRESSE");
          res.body[0].tel.should.equal("TEL");
          res.body[0].description.should.equal("DESCRIPTION");
          done();
        });
    });
    it("should return 500 if error from /piscines GET", done => {
      const mock = sinon
        .mock(Piscine)
        .expects("find")
        .yields("error", null);
      chai
        .request(server)
        .get("/piscines")
        .end((err, res) => {
          res.should.have.status(500);
          mock.restore();
          done();
        });
    });
    it("should list a SINGLE piscine on /piscines/<id> GET", done => {
      const newPiscine = new Piscine({
        nom: "NOM",
        adresse: "ADRESSE",
        tel: "TEL",
        description: "DESCRIPTION"
      });
      newPiscine.save((err, data) => {
        chai
          .request(server)
          .get("/piscines/" + data.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
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
            res.body._id.should.equal(data.id);
            done();
          });
      });
    });
    it("should return 500 if error from /piscines<id> GET", done => {
      const mock = sinon
        .mock(Piscine)
        .expects("findById")
        .yields("error", null);
      const newPiscine = new Piscine({
        nom: "NOM",
        adresse: "ADRESSE",
        tel: "TEL",
        description: "DESCRIPTION"
      });
      newPiscine.save((err, data) => {
        chai
          .request(server)
          .get("/piscines/" + data.id)
          .end((err, res) => {
            res.should.have.status(500);
            mock.restore();
            done();
          });
      });
    });
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
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
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
    it("should return 500 if error from /piscines POST", done => {
      const mock = sinon
        .mock(Piscine.prototype)
        .expects("save")
        .yields("error", null);
      chai
        .request(server)
        .post("/piscines")
        .send({
          nom: "NOM",
          adresse: "ADRESSE",
          tel: "TEL",
          description: "DESCRIPTION"
        })
        .end((err, res) => {
          res.should.have.status(500);
          mock.restore();
          done();
        });
    });
    it("should return error if nom is empty", done => {
      chai
        .request(server)
        .post("/piscines")
        .send({
          adresse: "ADRESSE",
          tel: "TEL",
          description: "DESCRIPTION"
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.json;
          res.body.should.be.a("Array");
          res.body.length.should.equal(1);
          res.body[0].should.have.property("path");
          res.body[0].should.have.property("type");
          res.body[0].path.should.eql(["nom"]);
          res.body[0].type.should.equal("any.required");
          done();
        });
    });
    it("should return error if adresse is empty", done => {
      chai
        .request(server)
        .post("/piscines")
        .send({
          nom: "NOM",
          tel: "TEL",
          description: "DESCRIPTION"
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.json;
          res.body.should.be.a("Array");
          res.body.length.should.equal(1);
          res.body[0].should.have.property("path");
          res.body[0].should.have.property("type");
          res.body[0].path.should.eql(["adresse"]);
          res.body[0].type.should.equal("any.required");
          done();
        });
    });
    it("should return 2 errors if nom and adresse are empty", done => {
      chai
        .request(server)
        .post("/piscines")
        .send({
          tel: "TEL",
          description: "DESCRIPTION"
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.json;
          res.body.should.be.a("Array");
          res.body.length.should.equal(2);
          res.body[0].should.have.property("path");
          res.body[0].should.have.property("type");
          res.body[0].path.should.eql(["nom"]);
          res.body[0].type.should.equal("any.required");
          res.body[1].should.have.property("path");
          res.body[1].should.have.property("type");
          res.body[1].path.should.eql(["adresse"]);
          res.body[1].type.should.equal("any.required");
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
