export default function ImageCard({ src }: { src: string }) {
  return (
    <img
      alt={'handler-img-card'}
      src={src}
      style={{
        width: '50px',
        height: '50px',
      }}
    />
  );
}
