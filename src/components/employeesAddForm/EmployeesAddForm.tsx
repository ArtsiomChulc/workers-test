import React, {ChangeEvent, useCallback, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import s from './employeesAddForm.module.scss';

import {useDispatch} from "react-redux";
import {addWorker} from "../../components/employeesListItem/emloyeesSlice";
import {v1} from "uuid";


const EmployeesAddForm = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'salary') {
            setSalary(e.target.value)
        }
    }

    const handleAddWorker = useCallback(() => {
        const newWorker = {
            id: v1(),
            name,
            salary: parseFloat(salary),
            increase: false,
        };

        dispatch(addWorker(newWorker));

        setName('');
        setSalary('');
    }, [dispatch, name, salary]);

    return (
        <div className={s.addEmployees}>
            <h2 className={s.workerTitle}>Добавьте сотрудника</h2>
            <div className={s.addWorkersForm}>
                <Form.Control name={'name'} value={name} onChange={onValueChange} size="lg" type="text" placeholder="Введите имя"/>
                <Form.Control name={'salary'} value={salary} onChange={onValueChange} size="lg" type="text" placeholder="Укажите З/П в BYN"/>
                <Button onClick={handleAddWorker} variant="primary">Добавить сотрудника</Button>
            </div>
        </div>
    );
};

export default EmployeesAddForm;