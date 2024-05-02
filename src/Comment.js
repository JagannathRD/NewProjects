import { useState } from "react";

const Comment=()=>{
    const initialObject ={
        user:'',
        password:''
    }
    const [title,handleTitle]= useState('good morning');
    const [loading, setLoading] =useState(true);
    const [user, setUser] = useState(initialObject);
    const [student, setStudent] = useState([{
        id:'1', name:'Ashu'
    },
    {id:'2', name:'Shre'}
])

    const handleUser=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }

    const addUser=(e)=>{
        setStudent([
            ...student,{
            id:student.length+1,
            name:e
        }]);
    }


return(<>
Hello {title}
<button onClick={()=>{handleTitle('good evening')}}>Change</button>
<button onClick={()=>{setLoading((prevState)=>!prevState) }}>Load</button>
{loading ? 'loading...' : 'will load'}
{JSON.stringify(user)}
<form>
    <label>User Name:</label>
    <input type="text" name="user" onChange={handleUser}></input>
    <label>Password:</label>
    <input type="text" name="password" onChange={handleUser}></input>

</form>
<form>
    <label>User Name:</label>
    <input type="text" name="student" onBlur={(e)=>addUser(e.target.value)}></input>
</form>
{JSON.stringify(student)}
</>
)
}
export default Comment;