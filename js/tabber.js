function initTabberElement(initData) {
    var tabber = document.getElementById(initData.id);
    tabber.buttons = tabber.querySelectorAll(initData.buttons.selector);
    tabber.blocks = tabber.querySelectorAll(initData.blocks.selector);
    tabber.index = 0;
    tabber.onclick = function(event) {
        if (event.target.classList.contains(initData.buttons.selector.slice(1))) {
            var i = Array.prototype.indexOf.call(this.buttons, event.target);
            if (i == -1) return -1;
            this.blocks[this.index].classList.add(initData.blocks.none);
            this.buttons[this.index].classList.remove(initData.buttons.selected);
            this.index = i;
            this.buttons[this.index].classList.add(initData.buttons.selected);
            this.blocks[this.index].classList.remove(initData.blocks.none);
        }
    };
}
