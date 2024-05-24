<script setup lang="ts">
const email = ref('');
const password = ref('');
const error = ref('');

const loginHandler = async () => {
  error.value = "";
  const res = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();
  if (data.error) {
    const getEmail = document.getElementById("email-container");
    const getPassword = document.getElementById("password-container");
    if (!getEmail) return;
    if (!getPassword) return;
    if (data.error === "Invalid email or password") {
      (getEmail.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
      (getEmail.children[1] as HTMLLabelElement).style.color = "#ff0000";
      (getPassword.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
      (getPassword.children[1] as HTMLLabelElement).style.color = "#ff0000";
      error.value = "Ugyldig e-post eller passord";
    } else {
      error.value = "Noe gikk galt";
    }
  } else if (data.success) {
    if(data.success === "Logged in successfully") {
      window.location.href = "/";
    }
  }
}
</script>

<template>
  <form @submit.prevent="loginHandler" class="singlePageForm" method="POST">
    <div class="form-container">
      <div class="label-container" id="email-container">
        <input v-model="email" type="email" name="email" placeholder=" ">
        <label for="email">E-post</label>
      </div>
      <div class="label-container" id="password-container">
        <input v-model="password" type="password" name="password" placeholder=" ">
        <label>Passord</label>
      </div>
      <button type="submit">Logg inn</button>
      <p>{{ error }}</p>
    </div>
  </form>

</template>

<style scoped lang="scss">
@import url('../assets/css/form.scss');
</style>