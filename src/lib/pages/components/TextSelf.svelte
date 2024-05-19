
<script>
export let userDetails;
let seenStatus = true;
export let message='';
</script>

<div class="col-start-6 col-end-13 p-3 mt-3 rounded-lg">
    <div class="flex items-center justify-start flex-row-reverse">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-green-200 flex-shrink-0"
      >
        {userDetails.slice(0,1).toUpperCase()}
      </div>
      <div
        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
      >
        <div>
          {message}
        </div>
        <!-- <div
          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
        >
          {seenStatus?"seen":"delivered"}
        </div> -->
        <div
          class="absolute text-xs -top-5 right-0 -mb-5 mr-2 text-gray-500"
        >
          {userDetails.toUpperCase()}
        </div>
      </div>
    </div>
  </div>