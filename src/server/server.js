export default class Server {
    constructor() {
        this.clients = new Set();
    }

    broadcast(client, message) {
        [...this.clients]
            .filter(_client => _client !== client)
            .forEach(client => client.send(message));
    }
}