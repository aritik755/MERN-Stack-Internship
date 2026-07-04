function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) {
              reject("UserId is required");
            } else {
              resolve(`User data for ${userId}`);
            }
        }, 2000);
    });
}
 
// Usage
getUserDataPromise("157")
    .then(data => console.log("Success:", data))
    .catch(error => console.log("Error:", error));

 