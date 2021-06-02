import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';
import Logo from '../../assets/Logo.svg'

interface RepositoryParams {
    repository: string;
}
interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([])
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        })
    }, [params.repository])

    return (
        <>
            <Header >
                <div><img src={Logo} alt="logo" /></div>
                
                <Link to=""><FiChevronLeft />voltar</Link>
            </Header>
            {repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li><li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}
            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <i>
                        <FiChevronRight size={20} />
                        </i>
                    </a>
                ))}

            </Issues>
        </>
    )
}

export default Repository;