const config = require("../../config");
const sql = require("mssql");

const executeQuery = (query, isUpdate = 0) => {
  const result = sql
    .connect(config)
    .then(() => {
      var request = new sql.Request();
      const queries = isUpdate
        ? `${query};SELECT SCOPE_IDENTITY() AS id`
        : query;
      const resultQuery = request.query(queries).then(result => {
        sql.close();
        return result.recordset;
      });
      return resultQuery;
    })
    .catch(err => {
      sql.close();
      return err;
    });
  return result;
};

module.exports = { executeQuery };
