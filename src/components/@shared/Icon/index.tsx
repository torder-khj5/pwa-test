import * as icons from '@constants/icons';

export type IconName = keyof typeof icons;
interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, width = 24, height = 24, className, onClick, ...rest }: IconProps) => {
  const iconSrc = icons[name];
  const altText = String(name);

  return (
    <img alt={altText} src={iconSrc} width={width} height={height} onClick={onClick} className={className} {...rest} />
  );
};

export default Icon;
