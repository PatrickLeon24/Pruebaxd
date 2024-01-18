import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

/*function App(){
    return <>
        <Header/>
        <Main/>
        <Footer/>
    </>
}*/

/*const App= function(){
    return <>
        <Header/>
        <Main/>
        <Footer/>
    </>
}*/
const App= ()=>{
    return <div className="container">
        <Header/>
        <Main 
        titulo="listado de Profesores"
        numeroAlumnos={18} />
        <Footer/>
    </div>
}


export default App // este componente se exportara xd