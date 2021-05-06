'user strict';
var dbConn = require('../../config/db.config');

//Employee object create
var Client = function (client) {
    this.cnpj = client.cnpj;
    this.razao_social = client.razao_social;
    this.nome_do_contato = client.nome_do_contato;
    this.telefone = client.telefone;
};
Client.create = function (newEmp, result) {
    dbConn.query("INSERT INTO client set ?", newEmp, function (err, res) {
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
Client.findById = function (id, result) {
    dbConn.query("Select * from client where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Client.findAll = function (result) {
    dbConn.query("Select * from client", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('client : ', res);
            result(null, res);
        }
    });
};
Client.update = function (id, client, result) {
    dbConn.query("UPDATE client SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [client.first_name, client.last_name, client.email, client.phone, client.organization, client.designation, client.salary, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Client.delete = function (id, result) {
    dbConn.query("DELETE FROM client WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Client;