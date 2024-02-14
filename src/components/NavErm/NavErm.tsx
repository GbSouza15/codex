export default function NavErm(): JSX.Element {
    return (
        <div className="mt-5">
            <ul className="text-white flex text-xs items-center gap-5">
                <li>
                    <a href="#" className="text-white border-b-2 border-[#2651EE]">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="text-white">Depósitos</a>
                </li>
                <li>
                    <a href="#" className="text-white">Fornecedores</a>
                </li>
                <li>
                    <a href="#" className="text-white">Produtos</a>
                </li>
            </ul>
        </div>
    )
} 