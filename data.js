function generateFakeTasks(count = 10) {
  const fakeTasks = [];

  for (let i = 0; i < count; i++) {
    fakeTasks.push({
      id: i + 1,
      title: `Task ${i + 1}`,
      description: `Description of task ${i + 1}`,
      completed: Math.random() > 0.5, // Randomly set some tasks as completed
    });
  }

  return fakeTasks;
}

const tasks = generateFakeTasks();
console.log(tasks);
