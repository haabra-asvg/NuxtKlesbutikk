<script setup lang="ts">

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const error = ref('');


  const registerHandler = async () => {
    error.value = "";
    const res = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        repeat_password: repeatPassword.value
      })
    });

    const data = await res.json();
    if(data.error) {
      const getName = document.getElementById("name-container");
      const getEmail = document.getElementById("email-container");
      const getPassword = document.getElementById("password-container");
      const getRepeatPassword = document.getElementById("repeat-password-container");
      if(!getName) return;
      if(!getEmail) return;
      if(!getPassword) return;
      if(!getRepeatPassword) return;
      if(data.error === "Passwords do not match") {
        (getName.children[0] as HTMLInputElement).style.borderColor = "";
        (getName.children[1] as HTMLLabelElement).style.color = "";
        (getEmail.children[0] as HTMLInputElement).style.borderColor = "";
        (getEmail.children[1] as HTMLLabelElement).style.color = "";
        (getPassword.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
        (getPassword.children[1] as HTMLLabelElement).style.color = "#ff0000";
        (getRepeatPassword.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
        (getRepeatPassword.children[1] as HTMLLabelElement).style.color = "#ff0000";
        error.value = "Passordene er ikke like";
      } else if(data.error === "Email already exists") {
        (getName.children[0] as HTMLInputElement).style.borderColor = "";
        (getName.children[1] as HTMLLabelElement).style.color = "";
        (getEmail.children[0] as HTMLInputElement).style.borderColor = "#ff0000";
        (getEmail.children[1] as HTMLLabelElement).style.color = "#ff0000";
        (getPassword.children[0] as HTMLInputElement).style.borderColor = "";
        (getPassword.children[1] as HTMLLabelElement).style.color = "";
        (getRepeatPassword.children[0] as HTMLInputElement).style.borderColor = "";
        (getRepeatPassword.children[1] as HTMLLabelElement).style.color = "";
        error.value = "E-posten eksisterer allerede";
      } else {
        error.value = "Noe gikk galt";
      }
    } else if (data.success) {
      if(data.success === "User created successfully") {
        window.location.href = "/logg-inn";
      }
    }
  }
</script>

<template>

  <form class="singlePageForm" @submit.prevent="registerHandler" method="POST">
    <div class="form-container">
      <div class="label-container" id="name-container">
        <input v-model="name" type="text" name="name" class="name" id="name" placeholder=" ">
        <label for="name">Navn</label>
      </div>
      <div class="label-container" id="email-container">
        <input v-model="email" type="email" name="email" id="email" class="email" placeholder=" ">
        <label for="email">E-post</label>
      </div>
      <div class="label-container" id="password-container">
        <input v-model="password" type="password" name="password" id="password" class="password" placeholder=" ">
        <label for="password">Passord</label>
      </div>
      <div class="label-container" id="repeat-password-container">
        <input v-model="repeatPassword" type="password" name="repeat_password" id="repeat_password" class="repeat_password" placeholder=" ">
        <label for="repeat_password">Gjenta Passord</label>
      </div>
      <p v-if="error" style="margin-bottom: 20px;">{{ error }}</p>
      <button type="submit">Submit</button>
    </div>
  </form>

</template>

<style scoped lang="scss">
@import url('../assets/css/form.scss');
</style>