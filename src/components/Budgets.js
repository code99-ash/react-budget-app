import React from 'react';

import './styles/budgets.css';

const Budgets = ({budgets}) => {
    return <>
        <h1 class="text-primary title">Budgets</h1>
        {
            budgets.map(budget => {
                return <Budget budget={budget} key={budget.name} />
            })
        }
    </>
}

const Budget = ({budget}) => {
    return <div className="card budget-card">
        <h2>{budget.name}</h2>
        <h3 className="budget-length">
            {budget.budgets.length < 10 && <span>0</span>}
            <span>{budget.budgets.length}</span>
        </h3>
    </div>
}

export default Budgets
