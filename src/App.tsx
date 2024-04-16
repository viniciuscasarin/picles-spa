import { useState } from "react";
import { Button } from "./components/common/Button";
import { ButtonVariant } from "./components/common/Button/Button.constants";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}

      <Button onClick={() => setCount(count + 1)}>Teste</Button>
      <Button variant={ButtonVariant.Default}>Default</Button>
      <Button variant={ButtonVariant.Outlined}>Outlined</Button>
      <Button variant={ButtonVariant.Text}>Text</Button>
      <Button variant={ButtonVariant.Disabled}>Disabled</Button>
    </>
  );
}
