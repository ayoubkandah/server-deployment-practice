'use strict'
const server=require("./server.js")
require("dotenv").config()
const port=process.env.PORT ||4500
server.Start(port)
