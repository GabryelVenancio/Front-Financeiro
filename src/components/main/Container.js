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
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTEyYTZiMzUzYmViYjYyNDdjMzczNSIsInVzZXIiOiJieWVsIiwiZW1haWwiOiJCeWVsQGdtYWlsLmNvbSIsImlhdCI6MTY1NDg3OTk2MSwiZXhwIjoxNjU1MDUyNzYxfQ.kAI85BWiFrCP36gYudUBHPG3qU0HL0VE4x1pOnQG1_I"
          },  
        })
        .then((result)=> result.json())
        .then((data)=>{
            console.log(data.payload);
            setDataCards(data.payload);
        })
        .catch((err)=>console.error(`Error at loading api -> ${err}`));
     },[]);

     const [balance, setBalance] = useState([]);

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
