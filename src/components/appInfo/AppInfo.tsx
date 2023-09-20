import React from 'react';
import Badge from 'react-bootstrap/Badge';

import s from './appInfo.module.scss'


const AppInfo = () => {
    return (
        <div className={s.appInfo}>
            <h1>
                Сотрудники компании <Badge bg="secondary">=== N ===</Badge>
            </h1>
            <h2>
                Общее число сотрудников: <Badge bg="secondary">0</Badge>
            </h2>
            <h2>
                Премию получат: <Badge bg="secondary">0</Badge>
            </h2>
        </div>
    );
};

export default AppInfo;