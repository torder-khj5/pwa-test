import express from 'express';
import { type ProxyOptions } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3001; // 프록시 서버의 포트

const proxyOptions: ProxyOptions = {
  target: 'https://admin:0000@192.168.0.14:6984/test', // 데이터베이스 서버의 주소
  changeOrigin: true, // 도메인 변경 허용
  secure: false, // SSL 인증서 유효성 검사 비활성화
};

// PouchDB 프록시 설정
const pouchProxy = createProxyMiddleware('/pouchdb', proxyOptions);

app.use('/pouchdb', pouchProxy);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
