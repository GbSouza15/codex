import { WareHouseProducts, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<WareHouseProducts[]> {
  const response = [
    {
      id: "1",
      name: "Produto 1",
      price: "R$ 100,00",
      warehousename: "Depósito 1",
      amount: "10",
      segment: "A",
    },
    {
      id: "2",
      name: "Produto 2",
      price: "R$ 200,00",
      warehousename: "Depósito 2",
      amount: "20",
      segment: "B",
    },
    {
      id: "2",
      name: "Produto 2",
      price: "R$ 200,00",
      warehousename: "Depósito 2",
      amount: "20",
      segment: "B",
    },
  ]

    return response
}

export default async function WareHouseProducts() {
  const data = await getData()

  return (
    <div className="mx-auto py-5">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
