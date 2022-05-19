<script>
  import Icon from "./Icon.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
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

<header class="max-w-7xl mx-auto py-8 px-8 relative top-0 w-full">
  <div class="flex items-start justify-around px-10">
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
    <ThemeToggle />
  </div>
</header>
