import React from "react";

function Login() {
  return (
    <div class="container">
      <div class="signin-signup">
        <form action="" class="sign-in-form" id="formLogin">
          <h2 class="title">Login</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            {/* <input type="email" required placeholder="Email" id="loginEmail"> */}
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            {/* <input type="password" required placeholder="Senha" id="loginSenha"> */}
          </div>
          {/* <input type="submit" value="Login" class="btn"> */}
          <p class="social-text">Ou</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p class="account-text">
            Não possui conta?{" "}
            <a href="#" id="sign-up-btn2">
              Cadastre-se
            </a>
          </p>
        </form>
        <form action="" class="sign-up-form" id="formsRegistrado">
          <h2 class="title">Cadastro</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            {/* <input type="text" required placeholder="Nome de Usuário" id="usuario"> */}
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            {/* <input type="text" required placeholder="Email" id="email"> */}
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            {/* <input type="password" required placeholder="Senha" id="senha"> */}
          </div>
          {/* <input type="submit" value="Sign up" class="btn"> */}
          <p class="social-text">Ou</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p class="account-text">
            Já possui uma conta?{" "}
            <a href="#" id="sign-in-btn2">
              Login
            </a>
          </p>
        </form>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Já possui uma conta?</h3>
            <p>
              Que bom vê-lo novamente por aqui. Esperamos que aproveite ao
              máximo sua experiência!
            </p>
            <button class="btn" id="sign-in-btn">
              Login
            </button>
          </div>
          {/* <img src="../img/login.svg" alt="" class="image"> */}
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Ainda não possui uma conta?</h3>
            <p>
              Descubra tudo o que oferecemos. Crie sua conta agora e aproveite
              benefícios exclusivos!
            </p>
            <button class="btn" id="sign-up-btn">
              Cadastre-se
            </button>
          </div>
          {/* <img src="../img/cadastro.svg" alt="" class="image"> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
