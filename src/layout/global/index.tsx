import { Navbar } from './navbar';

export const GlobalLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />

      {props.children}
    </>
  );
};
