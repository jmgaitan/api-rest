import mongoose from "mongoose";



export const dbConection = async () => {
    try {
        const mongoDB = await mongoose.connect(
            process.env.DB_URL_CONNECTION, 
        );
        console.log("Conexión a la base de datos establecida con éxito");
    }catch (error) {
        console.log("Error al conectar a la base de datos", error);
        throw new Error(error);
    }
}
