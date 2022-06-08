import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        // to post a new blog

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {

            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(blog)

        }).then(() => {
            console.log('The blog has been successfully added');
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        });
    };


    return (
        <div className = "create">
            <h3>Add a new blog here</h3>
            <form onSubmit = {handleSubmit}>
                <label><strong>BlogTitle :</strong></label>
                <input type = "text" required value={title} onChange = {(e)=> setTitle(e.target.value)} />

                <label><strong>Blog body :</strong></label>
                <textarea value = {body} onChange={(e)=> setBody(e.target.value)} required ></textarea>

                <label><strong>Blog author :</strong></label>
                <select value = {author} onChange={(e)=> setAuthor(e.target.value)} required>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>



                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
                {/* <p>{ title }</p> */}
            </form>
        </div>
    );
}

export default Create;
