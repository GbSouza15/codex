import { Suppliers, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<Suppliers[]> {
  const response = [
        {
            id: "1",
            name: "Fornecedor 1",
            email: "fulanodasilva@email.com",
            phone: "123456789",
        }
    ]

    return response
}

export default async function Suppliers() {
  const data = await getData()

  return (
    <div className="mx-auto py-5">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
