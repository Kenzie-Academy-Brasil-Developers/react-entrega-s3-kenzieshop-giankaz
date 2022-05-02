import styled from 'styled-components'



export const RegisterMain = styled.main`
width: 100%;
max-width: 500px;
margin: 0 auto;
height: 600px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
gap: 25px;

form {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 25px;
    align-items: center;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--brown);
    border-radius: 4px;
    color: var(--green)
}
input:focus {
    outline: none;
    border: 1px solid var(--green);
}

button {
    padding: 10px;
    width: 50%;
    border: 1px solid var(--brown);
    background-color: var(--green);
    border-radius: 5px;
}

button:hover {
    background-color: var(--darkGreen);
}

h2 {
    font-size: 25px;
    font-weight: bold;
}
h2>span {
    color: var(--darkGreen)
}

button {
    font-weight: bold;
}
`