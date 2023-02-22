interface JsonInterface {
    jsonParse(): string;
  }
  
  interface HtmlInterface {
    htmlParse(): string;
  }
  
  class Parser implements JsonInterface, HtmlInterface {
    public jsonParse(): string {
        return 'Json';
    }
  
    public htmlParse(): string {
        return 'Html';
    }
  }

 class Downloader implements HtmlInterface {
    public htmlParse(): string {
        console.log('xml');
        return 'xml'

    }

     

 }

 const Dn = new Downloader();
 //Dn.htmlParse();


 interface Pingable {
    ping(): void;
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
  class Ball implements Pingable {
 
    ping() {
      console.log("ping!");
    }
    pong() {
        console.log("pong!");  
    }
  }

  const ball = new Ball();
