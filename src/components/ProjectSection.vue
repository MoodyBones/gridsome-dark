<template>
  <section
    id="work-section"
    class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto grid-flow-row-dense"
  >
    <div class="carousel text-theme-orange">
      <h1 class="right">
        Project One
      </h1>
    </div>
    <div class="bg-gradient-to-b from-gray-100 wrapper-project">
      <div class="icon-wrapper text-theme-orange">
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
      </div>
    </div>
    <div class="bg-theme-orange wrapper-project heading-wrapper-project">
      <article>
        <h2 class="heading-project">Los Für Lesbos</h2>
        <ul class="list-project">
          <li class="">Fundraising Site</li>
          <li class="">Gridsome | Vue.js</li>
          <li class="">TailwindCSS | SCSS</li>
          <li class="">Markdown | GraphQL</li>
          <li class="">Responsive Layout | 2 Pages</li>
          <li class="">#LosFuerLesbos #LeaveNoOneBehind</li>
          <li>
            <a href="#" v-scroll-to="'#image-project-one'">
              <ChevronDown />
            </a>
          </li>
        </ul>
      </article>
    </div>
    <div id="image-project-one" class="bg-theme-white image-wrapper-project">
      <a
        class="image-container max-w-screen-lg"
        href="https://losfuerlesbos.com/"
      >
        <g-image
          src="@/assets/los-fuer-lesbos-dark.jpg"
          class="image-project"
          width="996"
          height="790"
        ></g-image>
      </a>
      <h3 class="text-theme-orange">
        for Sea-Watch.org
      </h3>
    </div>
    <div class="carousel text-theme-blue">
      <h1 class="right md:left">
        Project Two
      </h1>
    </div>
    <div
      class="bg-gradient-to-b from-gray-100 wrapper-project md:col-start-2 md:col-end-3"
    >
      <div class="icon-wrapper text-theme-blue">
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
      </div>
    </div>
    <div class="bg-theme-blue wrapper-project heading-wrapper-project md:">
      <article>
        <h2 class="heading-project">
          Stiftungsfonds Zivile Seenotrettung
        </h2>
        <ul class="list-project">
          <li class="">Foundation Fund for Civil Sea Rescue Site</li>
          <li class="">Gridsome | Vue.js</li>
          <li class="">TailwindCSS | SCSS</li>
          <li class="">Netlify CMS | GraphQL</li>
          <li class="">i18n | DE/EN</li>
          <li class="">Responsive Design & Layout | 7 Pages</li>
          <li>
            <a href="#" v-scroll-to="'#image-project-two'">
              <ChevronDown />
            </a>
          </li>
        </ul>
      </article>
    </div>
    <div id="image-project-two" class="bg-theme-white image-wrapper-project">
      <a
        class="flex flex-col md:flex-row justify-center items-center gap-y-16"
        href="https://stiftung-seenotrettung.org/de/"
      >
        <div class="image-container image-grid-3">
          <g-image
            src="@/assets/stiftungsfonds-index.jpg"
            class="image-project"
            width="352"
            height="283"
          ></g-image>
        </div>
        <div class="image-container image-grid-3">
          <g-image
            src="@/assets/stiftungsfonds-orgs.jpg"
            class="image-project"
            width="352"
            height="302"
          ></g-image>
        </div>
        <div class="image-container image-grid-3">
          <g-image
            src="@/assets/stiftungsfonds-projects.jpg"
            class="image-project"
            width="352"
            height="263"
          ></g-image>
        </div>
      </a>
      <h3 class="text-theme-blue">
        for Sea-Watch.org
      </h3>
    </div>
    <div class="carousel text-theme-green">
      <h1 class="right">
        Project Three
      </h1>
    </div>
    <div class="bg-gradient-to-b from-gray-100 wrapper-project">
      <div class="icon-wrapper text-theme-green">
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
      </div>
    </div>
    <div class="bg-theme-green wrapper-project heading-wrapper-project">
      <article>
        <h2 class="heading-project">
          2048 Game
        </h2>
        <ul class="list-project">
          <li class="">Javascript Logic Game</li>
          <li class="">HTML</li>
          <li class="">CSS</li>
          <li class="">JavaScript</li>
          <li class="">Interaction Animation</li>
          <li class="">Mouse & keyboard events</li>
          <li>
            <a href="#" v-scroll-to="'#image-project-three'">
              <ChevronDown />
            </a>
          </li>
        </ul>
      </article>
    </div>
    <div id="image-project-three" class="bg-theme-white image-wrapper-project">
      <a
        class="image-container w-3/4 md:w-1/4"
        href="https://codepen.io/MoodyBones/full/GRZPjva"
      >
        <g-image
          src="@/assets/game-2048.gif"
          class="image-project gif"
          width="428"
          height="647"
        ></g-image>
      </a>
      <h3 class="text-theme-green">
        for Fun
      </h3>
    </div>
  </section>
</template>

<script>
import ChevronDown from '@/assets/chevron-down.svg'

export default {
  name: 'ProjectSection',
  components: {
    ChevronDown,
  },
}
</script>

<style lang="scss" scoped>
.wrapper-project {
  @apply flex flex-col justify-center items-center py-32;
  .icon-wrapper {
    @apply transition-all ease-out duration-500;
    @apply scale-95 transform;
  }
  .icon-project {
    @apply scale-90 opacity-90 w-32 h-32 sm:w-48 sm:h-48;
    transform: translate3d(
      0,
      0,
      0
    ); // this tells it to be hardware accelerated from the beginning
    perspective: 1000px; // this will hardware accelerate
    backface-visibility: hidden;
  }
  &:hover {
    .icon-wrapper {
      @apply md:scale-100 md:opacity-50;
    }
  }
}

.heading-wrapper-project {
  @apply transition-all ease-out duration-500 px-12;
  @apply text-theme-white;

  .meta-project {
    @apply flex flex-row;
  }

  .heading-project {
    @apply font-display font-bold leading-none w-min-content text-4xl md:text-5xl opacity-95 pb-16;
    @apply transition-all ease-out duration-300 transform -rotate-2 z-10;
  }
  .list-project {
    @apply tracking-wide text-xl sm:text-2xl font-bold tracking-wide ml-10 leading-loose flex flex-col opacity-80;

    li:last-child {
      @apply transition-all ease-out duration-500;
      @apply w-16 h-16 self-center pt-8 translate-y-0 scale-90 opacity-95;
    }
  }
  &:hover {
    .heading-project {
      @apply md:rotate-0;
    }
    .list-project {
      @apply md:opacity-95;
      li:last-child {
        @apply transform md:translate-y-2 md:scale-110;
      }
    }
  }
}

.image-wrapper-project {
  @apply col-span-full flex flex-col justify-center items-center z-20 py-20 md:pb-32 md:pb-56 md:px-20;

  .image-container {
    @apply transition-all ease-out duration-500;
    @apply max-w-5xl px-6 py-10 md:py-6 md:px-4;
  }
  .image-project {
    transform: translate3d(
      0,
      0,
      0
    ); // this tells it to be hardware accelerated from the beginning
    perspective: 1000px; // this will hardware accelerate
    backface-visibility: hidden;
    @apply w-full h-auto rounded-sm shadow-lg;
  }
  .image-grid-3 {
    @apply md:w-1/3 md:scale-95 transform md:hover:scale-100;
  }
  .image-long {
    @apply max-h-screen;
  }
  .gif {
    perspective: 1000px;
    backface-visibility: hidden;
  }
  h3 {
    @apply opacity-90 font-display text-2xl sm:text-3xl my-10;
  }
}

.carousel {
  overflow: hidden;
  @apply md:col-span-2 bg-theme-white shadow-sm;

  h1 {
    @apply font-display uppercase font-bold tracking-wide text-7xl py-4 opacity-75;
  }

  .right {
    animation: moveCarouselRight 14s linear infinite;
    transform: translate3d(0, 0, 0);
  }

  .left {
    text-align: right;
    animation: moveCarouselLeft 14s linear infinite;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes moveCarouselRight {
  100% {
    transform: translate3d(200%, 0, 0);
  }
}
@keyframes moveCarouselLeft {
  100% {
    transform: translate3d(-200%, 0, 0);
  }
}
</style>
