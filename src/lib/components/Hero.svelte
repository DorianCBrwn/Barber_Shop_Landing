<script>
  import bg_img from "$lib/assets/images/pexels-luis-quintero-1453005.jpg";
  import small_img from "$lib/assets/images/pexels-rodnae-productions-7697316.jpg";
  import medium_img from "$lib/assets/images/pexels-thgusstavo-santana-2817022.jpg";
</script>

<section
  class="relative py-32 h-1/5 border-purple-600 border-2"
  style="background-image: url('${bg_img}')"
>
  <!-- <img
    src={bg_img}
    alt=""
    class="absolute -top-28 right-4  w-fit z-0 contrast-50  "
  /> -->

  <div class="flex max-w-6xl-mx-auto">
    <div class="flex flex-col w-1/2">
      <h1 class="text-5xl font-semibold mt-12 leading-relaxed ">
        We will give you an Impeccable Look
      </h1>
      <h2 class="text-m mt-6 leading-relaxed">
        You will leave looking sharp, relaxed and ready to take on the world,
        with that swagger in your stride.
      </h2>
      <a href="/" class="mt-10">
        <button
          class="btn btn-primary btn-xs sm:btn-xs md:btn-sm lg:btn-md my-8 py-4"
          >Book Appointment</button
        >
      </a>
    </div>
    <div class="w-1/2 border-4 flex items-center">
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
