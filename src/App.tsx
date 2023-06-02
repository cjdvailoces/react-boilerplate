import './styles/index.scss';
import { ClickCounter } from './components/ClickCounter';

export const App = () => {
  const name = "CJ";
  return (
    <div>
      <h1>Hi React Typescript! Hey </h1>
      <ClickCounter />{' '}
    </div>
  );
};
