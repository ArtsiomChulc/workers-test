import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import s from './employeesAddForm.module.scss';


const EmployeesAddForm = () => {
    return (
        <div className={s.addEmployees}>
            <h2 className={s.workerTitle}>Добавьте сотрудника</h2>
            <div className={s.addWorkersForm}>
                <Form.Control size="lg" type="text" placeholder="Large text"/>
                <Form.Control size="lg" type="text" placeholder="Large text"/>
                <Button variant="primary">Primary</Button>
            </div>
        </div>
    );
};

export default EmployeesAddForm;