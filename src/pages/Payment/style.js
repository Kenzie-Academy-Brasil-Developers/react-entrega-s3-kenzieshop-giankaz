import styled from 'styled-components'


export const PaymentMain = styled.main`
    width: 100%;
    max-width: 980px;
    margin: 120px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
    height: 82vh;
 
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
     max-width: 680px;
     display: flex;
     background-color: white;
     justify-content: space-between;
     align-items: center;
     padding: 10px 20px;
     border-radius: 4px;
     border: 1px solid var(--brown);
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

    @media (max-width: 913px) {
        .total {
            order: -1;
            text-align: center;
        }
        h3, span, .total {
      font-size:calc(12px + 1.5vw)
           }
    }
`