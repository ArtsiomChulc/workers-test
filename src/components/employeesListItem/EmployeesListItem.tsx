import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

import {ReactComponent as IconCookie} from '../../assets/icons/cookieIcon.svg';
import {ReactComponent as IconTrash} from '../../assets/icons/trashIcon.svg';
import {ReactComponent as IconStar} from '../../assets/icons/starIcon.svg';

import s from './employeesListItem.module.scss';
import {useDispatch} from "react-redux";
import {toggleIncrease} from "../../components/employeesListItem/emloyeesSlice";

type PropsType = {
    id: string
    name: string
    salary: number
    increase: boolean
}

const EmployeesListItem = (props: PropsType) => {
    const {id, name, salary, increase} = props

    const dispatch = useDispatch()

    const onClickHandler = (id: string) => {
        dispatch(toggleIncrease(id))
        console.log(id)
    }

    const classNames = `${s.worker} ${increase ? s.cookieActive : ''}`

    return (
        <>
            <li className={s.listItem}>
                <span className={classNames}>{name}</span>
                <Form.Control
                    size="lg" type="text"
                    defaultValue={1000}
                    value={salary}
                    style={{color: `${increase ? '#b4bd40' : ''}`}}
                />
                <div className={s.btnIcons}>

                    <button
                        type={'button'}
                        className={s.btnCookie}
                    onClick={() => onClickHandler(id)}>
                        <IconCookie/>
                    </button>

                    <button type={'button'} className={s.btnTrash}>
                        <IconTrash/>
                    </button>
                    <IconStar className={s.btnStar}/>
                </div>
            </li>
        </>
    );
};

export default EmployeesListItem;