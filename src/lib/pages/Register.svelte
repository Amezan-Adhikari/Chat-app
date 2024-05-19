<script>
    //@ts-nocheck
  import Modal from "$lib/components/Modal.svelte";
  import RegisterTab from "$lib/components/RegisterTab.svelte";
  let message;
    function handlesubmit(e){
      const user = e.detail;

        async function updateDatabase(){
          const res = await fetch("https://chat-app-backend-1tlp.onrender.com/register",{
            method:"POST",
            headers: {
                        'Content-Type': 'application/json'
                      },
            body:JSON.stringify(user)
          });

           const result = await res.json();

          if(result.acknowledged && result.acknowledged == true){
            message = "account succesfully created";
          }
          else if(result.message && result.message == "user already registered"){
            message = "User already registered";
          }

          document.getElementById("my_modal_2").classList.add("modal-open");
          setTimeout(()=>{
            document.getElementById("my_modal_2").classList.remove("modal-open");
            window.location.href = "/login";
          },700)

        }

        updateDatabase();


        
    }

</script>

<Modal>{message}</Modal>

<RegisterTab on:RegisterData={handlesubmit}/>