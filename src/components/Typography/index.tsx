import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyH7,
  TypographyP,
  TypographyCaption,
} from '@styles/typography';
import { palette } from '@styles/colors_v2';
import styled from '@emotion/styled';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'p' | 'caption';
type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
} & {
  tag?: Tags;
  color?: string;
  fontWeight?: number;
};

export default function Typography({
  tag = 'h7',
  color = palette.gray_700,
  fontWeight,
  children,
  ...rest
}: TypographyProps) {
  const Comp = TYPOGRAPHY[tag];
  return (
    <Comp color={color} fontWeight={fontWeight} {...rest}>
      {children}
    </Comp>
  );
}

type TypographyStyledProps = { color: string; fontWeight?: number };
const TYPOGRAPHY = {
  h1: styled.h1<TypographyStyledProps>`
    ${TypographyH1};
    font-weight: ${({ fontWeight }) => fontWeight ?? 700};
    color: ${({ color }) => color};
  `,
  h2: styled.h2<TypographyStyledProps>`
    ${TypographyH2};
    font-weight: ${({ fontWeight }) => fontWeight ?? 700};
    color: ${({ color }) => color};
  `,
  h3: styled.h3<TypographyStyledProps>`
    ${TypographyH3};
    font-weight: ${({ fontWeight }) => fontWeight ?? 700};
    color: ${({ color }) => color};
  `,
  h4: styled.h4<TypographyStyledProps>`
    ${TypographyH4};
    font-weight: ${({ fontWeight }) => fontWeight ?? 700};
    color: ${({ color }) => color};
  `,
  h5: styled.h5<TypographyStyledProps>`
    ${TypographyH5};
    font-weight: ${({ fontWeight }) => fontWeight ?? 600};
    color: ${({ color }) => color};
  `,
  h6: styled.h6<TypographyStyledProps>`
    ${TypographyH6};
    font-weight: ${({ fontWeight }) => fontWeight ?? 500};
    color: ${({ color }) => color};
  `,
  h7: styled.h6<TypographyStyledProps>`
    ${TypographyH7};
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
  `,
  p: styled.p<TypographyStyledProps>`
    ${TypographyP};
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
  `,
  caption: styled.p<TypographyStyledProps>`
    ${TypographyCaption};
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
  `,
};
