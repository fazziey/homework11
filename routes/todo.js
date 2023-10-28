const router = require("express").Router();

let todos = [{title: "Todo 1"}, {title: "Todo 2"}];

router.get('/todos', (req, res) => {
    res.status(200).json(todos);
  });

router.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === Number(id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Create Todo
router.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    deleted: false, // Menandai bahwa todo belum dihapus
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete Todo (Soft Delete)
router.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  if (todoIndex !== -1) {
    todos[todoIndex].deleted = true; // Menandai bahwa todo telah dihapus secara soft
    res.json({ message: "Todo deleted (soft delete)" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

module.exports = router;
