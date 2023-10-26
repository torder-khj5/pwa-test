export default function ImageCard({ src }: { src: string }) {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
      }}
    >
      <img alt={'handler-img-card'} src={src} />
    </div>
  );
}
