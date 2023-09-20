import React from 'react';
import Form from 'react-bootstrap/Form';

import {ReactComponent as IconCookie} from '../../assets/icons/cookieIcon.svg';
import {ReactComponent as IconTrash} from '../../assets/icons/trashIcon.svg';

import s from './employeesListItem.module.scss'

const EmployeesListItem = () => {
    return (
        <div>
            <li className={s.listItem}>
                <span className={s.worker}>John Doe</span>
                <Form.Control size="lg" type="text" defaultValue={1000}/>
                <div className={s.btnIcons}>
                    <button type={'button'} className={s.btnCookie}>
                        <IconCookie/>
                    </button>
                    <button type={'button'} className={s.btnTrash}>
                        <IconTrash/>
                    </button>

                </div>
            </li>
        </div>
    );
};

export default EmployeesListItem;