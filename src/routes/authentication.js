



 export  const validateToken = async() =>{

        let token = localStorage.getItem("token")?localStorage.getItem("token"):"";

        if(token!=""){
            const res = await fetch("https://chat-app-backend-1tlp.onrender.com/login",{
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