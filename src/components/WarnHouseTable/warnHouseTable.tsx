import { WareHouseProducts, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<WareHouseProducts[]> {
  const response = [
    {
      id: "1",
      name: "Warehouse 1",
      address: "Rua 1",
    },
    {
      id: "2",
      name: "Warehouse 2",
      address: "Rua 2",
    },
    {
      id: "3",
      name: "Warehouse 3",
      address: "Rua 3",
    }
  ]

    return response
}

export default async function WareHouseProducts() {
  const data = await getData()

  return (
    <div className="mx-auto py-5 md:min-w-[560px] lg:min-w-[950px]">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
