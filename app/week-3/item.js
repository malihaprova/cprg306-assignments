export default function Item({name, quantity, category}) {
    return (<li class="p-2 m-2 bg-zinc-800 max-w-sm">
                <h2 class="text-xl font-bold">{name}</h2>
                <div class="text-sm">
                    Buy {quantity} in {category}
                </div>
            </li>);
}