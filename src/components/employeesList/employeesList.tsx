import React from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import {initialState} from "../../components/employeesListItem/slice";

import s from './employeesList.module.scss';


const EmployeesList = () => {

    const element = initialState.map(el => {
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