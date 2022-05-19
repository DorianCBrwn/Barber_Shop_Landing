<script>
  import Icon from "./Icon.svelte";
  import about_img1 from "$lib/assets/images/pexels-andre-ricardo-modesto-3423308.jpg";
  export let subHeadline = "";
</script>

<section class="h-full">
  <div class="h-5/6 mt-16 px-2 flex flex-col items-center ">
    <h2 class="text-lg ">About Us</h2>
    <div class="flex items-center justify-center py-1">
      <svg height="1rem" width="2rem" class="mx-1">
        <line
          x1="0"
          y1="35%"
          x2="75%"
          y2="35%"
          style="stroke:currentColor;stroke-width:2"
        />
      </svg>
      <Icon
        name="mustash"
        direction="n"
        width="1rem"
        viewheight="25"
        viewwidth="25"
      />
      <svg height="1rem" width="2rem" class="mx-1">
        <line
          x1="25%"
          y1="35%"
          x2="100%"
          y2="35%"
          style="stroke:currentcolor ;stroke-width:2"
        />
      </svg>
    </div>
    <h3 class="text-xl font-bold pb-1 text-secondary tracking-wider ">
      {subHeadline}
    </h3>
    <div class="about_content_container">
      <div class="hidden ">
        <img src={about_img1} alt="" />
        <img src="" alt="" />
      </div>
      <div class="about_content_copy_container">
        <p class="py-1 text-center">
          We are very proud of our work and have perfected the fine art of
          making our clients look their best. Our strengths are in the details,
          how closely we listen to match what you envision, how clean the edges
          are, how straight the neckline is, and how smooth our famous hot foam
          shaves are.
        </p>
        <p class="py-1 text-center">
          Our unrivaled team of experienced barbers takes pride in every haircut
          and hot shaving. We take pride in our hard-earned skills, not tricks.
        </p>
        <div class="grid grid-row-2 grid-cols-2 p-4 mt-8">
          <h3 class="text-5xl font-bold pr-4 text-center text-secondary">22</h3>
          <h3 class=" text-5xl font-bold pr-4 text-center text-secondary">
            10
          </h3>
          <p class="text-sm text-center text-accent">Years of experience</p>
          <p class="text-sm text-center text-accent">Master Barbers</p>
        </div>
      </div>
    </div>
  </div>
</section>
