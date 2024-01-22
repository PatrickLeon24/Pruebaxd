import FormularioImagen from "./FormularioImagen"

const FormularioImagenPage=()=>{
    const guardarImagen=(url,titulo)=>{
        //interpolacion de strings 
        console.log(`deberia almacenar una imagen con url: ${url} y titulo: ${titulo}`)
        console.log("deberia almacenar una imagen con url: "+url+" y titulo "+titulo)
    }
    return <div className="container">
        <h1>Formulario Imagen</h1>
        <FormularioImagen guardar={guardarImagen}/>
    </div>
}

export default FormularioImagenPage