import React from 'react';
import whatsIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/54078431?s=460&u=b590d629a5a8ff04605fecb5b6d3e1cad1e53e43&v=4" alt="Guilherme Panagassi"/>
                        <div>
                            <strong>Guilherme Panagassi</strong>
                            <span>Historia</span>
                        </div>
                    </header>

                    <p>
                        Um povo que não conhece a sua história está condenado a repeti-la.
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>
                                R$ 120,00
                            </strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="Whatsapp" />
                            Entre em contato
                        </button>
                    </footer>
        </article>
    )
}

export default TeacherItem;

