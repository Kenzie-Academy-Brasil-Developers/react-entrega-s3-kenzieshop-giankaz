import styled from 'styled-components'

export const FooterStyled = styled.footer`
width: 100%;
background-color: var(--green);
position: relative;
min-height: 10vh;
border-top: 1px solid var(--brown);

ul {
    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;
}

li{
    width: 33%;
}
h3 {
    font-weight: bold;
}

@media (max-width: 720px) {

}

`