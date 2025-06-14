// import { Schema, model } from "mongoose";

// const TodoSchema = new Schema(
//   {
//     text: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default model("Todo", TodoSchema);

import { Schema, model } from "mongoose";

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    picture: { type: String },
  },
  { timestamps: true }
);

export default model("Post", TodoSchema);
