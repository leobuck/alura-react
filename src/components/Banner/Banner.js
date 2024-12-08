import { Fragment } from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    // <Fragment>
    <>
      <header className="banner">
        <img
          src="/imagens/banner.png"
          alt="O banner principal da página do Organo"
        />
      </header>
      <h1>Organo</h1>
    </>
    // </Fragment>
  );
};
