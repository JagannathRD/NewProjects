import { useEffect, useState } from "react";

const DataCall = (count)=>{
    const [user, setUser] = useState('');

    useEffect(()=>{
        console.log('rendering');
        const url='https://jsonplaceholder.typicode.com/users';

        fetch(url).then(data=>data.json()).then(data=>setUser(data));
       return ()=>{
console.log('umounting')
        }
    },[])
    return(
        <>
{/* {user.map(data=><li key={data.id}>{data.name}</li>
)} */}
        </>
    )
}
export default DataCall;