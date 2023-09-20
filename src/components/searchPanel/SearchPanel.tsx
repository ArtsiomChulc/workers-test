import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import s from './searchPanel.module.scss'

const SearchPanel = () => {
    return (
        <div className={s.searchPanel}>
            <Form.Control size="lg" type="text" placeholder="Найти сотрудника" />
            <div className={s.btn}>
                <Button size={'lg'} variant={"light"}>Все сотрудники</Button>
                <Button size={'lg'} variant={"primary"}>На повышение</Button>
                <Button size={'lg'} variant="primary">З/п больше 1000 руб</Button>
            </div>
        </div>
    );
};

export default SearchPanel;