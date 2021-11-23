class Duties {
    constructor(des,skill){
        this._des = des;
        this._skill = skill;  // skill need to be array
    }

    get des() {
        return this._des;
    }

    get skill(){
        return this._skill;
    }
}

const Duty = new Duties("conducting Building Inspection",["Yardi Inspection", "Excel Sheet"]);






document.getElementById("container").innerHTML =`
<h1 class="title">Managment Aide Status </h2>
<div><h2>Duties: ${Duty.des}</h2>
<h3>Technical Skills: ${Duty.skill} </h3>
</div>`

;
