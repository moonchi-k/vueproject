<template>
  <header
    class="flex justify-between items-center p-4 border-b border-gray-100 mx-px"
  >
    <div class="text-2xl font-bold text-orange-500">
      <a href="#"> Allbooks </a>
    </div>

    <ul class="hidden md:flex space-x-4">
      <li class="cursor-pointer hover:text-orange-500">기업문의</li>
      <li class="cursor-pointer hover:text-orange-500">회사소개</li>
      <li class="cursor-pointer hover:text-orange-500">고객센터</li>
      <li class="cursor-pointer hover:text-orange-500">앱다운로드</li>
    </ul>

    <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
      <svg
        v-if="!isMobileMenuOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>

      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <div
      v-if="isMobileMenuOpen"
      class="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden"
    >
      <ul class="flex flex-col items-center py-4 space-y-4">
        <li class="cursor-pointer hover:text-orange-500">기업문의</li>
        <li class="cursor-pointer hover:text-orange-500">회사소개</li>
        <li class="cursor-pointer hover:text-orange-500">고객센터</li>
        <li class="cursor-pointer hover:text-orange-500">앱다운로드</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
