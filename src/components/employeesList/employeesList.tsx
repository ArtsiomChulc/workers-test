import React from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import s from './employeesList.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../components/employeesListItem/addWorcerSlice";


const EmployeesList = () => {

    const state = useSelector<RootState, StateType[]>(state => state.addWorker)

    console.log(state)

    const element = state.map(el => {
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