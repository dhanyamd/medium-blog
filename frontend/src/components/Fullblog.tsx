import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const Fullblog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
    <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-10">
                <div className=" col-span-8 flex flex-col justify-center pl-5">
                    <div className="text-5xl font-bold font-serif antialiased pl-9">
                        {blog.title}
                    </div>
                    <div className="pl-10 pt-2 text-slate-500">
                      Posted on 2nd December 2023
                    </div>
                       <div className="pl-10 pt-2">
                        {blog.content}
                         </div>
                         </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg pb-2">
                    Author 
                    </div>
                  <div className="flex">
                    <div className="pr-4 flex flex-col justify-center">
                    <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                    </div>
                   <div>
                   <div className="text-xl font-semibold">
                  {blog.author.name||"Anonymous"}
                  </div>
                    <div className="pt-2 text-slate-500">
                        Random catchphrase about the author's ability to grab the user's attention
                    </div>
                    </div>
                  </div>
                  
                </div>
                </div>
            </div>
        </div>
}