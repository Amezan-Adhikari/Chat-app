<script>
    export let userDetails;
    export let message='';
    </script>

<div class="col-start-1 col-end-8 p-3 rounded-lg">
    <div class="flex flex-row items-center">
      <div
        class="flex items-center justify-center mt-4 h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0"
      >
        {userDetails.slice(0,1).toUpperCase()}
      </div>
      <div
        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
      >
        <div>{message}</div>

        <div
          class="absolute text-xs -top-5 left-0  ml-1 text-gray-500"
        >
          {userDetails.toUpperCase()}
        </div>
      </div>
    </div>
  </div>