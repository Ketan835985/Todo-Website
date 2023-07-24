/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postsSlice } from "../Redux/Storage"


export default function Blog() {
    const data = useSelector((state)=>{
        return state.posts
    })
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res=>res.json())
        .then(res=>{ 
            dispatch(postsSlice.actions.addPost(res))})  // use for save data in reducer
        
    },[])
  return (
    <div>
        Blog
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
        
    </div>
  )
}
