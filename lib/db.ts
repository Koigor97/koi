import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    // checking if the database is already connected
    const isConnected = mongoose.connection.readyState;

    if (isConnected === 1) {
        console.log("Already Connected");
        return;
    }

    if (isConnected === 2) {
        console.log("MongoDB is connecting...");
        return;
    }

    // if isConnected is not 1 and 2 connect to the database
    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "koigor",
            bufferCommands: true
        });
        console.log("Connected!");
    } catch (error: unknown) {
        console.log("Error", error);

        if (error instanceof Error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            throw new Error(error);
        }
    }
}

// export connection instance to be used across the application
export default connect;
