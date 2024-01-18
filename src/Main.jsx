const Main= (props)=> {
    return <div>
        <h1>
            {
                props.titulo
            
            }
        </h1>
        <div>
            Numero de Alumnos : 
            {props.numeroAlumnos}

        </div>

        
    </div>
}

export default Main