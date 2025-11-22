import { type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

import type { Product } from "@/types";
import DeleteRow from "../DeleteRow";
import { CurrenyFormatter } from "../lib/utils";
import Button from "../ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Product>[] = [
  {
    id: "remove",
    cell: ({ row }) => <DeleteRow product={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-right">Category</div>,
  },
  {
    accessorKey: "priceExclVat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("priceExclVat"));

      return <div className="text-right">{CurrenyFormatter(value)}</div>;
    },
  },
  {
    accessorKey: "priceInclVat",
    header: () => <div className="text-right">VAT</div>,
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("priceInclVat"));

      return <div className="text-right">{CurrenyFormatter(value)}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Quantity</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("quantity")}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Created</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          {format(row.getValue("createdAt"), "dd-MM-yyyy")}
        </div>
      );
    },
  },
];
