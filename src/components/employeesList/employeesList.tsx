import React from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import s from './employeesList.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../components/employeesListItem/emloyeesSlice";


const EmployeesList = () => {

    const state = useSelector<RootState, Array<StateType>>(state => state.state)

    const element = state.map(el => {
        const {id, name, salary, increase} = el
        return (
            <EmployeesListItem key={id} id={id} name={name} salary={salary} increase={increase} />
        )
    })

    return (
        <ul className={s.wrapListItems}>
            {state.length === 0 ? <div
                style={{textAlign: 'center'}}
            >Добавьте сотрудников с помощью формы ниже</div> : element}
        </ul>
    );
};

export default EmployeesList;