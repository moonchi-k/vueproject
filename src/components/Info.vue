<template>
  <div class="p-4">
    <Header />
    <h1 class="text-2xl font-bold mb-4">국립세종도서관 사서추천도서</h1>

    <DataTable
      :value="books"
      :loading="loading"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      tableStyle="min-width: 50rem"
      class="p-datatable-striped"
    >
      <Column field="title" header="도서명" sortable></Column>
      <Column field="creator" header="책임자" sortable></Column>
      <Column field="description" header="설명"></Column>
      <template #loading> 데이터를 로딩 중입니다... </template>
      <template #empty> 표시할 데이터가 없습니다. </template>
    </DataTable>

    <div class="mt-4 flex justify-between items-center">
      <Button @click="loadMore" :disabled="loading" severity="secondary">
        더보기
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./Header.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

const books = ref([]);
const loading = ref(false);
const pageNo = ref(1);

const fetchBooks = async (isLoadMore = false) => {
  loading.value = true;
  const serviceKey = "ecff2390-1eb6-473f-84c7-e2e0058b5fce";
  const url = `http://api.kcisa.kr/openapi/service/rest/meta13/getNLSF0401?serviceKey=${serviceKey}&numOfRows=10&pageNo=${pageNo.value}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");

    const items = xmlDoc.querySelectorAll("item");
    const fetchedBooks = [];

    items.forEach((item) => {
      const title = item.querySelector("title")
        ? item.querySelector("title").textContent
        : "제목 없음";

      const creator = item.querySelector("creator")
        ? item.querySelector("creator").textContent
        : "정보 없음";

      const description = item.querySelector("description")
        ? item.querySelector("description").textContent
        : "내용 없음";

      fetchedBooks.push({ title, creator, description });
    });

    if (isLoadMore) {
      books.value = [...books.value, ...fetchedBooks];
    } else {
      books.value = fetchedBooks;
    }
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  pageNo.value++;
  fetchBooks(true);
};

onMounted(() => {
  fetchBooks(false);
});
</script>
