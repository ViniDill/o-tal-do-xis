import styled from "styled-components";

export const Container = styled.div`
    .form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        

        .OrdinaryInput {
            width: 250px;
            height: 30px;
        }

        .Submit {
            width: 250px;
            height: 50px;
            color: #b2b2b2;
            border: none;
            cursor: pointer;
            background-color: #000000;
            &:hover {
                background-color: #262a2d;
                color: #cccccc;
            }
            &:active {
                background-color: #4d555a;
                color: #e5e5e5;
            }
        }
    }
`