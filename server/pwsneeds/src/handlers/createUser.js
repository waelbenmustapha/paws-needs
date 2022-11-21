const mongoose=require("mongoose");
const connectDatabase = require("../database/db")
module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        await connectDatabase(); 
    } catch (error) {
        
    }
  
};

 