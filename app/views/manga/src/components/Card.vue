<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto ">
    <div
      class="relative flex w-56 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style="background-color: rgb(31, 41, 55);"
    >
      <div
        class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
      >
        <img
          src="https://nettruyennew.com/public/images/comics/mashle-magic-and-muscles.jpg"
          alt="img-blur-shadow"
          layout="fill"
        />
      </div>
      <div class="p-6">
        <h5
          class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          style="background-color: rgb(31, 41, 55); color: rgb(251, 251, 252);"
          >
          Mashle
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased" style="color: rgb(251, 251, 252);">
Chapter 1
        </p>
      </div>
      <div class="p-6 pt-0">
        <button
          class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
          style="background-color: rgb(18, 26, 36);"
          >
          Read 
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
.container {
  margin-top: 60px;
}
</style>
