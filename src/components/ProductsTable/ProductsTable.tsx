import { Products, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<Products[]> {
  const response = [
        {
            id: "1",
            name: "Produto 1",
            price: "R$ 100,00",
            wareHouse: "Depósito 1",
            quantity: "100",
            segment: "Segmento 1",
        }
    ]

    return response
}

export default async function Products() {
  const data = await getData()

  return (
    <div className="mx-auto py-5">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
