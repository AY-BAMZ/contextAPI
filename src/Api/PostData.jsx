import React, {useState} from "react";
import Axios from "axios";

function PostData() {
  const url = "";

  const [data, setData] = useState({
    name: "",
    iduser: "",
    email: "",
    image: ""
  });

  function handle(e) {
      const newdata = {...data};
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
  }

  function handleSubmit(e){
    e.preventDefault();
    Axios.post(url,{
        name: data.name,
        email: data.email,
        iduser: parseInt(data.iduser),
        image: data.image
    })
    .then(res=>{
        console.log(res.data)
    })
  }

  return (
    <div style={{marginTop: 50}}>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <input
          onChange={(e) => handle(e)}
          value={data.name}
          placeholder="name"
          id="name"
          type="name"
        />
        <input
          onChange={(e) => handle(e)}
          value={data.email}
          placeholder="email"
          id="email"
          type="email"
        />
        <input
          onChange={(e) => handle(e)}
          value={data.image}
          placeholder="image"
          id="image"
          type="file"
        />
        <input
          onChange={(e) => handle(e)}
          value={data.iduser}
          placeholder="iduser"
          id="iduser"
          type="iduser"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default PostData;
