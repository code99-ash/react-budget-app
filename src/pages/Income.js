import React from 'react'
import { useSelector } from 'react-redux';

import '../styles/income.css';

const Income = () => {
    const {incomes} = useSelector(state => state)
    
    const triggerMouseOver = (id) => {
        document.getElementById(id).classList.add('hovered');
    }
    const triggerMouseOut = (id) => {
        document.getElementById(id).classList.remove('hovered');
    }
    const handleRow = (source) => {
        console.log(source)
    }

    return (
        <div>
            <h1>Income Overview</h1>

            <table className="table" cellSpacing="0" border=".1">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Target Amount</th>
                        <th>Raised Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomes.map(income => {
                            return <tr 
                                        key={income.source} 
                                        onClick={() => handleRow(income.source)}
                                        id={income.source}
                                        onMouseOver={() => triggerMouseOver(income.source)}
                                        onMouseOut={() => triggerMouseOut(income.source)}
                                    >
                                <td>{income.source}</td>
                                <td>{income.targetAmount}</td>
                                <td>{income.raisedAmount}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Income
