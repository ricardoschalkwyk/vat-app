import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Product } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/////////////////////////////////////////

export function calculateTotals(items: Product[], vat: number) {
  let totalVat = 0;
  let netAmount = 0;
  let grossAmount = 0;
  let amountInclVat = 0;

  for (const item of items) {
    const currentVat = calcVat(item.priceExclVat);

    totalVat = (item.priceExclVat / 100) * vat + totalVat;
    grossAmount = item.priceExclVat + currentVat + grossAmount;
    amountInclVat = item.priceInclVat + amountInclVat;
    netAmount += item.priceExclVat;
  }

  return {
    netAmount,
    totalVat,
    grossAmount,
    amountInclVat,
  };
}

/////////////////////////////////////////

export function calcVat(value: number, vat: number = 15) {
  return (value / 100) * vat;
}

/////////////////////////////////////////

export function CurrenyFormatter(amount: number) {
  if (!amount) return "R 0.00";

  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(amount);
}
