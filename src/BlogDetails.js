import {useHistory, useParams} from "react-router-dom";
import useFetch from './useFetch'

const Blogdetails = () => {

    const {id} = useParams();

    const {data: blog,isLoading,error} = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();


    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method : "DELETE",
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className = "blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}

            <article>
                <h2>{blog && blog.title}</h2>
                <p>Written by : {blog && blog.author}</p>
                <div>
                    {blog && blog.body} 
                </div>
                <button onClick = {handleClick}>delete</button>
            </article>
        </div>
    );
}

export default Blogdetails;
