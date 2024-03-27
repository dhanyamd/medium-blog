import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Blogskeletton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks"

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <Appbar/>
         <div className="flex justify-center">
            <div>
            <Blogskeletton/>
            <Blogskeletton/>
            <Blogskeletton/>
            <Blogskeletton/>
            <Blogskeletton/>

        </div>
        </div>
        </div>
    }
    return<div>
    <Appbar/>
    <div className="flex justify-center">  
    <div >
        {blogs.map(blog =>
             <BlogCard
             id={blog.id}
             authorname={blog.author.name || "Anonymous"}
             title={blog.title}
             content={blog.content}
             publishedDate="2nd Feb 2024"
             />)}
       
    </div>
    </div>
    </div>
}