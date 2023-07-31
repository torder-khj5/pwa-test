import * as icons from '@constants/icons';

type IconName = keyof typeof icons;
interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, size = 24, className, onClick, ...rest }: IconProps) => {
  const iconSrc = icons[name];

  return <img alt={name} src={iconSrc} width={size} height="auto" onClick={onClick} className={className} {...rest} />;
};

export default Icon;
