<template>
  <header class="header">
    <div class="header__container container">
      <div class="logo">
        <img
          src="../assets/logo.png"
          class="logo__img"
          alt="logo"
          width="50"
          height="50"
        />
        <p class="logo__text">Simon The Game</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header__container {
  height: 70px;
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo__text {
  margin-left: 5px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
