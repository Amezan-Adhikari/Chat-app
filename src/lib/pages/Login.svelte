<script>
    //@ts-nocheck
    import Modal from "$lib/components/Modal.svelte";
    import LoginTab from "$lib/components/LoginTab.svelte";
    import { authorized } from "../../routes/store";
  import { onMount } from "svelte";
    let message = '';
    const authorizeUser = (e)=>{
        const user = e.detail;

        async function checkLogin(){
            const res = await fetch("http://localhost:3000/login",{
                method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                      },
            body:JSON.stringify(user)
            })

            const result = await res.json();
            console.log(result);
            if(result.message == "invalid user"){
                message = "not a valid user";
            }else{
                localStorage.setItem("token",result);
                message = "login successfull";
            }  

            document.getElementById("my_modal_2").classList.add("modal-open");
          setTimeout(()=>{
            document.getElementById("my_modal_2").classList.remove("modal-open");
            window.location.href = "/";
          },700)

        }
        checkLogin();
    }

    onMount(()=>{
        setTimeout(()=>{
            document.getElementById("alertLogin").classList.add("hidden");
        },2200);
    })
</script>

<div class="p-10 fixed top-0 appear w-full" id="alertLogin">
<div role="alert" class="alert alert-warning">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Login to your account</span>
  </div>
</div>

<Modal>{message}</Modal>

<LoginTab on:loginData={authorizeUser}/>


<style>
    .appear{
        animation: appear 0.3s linear 1;
    }
    @keyframes appear{
        0%{
            top:-100%;
            opacity: 0.4;
        }
        30%{
            top:-30%;
            opacity: 0.4;

        }
        100%{
            top:0;
            opacity: 0.9;
        }
    }
</style>