const fs = require('fs')


const tail = (filename, until) => {
    let lastLine;
    const watcher = fs.watch(filename, {}, (eventType, filename) => {
        fs.readFile(filename, (err, data) => {
            let lines = data.toString().trim().split('\n');
            lastLine = lines.slice(-1)[0]
            until(lastLine, watcher)
        })
    })
}


const watch = (filename, waitingFor, word) => new Promise((resolve, reject) => {
    tail(filename, (lastLine, watcher) => {
        if (waitingFor(lastLine, word)) {
            watcher.close()
            resolve(`Found ${word}`)
        }
    })
})


const tailAndWaitFor = async (word) => {
    await watch('./log.log', waitingFor, word).then(e => console.log(e))
}


const waitingFor = (lastLine, word) => lastLine === word


module.exports = {
    tailAndWaitFor
}













