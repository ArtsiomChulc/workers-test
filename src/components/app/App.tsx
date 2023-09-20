import React from 'react';

import s from './app.module.scss';
import AppInfo from "../../components/appInfo/AppInfo";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import EmployeesList from "../../components/employeesList/employeesList";
import EmployeesAddForm from "../../components/employeesAddForm/EmployeesAddForm";
import {stateStatic} from "../../store/stateStatic";



function App() {

    return (
        <div className={s.app}>
            <AppInfo/>

            <div>
                <SearchPanel/>
            </div>

            <EmployeesList state={stateStatic}/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;
