import request from "supertest";
import app from "./index.js";
import { describe, it, expect } from "vitest";

describe("GET /", () => {
	it("debería retornar Hello World", async () => {
		const response = await request(app)
			.get("/")
			.expect(200)
			.expect("Content-Type", /text/);

		expect(response.text).toEqual("Hello World");
	});
});
