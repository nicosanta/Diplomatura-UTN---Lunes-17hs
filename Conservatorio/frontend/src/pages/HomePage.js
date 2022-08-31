import React from "react";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="img/orquesta.jpg" alt="orquesta" width="auto" height="auto"></img>
      </div>
      <div className="articulouno">
        <div>
          <img
            src="img/graduacion2.jpg"
            alt="formacion profesional"
            width="1540"
            height="520"
          ></img>
        </div>
        <div className="info">
          <h2 className="titulos">Conservatiorio de Musica</h2>
          <p className="parrafos">
            Años de experiencia en formacion profesional. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Velit necessitatibus labore
            placeat voluptatem debitis facilis incidunt veritatis!
          </p>
        </div>
      </div>
      <div className="articulodos">
        <div className="programas">
          <h2 className="titulos">Nuestros Programas  </h2>
          <p className="parrafos">
            Actualmente tenemos mas de 10 carreras disponibles. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit.Sapiente natus eveniet
            sit similique officiis commodi distinctio a rem ut omnis! Earum
            necessitatibus sunt ad quo. Tenetur est possimus labore! Libero.
          </p>
        </div>
        <div>
          <img
            src="img/libros2.jpg"
            alt="carreras"
            width="1540"
            height="520"
          ></img>
        </div>
      </div>
      <div class="articulotres">
        <div>
          <img
            src="img/concierto.jpg"
            alt="conjuntos"
            width="1540"
            height="520"
          ></img>
        </div>
        <div class="grupos">
          <h2 class="titulos">Grupos Estables</h2>
          <p class="parrafos">
            Estos son nuestros conjuntos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil ipsa odit ipsum dolor, rem tempora quisquam,
            corrupti velit iste quo temporibus reiciendis soluta omnis ut
            aliquam rerum a autem repudiandae. 
          </p>
        </div>
      </div>
      <div class="articulocuatro">
        <div class="conciertos">
          <h2 class="titulos">Eventos y Conciertos</h2>
          <p class="parrafos">
            Todos nuestros conciertos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis architecto obcaecati modi, corrupti ratione
            cum delectus porro earum blanditiis hic a eveniet aliquam quisquam
            nesciunt ipsam labore assumenda odio? Perspiciatis.
          </p>
        </div>
        <div>
            <img
            src="img/concierto3.jpg"
            alt="conciertos"
            width="1540"
            height="520"
            ></img>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
