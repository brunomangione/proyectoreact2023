import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';
import { toast } from 'react-toastify';

//Validacion
import { useForm } from 'react-hook-form'; 


const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    //React-Hook-Form
    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    const onSubmit = (data) => {
     
    const aux = [...carrito]
    
    aux.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
            prodBDD.stock -= prodCarrito.cant //para descontar del stock la cantidad comprada
            updateProducto(prodCarrito.id, prodBDD)
        })
    })

    createOrdenCompra(data, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
        toast.success(`¡Muchas gracias por su compra! Su orden de compra conc ID: ${ordenCompra.id
        } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
        emptyCart()
        navigate("/")
    })}

   
    return (
        <>
            {carrito.length === 0 
         ? 
          <>
                <h2>No posee productos en el carrito</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
          </>
          :
            <div className="container" style={{marginTop:"20px"}}>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input className="form-control" placeholder="Nombre" {...register("nombre", 
                    {required: "Este campo es requerido", maxLength: 80})} />
                 <p className='fail'>{errors.nombre?.message}</p>
                </div>

                <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input className="form-control" placeholder="Apellido" {...register("apellido", {required: "Este campo es requerido", maxLength: 80})} />
                <p className='fail'>{errors.apellido?.message}</p>
                </div>
                
                <div className="mb-3">
                <label htmlFor="mail" className="form-label">Email</label>
                <input className="form-control" type="email" name="email1" {...register("email1", { minLength: 3, required: true })}/>
                {errors?.email1?.type === "minLength" && (<p className='fail'>La dirección de mail no es valida</p>)}
                {errors?.email1?.type === "required" && (<p className='fail'>Es necesario ingresar tu email</p>)}
                </div>
                
                <div className="mb-3">
                <label htmlFor="conEmail" className="form-label">Confirmar Email</label>
                <input className="form-control" type="email" name="email2" {...register("email2", { minLength: 3, required: true, validate:{equalMails: mail2=>mail2 ===getValues().email1} })}/>
                {errors?.email2?.type === "minLength" && (<p className='fail'>La dirección de mail no es valida</p>)}
                {errors?.email2?.type === "required" && (<p className='fail'>Es necsario ingresar tu email</p>)}
                {errors?.email2?.type === "equalMails" && (<p className='fail'>Los mails deben ser iguales</p>)}
                </div>

                <div className="mb-3">
                <label htmlFor="celular" className="form-label">Telefono</label>
                <input className="form-control" placeholder="Mobile number" {...register("telefono", {required: "Este campo es requerido", minLength: 6, maxLength: 12})} />
                <p className='fail'>{errors.telefono?.message}</p>
                </div>

                <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input className="form-control" placeholder="Direccion" {...register("direccion", {required: "Este campo es requerido"})}/>
                <p className='fail'>{errors.direccion?.message}</p>
                </div>

                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
        }
        </>
    );
}

export default Checkout;
