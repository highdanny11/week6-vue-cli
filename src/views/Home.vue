<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">商城</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" to="/CartsList">查看購物車</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/Login">登入後台</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
