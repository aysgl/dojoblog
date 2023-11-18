import React from 'react';
import BlogList from './BlogList';
import useGet from '../helpers/useGet';

const Home = () => {
    const { data: blogs, isPending } = useGet("http://localhost:8000/blogs");

    return (
        <div className='home'>
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs?.filter((blog) => blog.author === "Mario")} title="Mario's blogs!" />
        </div>
    );
};

export default Home;
