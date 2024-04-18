import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Title Is Required",
    invalid_type_error: "Please Enter A Valid Title"
  }).min(3, {
    message: "Title Is Too Short"
  }),
});