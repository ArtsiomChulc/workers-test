import React from 'react';

import s from './app.module.scss';
import AppInfo from "../../components/appInfo/AppInfo";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import EmployeesList from "../../components/employeesList/employeesList";
import EmployeesAddForm from "../../components/employeesAddForm/EmployeesAddForm";


function App() {

    return (
        <div className={s.app}>
            <AppInfo/>

            <div>
                <SearchPanel/>
            </div>

            <EmployeesList/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;
