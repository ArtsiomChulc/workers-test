import React from 'react';
import Badge from 'react-bootstrap/Badge';

import s from './appInfo.module.scss'


const AppInfo = () => {
    return (
        <div className={s.appInfo}>
            <h1 style={{fontSize: 'calc(18px + 22 * (100vw / 1440))'}}>
                Сотрудники компании <Badge bg="secondary">=== N ===</Badge>
            </h1>
            <h2 style={{fontSize: 'calc(14px + 20 * (100vw / 1440))'}}>
                Общее число сотрудников: <Badge bg="secondary">0</Badge>
            </h2>
            <h2 style={{fontSize: 'calc(14px + 20 * (100vw / 1440))'}}>
                Премию получат: <Badge bg="secondary">0</Badge>
            </h2>
        </div>
    );
};

export default AppInfo;