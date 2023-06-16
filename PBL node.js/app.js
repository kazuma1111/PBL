// モジュール
const{ Client } = require('pg');

// PostgreSQLに接続
const pg = new Client({
    user: 'postgres',
    host: 'ranking-database.cxxxyc18vf6r.us-east-1.rds.amazonaws.com',
    database: 'RANKING_DB',
    password: 'sirokuma123',
    port: 5432
})


/*
const query = {
  text: "INSERT INTO account VALUES ($1, $2, $3)",
  values: [, "山田太郎", "sirokumaOIC"],
};
pg.query(query)
  .then((res) => {
    console.log(res);
    client.end();
  })
  .catch((e) => console.error(e.stack));
*/


/*
//insert文
const sql = "INSERT INTO account VALUES ($1, $2, $3)"
const values = [5, '松尾芭蕉', 'matuo']
pg.connect()
.then(() => console.log("接続完了"))
.then(() => pg.query(sql, values))
.then(result => console.log(result))
.catch((err => console.log(err)))
.finally((() => pg.end()))

pg.query(
  //SQL文でusersテーブルからすべてのデータ（*は全てのデータ）を取得する命令文
  'SELECT * FROM account',
    (error, results) => {
      console.log(error);
      console.log(results);
    }
);
*/



/*node.js　DB操作　上のコードはテストコード 
下のコードは動いている*/

async function addAndFetchData(connecting) {
  console.log(connecting);
   //asyncを付けるとawiteがつけるようになる
   pg.connect()
  try {
    // データの追加クエリ
    const insertQuery = 'INSERT INTO account (ACCOUNT_ID, ACCOUNT_NAME, ACCOUNT_PASSWORD) VALUES ($1, $2, $3)';
    const insertValues = ['9', '肉','niku2929' ];
    await pg.query(insertQuery, insertValues);
    console.log(insertValues)
    console.log("登録完了")

    // データの取得クエリ
    const selectQuery = 'SELECT * FROM account';
    const { rows } = await pg.query(selectQuery);
    console.log('Query results:', rows);
  } catch (error) {
    console.error('Error executing query', error);
  } finally {
    // 接続の終了
    pg.end();
  }
}
addAndFetchData('接続成功');






