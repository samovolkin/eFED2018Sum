function createTabberElement(id, buttonSelector, blockSelector, noneStyle, buttonSelected) {
    var tabber = document.getElementById(id);
    tabber.buttons = tabber.querySelectorAll(buttonSelector);
    tabber.blocks = tabber.querySelectorAll(blockSelector);
    tabber.index = 0;
    tabber.onclick = function(event) {
        if (event.target.classList.contains(buttonSelector.slice(1))) {
            var i = Array.prototype.indexOf.call(this.buttons, event.target);
            if (i == -1) return -1;
            this.blocks[this.index].classList.add(noneStyle);
            this.buttons[this.index].classList.remove(buttonSelected);
            this.index = i;
            this.buttons[this.index].classList.add(buttonSelected);
            this.blocks[this.index].classList.remove(noneStyle);
        }
    };
}
