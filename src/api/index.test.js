const request = require("supertest");
const app = require("../app");

describe("GET /api/greeting without a string", () => {
  it("should return a 404 status code", async () => {
    const res = await request(app).get("/api/greeting/");
    expect(res.status).toBe(404);
  });

  it("should return an error with a description", async () => {
    const res = await request(app).get("/api/greeting/");
    expect(res.body).toEqual({ error: "I don't know you" });
  });
});
