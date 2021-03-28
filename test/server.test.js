"use strict"
const superTest=require("supertest")
const server=require("../server.js")
const request=superTest(server.app)

describe("TEST Server",()=>{
it("not Found Route",async ()=>{
const response=await request.get("/notFound")
expect(response.status).toEqual(404)

})
it("Server Error",async ()=>{
    const response=await request.get("/bad")
    expect(response.status).toEqual(500)
    
    })
    it("Right Route",async ()=>{
        const response=await request.get("/")
        expect(response.text).toEqual("Hello World")
        expect(response.status).toEqual(200);
        })
})
