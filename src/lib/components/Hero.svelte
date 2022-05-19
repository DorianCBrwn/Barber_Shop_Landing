<script>
  import bg from "$lib/assets/images/bg-medium.jpg";
  import small_img from "$lib/assets/images/pexels-rodnae-productions-7697316.jpg";
  import medium_img from "$lib/assets/images/pexels-thgusstavo-santana-2817022.jpg";
</script>

<section
  class=" h-full flex flex-col border-purple-600 border-2  bg-cover bg-right bg-no-repeat mt-8"
  style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('{bg}')"
>
  <div class="h-5/6 border-orange-400 border-2 flex flex-col md:max-w-6xl">
    <div
      class="h-full flex flex-col items-center justify-around mt-6 border-2 "
    >
      <h1
        class="px-2 font-bold text-xl text-center leading-normal lg:text-5xl lg:leading-relaxed "
      >
        We will give you an Impeccable Look
      </h1>
      <h2
        class=" px-2 text-m text-base font-medium text-center leading-normal "
      >
        You will leave looking sharp, relaxed and ready to take on the world,
        with that swagger in your stride.
      </h2>
      <a href="/" class="">
        <button class="btn btn-secondary btn-sm md:btn-md lg:btn-lg py-2">
          Book Now</button
        >
      </a>
    </div>
    <div class="hidden w-1/2 border-4 flex items-center">
      <img
        src={small_img}
        alt=""
        class="w-1/4 rounded-l-full rounded-br-full self-end  border-2 border-gray-300"
      />

      <img
        src={medium_img}
        alt=""
        class="w-1/3 roun rounded-l-full rounded-br-full self-end  border-2 border-gray-300"
      />

      <!-- <span class="hero_container_page_count--current">1</span>
      <span class="hero_container_page_count--total">05</span> -->
    </div>
  </div>
</section>

<style>
</style>
