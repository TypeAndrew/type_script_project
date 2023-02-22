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
        console.log('html');
    }

    public jsonParse(): string {
        console.log('json')
    }

 }

 const Dn = new Downloader(): string;
 Dn.htmlParse();
 Dn.jsonParse();



  