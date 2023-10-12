import "dotenv/config"

const environments = {
    PORT: process.env.PORT || 4000,
    DB: {
        HOST: process.env.DB_HOST || "localhost",
        NAME: process.env.DB_NAME || "radiodb",
        PORT: process.env.DB_PORT || 3306,
        DIALECT: process.env.DB_DIALECT || "mysql",
        USER: process.env.DB_USER || "root",
        PASSWORD: process.env.DB_PASSWORD || ""
    }
}

export default environments