import { useState } from "react";

export const Search = () => {
    const [value, setValue] = useState('');
    const searchEvent=(e)=>{
      setValue(e.target.value);
    }
    const url= "/results/"+value;
  return (
    <>
    <center>
      <h1>Search Movie</h1>      
      <form action={url} method="GET">
        <input type="search" class="form-control p-3" placeholder="Search..." value={value} onChange={searchEvent}></input>
      </form>
    </center>
    </>
  )
}
