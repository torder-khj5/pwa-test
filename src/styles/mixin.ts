import { css } from '@emotion/react';

// 중앙정렬
export const flexRowCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 세로중앙정렬
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 전체화면 모달 스타일
export const overlay = css`
  position: absolute;
  inset: 0;
  z-index: 10;
`;

// 글자 ... 처리
export const ellipsisText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 이미지 중앙 정렬 및 꽉 채우기
export const imageCenter = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const roundCircle = css`
  border-radius: 9999px;
`;

export const modalFont = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #444;
  text-align: center;
`;
