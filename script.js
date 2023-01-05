function addTasks() {
    const text = document.getElementById('task-title').value

    if (text) {
        const completed = document.querySelector('.completed')
        const newTask = completed.cloneNode(true)

        newTask.querySelector('.task-title').textContent = text

        newTask.classList.remove('completed')
        newTask.classList.remove('hide')

        const list = document.getElementById('to-do-list')
        list.appendChild(newTask)

        const removeButton = newTask.querySelector('.remove-button').addEventListener('click', function() {
            removeTasks(this)
        })

        const doneButton = newTask.querySelector('.done-button').addEventListener('click', function() {
            completeTasks(this)
        })

        document.getElementById('task-title').value = ''
    }
}

function removeTasks(task) {
    task.parentNode.remove(true)
}

function completeTasks(task) {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle('done')
}

const addButton = document.getElementById('add-button')

addButton.addEventListener('click', function(event) {
    event.preventDefault()

    addTasks()
})