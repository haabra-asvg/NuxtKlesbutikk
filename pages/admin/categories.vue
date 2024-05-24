<script setup lang="ts">

const router = useRouter();
const getCategories = ref();

onMounted(async () => {
  const token = useCookie('token');
  const loggedIn = ref();
  if (token.value) {
    loggedIn.value = true;
  }

  const getUser = await $fetch('/api/users/checkAdmin');
  if(!getUser) {
    router.push('/logg-inn');
  }

  const categories = await $fetch('/api/categories/get');
  getCategories.value = categories;
})

</script>

<template>
  <table class="singlePageTable striped small">
    <thead>
      <tr>
        <th>#</th>
        <th>Navn</th>
        <th>CRUD</th>
      </tr>
    </thead>
    <tbody>
      <Categories v-for="category in getCategories" :id="category.id" :name="category.name" />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@import url('../../assets/css/table.scss')
</style>