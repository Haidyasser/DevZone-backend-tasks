
// Fetch user data using callbacks
function getUserData(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "Haidy Yasser" };
        const error = null;
        callback(error, user);
    }, 1000);
}

// Fetch tasks data associated with a user using callbacks
function getUserTasks(userId, callback) {
    setTimeout(() => {
        const tasks = [
            { userId: 1, task: "Write code" },
            { userId: 1, task: "Test application" },
        ];
        const error = null;
        callback(error, tasks.filter(task => task.userId === userId));
    }, 1000);
}

// Fetch user data and tasks using callbacks
getUserData((userError, user) => {
    if (userError) {
        console.error(userError);
        return;
    }
    console.log("User data:", user);
    getUserTasks(user.id, (taskError, tasks) => {
        if (taskError) {
            console.error(taskError);
            return;
        }
        console.log("User tasks:", tasks);
    });
});



// Fetch user data using promises
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: "Haidy Yasser" };
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        }, 1000);
    });
}

// Fetch tasks data associated with a user using promises
function getUserTasks(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = [
                { userId: 1, task: "Write code" },
                { userId: 1, task: "Test application" },
            ];
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(tasks.filter(task => task.userId === userId));
            }
        }, 1000);
    });
}

// Fetch user data and tasks using promises
getUserData()
    .then(user => {
        console.log("User data:", user);
        return getUserTasks(user.id);
    })
    .then(tasks => {
        console.log("User tasks:", tasks);
    })
    .catch(error => {
        console.error("Error:", error);
    });




// Fetch user data using async/await
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: "Haidy Yasser" };
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        }, 1000);
    });
}

// Fetch tasks data associated with a user using async/await
function getUserTasks(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = [
                { userId: 1, task: "Write code" },
                { userId: 1, task: "Test application" },
            ];
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(tasks.filter(task => task.userId === userId));
            }
        }, 1000);
    });
}

// Fetch user data and tasks using async/await
async function fetchUserDataAndTasks() {
    try {
        const user = await getUserData();
        console.log("User data:", user);
        const tasks = await getUserTasks(user.id);
        console.log("User tasks:", tasks);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchUserDataAndTasks();
