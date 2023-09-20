import React from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import s from './employeesList.module.scss';
import {StateType} from "../../store/stateStatic";

type PropsType = {
    state: StateType[]
}

const EmployeesList = (props: PropsType) => {

    const element = props.state.map(el => {
        const {id, name, salary, increase} = el
        return (
            <EmployeesListItem key={id} id={id} name={name} salary={salary} increase={increase} />
        )
    })

    return (
        <ul className={s.wrapListItems}>
            {element}
        </ul>
    );
};

export default EmployeesList;