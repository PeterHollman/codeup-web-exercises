const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num == "number") {
                resolve();
            } else {
                reject();
            }
        }, (1000 * num))
    }).then(() => console.log(`You'll see this after ${num} second`))
        .catch(() => console.log("That is not a number"))
};



function commits(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization':`token ${gitHubToken}`}})
        .then (response=> response.json())
        .then ((data) => {
            console.log(data)

            const userData = data.filter((gitStat) => {
                // console.log(gitStat);
                if (gitStat.type === "PushEvent") {
                    return gitStat
                }
            });

            console.log(userData[0].created_at)
        })
        .catch(error => console.error(error))

}

commits("PeterHollman");



