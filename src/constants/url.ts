import { isProd } from './mode';

const SNS_LOGIN_ORIGIN = isProd ? '' : ''; // hub't auth server Url
const SNS_LOGIN_CLIENT = isProd ? '' : ''; // hub't client Url

export const KAKAO_LOGIN_URL = `${SNS_LOGIN_ORIGIN}/auth/oauth2/authorize/kakao?redirect_uri=${SNS_LOGIN_CLIENT}?code=21`;
export const NAVER_LOGIN_URL = `${SNS_LOGIN_ORIGIN}/auth/oauth2/authorize/naver?redirect_uri=${SNS_LOGIN_CLIENT}?code=21`;
export const GOOGLE_LOGIN_URL = `${SNS_LOGIN_ORIGIN}/auth/oauth2/authorize/google?redirect_uri=${SNS_LOGIN_CLIENT}?code=21`;
export const APPLE_LOGIN_URL = `${SNS_LOGIN_ORIGIN}/auth/oauth2/authorize/apple?redirect_uri=${SNS_LOGIN_CLIENT}?code=21`;

export default {
  KAKAO_LOGIN_URL,
  NAVER_LOGIN_URL,
  GOOGLE_LOGIN_URL,
  APPLE_LOGIN_URL,
};
