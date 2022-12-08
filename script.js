let main = document.querySelector("#main")
class Computer {
    constructor(i) {
        this.inputMessage;
        this.sendTo;
        this.sendBtn;
        this.messageBox;
        this.div;
        this.i = i + 1
    }
    buildComputer() {
        this.div = document.createElement("div");
        this.div.setAttribute("id", "c" + this.i)
        this.div.classList.add("computer")
        this.inputMessage = document.createElement("textarea");
        this.inputMessage.placeholder = "Type your message here."
        this.sendTo = document.createElement("input");
        this.sendTo.placeholder = "Send to:"
        this.sendBtn = document.createElement("button");
        this.sendBtn.textContent = "Send"
        this.messageBox = document.createElement("p");
        this.messageBox.textContent = this.div.id + " screen"
        this.div.appendChild(this.inputMessage)
        this.div.appendChild(this.sendTo)
        this.div.appendChild(this.sendBtn)
        this.div.appendChild(this.messageBox)
        main.appendChild(this.div)
    }


}

// let c1 = new Computer()
// console.log(c1.buildComputer())
// c1.buildComputer()
function printComputer(num) {
    for (let i = 0; i < num; i++) {
        let c = new Computer(i)
        c.buildComputer()
        console.log(c)
    }
}
printComputer(3)
let arrayOfComputers = document.querySelectorAll(".computer")

let switchRouter = {

}