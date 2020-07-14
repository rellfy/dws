const fs = require("fs");
const path = require("path");

/**
 * Watches multiple files and copies them to a target folder whenever changes are detected.
 */
class Watcher {

    constructor(config) {
        if (config == null || !config.enabled)
            return;
        
        this.config = config;
        this.config.files.forEach(this.registerFile.bind(this));
    }

    registerFile(fileName) {
        const file = path.resolve(__dirname, this.config.from, fileName);
        const destination = path.resolve(__dirname, this.config.to, fileName);
        
        fs.watch(file, () => {
            fs.copyFile(file, destination, () => { });
        });
    }

}

module.exports = Watcher;