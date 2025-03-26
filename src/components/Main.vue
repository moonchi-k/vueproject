<template>
  <div class="container mx-auto">
    <Header />

    <section class="py-16 sm:py-16 md:py-16 text-center">
      <div class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        언제 어디서나
      </div>
      <div class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        내가 원하는 책과 함께
      </div>
      <div class="text-sm sm:text-base md:text-lg text-gray-700 px-4 sm:px-8">
        애정하는 전자책부터 당신의 마음을 사로잡게 될 전자책까지, 모두
        ALLBOOKS에서 즐겨보세요.
      </div>
      <div class="text-sm sm:text-base md:text-lg text-gray-700 px-4 sm:px-8">
        엄선된 다양한 모음을 둘러보고, 당신의 취향에 꼭 맞는 추천 도서도
        만나보세요.
      </div>
      <div
        class="text-sm sm:text-base md:text-lg text-gray-700 px-4 sm:px-8 mb-8"
      >
        직접 고른 책을 최대 5명의 가족 구성원과 공유할 수 있습니다.
      </div>

      <Modal />
    </section>

    <section class="py-16">
      <div class="grid md:grid-rows-3 gap-8">
        <div
          class="flex flex-col sm:flex-row mx-auto justify-start items-center"
        >
          <div class="mb-4">
            <img
              src="../imgs/headphone.jpg"
              alt="headphone"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <div class="text-center">
            <div class="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              들으면서 읽는 독서
            </div>
            <div class="text-sm md:text-base text-gray-600">
              전자책을 읽으면서 고퀄리티 오디오북을 동시에 즐길 수 있어요.
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row mx-auto justify-start items-center"
        >
          <div class="mb-4">
            <img
              src="../imgs/record.jpg"
              alt="record"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <div class="text-center">
            <div class="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              다양한 디바이스 지원
            </div>
            <div class="text-sm md:text-base text-gray-600">
              여러 개의 디바이스와 연결해서 편하게 재생할 수 있어요.
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row mx-auto justify-start items-center"
        >
          <div class="mb-4">
            <img
              src="../imgs/landscape.jpg"
              alt="landscape"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <div class="text-center">
            <div class="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              오프라인 환경 지원
            </div>

            <div class="text-sm md:text-base text-gray-600">
              다운로드한 콘텐츠를 어디에서나 인터넷 연결 없이 이용할 수 있어요.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        <span class="text-orange-500">올북스</span>와 함께 최신 도서 무제한
        즐기리!
      </div>
      <div class="flex-row">
        <div
          class="text-right cursor-pointer hover:text-orange-500"
          @click="gotoInfo"
        >
          모두보기
        </div>
        <div class="cover-slider mt-12 mb-12">
          <div class="client-slider">
            <div class="client-slide-track">
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/13137546/XL"
                  height="100"
                  width="100"
                  alt="소년이온다"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/57958672/XL"
                  height="100"
                  width="100"
                  alt="아주사소한것들"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/101386125/XL"
                  height="100"
                  width="100"
                  alt="돈의심리학"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/76149026/XL"
                  height="100"
                  width="100"
                  alt="와일드로봇"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/105526047/XL"
                  height="100"
                  width="100"
                  alt=""
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/Goods/125199008/XL"
                  height="100"
                  width="100"
                  alt=""
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/122120495/L"
                  height="100"
                  width="100"
                  alt="물고기는존재하지않는다"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/Goods/74394249/M"
                  height="100"
                  width="100"
                  alt="생각중독"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/8759796/XL"
                  height="100"
                  width="100"
                  alt="마흔에읽는쇼펜하우어"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/96568463/xl"
                  height="100"
                  width="100"
                  alt="가재가노래하는곳"
                />
              </div>
              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/140103896/XL"
                  height="100"
                  width="100"
                  alt="모순"
                />
              </div>

              <div class="client-slide">
                <img
                  src="https://image.yes24.com/goods/114252630/XL"
                  height="100"
                  width="100"
                  alt="생각하라 그리고부자가되어라"
                />
              </div>

              <div class="client-slide">
                <img
                  src="https://image.yes24.com/momo/TopCate89/MidCate02/8817691.jpg"
                  height="100"
                  width="100"
                  alt="말하기수업"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 text-center bg-gray-50">
      <div class="flex flex-row mx-auto justify-evenly">
        <div>
          <div
            class="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-orange-500"
          >
            NEWS LETTER
          </div>
          <div class="text-lg sm:text-xl md:text-2xl mb-8">
            매일 아침, 새로운 영감들이 메일로 발송됩니다.
          </div>
          <button
            class="min-w-48 bg-orange-400 text-gray-50 p-1 sm:p-3 rounded-md hover:bg-orange-600"
          >
            구독하기
          </button>
        </div>
      </div>
    </section>
  </div>

  <footer class="p-10 text-gray-200 font-thin text-center">Copyright</footer>
</template>

<script setup>
import { ref } from "vue";
import "../index.css";
import { Dialog, InputText, Button } from "primevue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import Modal from "./Modal.vue";

const router = useRouter();

const gotoInfo = () => {
  router.push("/info");
};

const visible = ref(false);

const dialogStyle = {
  width: "25rem", // Dialog 너비
  backgroundColor: "#ffffff", // 배경 색상
  padding: "2rem", // 내부 여백
  borderRadius: "1rem", // 둥근 모서리
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 그림자
};
</script>

<style>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.mb-4 img {
  display: block;
  width: 300px;
  height: 300px;
}
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 4));
    transform: translateX(calc(-250px * 4));
  }
}
.client-slider {
  background: white;
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  height: 160px;
  /* margin: auto; */
  overflow: hidden;
  position: relative;
}
.client-slider::before,
.client-slider::after {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(white),
    to(rgba(255, 255, 255, 0))
  );
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 160px;
  position: absolute;
  width: 110px;
  z-index: 2;
}
.client-slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}
.client-slider::before {
  left: 0;
  top: 0;
}
.client-slider .client-slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 20s linear infinite;
  display: -webkit-box;
  display: flex;
  width: calc(250px * 14);
}

.client-slider .client-slide {
  height: 100px;
  width: 180px;
}
</style>
