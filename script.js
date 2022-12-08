let main = document.querySelector("#main")
let cables = document.querySelector("#cables")
// let switchR =document.querySelector("#switchR")

class Computer {
    constructor(i) {
        this.div = document.createElement("div");
        this.inputMessage = document.createElement("textarea");
        this.sendTo = document.createElement("input");
        this.messageBox = document.createElement("p");
        this.sendBtn = document.createElement("button");
        this.i = i + 1

        this.sendBtn.addEventListener("click", this.sendPackage.bind(this))
    }
    buildComputer() {
        this.div.setAttribute("id", "c" + this.i)
        this.div.classList.add("computer")
        this.inputMessage.placeholder = "Type your message here."
        this.inputMessage.textContent = "hello"
        this.sendTo.placeholder = "Send to:"
        this.sendBtn.textContent = "Send"
        this.messageBox.textContent = this.div.id + " screen"
        this.div.appendChild(this.inputMessage)
        this.div.appendChild(this.sendTo)
        this.div.appendChild(this.sendBtn)
        this.div.appendChild(this.messageBox)
        main.appendChild(this.div);
        this.cable = new Cables(this.i);
        arrayOfCables.push(this.cable);
    }

    sendPackage() {
        const cable = this.cable;
        const message = this.inputMessage.value;
        // console.log(message);
        const sender = this.div.id;
        // console.log(sender);
        const reciever = this.sendTo.value;
        // console.log(reciever);
        this.package = new Package(message, sender, reciever, cable);
        this.package.sendToCable(this.package);
    }


    showMessage(p){
        this.messageBox.textContent = p.message;
    }
}

class Package {
    constructor(message, sender, reciever, cable) {
        this.message = message;
        this.sender = sender;
        this.reciever = reciever;
        this.cable = cable;
    }

    sendToCable(p) {
        this.cable.sendToSwitch(p);
    }
}

class Cables {
    constructor(i) {
        this.cable = document.createElement("div");
        this.cable.setAttribute('id', `ca${i}`)
        this.cable.classList.add("cable");
        cables.appendChild(this.cable);
    }

    sendToSwitch(p) {
        // console.log(p.message + p.reciever + p.sender);
        R.sendToReturnCable(p)
    }

    recievePackeage(p,cableId) {
        const receiverComputer = arrayOfComputers[Number(cableId[2])-1]
        const receiverCable = receiverComputer.cable;
        console.log(receiverCable);
        console.log(receiverComputer);
        receiverComputer.showMessage(p);
        // console.log(cableId[2]);
        // console.log(arrayOfComputers[Number(cableId[2])-1]);
    }


}


const arrayOfCables = [];
const arrayOfComputers = [];
class switchRouter {
    constructor(computer) {
        // arrayOfComputers.push(computer);

    }

    sendToReturnCable(p) {
        // console.log(p.sender);
        console.log(p.reciever);
        let cableStr = p.reciever
        let newCablestr = cableStr[0] + "a" + cableStr[1]
        console.log(newCablestr);
        p.cable.recievePackeage(p,newCablestr);
    }


}

function printComputer(num) {
    for (let i = 0; i < num; i++) {
        let c = new Computer(i);
        arrayOfComputers.push(c)
        c.buildComputer()
        // c.sendPackage()
    }
}
const R = new switchRouter();
printComputer(3)

function convertToBinary(str) {
    let binStr = ""
    for (let i = 0; i < str.length; i++) {
        // let strI = str[i]
        // binStr = a.charCodeAt().toString(2)
        binStr += str[i].charCodeAt().toString(2)
    }
    return binStr
}
function convertFromBinary(str) {
    //
}
// let a = "michael"
// convertToBinary(a)
// console.log(arrayOfComputers);