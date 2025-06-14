import { Schema, model } from "mongoose";

const TodoSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Todo", TodoSchema);
