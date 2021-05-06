'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Address = function (address) {
    this.longradouro = address.longradouro;
    this.numero = address.numero;
    this.complemento = address.complemento;
    this.bairro = address.bairro;
    this.cidade = address.cidade;
    this.estado = address.estado;
    this.cep = address.cep;
};
Address.create = function (newEmp, result) {
    dbConn.query("INSERT INTO address set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Address.findById = function (id, result) {
    dbConn.query("Select * from address where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Address.findAll = function (result) {
    dbConn.query("Select * from address", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('addresss : ', res);
            result(null, res);
        }
    });
};
Address.update = function (id, address, result) {
    dbConn.query("UPDATE address SET longradouro=?,numero=?,complemento=?,bairro=?,cidade=?,estado=?,cep=? WHERE id = ?", [address.longradouro, address.numero, address.complemento, address.bairro, address.cidade, address.estado, address.cep, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Address.delete = function (id, result) {
    dbConn.query("DELETE FROM address WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Address;