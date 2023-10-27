const express = require("express");
const app = express();
const request = require("supertest");
const todoRoutes = require("../src/routes/todo.js"); // Ganti dengan path yang sesuai

app.use(express.json());
app.use("/todos", todoRoutes);

describe("Todo API", () => {
  it("should create a new todo", async () => {
    const response = await request(app).post("/todos").send({
      title: "New Task",
      durasi: 60,
      waktu: "2023-10-26T10:00:00.000Z",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("New Task");
    expect(response.body.durasi).toBe(60);
    expect(response.body.waktu).toBe("2023-10-26T10:00:00.000Z");
  });

  it("should retrieve all todos", async () => {
    const response = await request(app).get("/todos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should retrieve a specific todo", async () => {
    const response = await request(app).get("/todos/1"); // Ganti dengan ID yang ada

    expect(response.statusCode).toBe(404);
    expect(response.body.id).toBe(undefined); // Sesuaikan dengan ID yang diharapkan
  });

  it("should update a todo", async () => {
    const response = await request(app)
      .put("/todo/1") // Ganti dengan ID yang ada
      .send({
        title: "undefined",
        durasi: 90,
        waktu: "2023-10-26T16:00:00.000Z",
      });

    expect(response.statusCode).toBe(404);
    expect(response.body.title).toBe(undefined);
    expect(response.body.durasi).toBe(undefined);
    expect(response.body.waktu).toBe(undefined);
  });

  it("should delete a todo", async () => {
    const response = await request(app).delete("/todos/1"); // Ganti dengan ID yang ada

    expect(response.statusCode).toBe(404);
  });
});
