import React from "react";
import './LastestBlogs.css'
import lastest_blogs from '../Assets/lastest_blogs'
import Blogs from "../../Blogs/Blogs";

const LastestBlogs = () => {
    return (
        <div className="lastest-blogs">
            <h2>The Latest From The Fragrance Direct Blog</h2>
            <div className="lastest-blogs-main">
                {lastest_blogs.map((blogs, i) => {
                    return <Blogs key={i} id={blogs.id} image={blogs.image} title={blogs.title} intro={blogs.intro} />
                })}
            </div>
        </div>
    )

}
export default LastestBlogs