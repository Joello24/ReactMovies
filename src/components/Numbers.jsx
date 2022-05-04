function Numbers(props){
    let numbers = [];
    for(let i = props.lowNumber; i <= props.highNumber; i++){
       numbers.push(i);
    }
    return (
        <div>
            <ul className="mx-4 font-bold">
                {numbers.map(number =>
                    <li key={number.toString()}>{number}</li>
                )}
            </ul>
        </div>
    )
}
export default Numbers;

