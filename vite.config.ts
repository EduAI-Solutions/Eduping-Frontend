import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // '@/path'로 'src/path'에 접근할 수 있도록 별칭 설정
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";` // 공통 SCSS 파일을 모든 SCSS 파일에 자동으로 추가
      }
    }
  },
  server: {
    open: true, // 개발 서버 시작 시 브라우저 자동으로 열기
    port: 3000 // 개발 서버 포트 설정 (기본값: 3000)
  },
  build: {
    sourcemap: true, // 소스 맵 생성으로 디버깅 편의성 향상
    outDir: 'dist' // 빌드 결과물이 저장될 폴더 이름
  }
});