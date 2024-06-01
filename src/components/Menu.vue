<template>
  <div class="banner">
    <div class="menu-left">Accueil</div>
    <h1 class="title">WebStore</h1>
    <div class="menu-right">
      <button class="menu-button" @click="logout">Déconnexion</button>
    </div>
  </div>
</template>



<style scoped>
.banner {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-left {
  flex: 1;
  text-align: left;
  font-size: 16px;
}

.title {
  color: #000000; 
  font-size: 24px;
  margin: 0;
  flex: 1;
  text-align: center;
}

.menu-right {
  flex: 1;
  text-align: right;
}

.menu-button {
  background-color: #4CAF50; /* Vert */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
}

.menu-button:hover {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
}
</style>
