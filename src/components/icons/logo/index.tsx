import { cn } from '@/lib/utils';

import LogoImage from './logo.png';

export const Logo = (props: React.ComponentProps<'img'>) => {
  return <img {...props} src={LogoImage} alt="Logo" className={cn(props.className, 'size-7.5')} />;
};
