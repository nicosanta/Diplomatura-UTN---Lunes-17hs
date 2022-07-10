import React from "react";

const GruposPage = (props) => {
  return (
    <main className="holder">
      <div className="container">
        <div className="description">
          <h2>Nuestros Grupos Estables</h2>
          <br></br>
          <p>Decripcion</p>
        </div>
        <div className="gruposestables">
          <div className="jazz-container">
            <div className="jazz-img">
              <img
                src="img/jazz4.jpg"
                alt="conjuntodejazz"
                width="480"
                height="200"
              />
            </div>
            <div className="jazz-des">
              <h3>Conjunto de Jazz</h3>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="coro-container">
            <div className="coro-img">
              <img
                src="img/coro1.jpg"
                alt="ensamblecoral"
                width="480"
                height="200"
              />
            </div>
            <div className="coro-des">
              <h3>Ensamble Coral</h3>
              <hr />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="orquesta-container">
            <div className="orquesta-img">
              <img
                src="img/clasico.jpg"
                alt="practicaorquestal"
                width="480"
                height="200"
              />
            </div>
            <div className="orquesta-des">
              <h3>Practica Orquestal</h3>
              <hr />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default GruposPage;
