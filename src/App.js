import './App.css';
import ClassComponent from './ClassComponent';
import Comment from './Comment';
import Counter from './Counter';
import Link from './Link';
import Practice from './Problem1';
import ToDo from './ToDo';

function App() {
  const name ='jaggu'
  const data =
    {
      name:'chimmi',id:1
    }
   const valid= true;
   
  const submit =()=>{
    console.log('hello world')
  }
  return (
   <>
   {/* <Link title={123} content='1st content'/>
   <Link title='2nd link' content='2nd content'/>
   <Link title='3rd link' content='3rd content'/>
   <ClassComponent user='jagannath'></ClassComponent>
   <Comment></Comment>*/}
    <Counter></Counter> 
    <Practice></Practice>
    <ToDo></ToDo>
   </>
  );
}

export default App;
