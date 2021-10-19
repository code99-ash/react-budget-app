import React from 'react';
import { useSelector } from 'react-redux';
import Incomes from '../components/Incomes';
import Budgets from '../components/Budgets';

import '../styles/overview.css';

const Overview = () => {
    const { incomes, budgets } = useSelector(state => state);

    return (
        <div>
            <h2 >Overview</h2>
            <div className="parent-card">
                <Incomes incomes={incomes} />
            </div>
            <div className="parent-card">
                <Budgets budgets={budgets} />
            </div>
        </div>
    )
};

export default Overview
