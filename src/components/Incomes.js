import React from 'react'

import './styles/incomes.css'

const Incomes = ({incomes}) => {

    return <>
        <h1 class="text-primary title">Income</h1>
        {
            incomes.map(income => {
                return <Income income={income} key={income.source} />
            })
        }
    </>
}

const Income = ({income}) => {
    const raisedPercentage = (income.raisedAmount/income.targetAmount)*100;
    
    return <div className="card income-card">
        <h2>{income.source}</h2>
        <div className="income-card__progress">
            <div>
                <span>Raised: {income.raisedAmount}</span>
                <div className="progress">
                    <button 
                        className="progress__value"
                        style={{width: `${raisedPercentage}%`}}
                    ></button>
                </div>
            </div>
            <div>
                <span>Target: {income.targetAmount}</span>
                <div className="progress progress-full"></div>
            </div>
        </div>
    </div>
}

export default Incomes
