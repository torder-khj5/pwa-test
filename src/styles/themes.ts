import { type ThemeVariables } from '@type/themes';
import { palette } from './colors_v2';

export type Theme = 'light' | 'dark';

export const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    text1: palette.gray_900,
    text2: palette.gray_800,
    text3: palette.gray_700,
    text4: palette.gray_600,
    text5: palette.gray_400,

    stroke1: palette.gray_100,
    stroke2: palette.gray_50,
    bg: '#F8F9FB',

    gnb: {
      bg: palette.white,
      separator: palette.gray_50,
      menu: {
        expand: {
          bg_focus: palette.blue_50,
          bg_hover: palette.blue_50,
          color: palette.gray_600, // 아이콘, 텍스트 색상
        },
        collapse: {
          bg_focus: palette.blue_50,
          bg_hover: palette.blue_50,
          color: palette.gray_600, // 아이콘, 텍스트 색상
        },
      },
      sub_menu: {
        expand: {
          bg_focus: palette.blue_500,
          bg_hover: palette.blue_50,
          color: palette.gray_600, // 아이콘, 텍스트 색상
          color_focus: palette.white, // 서브 메뉴 선택했을 때
        },
        collapse: {
          bg_hover: palette.blue_50,
          color: palette.gray_600, // 텍스트 색상
          color_focus: palette.gray_900,
        },
      },
    },
  },
  dark: {
    text1: palette.gray_900,
    text2: palette.gray_800,
    text3: palette.gray_700,
    text4: palette.gray_600,
    text5: palette.gray_400,

    stroke1: palette.gray_100,
    stroke2: palette.gray_50,
    // bg: '#F8F9FB',
    bg: 'red',

    gnb: {
      bg: palette.gray_900,
      separator: palette.gray_700,
      menu: {
        expand: {
          bg_focus: palette.gray_800,
          bg_hover: palette.gray_800,
          color: palette.white, // 아이콘, 텍스트 색상
        },
        collapse: {
          bg_focus: palette.gray_800,
          bg_hover: palette.gray_800,
          color: palette.white, // 아이콘, 텍스트 색상
        },
      },
      sub_menu: {
        expand: {
          bg_focus: palette.white,
          bg_hover: palette.gray_800,
          color: palette.gray_100, // 아이콘, 텍스트 색상
          color_focus: palette.gray_900, // 서브 메뉴 선택했을 때
        },
        collapse: {
          bg_hover: palette.gray_800,
          color: palette.gray_100, // 텍스트 색상
          color_focus: palette.white,
        },
      },
    },
  },
};
