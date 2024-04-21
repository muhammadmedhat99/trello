import { z } from "zod";

export const UpdateBoard = z.object({
  title: z.string({
    required_error: "Title Is Required",
    invalid_type_error: "Please Enter A Valid Title"
  }).min(3, { message: "title is too short" }),
  id: z.string(),
})