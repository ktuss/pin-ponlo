import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("inicio");

  if (screen === "inicio") {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>PIN-PONLO</h1>

        <div style={styles.paddles}>
          <div style={styles.paddle}></div>
          <div style={styles.paddle}></div>
        </div>

        <button style={styles.button} onClick={() => setScreen("menu")}>
          INGRESAR
        </button>
      </div>
    );
  }

  if (screen === "menu") {
    return (
      <div style={styles.container}>
        <h2>MENÚ</h2>

        <button style={styles.button}>JUGAR VS MÁQUINA</button>
        <button style={styles.button}>2 JUGADORES</button>
        <button style={styles.button}>PUNTAJE</button>
      </div>
    );
  }

  return null;
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    color: "white",
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  paddles: {
    display: "flex",
    gap: "40px",
    marginBottom: "30px",
  },
  paddle: {
    width: "20px",
    height: "80px",
    background: "lime",
    animation: "pulse 1s infinite",
  },
  button: {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
