# MCP Lite Server

## 소개
이 프로젝트는 MCP Lite Server의 백엔드(Node.js/Express) 코드입니다. Netlify 프론트엔드(https://openvibe3.netlify.app)와 연동하여 동작합니다.

## 주요 기능
- REST API 제공 (`/query` 엔드포인트)
- CORS 설정 (Netlify 프론트엔드만 허용)
- context 폴더 내 텍스트 파일 기반 응답

## 환경 변수
- PORT: 서버가 실행될 포트 (Render 등 클라우드 환경에서 자동 할당)

## 설치 및 실행
```
npm install
node server.js
```

## CORS 설정
Netlify 프론트엔드(https://openvibe3.netlify.app)에서만 접근 가능하도록 CORS가 설정되어 있습니다.

## 배포
- GitHub에 커밋 & 푸시하면 Render.com에서 자동 배포됩니다.
- 수동 배포가 필요할 경우 Render 대시보드에서 "Manual Deploy"를 클릭하세요.

## 문의
- 추가 문의사항은 이슈로 등록해 주세요. 