var Project = /** @class */ (function () {
    function Project(indate, inname) {
        this.date = indate;
        this.name = inname;
    }
    Project.prototype.getDate = function () {
        return this.date;
    };
    return Project;
}());
var VRP = new Project('Jul 2019 - Jun 2021', 'VRP');
var KP = new Project('Nov 2019 - Jan 2020', 'KP');
function button(ProjectName) {
    var element = document.getElementById(ProjectName);
    var compare = function (a, b, c) {
        console.log(a.name + " " + ProjectName);
        console.log(a.name === ProjectName);
        return a.name === c ? a.getDate() : b.date;
    };
    element.innerHTML = compare(VRP, KP, ProjectName);
}
