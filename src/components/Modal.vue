<template>
  <button
    @click="visible = true"
    class="bg-orange-400 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-orange-600 transition"
  >
    앱 열기
  </button>
  <div
    v-if="visible"
    class="bg-gray-800 bg-opacity-50 fixed inset-0 z-10"
    @click="handleBackgroundClick"
  ></div>

  <Dialog v-model:visible="visible" modal :style="dialogStyle">
    <template #header>
      <div class="flex justify-between items-center text-ml font-semibold">
        준비중입니다 :)
      </div>
    </template>
    <span class="text-surface-500 dark:text-surface-100 block"></span>
    <div class="gap-4 mb-4">
      <label for="username" class="font-semilight text-sm w-24"
        >이메일을 입력하고 최신 소식을 받아보세요!</label
      >
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText
        id="email"
        class="flex-auto border"
        autocomplete="off"
        placeholder="example@com"
      />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" @click="visible = false">저장</Button>
    </div>
  </Dialog>
</template>

<script setup>
import { Dialog, InputText, Button } from "primevue";
import { ref } from "vue";

const visible = ref(false);

const dialogStyle = {
  width: "25rem",
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};
</script>
