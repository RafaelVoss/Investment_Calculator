import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

function composeDataLines(data){
    let table = [];
    for (let i=0; i< data.length; i++){
        table.push(
            <tr>
                <td>{data[i].year}</td>
                <td>{formatter.format(data[i].valueEndOfYear)}</td>
                <td>{formatter.format(data[i].interest)}</td>
                <td>{formatter.format(data[i].totalInterest)}</td>
                <td>{formatter.format(data[i].investedCapital)}</td>
            </tr>
        );
    }
    return table;
}

export default function CalculatorOutput({params}) {
    const data = composeDataLines(calculateInvestmentResults(params));
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {...data}
            </tbody>
        </table>
    );
}