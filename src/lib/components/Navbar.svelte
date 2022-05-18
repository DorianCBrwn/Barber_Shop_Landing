<script>
  import Icon from "./Icon.svelte";
  const Navlinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];
</script>

<header class="max-w-7xl mx-auto py-8">
  <div class="flex items-start space-x-32 justify-around">
    <div class="text-yellow-600">
      <Icon
        name="barberName"
        direction="n"
        width="4rem"
        viewheight="15"
        viewwidth="15"
      />
    </div>
    <nav class="navbar flex space-x-14 items-start justify-center">
      <div class="flex space-x-14 items-center">
        {#each Navlinks as navlink}
          <a
            href={navlink.href}
            class="font-medium hover:text-gray-400 transition duration-300 px-auto"
            >{navlink.name}</a
          >
        {/each}
      </div>
    </nav>
    <Icon
      name="arrow"
      direction="n"
      width="4rem"
      viewheight="90"
      viewwidth="90"
    />
  </div>
</header>
<!--
<nav class="max-w-7xl mx-auto py-8">
‹div class="fLex items-center space-x-32">
N
‹div class="flex space-x-1 items-center">
<img src="/images/logo.png" alt="Logo" width={38} height={38} D
<h1 class="text-2xl font-bold">waterworks</h1>
< div>
‹div class="flex space-x-16">
{#each navLinks as navLink}
a href="/" class="font-medium [hover: text-gray-600 transition duration{navLink}</a>
-->
