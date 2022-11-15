import './style.css';
import { signOut } from '../functions/supabase.js';

export const Header = (props) => {
  const { session } = props;

  let userContent = `
    <nav>
      <a href="/register">Registrovat</a>
      <a href="/login">Přihlásit</a>
    </nav>
  `;

  if (session) {
    userContent = `<div>${session.user.email}<button class="btn-logout">Odhlásit</button></div>`;
  }

  const element = document.createElement('header');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        ${userContent}
      </div>
    </div>
  `;

  const logoutButton = element.querySelector('.btn-logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      signOut().then((response) => {
        if (!response.error) {
          window.location.href = '/login';
        }
      });
    });
  }

  return element;
};
