const{ createPool } = require ('mysql');
const pool = createPool({
    host: "@localhost",
    user: "TTMS_DEVAPP",
    password: "DEVAPP",
    database: "CSD_TTMS",
    connectionLimit: 100
})

pool.query('select * from csm_ad_resource', (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})


