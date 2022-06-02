import { useEffect, useState } from "react";
import Balance from "./Balance";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import Cards from "./Cards";
import Panel from "./Panel";
import {path} from "../../config/path";

export default function Container(){
    const[datacards,setDataCards] = useState([]);

    useEffect(() =>{
        fetch(`${path}/wallet/list/user/628fcf8ebf3a5f1857987148`,{
          method: "GET",
          headers: {
              accept:"application/json",
              "content-type": "application/json",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZjZjhlYmYzYTVmMTg1Nzk4NzE0OCIsInVzZXIiOiJoZWxlbmEiLCJlbWFpbCI6ImhlbGVuYTIwMjJAZ21haWwuY29tIiwiaWF0IjoxNjU0MTkzNjM0LCJleHAiOjE2NTQzNjY0MzR9.7jHlpgotZRUzFtXenkSCXYLi1wx9o5v8ScCZC36qEbY"
          },  
        })
        .then((result)=> result.json())
        .then((data)=>{
            console.log(data.payload);
            setDataCards(data.payload);
        }).catch((err)=>console.error(`Error at loading api -> ${err}`));
     },[])

     const [balance,setBalance] = useState([]);

     const changeData = (content) => {
         setBalance(content);
     };

    return (
        <div className="container">
            <Cards data={datacards} action={changeData}/>
            <Panel  data={balance} />
            <Waitlist />
            <Plans />
            <Balance data={balance} />    
        </div>
    );
}
