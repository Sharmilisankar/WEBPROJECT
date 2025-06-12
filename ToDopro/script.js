const fetchTasksFromBackend = async () => {
  const res = await fetch('http://localhost:5000/api/tasks');
  const tasks = await res.json();
  tasks.forEach(task => addTask(task.text, task.completed, task._id));
};

const saveTaskToBackend = async (task) => {
  const res = await fetch('http://localhost:5000/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
};

const updateTaskInBackend = async (id, task) => {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
};

const deleteTaskFromBackend = async (id) => {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: 'DELETE',
  });
};
