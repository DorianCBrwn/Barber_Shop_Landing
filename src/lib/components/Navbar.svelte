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

<header
  class="fixed w-full flex justify-between items-center px-4 md:px-12 h-20 top-0 "
>
  <a href="/">
    <Icon
      name="barberName"
      direction="n"
      width="2rem"
      viewheight="8"
      viewwidth="8"
    />
  </a>
  <nav>
    <button class="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <ul
      class="
      fixed
      left-0
      right-0
      min-h-screen
      space-y-4 p-4 transform translate-x-full
      md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:translate-x-0 md:flex-row md:items-center md:justify-between"
    >
      {#each Navlinks as navlink}
        <li>
          <a
            href={navlink.href}
            class="font-medium hover:text-gray-400 transition duration-300 px-auto"
            >{navlink.name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
  <div class="hidden md:inline">
    <ThemeToggle />
  </div>
</header>

<!--
<header
  class="max-w-7xl mx-auto px-8 relative top-0 w-full border-red-500 border-2"
>
  <div class="flex items-center justify-around px-10 md:hidden">
    <div class="text-yellow-600 border-2 border-green-600">
      <Icon
        name="barberName"
        direction="n"
        width="3rem"
        viewheight="8"
        viewwidth="8"
      />
    </div>
    <nav class="navbar flex space-x-14 items-center justify-center">
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
</header> -->
