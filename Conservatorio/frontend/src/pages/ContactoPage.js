import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';



const ContactoPage = (props) => {

    const initialForm = {
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <div className="contenedor">
            <form className="formulario" action="/contacto" onSubmit={handleSubmit} method="post">
                <h3 className="contactotitle">Comunicate con nosotros</h3>
                <div>
                    <input type="email" placeholder="Correo"name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div>
                    <input placeholder="Telefono"type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                </div>
                <div>
                    <textarea placeholder="Mensaje"name="mensaje" value={formData.mensaje} onChange={handleChange} rows={2}></textarea>
                </div>

                <Button variant="danger" type="submit" value="Enviar">Enviar</Button>

                {sending ? <p>Enviando</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
    );
}

export default ContactoPage; 