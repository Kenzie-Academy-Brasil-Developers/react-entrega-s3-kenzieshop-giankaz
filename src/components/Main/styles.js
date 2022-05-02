import styled from 'styled-components'

export const MainStyle = styled.main`
width: 80%;
margin: 100px auto;


ul {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 10px;
    height: 100%;
    justify-content: center;
   align-items: center;
   color: var(--brown);

   
}

ul>li {
    width: 24%;
    min-width: 230px;
    max-width: 350px;
    background-color: var(--green);
    height: 50vh;
    min-height: 350px;
    display: flex;
    flex-flow: column nowrap;
padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
   box-shadow: -1px -1px 10px 0px rgba(0,0,0,0.41);
   border: 1px solid var(--brown)
    
}

ul>li:hover {   
    box-shadow: -1px -1px 15px 0px rgba(0,0,0,0.71);
}

ul>li>figure {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    min-height: 70%;
    border-radius: 8px;
   border: 1px solid var(--brown)

   
}
ul>li>div>p {
    padding: 2px 5px;
    align-self: flex-end;
    text-align: end;
    color: var(--brown);
    text-decoration: underline;
    border-radius: 4px;
    
}


ul>li>figure>img {
    width: 70%;
    max-width: 200px;
}
ul>li>div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}
ul>li>div>h3 {
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
    min-height: 35px;
}

ul>li>div>button {
    width: 100%;
    border: none;
    background-color: var(--darkGreen);
    min-height: 25px;
    font-weight: bold;
    font-size: 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
   border: 1px solid var(--brown)


}
button:hover {
    background-color: white;
    font-weight: bold;
}

@media (max-width: 900px) {
    &{
        width: 100%;
       
        margin: min(20vh, 400px) 0 0 0;   
 

    }
    ul {
    
       
      
        padding: 15px;
    }
    li {
     
    }

    & {
    scrollbar-width: auto;
    scrollbar-color: var(--green) #ffffff;
  }

 
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 10px;
    border: 0 solid #ffffff;
  }

}

`