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
        console.log('html');
    }
    jsonParse() {
        console.log('json');
    }
}
const Dn = new Downloader(), string;
Dn.htmlParse();
Dn.jsonParse();
