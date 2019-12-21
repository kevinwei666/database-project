var oracledb = require('oracledb')
let connection
async function run(){

  try{
    connection = await oracledb.getConnection({
      user: "admin",
      password: "cis550pokemon",
      connectString:"cis550pokemon.ca4mce6zf03f.us-east-1.rds.amazonaws.com:1521/pokemon"
      })
      console.log('success')
      var result = await connection.execute(
        `SELECT * FROM EV WHERE ROWNUM<=5`
      )
      console.log(result.rows)
      
  }catch(err){
    console.error(err)
  }finally{
    if(connection){
      try{
      }catch(err){
        console.error(err)
      }
    }
  }
}
run()




