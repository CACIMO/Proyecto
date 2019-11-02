const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const pass = '598595161416'

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "system",
      password      : pass,
      connectString : "18.221.11.131/XE"
    });

    const result = await connection.execute(
      `SELECT :ID FROM DUAL`,
      [103],  // bind value for :id
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();