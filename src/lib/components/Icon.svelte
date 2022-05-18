<script context="module">
  import pathsByName from "../../icon-paths.js";
  export const iconOptions = Object.keys(pathsByName);
  export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
</script>

<script>
  export let name;
  export let viewheight;
  export let viewwidth;
  export let width = "1rem";
  export let focusable = false;
  export let direction = "n";

  $: paths = pathsByName[name] || [];
  $: rotation = directions.indexOf(direction) * 45;
</script>

<svg
  class="c"
  fill-rule="evenodd"
  clip-rule="evenodd"
  style={`transform: rotate(${rotation}deg)`}
  viewBox="0 0 {viewwidth} {viewheight}"
  {focusable}
  {width}
>
  {#each paths as path}
    <path d={path} />
  {/each}
</svg>

<style>
  .c {
    /* width: var(--size);
    height: var(--size); */
    fill: currentColor;
    transition: all 0.3s ease-out;
    overflow: visible;
  }
</style>
