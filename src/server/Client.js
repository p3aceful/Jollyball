export default class Client {
    constructor(conn) {
        this.conn = conn;
    }

    send(message) {
        const packet = JSON.stringify(message);

        this.conn.send(packet, (err) => {
            if (err) {
                console.log('Error sending message');
            }
        });
    }
}