import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import s from './employeesAddForm.module.scss';


const EmployeesAddForm = () => {
    return (
        <div className={s.addEmployees}>
            <h2 className={s.workerTitle}>Добавьте сотрудника</h2>
            <div className={s.addWorkersForm}>
                <Form.Control size="lg" type="text" placeholder="Введите имя"/>
                <Form.Control size="lg" type="text" placeholder="Укажите З/П в BYN"/>
                <Button variant="primary">Добавить сотрудника</Button>
            </div>
        </div>
    );
};

export default EmployeesAddForm;