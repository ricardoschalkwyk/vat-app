import * as z from "zod";

export const addProductSchema = z.object({
  id: z.number(),
  name: z.string().min(1, { message: "Product must have a name" }),
  category: z.string().min(1, { message: "Must have a selected category" }),
  quantity: z
    .string()
    .regex(/^\d+$/, "Only round numbers allowed")
    .refine((val) => parseInt(val, 10) > 0, {
      message: "Value must be greater than 0",
    }),
  priceExclVat: z
    .string()
    .regex(/^\d+(?:[.,]\d+)?$/, "Only digits or decimals are allowed")
    .transform((val: string) => val.replace(",", "."))
    .refine((val) => parseFloat(val) > 0, {
      message: "Value must be greater than 0",
    }),
  priceInclVat: z.string(),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;
