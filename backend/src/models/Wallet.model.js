import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    referedUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    });

export const Wallet = mongoose.model("Wallet", walletSchema);

