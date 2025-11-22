import * as z from "zod";

export const addProductSchema = z.object({
  id: z.number(),
  name: z.string().min(1, { message: "Cannot be empty" }),
  category: z.string().min(1, { message: "Must have a selected category" }),
  quantity: z
    .string()
    .regex(/^\d+(?:[.,]\d+)?$/, "Only round numbers allowed")
    .refine((val) => parseFloat(val) > 0, {
      message: "Value must be greater than 0",
    }),
  priceExclVat: z
    .string()
    .regex(/^\d+(?:[.,]\d+)?$/, "Only digits or decimals are allowed")
    .refine((val) => parseFloat(val.replace(",", ".")) > 0, {
      message: "Value must be greater than 0",
    }),
  priceInclVat: z.string(),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;
