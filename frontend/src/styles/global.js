// Arquivo de configurações globais e reset de css

import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'); */

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #9c1d24;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font: 14px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
`;