import styled from 'styled-components'

export const LoginMain = styled.main`
width: 90%;
margin: 0 auto;
display: flex;
flex-flow: column nowrap;
gap: 25px;
justify-content: center;
align-items: center;
max-width: 500px;
padding: 10px;
height: 600px;
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
    border: 1px solid var(--brown);
    width: 50%;
    padding: 10px;
    background-color: var(--green);
    border-radius: 4px;
    font-weight: bold;
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
a {
        text-decoration: none;
        color: black;
        font-size: smaller;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        background-color: white;
        width: 50%;
        padding: 10px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid var(--brown)
    }

  
`