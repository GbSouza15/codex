import { Products, columns } from "./columns"
import { DataTable } from "./dataTable"

async function getData(): Promise<Products[]> {
  const response = [
    {
      id: "1",
      name: "QuantumWave Smartwatch",
      price: "R$ 100,00",
      wareHouse: "Depósito 1",
      quantity: "100",
      segment: "Segmento 1",
  },
  {
      id: "2",
      name: "NebulaNova Desk Lamp",
      price: "R$ 85,50",
      wareHouse: "Depósito 2",
      quantity: "75",
      segment: "Segmento 2",
  },
  {
      id: "3",
      name: "CyberBeat Headphones",
      price: "R$ 120,75",
      wareHouse: "Depósito 3",
      quantity: "50",
      segment: "Segmento 3",
  },
  {
      id: "4",
      name: "AquaFrost Water Bottle",
      price: "R$ 45,20",
      wareHouse: "Depósito 4",
      quantity: "120",
      segment: "Segmento 4",
  },
  {
      id: "5",
      name: "EcoHarmony Plant Pot",
      price: "R$ 30,90",
      wareHouse: "Depósito 5",
      quantity: "90",
      segment: "Segmento 5",
  },
  {
      id: "6",
      name: "GigaByte Gaming Mouse",
      price: "R$ 65,80",
      wareHouse: "Depósito 6",
      quantity: "60",
      segment: "Segmento 6",
  },
  {
      id: "7",
      name: "StellarView Telescope",
      price: "R$ 150,50",
      wareHouse: "Depósito 7",
      quantity: "40",
      segment: "Segmento 7",
  },
  {
      id: "8",
      name: "XpressBlend Smoothie Maker",
      price: "R$ 95,30",
      wareHouse: "Depósito 8",
      quantity: "80",
      segment: "Segmento 8",
  },
  {
      id: "9",
      name: "EliteFit Resistance Bands",
      price: "R$ 55,60",
      wareHouse: "Depósito 9",
      quantity: "70",
      segment: "Segmento 9",
  },
  {
      id: "10",
      name: "SkyVista Drone Camera",
      price: "R$ 200,00",
      wareHouse: "Depósito 10",
      quantity: "55",
      segment: "Segmento 10",
  },
  {
      id: "11",
      name: "SolarBloom Garden Lights",
      price: "R$ 75,20",
      wareHouse: "Depósito 11",
      quantity: "65",
      segment: "Segmento 11",
  },
  {
      id: "12",
      name: "BioCharge Fitness Tracker",
      price: "R$ 110,90",
      wareHouse: "Depósito 12",
      quantity: "45",
      segment: "Segmento 12",
  },
  {
      id: "13",
      name: "VitaGlow Facial Mask",
      price: "R$ 40,50",
      wareHouse: "Depósito 13",
      quantity: "85",
      segment: "Segmento 13",
  },
  {
      id: "14",
      name: "TechVibe Virtual Reality Glasses",
      price: "R$ 160,30",
      wareHouse: "Depósito 14",
      quantity: "30",
      segment: "Segmento 14",
  },
  {
      id: "15",
      name: "UrbanFit Backpack",
      price: "R$ 50,60",
      wareHouse: "Depósito 15",
      quantity: "95",
      segment: "Segmento 15",
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
