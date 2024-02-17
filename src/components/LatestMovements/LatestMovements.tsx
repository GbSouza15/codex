import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function LatestMovements(): JSX.Element {
    return (
        <div className="bg-[#111827] mt-4 px-3 pt-5 rounded-xl max-w-[560px]">
            <h2 className="text-xl font-bold text-white">Últimas Movimentações</h2>
            <Table className="text-white mt-3">
                <TableHeader>
                    <TableRow className="bg-[#222A38] border-none text-[#ffffff]">
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>N.Produto</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead className="text-right">Quantidade</TableHead>
                        <TableHead>Data</TableHead>
                    </TableRow>
                </TableHeader> 
                <TableBody className="text-gray-400">
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell>Entrada</TableCell>
                        <TableCell className="text-center">9</TableCell>
                        <TableCell>08/01/2024</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell>Entrada</TableCell>
                        <TableCell className="text-center">9</TableCell>
                        <TableCell>08/01/2024</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell>Entrada</TableCell>
                        <TableCell className="text-center">9</TableCell>
                        <TableCell>08/01/2024</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}