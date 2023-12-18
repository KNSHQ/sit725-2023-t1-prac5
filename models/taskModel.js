const tasks = [];

module.exports = {
    getAllTasks: () => tasks,
    addTask: (task) => tasks.push(task),
    deleteTask: (index) => tasks.splice(index, 1),
};
