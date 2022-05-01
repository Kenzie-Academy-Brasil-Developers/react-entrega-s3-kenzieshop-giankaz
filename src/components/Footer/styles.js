import styled from 'styled-components'

export const FooterStyled = styled.footer`
width: 100%;
background-color: var(--green);
position: relative;
border-top: 1px solid var(--brown);
font-size: 10px;
padding: 5px;

ul {
    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 90%;;
}

li{
    width: 33%;
}
h3 {
    font-weight: bold;
}

`