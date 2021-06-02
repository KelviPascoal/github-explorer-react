import { useState, FormEvent, useEffect } from 'react';
import { Title, Form, Repositories, Error, LogoContainer } from './style';
import { FiChevronRight, FiPrinter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setResositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories')
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories)
        } else {
            return [];
        }

    });

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    })

    async function handleAddRepository(event: FormEvent) {
        event.preventDefault();

        if (!newRepo) {
            setInputError('digite o autor/nome do repositorio');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setResositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositorio');
        }
    }


    return (
        <>
            <LogoContainer><img src={Logo} alt="" /></LogoContainer>
            <Title>Explore repositórios<br/> no Github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório" />
                <button type="submit">pesquisar</button>
            </Form>

            { inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img src={repository.owner.avatar_url} alt="" />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboard;