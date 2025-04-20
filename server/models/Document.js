import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    originalText: {
      type: String,
      required: true,
    },
    simplifiedText: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
    },
    uploadedBy: {
      type: String, // Optional: Can use JWT-based user ID or email
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
