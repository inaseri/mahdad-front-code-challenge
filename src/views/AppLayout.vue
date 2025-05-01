<template>
  <div class="flex flex-col h-screen">
    <header class="bg-[#b5b3b3]  text-center h-[50px] text-white p-4">Header</header>
    <main class="flex-1 overflow-y-auto p-[32px] bg-gray-100 bg-white justify-items-center">
      <div class="h-[1500px] w-full p-5">
        <div class="flex w-full p-4 gap-[20px]">
          <div class="w-[300px] bg-red text-black p-[14px] text-center text-white rounded-[8%]">1</div>
          <div class="w-[300px] bg-blue text-black p-[14px] text-center text-white rounded-[8%]">2</div>
          <div class="flex-1 bg-green text-black p-[14px] text-center text-white rounded-[8%]">3</div>
        </div>
      </div>
    </main>
    <footer class="bg-[#b5b3b3]  text-center h-[50px] text-white p-4">Footer</footer>
  </div>
</template>

<script setup lang="ts">
</script>
