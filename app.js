import express from 'express';

const app = express()
const port = 3000

const musicList = [
  {
    title: "¸¶±×³×Æ½",
    artist: "¾ÆÀÏ¸´",
  },
  {
    title: "º½³¯",
    artist: "BTS",
  }
]

app.get('/music', (req, res) => {
  res.send(musicList);
})

app.get('/about', (req, res) => {
    res.send('About!')
  })

  app.get('/setting', (req, res) => {
    res.send('Setting!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})