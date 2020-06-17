const baseUrl = "https://5ee2938f8b27f30016094ca0.mockapi.io/api/v1/tasks";

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((tasks) => mapTasks(tasks));
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};
const user = {
  name: 'Maxim',
  done: true,
  text: 'Sosi'
}
export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  });
};
updateTask(1, user)
.then(() => console.log('created'))

export const deleteTask = (taskId) => {
    return fetch (`${baseUrl}/${taskId}`, {
        method: "DELETE",
    })
}