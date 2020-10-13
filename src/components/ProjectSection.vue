<template>
  <section class="grid grid-cols-1 md:grid-cols-2 grid-rows-project-7">
    <div class="bg-theme-blue wrapper-project">
      <a href="https://losfuerlesbos.com/">
        <svg
          class="icon-project"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          ></path>
        </svg>
      </a>
    </div>
    <div class="bg-theme-pink wrapper-project">
      <a href="https://losfuerlesbos.com/">
        <h2 class="heading-project">Los Für Lesbos</h2>
      </a>
    </div>
    <div
      class="md:col-span-2 bg-theme-black flex flex-col md:flex-row py-48 md:px-20"
    >
      <div class="p-10 opacity-90 hover:opacity-100">
        <g-image
          src="@/assets/los-fuer-lesbos-dark.jpg"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div>
    </div>
    <div class="bg-gray-700 wrapper-project">
      <a href="https://stiftung-seenotrettung.org/de/">
        <h2 class="heading-project">
          Stiftungsfonds Zivile Seenotrettung
        </h2>
      </a>
    </div>
    <div class="bg-blue-100 wrapper-project">
      <a href="https://stiftung-seenotrettung.org/de/">
        <svg
          class="icon-project"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </a>
    </div>
    <div
      class="md:col-span-2 bg-theme-black flex flex-col md:flex-row py-48 md:px-20"
    >
      <div class="p-10 md:w-1/3">
        <g-image
          src="@/assets/stiftungsfonds-index.jpg"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div>
      <div class="p-10 md:w-1/3">
        <g-image
          src="@/assets/stiftungsfonds-orgs.jpg"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div>
      <div class="p-10 md:w-1/3">
        <g-image
          src="@/assets/stiftungsfonds-projects.jpg"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div>
      <!-- <div class="p-10 md:p-6 md:w-1/3">
        <g-image
          src="@/assets/stiftungsfonds-press.jpg"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div> -->
    </div>
    <div class="bg-theme-purple wrapper-project">
      <a href="https://codepen.io/MoodyBones/full/GRZPjva">
        <svg
          class="icon-project"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="bg-theme-orange wrapper-project">
      <a href="https://codepen.io/MoodyBones/full/GRZPjva">
        <h2 class="heading-project">
          2048 Game
        </h2>
      </a>
    </div>
    <div
      class="md:col-span-2 bg-theme-black flex justify-center content-center py-32"
    >
      <div class="w-64 md:w-1/3">
        <g-image
          src="@/assets/game-2048.gif"
          class="w-full h-auto rounded-sm"
        ></g-image>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
}
</script>

<style lang="scss" scoped>
.wrapper-project {
  @apply flex flex-col justify-center items-center font-display font-bold leading-tight py-32 transition-colors ease-out duration-200;

  &:hover {
    @apply bg-opacity-25;
  }
}
.heading-project {
  @apply w-min-content text-5xl py-40;
}
.icon-project {
  @apply w-32 h-32;
}
</style>
