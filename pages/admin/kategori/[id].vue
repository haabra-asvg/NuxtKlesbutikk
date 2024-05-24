<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();

const refId = ref<number>();
const name = ref('');
const email = ref('');
const error = ref('');

const route = useRoute();
onMounted(async () => {
  const id = Number(route.params.id);
  const user = await $fetch(`/api/users/${id}`);
  if (user) {
    if (user.hasOwnProperty('error')) {
      router.push('/logg-inn');
    } else {
      if (('id' in user)) {
        refId.value = user.id;
        if(user.name !== null) {
          name.value = user.name;
        }
        email.value = user.email;
        if(user.rolesId !== null) {
          (document.getElementById("select") as HTMLSelectElement).value = user.rolesId.toString();
        }
      }
    }
  }
})

const submitHandler = () => {
  
}

</script>

<template>
  <form @submit.prevent="submitHandler" class="singlePageForm" method="POST">
    <div class="form-container">
      <div class="label-container" id="id-container">
        <input v-model="refId" type="number" name="id" placeholder=" " readonly>
        <label for="id">ID</label>
      </div>
      <div class="label-container" id="name-container">
        <input v-model="name" type="text" name="name" placeholder=" ">
        <label>Name</label>
      </div>
      <div class="label-container" id="email-container">
        <input v-model="email" type="email" name="email" placeholder=" ">
        <label>Email</label>
      </div>
      <select name="select" id="select">
        <option value="velg">Velg en rolle</option>
        <option value="1">Bruker</option>
        <option value="2">Ansatt</option>
        <option value="3">Varehus</option>
        <option value="4">Administrator</option>
      </select>
      <button type="submit">Submit</button>
      <p>{{ error }}</p>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import url('../../../assets/css/form.scss');
select {
  margin-bottom: 20px;
}
</style>