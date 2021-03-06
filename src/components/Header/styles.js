import styled from 'styled-components'

export const HeaderStyle = styled.header`
width: 100%;
display: flex;
justify-content: space-around;
background-color: var(--green);
color: var(--brown);
position: ${(props) =>props.headerInfo === true ? 'fixed' : 'relative'};
top: 0;
border-bottom: 1px solid var(--brown);
z-index: 1;


.banner {
    width: 20%;
    align-self: flex-start;
    min-width: 200px;
    cursor: pointer;
    max-width: 300px;

}

h1 {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  
}

ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 56%;

}
ul>li {
    text-align: center;
    font-weight: bold;
    padding: 20px;
}

.nav>li:hover {
    cursor: pointer;
    color: white;
}

section {
    width: 18%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;

    gap: 25px;
    order: 1;
}

a{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--brown);
    cursor: pointer;
}

a:hover {
    color: white;
}
a:visited {
    text-decoration: none;
    color: inherit;
}
.cart {
    position: relative;
    cursor: pointer;
}

.cart:hover .cartIcon {
    color: white;
}
.cartPreview:hover {
    cursor: default;
}
.itensFlying {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding-right: 1px;
    padding-top: 2px;
    font-weight: bold;
    color: white;

}


.cartPreview {
    position: absolute;
    bottom: -400px;
    left: -270px;
    width: 320px;
    height: 380px;
    background-color: var(--darkGreen);
    z-index: 3;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    border-radius: 4px;
    padding: 10px 0 10px 0;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-top: 2px solid black;
}


.cartPreview>ul {
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll ;
    height: 100%;
    gap: 10px;
    padding: 10px;
}

.cartPreview>ul>li {
    min-height: 80px;
    background-color: white;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px;
    gap: 5px;
    border:1px solid var(--brown);

}
.cartPreview>ul>li>button {
    position: absolute;
    top: 8px;
    right: 0;
    border: none;
    background-color: white;
    
    
    
}
.cartPreview>ul>li>button:hover {
    color: red;
}
.cartImg {
    width: 50px;
}
.cartPreview>ul>li>h3 {
    font-size: 12px;
    width: 50%;
}
.cartPreview>ul>li>div {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
}
.cartPreview>ul>li>div>span {
    font-size: 10px;
    font-weight: bold;
    width: 40px;
}
.cartPreview>ul>li>div>div>p {
    font-size: 10px;
    font-weight: bold;
}
.cartPreview>ul>li>div>div>input {
    width: 35px;

}
.total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15.5px 0 10px;
}
.total>button {
    width: 52%;
    border: 1px solid var(--brown);
    background-color: var(--green);
    height: 100%;
    min-height: 25px;
    font-weight: bold;
    font-size: 15px;
    border-radius: 4px;
}
.total>button:hover {
    filter: brightness(120%);
}
.totalCart {
    width: 50%;
}

.user {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
}


.arrow {
    position: absolute;
  
    top: -27px;
    right: 15px;
    width: 0;
    height: 0;
     border: 15px solid transparent;
    border-top: 0;
    border-bottom: 30px solid var(--darkGreen);

}

.cartPreview>ul {
    scrollbar-width: auto;
    scrollbar-color: var(--brown) #ffffff;
  }

 
  .cartPreview>ul::-webkit-scrollbar {
    width: 7px;
  }

  .cartPreview>ul::-webkit-scrollbar-track {
    background: var(--darkGreen);
  }

  .cartPreview>ul::-webkit-scrollbar-thumb {
    background-color: var(--brown);
    border-radius: 10px;
    border: 0 solid #ffffff;
  }


  @media (max-width: 1000px) {
      & {
          flex-flow: row wrap;
          justify-content: space-around;
          width: 100vw;
      }
      ul {
          flex-flow: row wrap;
          gap: 0;
          justify-content: center;
          align-items: center;
          margin: 0;
          width: 100%;
      }
      img {
        align-self:center ;
        margin: 0;
      }

      section {
         order: 0;
        width: 20%;
        flex-flow: column-reverse nowrap;
        gap: 8px;

      }

      ul>li {
          padding: 10px;
          font-size: 12px;
      }
  }
`