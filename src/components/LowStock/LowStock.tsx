import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function LowStock(): JSX.Element {
    return (
        <div className="bg-[#111827] mt-4 px-3 pt-5 rounded-xl">
            <h2 className="text-xl font-bold text-white">Estoque baixo</h2>
            <Table className="text-white mt-3">
                <TableHeader>
                    <TableRow className="bg-[#222A38] border-none">
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>N.Produto</TableHead>
                        <TableHead className="text-right">Quantidade</TableHead>
                    </TableRow>
                </TableHeader> 
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell className="text-center">9</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell className="text-center">9</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">34345</TableCell>
                        <TableCell>Mesa com 4 cadeiras</TableCell>
                        <TableCell className="text-center">9</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}