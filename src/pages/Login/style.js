import styled from 'styled-components'

export const LoginMain = styled.main`
width: 90%;
margin: 150px auto;
display: flex;
justify-content: center;
align-items: center;
max-width: 500px;
padding: 10px;
form {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
    align-items: center;
    justify-content: center;
}

input {
    width: 90%;
    border: none;
    padding: 10px;
    border-radius: 4px;
    color: var(--green);
    border: 1px solid var(--brown);
}


input:focus {
    outline: none;
    border: 1px solid var(--green)
}

button {
    border: none;
    width: 50%;
    padding: 10px;
    background-color: var(--green);
    border-radius: 4px;
    font-weight: bold;
}
button:hover {
    background-color: var(--darkGreen);
}
`