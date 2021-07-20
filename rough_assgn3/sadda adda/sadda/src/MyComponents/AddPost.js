import React, {useState} from 'react';

export const AddPost = ({addPost})=> {
    const [desc, setdesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if (!desc){
            alert("write something to post");
        }
        else{
            addPost(desc);
            setdesc("");
        }
    }
    return (
        <>
            <form onSubmit = {submit}>
            <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="postEditor" placeholder="Write your post" />
            <button type="submit" className="btn btn-sm btn-success" > Post</button>
            </form>
        </>
    )
}


