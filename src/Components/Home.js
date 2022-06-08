import React from 'react';
import Bloglist from '../Bloglist';
import useFetch from '../useFetch';

const Home = () => {

    // not required, we are using a local server

    // const [blogs, setBlogs] = useState([
    //     {title : 'Learning React', body : "lorem ipsom ...", author : "Itachi", id : 1},
    //     {title : "Practicing React", body : "lorem ipsom ...", author : "ThomasShelby", id : 3},
    //     {title : "Projects React", body : "lorem ipsom ...", author : "ThomasShelby", id : 4}
    // ]);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    // the syntax is data in this context is called blogs for understanding
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');



    return (
        <div className="home">
            {error && <div> {error} </div> }
            {/* props are used */}
            {/* javascript is used to eliminate the error of null value in blogs */}
            {isLoading && <div>Loading...</div>}
            { blogs && <Bloglist blogs = {blogs} title = "All blogs"></Bloglist> }
            {/* <Bloglist blogs = {blogs.filter((blog) => blog.author === 'ThomasShelby')} title = "Thomas blogs"></Bloglist>  */}
        </div>
    );
}

export default Home;
