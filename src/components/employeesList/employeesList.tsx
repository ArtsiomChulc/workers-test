import React, {useEffect} from 'react';
import EmployeesListItem from "../employeesListItem/EmployeesListItem";

import s from './employeesList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../components/employeesListItem/emloyeesSlice";
import {fetchWorkers} from "../../components/employeesList/workerSlice";


const EmployeesList = () => {
    const dispatch = useDispatch()

    const state = useSelector((state: RootState) => state.workers)

    const yes = true

    useEffect(() => {
        if (yes) {
            dispatch(fetchWorkers() as any)
        }
    }, [dispatch]);

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