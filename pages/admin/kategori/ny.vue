<script setup lang="ts">
const router = useRouter();
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

})
const name = ref('');
const error = ref('');
const newCategoryHandler = async () => {
  if(name.value === "") {
    const getName = document.getElementById("name-container");
    if (!getName) return;
    error.value = "Du må oppgi et navn";
    (getName.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
    (getName.children[1] as HTMLLabelElement).style.color = "#ff0000";
    return;
  }

  const res = await fetch('/api/categories/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value
    })
  });

  const data = await res.json();
  if(data) {
    if(data.error) {
      error.value = data.error;
      const getName = document.getElementById("name-container");
      if (!getName) return;
      (getName.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
      (getName.children[1] as HTMLLabelElement).style.color = "#ff0000";
    } else if(data.success) {
      router.push('/');
    }
  }
}

</script>

<template>
  <form class="singlePageForm" method="POST" @submit.prevent="newCategoryHandler">
    <div class="form-container">
      <div class="label-container" id="name-container">
        <input v-model="name" type="text" name="name" id="name" class="name" placeholder=" ">
        <label for="name">Navn</label>
      </div>
      <p v-if="error" style="color: #ff0000">{{ error }}</p>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import url('../../../assets/css/form.scss')
</style>