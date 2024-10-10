// Main class
class Main
{
    constructor
    {
        this.data=new DataTransfer('data.json');
        this.endpoint = new Endpoint (this.data);
    }
    async run()
    {
        await this.endpoint.handleInput();
    }
}
//Rub the main application
const app = new Main();
app.run();