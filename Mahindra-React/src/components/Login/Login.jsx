import React, { useState } from 'react';
import './login.css';
import iconeCadastro from "../../assets/cadastro.svg";
import iconeLogin from "../../assets/login.svg";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div
      id="login"
      className={`corpo container ${isSignUpMode ? "sign-up-mode" : ""}`}
    >
      <div className="signin-signup">
        <form
          className={`sign-in-form ${isSignUpMode ? "hidden" : ""}`}
          id="formLogin"
        >
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i class="fas fa-user"></i>
            <input type="email" required placeholder="Email" id="loginEmail" />
          </div>
          <div className="input-field">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              required
              placeholder="Senha"
              id="loginSenha"
            />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Ou</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Não possui conta?{" "}
            <a href="#" onClick={toggleSignUpMode} id="cadastro">
              Cadastre-se
            </a>
          </p>
        </form>

        <form
          className={`sign-up-form ${isSignUpMode ? "visible" : ""}`}
          id="formsRegistrado"
        >
          <h2 className="title">Cadastro</h2>
          <div className="input-field">
            <i class="fas fa-user"></i>
            <input
              type="text"
              required
              placeholder="Nome de Usuário"
              id="usuario"
            />
          </div>
          <div className="input-field">
            <i class="fas fa-envelope"></i>
            <input type="text" required placeholder="Email" id="email" />
          </div>
          <div className="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" required placeholder="Senha" id="senha" />
          </div>
          <input type="submit" value="Cadastrar" className="btn" />
          <p className="social-text">Ou</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Já possui uma conta?{" "}
            <a href="#" onClick={toggleSignUpMode}>
              Login
            </a>
          </p>
        </form>
      </div>

      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? "hidden" : ""}`}>
          <div className="content">
            <h3>Já possui uma conta?</h3>
            <p>
              Que bom vê-lo novamente por aqui. Esperamos que aproveite ao
              máximo sua experiência!
            </p>
            <button className="btn" onClick={toggleSignUpMode}>
              Login
            </button>
          </div>
          <img src={iconeLogin} alt="Login" className="image" />
        </div>
        <div className={`panel right-panel ${isSignUpMode ? "" : "hidden"}`}>
          <div className="content">
            <h3>Ainda não possui uma conta?</h3>
            <p>
              Descubra tudo o que oferecemos. Crie sua conta agora e aproveite
              benefícios exclusivos!
            </p>
            <button className="btn" onClick={toggleSignUpMode}>
              Cadastre-se
            </button>
          </div>
          <img src={iconeCadastro} alt="Cadastro" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
