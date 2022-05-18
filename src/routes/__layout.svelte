<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import "@fontsource/spartan/400.css";
  import "@fontsource/spartan/500.css";
  import "@fontsource/spartan/600.css";
  import "@fontsource/spartan/700.css";
</script>

<section class="">
  <Navbar />
  <slot />
</section>
