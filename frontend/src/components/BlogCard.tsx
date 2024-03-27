import { Link } from "react-router-dom"

interface BlogCardProps {
    id: number,
   authorname: string,
   title: string,
   content: string,
   publishedDate: string
}

export const BlogCard = ({
    id,
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) =>{
    
    return <Link to={`/blog/${id}`}>
     <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-2xl cursor-pointer">
        <div className="flex">
            <Avatar size="small" name={authorname}/>       
      <div className="font-extralight pl-2 text-sm flex justify-center flex-col"> {authorname} </div>
      <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
        <Circle/>
      </div>
      <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
      {publishedDate}
      </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
  </div>   
  </Link>
}

export function Circle(){
    return <div className="w-1 h-1 rounded-full bg-slate-400">

    </div>
}

export function Avatar({name, size="small"}: {name: string, size: "small" | "big"}) {
    return <div>
<div className={`relative inline-flex items-center justify-center ${size=="small"? "w-7 h-7" : "w-10 h-10"} overflow-hidden 
bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`${size == "small" ? "text-xs": "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
</div>

}