import '@emotion/react';

type FixedThemeVariables = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  stroke1: string;
  stroke2: string;
  bg: string;
};

type GNBThemeVariables = {
  bg: string;
  separator: string; // 하단 접기 버튼 구분선
  menu: {
    expand: {
      bg_focus: string;
      bg_hover: string;
      color: string; // 아이콘, 텍스트 색상
    };
    collapse: {
      bg_focus: string;
      bg_hover: string;
      color: string; // 아이콘, 텍스트 색상
    };
  };
  sub_menu: {
    expand: {
      bg_focus: string;
      bg_hover: string;
      color: string; // 아이콘, 텍스트 색상
      color_focus: string; // 서브 메뉴 선택했을 때
    };
    collapse: {
      bg_hover: string;
      color: string; // 텍스트 색상
      color_focus: string;
    };
  };
};

type ThemeVariables = FixedThemeVariables & { gnb: GNBThemeVariables };

declare module '@emotion/react' {
  export interface Theme extends ThemeVariables {}
}
