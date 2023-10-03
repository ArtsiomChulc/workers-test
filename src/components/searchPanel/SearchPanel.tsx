import React, {ChangeEvent, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import s from './searchPanel.module.scss'
import {useDispatch} from "react-redux";
import {searchWorkers} from "../../components/employeesListItem/emloyeesSlice";


const SearchPanel = () => {

    const dispatch = useDispatch()
    // const state = useSelector((state: RootState) => state.state)

    const [value, setValue] = useState<string>('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value
        setValue(searchText)
        dispatch(searchWorkers(searchText))
    }

    return (
        <div className={s.searchPanel}>
            <Form.Control
                size="lg"
                type="text"
                placeholder="Найти сотрудника"
                value={value}
                onChange={onChangeValue}
            />
            <div className={s.btn}>
                <Button size={'lg'} variant={"light"}>Все сотрудники</Button>
                <Button size={'lg'} variant={"primary"}>На повышение</Button>
                <Button size={'lg'} variant="primary">З/п больше 1000 руб</Button>
            </div>
        </div>
    );
};

export default SearchPanel;