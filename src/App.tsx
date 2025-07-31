import { GlobalLayout } from './layout/global';
import { HomePage } from './pages/home';

export const App = () => {
  return (
    <GlobalLayout>
      <HomePage />
    </GlobalLayout>
  );
};
