export default function ImageCard({ src }: { src: string }) {
  return (
    <img
      alt={'handler-img-card'}
      src={src}
      style={{
        width: '100%',
        objectFit: 'cover',
        borderRadius: '0.7813vw',
        height: '18vw',
      }}
    />
  );
}
