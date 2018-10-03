class Renderer extends Speaker {
    constructor(subscribe) {
        super(subscribe);
    }

    render(pairs, searchIn = document) {
        for (var objectSelector in pairs) {
            var selectedObject = searchIn.querySelector(objectSelector);
            var selectedObjectItems = pairs[objectSelector];
    
            for (var selector in selectedObjectItems) {
                var item = selectedObjectItems[selector];
                if (item instanceof Array) {
                    var containers = selectedObject.querySelectorAll(selector);
                    for (var i = 0; i < item.length; i++) {
                        if (typeof item[i] == 'object') {
                            for(var property in item[i]) {
                                if (property == 'textContent' || (property == 'src')) 
                                    containers[i][property] = item[i][property];                         
                                else
                                    containers[i].style[property] = item[i][property];
                            }
                        } else containers[i].textContent = item[i];
                    }
                    continue;
                }
                if (typeof item == 'object') {
                    for(var _property in selectedObjectItems[selector]) {
                        selectedObject.querySelector(selector).style[_property] = item[_property];
                    }
                } else selectedObject.querySelector(selector).textContent = item;
            }
        }
    };
}