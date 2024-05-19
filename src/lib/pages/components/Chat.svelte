<script>
    //@ts-nocheck
        import { userData } from "../../../routes/store";
        import { afterUpdate } from "svelte";
        import SendMessage from "../components/SendMessage.svelte";
        import TextRecieved from "../components/TextRecieved.svelte";
        import TextSelf from "../components/TextSelf.svelte";
        import UserSideBar from "../components/userSideBar.svelte";
  import UserShow from "./UserShow.svelte";
       
        export let allMessages=[];

          const logout=()=>{
              localStorage.removeItem("token");
              window.location.reload();
          }



          let chatContainer;

            function scrollToBottom() {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }

    // Reactively scroll to bottom whenever messages are updated
            afterUpdate(() => {
                scrollToBottom();
            });


            let addNewUser_Username;
            const addUser=async()=>{
              const res = await fetch('https://chat-app-backend-1tlp.onrender.com/existingUsers',{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(addNewUser_Username)
              })
              if(res.ok){
                console.log("user there")
              }
            }
      </script>
    
    <div class="flex h-screen text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
              <UserSideBar userDetails={$userData} on:click={logout}/>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold text-md">Active Conversations</span>



                <button class="text-xl font-bold bg-green-400 text-white p-2 py-0 pb-1 rounded-full" onclick="my_modal_3.showModal()">+</button>
                <dialog id="my_modal_3" class="modal">
                  <div class="modal-box">
                    <form method="dialog">
                      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <label for="Add user">Add User:</label><br>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" bind:value={addNewUser_Username} />
                    <button class="btn btn-success text-white" on:click={addUser}>Add</button>
                  </div>
                </dialog>

                
              </div>
              <UserShow/>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <div
              class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div class="grid grid-cols-12 gap-y-2" bind:this={chatContainer}>
                    

                    {#each allMessages as message}
                        {#if message.type == "incomming"}
                        <TextRecieved userDetails={message.user} message={message.message}/>
                        {:else}
                        <TextSelf userDetails={message.user} message={message.message}/>
                        {/if}
                    {/each}
                  </div>
                </div>
              </div>
              <SendMessage on:inputData/>
            </div>
          </div>
        </div>
      </div>
      