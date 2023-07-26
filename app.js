const btn1 = document.querySelector(".num-1");
const btn2 = document.querySelector(".num-2");
const btn3 = document.querySelector(".num-3");
const btn4 = document.querySelector(".num-4");

const section = document.querySelector("section");


const info = document.getElementById("info");
const plan = document.getElementById("plan");
const addon = document.getElementById("addon");
const summary  = document.getElementById("summary");

const infoNxtBtn = document.getElementById('info-nxt');
const planBckBtn = document.getElementById('plan-bck');
const planNxtBtn = document.getElementById('plan-nxt');
const addonBckBtn = document.getElementById('addon-bck');
const addonNxtBtn = document.getElementById('addon-nxt');
const summaryBckBtn = document.getElementById('summary-bck');
const summaryConfBtn = document.getElementById('summary-confirm');


infoNxtBtn.addEventListener("click", ()=> {
    if (userName==='' || userEmail==='' || userPhone==='') {
        alert("Please, fill in all required fields")
    }
    else{
        loadPlan();
    }
});
planBckBtn.addEventListener("click", loadInfo);
planNxtBtn.addEventListener("click", loadAddon);
addonBckBtn.addEventListener("click", loadPlan);
addonNxtBtn.addEventListener("click", loadSummary);
summaryBckBtn.addEventListener("click", loadAddon);
summaryConfBtn.addEventListener("click", loadThankYou);

window.addEventListener("DOMContentLoaded", ()=> {
    userPlan = [9, 'mo', 'Arcade (Monthly)'];
    a = 0;
    userName = "";
    userEmail = "";
    userPhone = "";

    nameInput.value = userName;
    emailInput.value = userEmail;
    phoneInput.value = userPhone;
});

/*logic for info page*/
let userName;
let userEmail;
let userPhone;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const spanMsg = document.getElementById("empty-name");
const spanMsg1 = document.getElementById("empty-email");
const spanMsg2 = document.getElementById("empty-phone");

spanMsg.style.display = 'inline';
nameInput.classList.add("empty-field");
spanMsg1.style.display = 'inline';
emailInput.classList.add("empty-field");
spanMsg2.style.display = 'inline';
phoneInput.classList.add("empty-field");

nameInput.addEventListener("focus", checkInput);
nameInput.addEventListener("input", checkInput);
emailInput.addEventListener("focus", checkInput);
emailInput.addEventListener("input", checkInput);
phoneInput.addEventListener("focus", checkInput);
phoneInput.addEventListener("input", checkInput);

function checkInput() {
    if (nameInput.value === "") {
        spanMsg.style.display = 'inline';
        nameInput.classList.add("empty-field");
    } else {
        spanMsg.style.display = 'none';
        nameInput.classList.remove("empty-field");
    }
    if (emailInput.value === "") {
        spanMsg1.style.display = 'inline';
        emailInput.classList.add("empty-field");
    } else {
        spanMsg1.style.display = 'none';
        emailInput.classList.remove("empty-field");
    }
    if (phoneInput.value === "") {
        spanMsg2.style.display = 'inline';
        phoneInput.classList.add("empty-field");
    } else {
        spanMsg2.style.display = 'none';
        phoneInput.classList.remove("empty-field");
    }
    userName = nameInput.value;
    userEmail = emailInput.value;
    userPhone = phoneInput.value;
}

/*end of info logic*/


/*logic for the plan page*/
const switcher = document.querySelector(".switch");
const moPlan = document.getElementById("monthly-plan");
const yrPlan = document.getElementById("yearly-plan");
switcher.addEventListener("input", togglePlan);

let userPlan;

function togglePlan() {
    if (switcher.checked) {
        yrPlan.style.display = "flex";
        moPlan.style.display = "none";
        chooseArcadeYr();

        /*addons page yr sub display*/
        yrAddon.style.display = 'flex';
        moAddon.style.display = 'none';
        userAddon = [];

    }
    else {
        moPlan.style.display = "flex";
        yrPlan.style.display = "none";
        chooseArcadeMo();

        /*addon mo sub display*/
        moAddon.style.display = 'flex';
        yrAddon.style.display = 'none';
        userAddon = [];

    }
}

const arcadeMo = document.getElementById("arcade-month");
const advanceMo = document.getElementById("advanced-month");
const proMo = document.getElementById("pro-month");

arcadeMo.addEventListener("click", chooseArcadeMo);
advanceMo.addEventListener("click", chooseAdvanceMo);
proMo.addEventListener("click", chooseProMo);

const arcadeYr = document.getElementById("arcade-year");
const advanceYr = document.getElementById("advanced-year");
const proYr = document.getElementById("pro-year");

arcadeYr.addEventListener("click", chooseArcadeYr);
advanceYr.addEventListener("click", chooseAdvanceYr);
proYr.addEventListener("click", chooseProYr);

function chooseArcadeMo() {
    arcadeMo.classList.add("plan-select");
    advanceMo.classList.remove("plan-select");
    proMo.classList.remove("plan-select");
    userPlan = [9, 'mo', 'Arcade (Monthly)'];
    console.log(userPlan)
}
function chooseAdvanceMo() {
    advanceMo.classList.add("plan-select");
    arcadeMo.classList.remove("plan-select");
    proMo.classList.remove("plan-select");
    userPlan = [12, 'mo', 'Advanced (Monthly)'];
    console.log(userPlan)
}
function chooseProMo() {
    proMo.classList.add("plan-select");
    arcadeMo.classList.remove("plan-select");
    advanceMo.classList.remove("plan-select");
    userPlan = [15, 'mo', 'Pro (Monthly)'];
    console.log(userPlan)
}

function chooseArcadeYr() {
    arcadeYr.classList.add("plan-select");
    advanceYr.classList.remove("plan-select");
    proYr.classList.remove("plan-select");
    userPlan = [90, 'yr', 'Arcade (Yearly)'];
    console.log(userPlan)
}
function chooseAdvanceYr() {
    advanceYr.classList.add("plan-select");
    arcadeYr.classList.remove("plan-select");
    proYr.classList.remove("plan-select");
    userPlan = [120, 'yr', 'Advanced (Yearly)'];
    console.log(userPlan)
}
function chooseProYr() {
    proYr.classList.add("plan-select");
    arcadeYr.classList.remove("plan-select");
    advanceYr.classList.remove("plan-select");
    userPlan = [150, 'yr', 'Pro (Monthly)'];
    console.log(userPlan)
}

/*end of plan logic*/


/*logic for addons page*/
let userAddon = [];

const moAddon = document.getElementById("addon-month");
const yrAddon = document.getElementById("addon-year");

const onlineServiceMo = document.getElementById("on-service-mo");
const largerStorageMo = document.getElementById("large-sto-mo");
const customMo = document.getElementById("custom-mo");

const onlineServiceMoCheck = document.getElementById("on-service-check-mo");
const largerStorageMoCheck = document.getElementById("large-sto-check-mo");
const customMoCheck = document.getElementById("custom-check-mo");

onlineServiceMoCheck.addEventListener("change", chooseOnlineServiceMo);
largerStorageMoCheck.addEventListener("change", chooseLargeStorageMo);
customMoCheck.addEventListener("change", chooseCustomMo);

const onlineServiceYr = document.getElementById("on-service-yr");
const largerStorageYr = document.getElementById("large-sto-yr");
const customYr = document.getElementById("custom-yr");

const onlineServiceYrCheck = document.getElementById("on-service-check-yr");
const largerStorageYrCheck = document.getElementById("large-sto-check-yr");
const customYrCheck = document.getElementById("custom-check-yr");

onlineServiceYrCheck.addEventListener("change", chooseOnlineServiceYr);
largerStorageYrCheck.addEventListener("change", chooseLargeStorageYr);
customYrCheck.addEventListener("change", chooseCustomYr);


function chooseOnlineServiceMo() {
    if (onlineServiceMoCheck.checked) {
        onlineServiceMo.classList.add("addon-select");
        userAddon.push([1, 'mo', 'Online Service']);
        console.log(userAddon)
    }
    else {
        onlineServiceMo.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[1, 'mo', 'Online Service'].toString());
        console.log(userAddon)
    }
}
function chooseLargeStorageMo() {
    if (largerStorageMoCheck.checked) {
        largerStorageMo.classList.add("addon-select");
        userAddon.push([2, 'mo', 'Large Storage']);
        console.log(userAddon)
    }
    else {
        largerStorageMo.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[2, 'mo', 'Large Storage'].toString());
        console.log(userAddon)
    }
}
function chooseCustomMo() {
    if (customMoCheck.checked) {
        customMo.classList.add("addon-select");
        userAddon.push([2, 'mo', 'Customization']);
        console.log(userAddon)
    }
    else {
        customMo.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[2, 'mo', 'Customization'].toString());
        console.log(userAddon)
    }
}

function chooseOnlineServiceYr() {
    if (onlineServiceYrCheck.checked) {
        onlineServiceYr.classList.add("addon-select");
        userAddon.push([10, 'yr', 'Online Service']);
        console.log(userAddon)
    }
    else {
        onlineServiceYr.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[10, 'yr', 'Online Service'].toString());
        console.log(userAddon)
    }
}
function chooseLargeStorageYr() {
    if (largerStorageYrCheck.checked) {
        largerStorageYr.classList.add("addon-select");
        userAddon.push([20, 'yr', 'Large Storage']);
        console.log(userAddon)
    }
    else {
        largerStorageYr.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[20, 'yr', 'Large Storage'].toString());
        console.log(userAddon)
    }
}
function chooseCustomYr() {
    if (customYrCheck.checked) {
        customYr.classList.add("addon-select");
        userAddon.push([20, 'yr', 'Customization']);
        console.log(userAddon)
    }
    else {
        customYr.classList.remove("addon-select");
        userAddon = userAddon.filter(i=>i.toString()!==[20, 'yr', 'Customization'].toString());
        console.log(userAddon)
    }
}

/*end of addon logic*/

/*logic for summary page*/

const Summary = document.querySelector(".ind-sum");
const summaryCont = document.getElementById("summary-cont");

let a;


function loadInfo () {
    if (plan.classList[1] === undefined) {
        plan.classList.add("hide");

        if (btn2.classList[1] === "active-btn") {
            btn2.classList.remove("active-btn");
        }
    }
    else if (addon.classList[1] === undefined) {
        addon.classList.add("hide");

        if (btn3.classList[1] === "active-btn") {
            btn3.classList.remove("active-btn");
        }
    }
    else if (summary.classList[1] === undefined) {
        summary.classList.add("hide");

        if (btn4.classList[1] === "active-btn") {
            btn4.classList.remove("active-btn");
        }
    }

    if (info.classList[1] === "hide") {
        info.classList.remove("hide");
        btn1.classList.add("active-btn");
    }
}

function loadPlan() {
    if (info.classList[1] === undefined) {
        info.classList.add("hide");

        if (btn1.classList[1] === "active-btn") {
            btn1.classList.remove("active-btn")
        }
    }
    else if (addon.classList[1] === undefined) {
        addon.classList.add("hide");

        if (btn3.classList[1] === "active-btn") {
            btn3.classList.remove("active-btn");
        }
    }
    else if (summary.classList[1] === undefined) {
        summary.classList.add("hide");

        if (btn4.classList[1] === "active-btn") {
            btn4.classList.remove("active-btn");
        }
    }

    plan.classList.remove("hide");
    btn2.classList.add("active-btn");

}

function loadAddon() {
    if (info.classList[1] === undefined) {
        info.classList.add("hide");

        if (btn1.classList[1] === "active-btn") {
            btn1.classList.remove("active-btn")
        }
    }
    else if (plan.classList[1] === undefined) {
        plan.classList.add("hide");

        if (btn2.classList[1] === "active-btn") {
            btn2.classList.remove("active-btn");
        }
    }
    else if (summary.classList[1] === undefined) {
        summary.classList.add("hide");

        if (btn4.classList[1] === "active-btn") {
            btn4.classList.remove("active-btn");
        }
    }

    addon.classList.remove("hide");
    btn3.classList.add("active-btn");

}

function loadSummary() {
    if (info.classList[1] === undefined) {
        info.classList.add("hide");

        if (btn1.classList[1] === "active-btn") {
            btn1.classList.remove("active-btn")
        }
    }
    else if (plan.classList[1] === undefined) {
        plan.classList.add("hide");

        if (btn2.classList[1] === "active-btn") {
            btn2.classList.remove("active-btn");
        }
    }
    else if (addon.classList[1] === undefined) {
        addon.classList.add("hide");

        if (btn3.classList[1] === "active-btn") {
            btn3.classList.remove("active-btn");
        }
    }

    summary.classList.remove("hide");
    btn4.classList.add("active-btn");

    Summary.innerHTML = `
    <h4 style="color: hsl(213, 96%, 18%);">${userName}</h4>
    <div style="height: 50px;">
      <label style="font-size:14px; font-weight:500; color: hsl(213, 96%, 18%); line-height:2;" id="summary-plan-name">
        ${userPlan[2]}
        <span style="float:right; font-size:14px; opacity:1; font-weight:500; position:relative; top:13px;" id="summary-plan-price">$${userPlan[0]}/${userPlan[1]}</span>
        <span style="display:block; font-size:12px;"><a style="color: black;" href="#">Change</a></span>
      </label>
    </div>
    

`;
    userAddon.forEach(adds=> {
        Summary.innerHTML += `
    <hr>
    <div style="height: 15px;">
      <label style="font-size:12px; font-weight:500; color:black;">
        <span style="opacity:0.5;">${adds[2]}</span>
        <span style="float:right; font-size:13px; font-weight:400; opacity:1; color: hsl(213, 96%, 18%);">$${adds[0]}/${adds[1]}</span>
      </label>
    </div>
        `
        a += adds[0]

    })

    let totalDiv = document.createElement("div");
    totalDiv.classList = 'total-sum';
    totalDiv.innerHTML = `
            <label style="font-size:12px; font-weight:500; color:black;">
              <span style="opacity:0.5;">Total (per month)</span>
              <span style="float:right; font-size:16px; font-weight:700; opacity:1; color:hsl(243, 100%, 62%)">$${userPlan[0]+a}/${userPlan[1]}</span>
            </label>        
    `
    if (!summaryCont.children[1]) {
        summaryCont.appendChild(totalDiv);
    }
    else {
        summaryCont.children[1].remove();
        summaryCont.appendChild(totalDiv);
    }
    console.log(summaryCont.children[1]);
    a = 0;

}

function loadThankYou() {
    /*function printPage(theDiv) {
        let printPg = window.open('');
        /!*printPg.document.write(document.querySelector(klass).innerHTML);*!/
        printPg.document.write(theDiv.innerHTML);
        printPg.print();
    }
    printPage(summaryCont);*/
    /*window.print();*/
    const thankYou = document.getElementById('thank-you');
    summary.classList.add("hide");
    thankYou.style.display = 'flex';
}
