import express from 'express';
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "korad",
    password: "kor123414",
    database: "music_list",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const app = express();
const port = 3000;

const musicList = [
    {
        title: "���׳�ƽ",
        artist: "���ϸ�",
    },
    {
        title: "����",
        artist: "BTS",
    },
];
// ������ ����Ʈ ��ȸ
app.get('/music', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM music ORDER BY id DESC");

  res.json(rows);
});

// ������ �ܰ� ��ȸ
app.get('/music/:id', async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM music WHERE id = ?", [id]);

    // �����Ͱ� ������ not found ��� ��
    if ( rows.length == 0){
      res.status(404).send("not found");
      return;
    }

    res.json(rows[0]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})