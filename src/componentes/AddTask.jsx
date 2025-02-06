import { useRef } from "react"

export const AddTask = ({ addTasks }) => {
    const inputRef = useRef()

    return <>
        <input ref={inputRef} type="text" />
        <button onClick={() => {addTasks(inputRef.current.value)}}>Agregar </button>
    </>
}

