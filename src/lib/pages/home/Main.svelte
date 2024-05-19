<script>
  //@ts-nocheck
    import { userData } from "../../../routes/store";
  import UserShow from "../components/UserShow.svelte";
    import UserSideBar from "../components/userSideBar.svelte";
      const logout=()=>{
          localStorage.removeItem("token");
          window.location.reload();
      }
  </script>


<div class="flex h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <UserSideBar userDetails={$userData} on:click={logout}/>
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Active Conversations</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >4</span
            >
          </div>
          <UserShow on:click={()=>window.location.href="/message"}/>
        </div>
      </div>
      <div class="flex flex-col flex-auto h-full p-6">
        <img src="/icons/ChatBubble.svg" alt="bubble" class="h-96 mt-40">
      </div>
    </div>
  </div>
  