import './styles/index.scss';
import { ClickCounter } from './components/ClickCounter';

export const App = () => {
  const name = 'CJDV';
  return (
    <div>
      <h1>Hi React Typescript! Hey yoww {name}!</h1>
      <ClickCounter />{' '}
    </div>
  );
};
