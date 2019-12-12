export default class Client {
    constructor(conn, player) {
        this.conn = conn;
        this.player = player;
    }

    send(data) {
        const msg = JSON.stringify(data);

        setTimeout(() => {
            this.conn.send(msg, (err) => {
                if (err) {
                    console.log('Error sending message');
                }
            })

        }, 500);
    }
}