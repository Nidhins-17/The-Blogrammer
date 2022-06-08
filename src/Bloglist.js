import { Link } from "react-router-dom";

const Bloglist = ({blogs,title}) => {
    // const blogs = props.blogs;

    return(
        <div className="bloglist">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2> {blog.title} </h2>
                        <p>Written by : {blog.author} </p>
                    </Link>
                    
                    {/* <button onClick = {() => {handleDelete(blog.id)}}>delete blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default Bloglist;

