const Data = require("");
const Endpoint = require();

// Main class
class Main {
    constructor(){
        this.data = new Data('data.json');
        this.endpoint = new Endpoint(this.data);

    }

    async run(){
        await this.endpoint.handelInput();

    }
}

// Run the main application
const app = new Main();
app.run();