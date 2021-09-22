import { userInfo } from 'os'
import React from 'react'

interface user {
    id: number;
    name: string
}


const Body = () => {
    const [users,setUsers] = React.useState([])
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(response => console.log(response))
    }, [])
    const clicking = (event: any) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => setUsers(response))
        
        //console.log(event.target.value)
    }
    const usersName =  users.map((user: user) => {
       // console.log(user)
       return <h2 key={user.id}>{user.name}</h2>
    }) 
    const counting = () => {
        setCount(prev => count + 1)
    }
    return (
        <div>
           <button onClick={clicking}>Click me</button>
           {JSON.stringify(users)}
           {usersName.length ? usersName : 'Empty now'}
           <label htmlFor="counter">Counter {count}</label>
           <button onClick={counting}>Count</button>
        </div>
    )
}

export default Body
