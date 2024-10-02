export default function Item({name, quantity, category}) {
    return (<li>
                <h2>{name}</h2>
                <div>
                    <p>Buy {quantity} in {category}</p>
                </div>
            </li>);
}