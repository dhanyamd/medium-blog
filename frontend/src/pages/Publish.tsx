import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/AppBar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const[title,setTitle] = useState("");
    const[content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
         <Appbar/>
     <div className="flex justify-center w-full pt-8"> 
    <div className="max-w-screen-lg w-full">     
<input onChange={(e)=>{
    setTitle(e.target.value)
}} type="text" className="focus:outline-none font-serif antialiased	font-medium text-xl	 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
 block w-full p-2.5" placeholder="Title"/>
<TextEditor onChange={(e)=>{
  setContent(e.target.value)
}}/>
<button onClick={async()=>{
   const response =  await axios.post(`${BACKEND_URL}/api/v1/blog`,{
   title,
   content 
    },{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    });
    navigate(`/blog/${response.data.id}`)
}} type="submit" className="inline-flex items-center px-5 py-2.5 text-md w-lg font-medium 
text-center pt-2 mt-5 text-white bg-blue-700 rounded-lg focus: ring-4 focus: ring-blue-200 dark:focus:ring:blue-900 hover:bg-blue-800">
Publish post
</button>
    </div>
    </div>
    </div>
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>) => void}){
    return <form>
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
                <div className="my-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post </label>
                    <textarea onChange={onChange} id="editor" rows={8} className=" focus:outline-none block font-sans text-base w-full px-0 text-sm text-gray-800 bg-white
                    boder-0 pl-2" placeholder="Write an article...." required></textarea>
                </div>
            </div>

        </div>
    </form>
}