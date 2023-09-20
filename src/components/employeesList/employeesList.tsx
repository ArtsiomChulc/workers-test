import React from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import s from './employeesList.module.scss';

const EmployeesList = () => {
    return (
        <ul className={s.wrapListItems}>
            <EmployeesListItem/>
        </ul>
    );
};

export default EmployeesList;