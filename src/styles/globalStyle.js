import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, .App {
    font-family: 'Rubik', sans-serif;
    background-color: var(--grey);


}
.App {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: space-between;
}

button {
    cursor: pointer;
    
}



:root {
    --green: #B5E61D;
    --brown: #433F3D;
    --darkGreen: #94bd15;
    --grey: #dfdfdf;

}



footer {
	position: fixed;
	bottom: 0;
}


* {
    scrollbar-width: auto;
    scrollbar-color: var(--brown) #ffffff;
  }

 
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: white;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--brown);
    border-radius: 10px;
    border: 0 solid #ffffff;
  }







/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



 `