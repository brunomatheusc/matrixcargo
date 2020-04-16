import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    max-width: 900px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    a {
        text-decoration: none;
        color: #9d1c24;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

export const Language = styled.span`
    font-size: 24px;
    font-weight: bold;
`;

export const RepoList = styled.ul`
    border-top: 1px solid #eee;
    margin-top: 15px;

    li {
        display: flex;
        flex-direction: column;
        padding: 15px 0;

        & + li {
            border-top: 1px solid #eee;
        }
    }

`;

export const RepoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RepoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    svg {
        margin-right: 5px;
    }
`;

export const Owner = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #9d1c24;
`;

export const Name = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #9d1c24;
`;

export const RepoBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Desc = styled.p`
    padding: 10px 0;
    font-size: 14px;
    font-weight: 300;
`;

export const RepoTags = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Tag = styled.span`
    padding: 5px;
    border: 1px solid #9d1c24;
    border-radius: 10px;
    color: #9d1c24;
    background-color: rgba(157, 28, 36, 0.2);

    & + span {
        margin: 5px;
    }
`;

export const RepoFooter = styled.div`
    display: flex;

    svg {
        margin-right: 5px;
    }
`;

export const Text = styled.span`
    font-size: 14px;
    font-weight: 300;
    margin-right: 10px;    
    color: #6e6e6e;
`;

export const Pagination = styled.div`
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const GroupButton = styled.div`
    display: flex;
`;

export const PerPage = styled.select`
    height: 40px;
    padding: 0 5px;
    border-radius: 7px;
    min-width: 100px;
`;

export const Button = styled.button`
    height: 40px;
    padding: 0 5px;
    color: #fff;
    background-color: #9d1c24;
    border: 0;
    border-radius: 7px;
    min-width: 100px;
    margin-right: 10px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${props => props.loading && 
    css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}

`;