"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
    id: string
    name: string
    price: string
    wareHouse: string
    quantity: string
    segment: string
    }

export const columns: ColumnDef<Products>[] = [
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
        accessorKey: "wareHouse",
        header: "Depósito",
    },
    {
        accessorKey: "quantity",
        header: "Quantidade",
    },
    {
        accessorKey: "segment",
        header: "Segmento",
    },
]
