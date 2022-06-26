import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div>
                <h2>Contacto</h2>
                <form>
                    <div>
                        <label for="email">Email</label>
                        <input type="text"></input>
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