<template>
  <!-- Main Body -->
  <div class="mainBody">
    <!-- Header -->
    <div
      class="mainBodyHeader text-[#1bb193] flex flex-col justify-center items-center"
    >
      <h1 class="font-breeSerif sm:text-xl md:text-5xl lg:text-5xl">
        Ideal Body Weight Calculator
      </h1>
      <p class="font-bitter my-6 sm:text-[8px] md:text-xl lg:text-xl">
        Өөрийн жингээ байнгын хянахыг хүсвэл нэвтрээрэй
      </p>
    </div>
    <!-- Body -->
    <div class="mainBodyMain flex my-6">
      <!-- gender -->
      <div
        class="ml-16 border rounded-xl flex flex-col justify-center items-center text-[20px] text-[#37474f]"
      >
        <h4 class="font-bold my-3">Таны хүйс?</h4>
        <div class="flex">
          <div class="male flex flex-col justify-center items-center mx-3">
            <img
              class="w-20 h-20 mb-3"
              src="https://assets.yazio.com/frontend/images/icons.svg#icon-male"
              alt=""
            />
            <button class="mb-4 rounded-[20px] bg-[#f1f1f1] py-2 px-14">
              Эр
            </button>
          </div>
          <div class="female flex flex-col justify-center items-center mx-3">
            <img
              class="w-20 h-20 mb-3"
              src="https://assets.yazio.com/frontend/images/icons.svg#icon-female"
              alt=""
            />
            <button class="mb-4 rounded-[20px] bg-[#f1f1f1] py-2 px-14">
              Эм
            </button>
          </div>
        </div>
      </div>
      <!-- Jin -->
      <div
        class="ml-16 border rounded-xl flex flex-col justify-center items-center text-[20px] text-[#37474f]"
      >
      <h1 class="mx-16 font-bold">Таны нас хэд вэ?</h1>
      <input type="text" placeholder="Жин">
      <label for="">Жин</label>
    </div>
      <div></div>
    </div>
  </div>
</template>
