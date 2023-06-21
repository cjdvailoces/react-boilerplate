import "./styles/index.scss";
import { ClickCounter } from "./components/ClickCounter";
import { Button } from "antd";

export const App = () => {
  const name = "CJDV";
  return (
    <div>
      <h1>Hi React Typescript! Hey yoww {name}!</h1>
      <div>
        <Button type="primary">Button</Button>
      </div>
      <ClickCounter />{" "}
    </div>
  );
};
