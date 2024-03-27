import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"}  className="flex flex-col justify-center font-semibold text-2xl cursor-pointer">
        Medium
        </Link>
       <div className="flex flex-row justify-center pr-9">
        <div className="pr-5">
            <Link to={"/publish"}>
         <button type="button" className="mr-4 w-full text-base text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium 
         rounded-full px-5 py-2.5 text-center me-2 mb-2 font-sans antialiased ">New</button>
         </Link>
         </div>
        <Avatar size="big" name="Dhanya"/>
    </div>
    </div>
}