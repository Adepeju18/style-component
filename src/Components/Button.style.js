import styled from 'styled-components'

export const Button = styled.button`
width: 200px;
height: 50px;
background-color: ${(props) => props.backgroundColor};
&:active {
    background-color: red;
}
&:hover {
    & label {
        color: pink;
    }
}
`;

export const ButtonLabel = styled.label`
font-size: 25px;
color: white;
`;