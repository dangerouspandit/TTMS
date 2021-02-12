var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  connectionlimit : 100,
  host     : '192.168.1.100',
  port     :  3306,
  user     : 'ttms_devapp',
  password : 'devapp',
  database : 'csd_ttms'

}); 
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });