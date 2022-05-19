<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import "@fontsource/spartan/400.css";
  import "@fontsource/spartan/500.css";
  import "@fontsource/spartan/600.css";
  import "@fontsource/spartan/700.css";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<section class="h-screen">
  <Navbar />
  <slot />
</section>
