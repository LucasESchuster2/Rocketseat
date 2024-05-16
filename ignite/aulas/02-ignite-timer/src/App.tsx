import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import styles from "./App.module.css";
export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <Button variant="primary" />
          <Button variant="secondary" />
          <Button variant="success" />
          <Button variant="danger" />
          <Button />
        </div>
      </ThemeProvider>
    </>
  );
}
