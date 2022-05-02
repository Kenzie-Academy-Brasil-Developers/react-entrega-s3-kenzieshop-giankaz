import styled from 'styled-components'


export const PaymentMain = styled.main`
    width: 100%;
    max-width: 980px;
    margin: 50px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
   
    

 
 img {
     width: 30%;
   max-width: 150px;
 }
 ul {
    width: 100%;
     display: flex;
     flex-flow: column nowrap;
     gap: 10px
 }
 li {
     width: 680px;
     display: flex;
     background-color: white;
     justify-content: center;
     align-items: center;
     padding: 10px 20px;
     border-radius: 4px;
     border: 1px solid var(--brown);
     gap: 20px;
     height: 190px;
 }

 h3 {
     width: 40%;
     font-weight: bold;
 }
 
    .trash {
        width: 30px;
        height: 30px;
        border: none;
        background-color: transparent;
        align-self: flex-start;
    } 
    .trash:hover {
        color: red;
    }
    .paymentOptions {
      width: 20%;
      display: flex;
      flex-flow: column nowrap;
      gap: 25px;
      align-items: center;
      text-align: center;
    }
    .paymentOptions>span {
        height: 40px;
    }
    .total {
        width: 200px;
        max-height: 170px;
        background-color: white;
        padding: 20px;
        border-radius: 4px;
        border: 1px solid var(--brown);
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .total>button {
        padding: 10px;
        border: 1px solid var(--brown);
        background-color: var(--green);
        border-radius: 4px;
        font-weight: bold;
    }

    .total>button:hover {
        background-color: var(--darkGreen);
    }

    @media (max-width: 913px) {
        .total {
            text-align: center;
            order: -1;
        }
        h3, span, .total {
      font-size:calc(12px + 1.5vw)
           }
           li {
               width: 600px;
          
           }
        }
    

    @media (max-width: 600px) {
        ul {
            align-items: center;
        }
        li {
            flex-flow: column nowrap;
            width: 200px;
            position: relative;
            padding: 5px;
            text-align: center;
            gap: 10px;
            height: auto;
        }
        h3 {
            width: 100%;
        }
        .trash {
            position: absolute;
            right: 1%;
            top: 1%;
        }
        .paymentOptions {
            width: 100%;
            gap: 10px;
        
        }
    }
`