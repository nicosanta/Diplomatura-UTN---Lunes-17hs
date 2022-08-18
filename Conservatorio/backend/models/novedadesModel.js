var pool = require ('./bd');

async function getNovedades(user, password) {
    var query = "select * from novedades";
    var rows = await pool.query(query);
    return rows;
}

async function instertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query (query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;  
    }
}

module.exports = {getNovedades, instertNovedad}