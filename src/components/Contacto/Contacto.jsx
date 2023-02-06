import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toast } from 'react-toastify'

const Contacto = () => {
    const datosFormulario = React.useRef() //creo la referencia
    let navigate = useNavigate() //ubicacion actual del componente

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) // consulto los datos formulario pero es un formato html pero lo tengo que transformar en un dato de iteracion, que lo hago con formData
        const datForm = new FormData(datosFormulario.current) //genero un objeto de iteracion de los datos
        const contacto = Object.fromEntries(datForm) //transformo el dato de iteracion en un objeto de formulario para poder ver los datos de forma literal
        console.log(contacto) //veo los datos finales del formulario
        e.target.reset() //para resetar el formulario
        toast.info("Formulario Enviado", {position: "top-center"})
        navigate("/") //redirijo a pagina inicial

    }
    return (
        <>
        <div className="container">
        <form onSubmit={consultarFormulario} ref={datosFormulario}>  
            
        <div className="form-group">
            <label htmlFor="nombre" className="form-label mt-4">Nombre y Apellido</label>
            <input type="text" className="form-control" name="nombre" placeholder="Nombre y Apellido" />

            <label htmlFor="Email" className="form-label mt-4">Email </label>
            <input type="email" className="form-control" name="email" placeholder="Email" />
            
            <label htmlFor="celular" className="form-label mt-4">Celular </label>
            <input type="celular" className="form-control" name="celular" placeholder="Celular" />

            <label htmlFor="consulta" className="form-label mt-4">Consulta</label>
            <textarea className="form-control" name="consulta" rows={4} defaultValue={""} />

            <button type="submit" className="btn btn-primary">Enviar</button>
        
        
        </div>
        </form>









        </div>
            
        </>
    );
}

export default Contacto;
