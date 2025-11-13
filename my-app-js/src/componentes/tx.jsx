import {useMutation} from 'react-query'

export function Tx() {
    const {mutate, isLoading, isError} = useMutation( () => {
        console.log("He ejecutado la funcion")
        //console.log(JSON.stringify(mutation))
    })

    const {mutate:m1, isLoading:isL1, isError:isE1} = useMutation( () => {
        console.log("He ejecutado la mutacion m1")
        //console.log(JSON.stringify(mutation))
    })

    const function3 = useMutation( () => {
        console.log("He ejecutado la funcion 3")
    })

    return <div>
        <button
            onClick={() => mutate()} style={{ backgroundColor: 'green', marginRight: '10px' }}>Llamar mutation
        </button>
        <button
            onClick={() => m1()} style={{ backgroundColor: 'green', marginRight: '10px' }}>Llamar m1
        </button>
        <button
            onClick={function3.mutate} style={{ backgroundColor: 'grey' }}>Llamar funcion 3
        </button>
    </div>
}