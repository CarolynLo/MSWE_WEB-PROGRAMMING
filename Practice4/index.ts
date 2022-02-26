class Project{
    date: string;
    name: string;
    constructor(indate: string, inname: string) {
    this.date=indate;
    this.name = inname;
    }
    public getDate(){
        return this.date;
    }
   }
const VRP=new Project('Jul 2019 - Jun 2021','VRP');
const KP=new Project('Nov 2019 - Jan 2020','KP');
function button(ProjectName: string): void{
    const element: HTMLElement = document.getElementById(ProjectName) as HTMLElement
    const compare = (a: Project, b: Project, c:String): string => {
        console.log(a.name+" "+ProjectName);
        console.log(a.name===ProjectName);
        return a.name===c ?a.getDate():b.date;
    }
        element.innerHTML = compare(VRP,KP,ProjectName);
}
