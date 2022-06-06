const Bloglist = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;

    return(
        <div className="bloglist">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <h2> {blog.title} </h2>
                    <p>Written by : {blog.author} </p>
                    <button onClick = {() => {handleDelete(blog.id)}}>delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;