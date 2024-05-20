import { createServer, Model } from "miragejs";

createServer({
  models: {
    task: Model,
  },
  seeds(server) {
    server.create("task", { title: "Inception", description: "2010" });
    server.create("task", { title: "Interstellar", description: "2014" });
    server.create("task", {
      title: "Dunkirk",
      description: "2017",
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/tasks", (schema, request) => {
      return schema.tasks.all();
    });

    this.get("/tasks/:id", (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id);
    });

    this.post("/tasks", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      console.debug({ schema });
      return schema.tasks.create(attrs);
    });

    this.patch("/tasks/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let task = schema.tasks.find(id);

      return task.update(newAttrs);
    });

    this.delete("/tasks/:id", (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id).destroy();
    });
  },
});
