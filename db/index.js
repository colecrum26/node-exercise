import mysql from "mysql";
import config from "../config";

const connection = mysql.createPool(config);

export default connection;