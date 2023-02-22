class Parser {
    jsonParse() {
        return 'Json';
    }
    htmlParse() {
        return 'Html';
    }
}
class Downloader {
    htmlParse() {
        console.log('xml');
        return 'xml';
    }
}
const Dn = new Downloader();
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class Ball {
    ping() {
        console.log("ping!");
    }
    pong() {
        console.log("pong!");
    }
}
const ball = new Ball();
