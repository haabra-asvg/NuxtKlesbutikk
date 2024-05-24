<script setup lang="ts">

const router = useRouter();

onMounted(async () => {
  const token = useCookie('token');
  const loggedIn = ref();
  if (token.value) {
    loggedIn.value = true;
  }

  const getUser = await $fetch('/api/users/checkEmployee');
  if(!getUser) {
    router.push('/logg-inn');
  }
})
</script>

<template>

</template>

<style scoped lang="scss"></style>