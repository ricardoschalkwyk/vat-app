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
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-center">Category</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("category")}</div>;
    },
  },
  {
    accessorKey: "priceExclVat",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("priceExclVat"));

      return <div className="text-center">{CurrenyFormatter(value)}</div>;
    },
  },
  {
    accessorKey: "priceInclVat",
    header: () => <div className="text-center">VAT</div>,
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("priceInclVat"));

      return <div className="text-center">{CurrenyFormatter(value)}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("quantity")}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">Created</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {format(row.getValue("createdAt"), "dd-MM-yyyy")}
        </div>
      );
    },
  },
];
