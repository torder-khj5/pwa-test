import * as S from '../styles';

const ContentsUI = () => {
  return (
    <S.ContentsUIContainer>
      <S.SkeletonBase className="div1" />
      <S.SkeletonBase className="div2" height="80%" />
      <S.SkeletonBase className="div3" height="60%" />
    </S.ContentsUIContainer>
  );
};

export default ContentsUI;
