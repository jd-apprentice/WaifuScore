import React from "react";

const fechaActual = () => {
  return `| fecha ${new Date().toLocaleDateString()}`;
};

const Tiempo = () => {
  return (
    <div>
      <h1 className="text-center my-3">Waifu score {fechaActual()}</h1>
    </div>
  );
};

export default Tiempo;
