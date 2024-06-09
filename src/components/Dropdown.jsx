import { useEffect, useState } from "react"

export function Dropdown()
{
    const [show, setShow] = useState(false);
    const [option, setOption] = useState("");
    let [countries, setCountries] = useState([]);
    let temp = [];
    useEffect(()=>{
        fetch("https://api.first.org/data/v1/countries")
        .then((res) => res.json())
        .then((data)=>{
            for(const key in data.data)
            {
                temp.push(data.data[key].country);
                setCountries(temp);
            }
        });
    },[])
    return (
        <div className=" h-fit w-fit">
            <div className="relative w-80">
                <input className=" border-blue-600 border-2 rounded p-2 w-80" type="text" name="input" id="input" value={option} placeholder="Select Country" onChange={(e)=>{setOption(e.target.value)}}/> 
                <div className={`absolute right-3 top-3 cursor-pointer ${show?"hidden":""}`} onClick={()=>{setShow(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className={`absolute right-3 top-3 cursor-pointer ${(!show)?"hidden":""}`} onClick={()=>{setShow(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </div>

            <ul className={` overflow-scroll max-h-56 max-w-80 bg-blue-100 mt-1 ${show?"":"hidden"}`}>
                {countries.map((country)=>{
                    return(<li onClick={()=>{setOption(country); setShow(false)}} className={`p-2 text-slate-800 hover:bg-blue-600 hover:text-white cursor-pointer ${(country.toLowerCase().startsWith(option.toLowerCase()))?"":"hidden"}`}>{country}</li>)
                })}
            </ul>
        </div>
    )
}