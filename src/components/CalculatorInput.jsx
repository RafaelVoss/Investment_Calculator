export default function CalculatorInput({params, onChangeParam}) {

    return(
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' value={params.initialInvestment} onChange={event => onChangeParam('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' value={params.annualInvestment} onChange={event => onChangeParam('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Reaturn</label>
                    <input type='number' value={params.expectedReturn} onChange={event => onChangeParam('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' value={params.duration} onChange={event => onChangeParam('duration', Math.abs(event.target.value))}/>
                </p>
            </div>
        </section>
    );
}