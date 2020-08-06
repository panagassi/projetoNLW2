import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps { //definir formatos de tipagem de objetos
    title: string;
    description?: string; // a ? diz que ela não é obrigatoria
} 

const PageHeader:React.FunctionComponent<PageHeaderProps> = (props) => { // preparando para receber atributos
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p>}
                {props.children}
            </div>

            
        </header>
    )
}

export default PageHeader;