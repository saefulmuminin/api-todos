// const Todo = require("../models/todo.js").Todo;
const Todo = require("../models/index.js").Todo;

exports.listTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error); // Tampilkan pesan kesalahan
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil data Todos" });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil data Todo" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, durasi, waktu } = req.body;

    if (!title || !durasi || !waktu) {
      return res
        .status(400)
        .json({ message: "Title, durasi, dan waktu harus diisi" });
    }

    const todo = await Todo.create({ title, durasi, waktu });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan dalam membuat Todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { title, durasi, waktu } = req.body;
    const todo = await Todo.findByPk(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (title) {
      todo.title = title;
    }
    if (durasi) {
      todo.durasi = durasi;
    }
    if (waktu) {
      todo.waktu = waktu;
    }

    await todo.save();

    res.json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengupdate Todo" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan dalam menghapus Todo" });
  }
};
