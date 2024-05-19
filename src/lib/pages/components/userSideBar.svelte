<script>
    export let userDetails;
    let active=true;
</script>


<div class="flex flex-row items-center justify-center h-12 w-full">
<div
            class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">Let's TALK</div>
        </div>
        <div
          class="flex flex-col items-center relative bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
          <div class="h-20 w-20 rounded-full border overflow-hidden">
            <div class="text-3xl bg-green-200 h-full w-full flex items-center justify-center">
                {userDetails.slice(0,1).toUpperCase()}
            </div>
          </div>
          <div class="text-sm font-semibold mt-2">{userDetails.toUpperCase()}</div>
          <div class="flex flex-row w-full justify-center items-center mt-3">
            <button  on:click={()=>active = !active}
              class="flex flex-col cursor-pointer justify-center h-max w-10 {active?"bg-indigo-500":"bg-white border-1"} px-1 p-1 rounded-full"
            >
              <div class="h-3 w-3 {!active?"bg-indigo-500":"bg-gray-100"} transition-all duration-300 ease-in-out rounded-full {active?"self-end":"self-start"}"></div>
            </button>
            <div class="leading-none ml-1 text-xs">{active?"Active":"Inactive"}</div>
            
            <button class="absolute top-2 left-2 p-2 pb-1 bg-red-500 rounded-full" on:click>
                <div class="tooltip tooltip-right" data-tip="Logout">
                    <img src="/icons/logout.svg" alt="logout" class="h-5">
                </div>
            </button>
            
          </div>
        </div>