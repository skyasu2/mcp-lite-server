const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Netlify 도메인만 허용하도록 CORS 설정
app.use(cors({
  origin: 'https://openvibe3.netlify.app'
}));
app.use(bodyParser.json());

app.post('/query', (req, res) => {
  const { query, context } = req.body;
  const filePath = `./context/${context}.txt`;

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ result: 'context 문서를 찾을 수 없습니다.' });
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let response = '관련 내용을 찾을 수 없습니다.';
  if (query.includes('CPU')) response = content.split('\n').find(line => line.includes('CPU')) || response;
  if (query.includes('디스크')) response = content.split('\n').find(line => line.includes('Disk')) || response;

  res.json({ result: response });
});

app.listen(PORT, () => {
  console.log(`MCP 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
