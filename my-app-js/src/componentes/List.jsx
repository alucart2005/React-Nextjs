import {useQuery} from 'react-query'

export function List() {

    const {data, isLoading, isError} = 
    
    useQuery(["query1"], () => {
        return [1,2,3,4,5,6,7,8,9]
        //throw new Error("aa")
    })
    if (isError) {
        return <div>Error...</div>
    }
    if (isLoading) {
        return <div>Esta cargando</div>
    }
    return <div>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {data?.map(item => <li key={item} style={{ padding: '10px', border: '1px solid #978e8e', borderRadius: '8px', backgroundColor: '#9e4a4a', minWidth: '50px', textAlign: 'center' }}>{item}</li>)}
        </ul>
    </div>
}