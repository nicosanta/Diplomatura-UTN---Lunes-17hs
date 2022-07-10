import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="contenedor">
                <h2>Contactate con nosotros</h2>
                <form className="formulario">
                    <div>
                        <label for="email">Email</label>
                        <input type="text"placeholder="ejemplo@gmail.com"></input>
                    </div>
                    <div>
                        <label for="telefono">Teléfono</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label for="consulta">Consulta</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button type="submit" value="Enviar"></button>
                    </div>
                </form>
            </div>
        </main>
    );
}
export default ContactoPage; 