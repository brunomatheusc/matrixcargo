import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

import api from '../../services/api';

import { Container, List, Language, Header, Quantity } from './styles';

export default function Main() {
    const [languages, setLanguages] = useState([]);
    
    useEffect(() => {
        async function getLanguages() {
            const response = await api.get('/languages');
            const { data } = response;

            setLanguages(data);
        }

        getLanguages();
    }, [])

    return (
        <Container>
            <h1><FaGithubAlt />Lista de Linguagens</h1>

            <List>
                <li>
                    <Header>Linguagem</Header>
                    <Header>Quantidade</Header>
                    <Link>&nbsp;</Link>
                </li>
            { languages.map(lang => {
                const { language, count } = lang;
                
                return (
                    <li>
                        <Language>{ language }</Language>
                        <Quantity>{ count }</Quantity>
                        <Link to={ `/languages/${language}` }>Detalhes</Link>
                    </li>
                )
            })}
            </List>
        </Container>
    );
}
