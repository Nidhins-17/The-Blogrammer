import React from 'react';
import {useState,useEffect} from 'react';
import Bloglist from '../Bloglist'

const Home = () => {


    // const [blogs, setBlogs] = useState([
    //     {title : 'Learning React', body : "lorem ipsom ...", author : "Itachi", id : 1},
    //     {title : "Practicing React", body : "lorem ipsom ...", author : "ThomasShelby", id : 3},
    //     {title : "Projects React", body : "lorem ipsom ...", author : "ThomasShelby", id : 4}
    // ]);

    const [blogs, setBlogs] = useState(null);

    const [name,setName] = useState('mario');



    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        // fetching the data from json file
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
        })
    },[]);


    return (
        <div className="home">
            {/* props are used */}
            {/* javascript is used to eliminate the error of null value in blogs */}
            { blogs && <Bloglist blogs = {blogs} title = "All blogs" handleDelete = {handleDelete}></Bloglist> }
            {/* <Bloglist blogs = {blogs.filter((blog) => blog.author === 'ThomasShelby')} title = "Thomas blogs"></Bloglist>  */}
        </div>
    );
}

export default Home;

