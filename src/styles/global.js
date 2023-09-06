import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`



*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    
}

:root{

    --color-primary: ${({theme}) => theme.COLORS.RED};
    --color-secondary:${({theme}) => theme.COLORS.BLUE};

    --color-white:${({theme}) => theme.COLORS.WHITE} ;

    --color-tomato-400:${({theme}) => theme.COLORS.Tomato_400} ;

    --color-gray-400: ${({theme}) => theme.COLORS.GRAY_400};
    --color-gray-500:  ${({theme}) => theme.COLORS.GRAY_500};
    
    --bg-color-900: ${({theme}) => theme.COLORS.BACKGROUND_900};
    --bg-color-800: ${({theme}) => theme.COLORS.BACKGROUND_800};
    --bg-color-700: ${({theme}) => theme.COLORS.BACKGROUND_700} ;
    --bg-color-300: ${({theme}) => theme.COLORS.BACKGROUND_300} ;
    --bg-gradient-500:${({theme}) => theme.COLORS.gradient_500};
    
}

body{
  
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
   
}

body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
}

h1,h2,h3,h4{
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}
span{
    font-family: "Roboto", sans-serif;
}
a{
    text-decoration: none;
    color:inherit;
}

button, a{
    cursor:pointer;
    transition: filter 0.2s;
}

ul{
    list-style: none;
}

button:hover, a:hover{
    filter: brightness(0.9);

}

::-webkit-scrollbar {
  width: .2rem;
  display: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:${({theme}) => theme.COLORS.BLUE};
  border-radius: 30rem;
}
`;