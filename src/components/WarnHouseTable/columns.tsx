"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type WareHouseProducts = {
    id: string
    name: string
    price: string
    warehousename: string
    amount: string
    segment: string
    }

export const columns: ColumnDef<WareHouseProducts>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "price",
        header: "Preço",
    },
    {
        accessorKey: "warehousename",
        header: "Depósito",
    },
    {
        accessorKey: "amount",
        header: "Quantidade",
    },
    {
        accessorKey: "segment",
        header: "Segmento",
    },
]
