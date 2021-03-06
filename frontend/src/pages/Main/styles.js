import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 22px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }
    }

    li > span:first-child {
        width: 200px;
    }

    a {
        color: #9c1d24;
    }
`;

export const Header = styled.span`
    font-size: 18px;
    font-weight: bold;

    & + span {
        padding: 15px 0;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Language = styled.span`
    font-size: 18px;
    font-weight: 300;
    min-width: 200px;
`;

export const Quantity = styled.span`
    font-size: 16px;
    font-weight: 300;
    text-align: center;
`;
