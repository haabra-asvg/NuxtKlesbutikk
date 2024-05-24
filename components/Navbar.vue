<script setup lang="ts">

const nuxtApp = useNuxtApp();
const loggedIn = ref(false);

const token = useCookie('token');
if (token.value) {
  loggedIn.value = true;
}

</script>

<template>

  <nav>
    <div class="left-container">
      <div class="logo">
        <p>SDUFH</p>
      </div>
    </div>
    <div class="center-container">
      <ul>
        <li>
          <RouterLink to="/prosjekter">Prosjekter</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Skibidi</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Toilet</RouterLink>
        </li>
      </ul>
    </div>
    <div class="right-container" id="right-container">
      <ul v-if="loggedIn">
        <li>
          <RouterLink to="/handlekurv">
            <QIcon name="shopping_cart" color="black" size="md" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/bruker">Bruker</RouterLink>
        </li>
      </ul>
      <ul v-else>
        <li>
          <RouterLink to="/logg-inn">Logg inn</RouterLink>
        </li>
        <li>
          <RouterLink to="/registrer">Registrer</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f1f1f1;
  padding: 15px 0;

  .left-container {
    padding-left: 30px;
    p {
      font-size: 18px;
      margin: 0;
    }
  }

  .right-container {
    padding-right: 30px;
  }

  div {
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      gap: 2rem;
      align-items: center;

      li {
        transition: all 0.25s ease-in-out;
        font-size: 18px;

        &:hover {
          transform: scale(1.2);
        }

        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
}
</style>