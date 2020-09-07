import React from "react";

const styles = {
  textAlign: "center",
  marginTop: "250px",
};

export default function ThankYou() {
  return (
    <div style={styles}>
      <h1>
        Thank yooou!
        <span role="img" aria-label="party">
          🥳
        </span>
        <span role="img" aria-label="confetti">
          🎉
        </span>
      </h1>
      <h3>Apreciamos mucho que tomaste unos mins de tu tiempo!</h3>
    </div>
  );
}
