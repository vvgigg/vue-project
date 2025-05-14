<template>
  <div class="login-container">
    <form action="" method="get" class="form-login-wrap">
      <h1 class="topic-login">Login</h1>
      <div class="form-login">
        <input type="text" placeholder="Username" id="username" name="username" required />
      </div>

      <div class="form-login">
        <input type="password" placeholder="Password" id="password" name="password" required />
      </div>

      <div class="form-login">
        <input type="submit" id="submit" value="Login" />
      </div>
    </form>
  </div>
</template>

<script setup>
console.log("Login loaded")
</script>

<style>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
  .form-login-wrap {
    padding: 0.5em;
  }
  .topic-login {
    margin-top: 2%;
    margin-bottom: 1.5%;
    color: #560abb;
    padding: 0.5em;
  }
  .form-login {
    padding: 0.5em;
  }
  #username {
      width: 100%;
      max-width: 400px;
      padding: 1em;
      border-radius: 20px;
      border: 1px solid #ccc;
    }
  #password {
      width: 100%;
      max-width: 400px;
      padding: 1em;
      border-radius: 20px;
      border: 1px solid #ccc;
    }
  #submit {
      margin-top: 1.5%;
      width: 100%;
      max-width: 400px;
      padding: 1em;
      border-radius: 20px;
      border: 1px solid #560abb;
      background-color: #7723ca;
      color: white;
      cursor: pointer;
    }
</style>
