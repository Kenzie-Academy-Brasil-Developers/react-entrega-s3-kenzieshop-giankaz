import styled from 'styled-components'



export const RegisterMain = styled.main`
width: 100%;
max-width: 500px;
margin: 30vh auto;

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
`