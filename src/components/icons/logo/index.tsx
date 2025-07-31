import LogoImage from './logo.png';

export const Logo = (props: React.ComponentProps<'img'>) => {
  return <img {...props} src={LogoImage} alt="Logo" />;
};
