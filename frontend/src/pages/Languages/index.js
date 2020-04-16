import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { FaStar, FaBook, FaCircle, FaClock, FaSpinner } from 'react-icons/fa';

import { 
    Container, 
    Title,
    Language,
    RepoList, 
    RepoContainer, 
    RepoHeader, 
    Owner, 
    Name, 
    RepoBody, 
    Desc, 
    RepoFooter, 
    Text,
    Pagination,
    Button, 
    GroupButton,
    PerPage
} from './styles';
import api from '../../services/api';
import pt from 'date-fns/locale/pt';

export default function Languages() {
    const [repositores, setRepositories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextLoading, setNextLoading] = useState(false);
    const [previousLoading, setPreviousLoading] = useState(false);
    const [perPage, setPerPage] = useState(5);
    const { language } = useParams();

    useEffect(() => {
        getRepositories(currentPage);
    }, [perPage]);

    function handleNextPage() {
        setCurrentPage(currentPage + 1);
        setNextLoading(true);
        getRepositories(currentPage + 1);
    }
    
    function handlePreviousPage() {                
        setCurrentPage(currentPage - 1);
        setPreviousLoading(true);
        getRepositories(currentPage - 1);
    }

    async function getRepositories(page) {
        try {
            const response = await api.get(`/repositories/${language}?page=${page}&perPage=${perPage}`)

            const data = response.data.map(repo => ({
                ...repo,
                updatedAt: format(new Date(repo.updated_at), 'dd/MM/yyyy HH:mm', { locale: pt })
            }));

            setRepositories(data);  
            setNextLoading(false);
            setPreviousLoading(false);              
        } catch (error) {
            alert('Ocorreu um erro, tente novamente');            
        }
    }

    return (
        <Container>
            <Title>Lista de repositórios da linguagem: <Language>{ language }</Language></Title>
            
            <RepoList>
            { repositores.map(rep => (
                <li key={ rep.id }>
                    <RepoContainer>
                        <RepoHeader>
                            <FaBook color="#9d1c24" />
                            <Owner>{ `${ rep.owner.login }/`}</Owner>
                            <Name><a href={ rep.html_url }>{ rep.name }</a></Name>
                        </RepoHeader>

                        <RepoBody>
                            <Desc>{ rep.description }</Desc>
                        </RepoBody>

                        <RepoFooter>
                            <Text><FaStar color="#9d1c24" />{ rep.stargazers_count }</Text>
                            <Text><FaCircle color="#9d1c24" />{ rep.language }</Text>
                            <Text><FaClock color="#9d1c24" />{ `Atualizado em ${rep.updatedAt}` }</Text>
                        </RepoFooter>
                    </RepoContainer>
                </li>
            ))}
            </RepoList>

            <Pagination>
                <GroupButton>
                    <Button disabled={ (currentPage == 1) } onClick={ handlePreviousPage } loading={ previousLoading }>
                        { previousLoading 
                        ? <FaSpinner color="#fff" /> 
                        : "Voltar"
                        }
                    </Button>

                    <Button onClick={ handleNextPage } loading={ nextLoading }>
                        { nextLoading 
                        ? <FaSpinner color="#fff" /> 
                        : "Próximo"
                        }
                    </Button>
                </GroupButton>

                <PerPage defaultValue="5" onChange={ (e) => setPerPage(e.target.value) }>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </PerPage>
            </Pagination>
        </Container>
    );
}
