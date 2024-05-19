<!-- MyRoute.svelte -->
<script context="module">
    export const route = {
      ssr: false // Disable SSR for this route
    };
  </script>
  
  <script>
    //@ts-nocheck
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { authorized, userData } from "./store";
  
    onMount(async () => {
      const token = localStorage.getItem("token")?localStorage.getItem("token"):'';
      if (token || token != '') {
        try {
          const res = await fetch("https://chat-app-backend-1tlp.onrender.com/data", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}`
            }
          });
          
          const result = await res.json();
          if(result == null || result.message =="Unauthorized"){
            authorized.update(() => {return false});
            goto("/login");
          }
          else{
            authorized.update(()=>{return true});
            userData.update(()=>{
                return result.username;
            })
          }
          
          
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      } else {
        goto("/login");
      }
    });
  </script>
  
  {#if ($page.route.id=="/login" || $page.route.id=="/register")  || $authorized }
  <slot></slot>
  {/if}




