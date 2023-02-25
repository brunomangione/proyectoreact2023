// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { where, query } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyectoreact2023.firebaseapp.com",
    projectId: "proyectoreact2023",
    storageBucket: "proyectoreact2023.appspot.com",
    messagingSenderId: "725410608563",
    appId: "1:725410608563:web:6597a8962a9c7982f887c6",
    measurementId: "G-YC97CK6RPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //consultar base de datos
const analytics = getAnalytics(app);


/* CRUD DE PRODUCTOS, lo que puedo hacer con la base de datos
    CREATE
    READ
    UPDATE
    DELETE
*/
export const cargarBDD = async() => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async(prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })

    })

}

export const getProductos = async(categoria) => {
    const data = categoria ? query(collection(db, "productos"), where("idCategoria", "==", categoria)) : collection(db, "productos")
    const productos = await getDocs(data)
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id }
    return (item)
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "producto", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "producto", id))
}

//Create orden compra

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "orden de compra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id }
    return oCompra
}