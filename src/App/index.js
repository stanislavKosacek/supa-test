import { Header } from '../Header/index.js';
import { HomePage } from '../HomePage/index.js';
import { LoginPage } from '../LoginPage/index.js';
import { RegisterPage } from '../RegisterPage/index.js';
import { getSession } from '../functions/supabase.js';

export const App = (props) => {
  let { session } = props;

  const element = document.createElement('div');

  if (session === undefined) {
    getSession().then((response) => {
      element.replaceWith(
        App({
          session: response.data.session || null,
        }),
      );
    });
  } else {
    element.classList.add('app');
    element.append(Header({ session: session }));
    const { pathname } = window.location;
    if (pathname === '/') {
      element.append(HomePage({ session: session }));
    } else if (pathname === '/login') {
      element.append(LoginPage({ session: session }));
    } else if (pathname === '/register') {
      element.append(RegisterPage({ session: session }));
    }
  }

  return element;
};
