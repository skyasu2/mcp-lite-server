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

  if (!query || !context) {
    return res.status(400).json({ result: 'query/context 값이 필요합니다.' });
  }

  // 예시 응답 (실제는 context 파일 읽기)
  res.json({ result: `질문 "${query}"에 대한 응답입니다.` });
});

app.listen(PORT, () => {
  console.log(`MCP 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
