import * as S from './styles.tsx';

type Img = {
  src: string;
  name: string;
};

export default function HomePage() {
  // const { goods } = useInitSelector(['goods']);

  return (
    <S.HomeContainer>
      {/* {goods.map(({ src, name }: Img) => { */}
      {/*  return <ImageCard src={src} key={'key' + name} />; */}
      {/* })} */}
    </S.HomeContainer>
  );
}
