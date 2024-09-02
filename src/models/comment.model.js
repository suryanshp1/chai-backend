import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        }
    },
    {
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    },
    {timestamps: true}
)

commentSchema.plugin(mongooseAggregatePaginateV2)

export const Comment = mongoose.model("Comment", commentSchema)