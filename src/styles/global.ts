import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size:16px;
  @media (max-width: 880px) {
    font-size:12px;
  }
}

.root {
  --title-color:#000080;
  --text-color:#585858;
}

body {
  background:#f0f5f7;
  -webkit-font-smoothing: antialiased;
  color: var(--text-color);
  min-height:100vh;

}

body, input, button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  outline:none;
}

h1, h2, h3, h4, h5, h6,p,a,span,select,label {
  color: var(--title-color);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}




`;

export default GlobalStyle;
