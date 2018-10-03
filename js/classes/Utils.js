class Utils {
    static extract(list, req) {
        if (typeof req == 'string')
            return list.map((item) => item[req]);
        
        return list.map(function(item) {
            let buf = {};
            for(let styleProperty in req) {
                if (req[styleProperty] instanceof Array)
                    buf[styleProperty] = req[styleProperty][1](item[req[styleProperty][0]]);
                else
                    buf[styleProperty] = (req[styleProperty])(item[styleProperty]);
            }
            return buf;
        });
    }

    static initTabberElement(initData) {
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
}