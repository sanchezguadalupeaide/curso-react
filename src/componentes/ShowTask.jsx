export const ShowTask = ({tasks, changeStatus, removeTask}) =>{
    return <>
        <table>
            <thead>
                <tr>
                    <th>Tareas</th>
                    <th>Estado </th>
                    <th>*</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((element,index)=>{
                    return <tr key={index}>
                        <td>{element.task}</td>
                        <td>{element.status ? "Completado" : "No completado"}</td>
                        <td>
                            <button onClick={()=>{changeStatus(index)}}>Completar</button>
                            <button onClick={()=>{removeTask(index)}}>Eliminar</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}