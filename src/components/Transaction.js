import {useEffect} from "react";

const url= "http://localhost:8001/transactions";
function Transaction() {
  useEffect(()=>{
    fetch(url).then((data) => {return data.json()
    }).then((completedata)=>{
      console.log(completedata);
    completedata.map((values)=>{
      return (
        `<tr>
        <td>${values.date}</td>
      <td>${values.description}</td>
      <td>${values.category}</td>
      <td>${values.amount}</td>
      </tr>`
      )
    })
    })
  }, [])
}
export default Transaction;
