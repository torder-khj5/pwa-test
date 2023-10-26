import * as S from './styles';
import ProfileUI from './form/profile';
import ListUI from './form/list';
import ImgUI from './form/img';
import ContentsUI from './form/contents';
import ArticleUI from './form/article';
import React from 'react';

type SkeletonType = 'profile' | 'img' | 'list' | 'article' | 'contents';

const SKELETON_COMPONENTS: Record<SkeletonType, React.ComponentType<any>> = {
  profile: ProfileUI,
  img: ImgUI,
  list: ListUI,
  contents: ContentsUI,
  article: ArticleUI,
};

interface SkeletonUIProps {
  type: SkeletonType;
  width?: number | string;
  height?: number | string;
}

export type SkeletonFormProps = {
  width?: number | string;
  height?: number | string;
};

const SkeletonUI = ({ type, ...props }: SkeletonUIProps) => {
  const Component = SKELETON_COMPONENTS[type];

  return Component ? (
    <S.SkeletonContainer width={props.width} height={props.height}>
      <Component {...props} />
    </S.SkeletonContainer>
  ) : null;
};

export default SkeletonUI;
