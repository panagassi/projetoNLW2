import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
import './styles.css';
import Input from '../../../components/Input';
import WarningIcon from '../../images/icons/warning.svg';
import Textarea from '../../../components/TextArea';
import Select from '../../../components/Select'
import api from '../../../services/api';



function TeacherForm() {

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');

    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const history = useHistory();

    


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);
    function setScheduleItemValue(position: number, field: string, value: string) {
        const uptadeScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItems(uptadeScheduleItem);
    }
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!!');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro :(');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que Incrivel que você quer dar aulas"
                description="O Primeiro passo é preencher esse formulario de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value)}}/>
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value)}}

                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value)}}

                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value)}}

                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Materia"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biolodia' },
                                { value: 'Portugues', label: 'Portugues' },
                                { value: 'Quimica', label: 'Quimica' },
                                { value: 'Matematica', label: 'Matematica' },
                                { value: 'Fisica', label: 'Fisica' },
                                { value: 'Educação Fisica', label: 'Educação Fisica' },
                                { value: 'Historia', label: 'Historia' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Ingles' , label:'Ingles'}
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora aula"
                            value={cost}
                            onChange={(e) => {
                                setCost(e.target.value)
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Horários disponíveis
                            <button onClick={addNewScheduleItem}   type="button">
                                + Novo Horario
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e=> setScheduleItemValue(index,'week_day',e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' }
                                        ]}
                                    />
                                    <Input
                                        type="time"
                                        name="from"
                                        value={scheduleItem.from}
                                        onChange={e=> setScheduleItemValue(index,'from',e.target.value)}
                                        label="Das" />
                                    <Input
                                        type="time"
                                        name="to"
                                        value={scheduleItem.to}
                                        onChange={e=> setScheduleItemValue(index,'to',e.target.value)}
                                        label="Até" />
                                </div>
                            );
                        })}

                        
                        
                    </fieldset>
                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Aviso Importante" />
                            Importante! <br />
                            Preencha todos os Dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form> 
            </main>
        </div>
    )
}

export default TeacherForm;