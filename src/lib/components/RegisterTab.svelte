<script>
  //@ts-nocheck
    import { createEventDispatcher } from "svelte";
  import Loader from "./Loader.svelte";
    const dispatch = createEventDispatcher();
     let username='';
     let password='';
     let confirmPassword= '';
     let loader = false;
     let passwordError='',usernameError = '', confirmPasswordError='';
    let disabled = false;
    function validateForm(){
      loader = true;
        let validated = true;
        if(username.length<5){
            usernameError = "* username too short";
            validated = false;
            return;
        }
        else{
            usernameError = "";
        }

        if(password === ''){
            passwordError = "* required";
            validated = false;
            return;
        }
        else{
            passwordError = '';
        }
        if(confirmPassword === ''){
            confirmPasswordError = "* required";
            validated = false;
            return;
        }
        else{
            confirmPasswordError = '';
        }

        if(password != confirmPassword){
            passwordError = "* passwords do not match";
            confirmPasswordError = "* passwords do not match";
            validated = false;
            return;
        }
        else{
            passwordError = "";
            confirmPasswordError = "";
        }
        if(validated){
            disabled = true;
            dispatch("RegisterData",{username,password});
        }
    }

</script>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Welcome Back
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>

        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Username :</label
              ><span class="text-red-600">{usernameError}</span>
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-at text-blue-500"></i>
                </div>

                <input
                required
                bind:value={username}
                  id="email"
                  type="text"
                  name="email"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password :</label
              ><span class="text-red-600">{passwordError}</span>
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                required
                bind:value={password}
                  id="password"
                  type="password"
                  name="password"
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Confirm Password :</label
                ><span class="text-red-600">{confirmPasswordError}</span>
                <div class="relative">
                  <div
                    class="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                  >
                    <span>
                      <i class="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>
  
                  <input
                  required
                  bind:value={confirmPassword}
                    id="Confirmpassword"
                    type="password"
                    name="Confirmpassword"
                    class="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                    placeholder="Confirm password"
                  />
                </div>
              </div>


            <div class="flex w-full">

              {#if !loader}
              <button 
              {disabled}
              on:click|preventDefault = {validateForm}
                type="submit"
                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span class="mr-2 uppercase">Register</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
              {:else}
              <button 
              disabled
              
                type="submit"
                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <Loader/>
              </button>
              {/if}
             
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          href="/"
          target="_blank"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            >already have an account?
            <a
              href="/login"
              class="text-xs ml-2 text-blue-500 font-semibold"
              >login</a
            ></span
          >
        </a>
      </div>
    </div>
  </body>
</html>