class Component extends Speaker{
    constructor(options, parent = document) {
        super();

        Object.defineProperty(this, 'target', {
            enumerable: false,
            writable: true
        });

        if (options.target instanceof HTMLElement) {
            this.target = options.target;
        } else this.target = parent.querySelector(options.target);
        
        if (this.target == null) throw "Can't find parent node";

        for (let label in options.labels) {
            this[label] = this.target.querySelector(options.labels[label]);
        }
    }

    render(data) {
        for (let item in data) {
            if ( !(item in this) ) continue;//throw 'Property does\'nt exist';
            if (this[item] instanceof Component) {
                 this[item].render(data[item]);
            }
            else
            if (data[item] instanceof Object) {
                let values = data[item];
                for (let key in values) {
                    if (key in this[item]) this[item][key] = values[key];
                    if (key in this[item].style) this[item].style[key] = values[key];
                }
            }

            if (typeof(data[item]) == 'string') this[item].textContent = data[item];
        }
    }
}

class List extends Component {
    constructor(options, parent) {
        super(options, parent);

        let { itemSelector, itemLabels } = options;

        let selectedNodes = this.target.querySelectorAll(itemSelector);
        this.items = Array.prototype.map.call(selectedNodes, x => {
            return new Component({
                target: x,
                labels: itemLabels
            }, parent);
        });
    }

    render(data) { // data must be an array of objects // исправить на data
        for (let i in this.items) {
            this.items[i].render(data[i]);
        }
    }
}
