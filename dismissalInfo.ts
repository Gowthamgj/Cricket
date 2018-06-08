export class DismissalInfo{
    private fielderName:string|null;
    private bowlerName:string|null;
    constructor(){
        this.fielderName=null;
        this.bowlerName=null;
    }
    fixOutInfo(fname:string,bname:string){
        this.fielderName=fname;
        this.bowlerName=bname;
    }
}