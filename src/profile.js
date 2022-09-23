import React from 'react'

export default function profile({UserList}) {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        overflow:"scroll",
        padding:"0px 20px",
        gap:"10px"
    }}>
        {UserList && UserList.map((data,index)=>{
            return <div key={index} style={{
                display:"flex",
                flexDirection:"column",
                gap:"5px",
               boxShadow:".1rem .1rem .2rem gray" ,
               padding:"10px",
            }}>
                <p>{data.name}</p>
                <small>{data.email}</small>
                <img style={{
                    width:"150px",
                    height:"100px",
                    borderRadius:"10px"
                }} src={data.image}  alt="image not fond" />
            </div>
        })}
      helo profile 
    </div>
  )
}
