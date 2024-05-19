



 export  const validateToken = async() =>{

        let token = localStorage.getItem("token")?localStorage.getItem("token"):"";

        if(token!=""){
            const res = await fetch("http://localhost:3000/login",{
        method:"GET",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Custom-Header': 'custom_value'
        }
        });
        const data = await res.json();
        console.log(data);
        }
        else{
            console.log("invalid token");
        }
}