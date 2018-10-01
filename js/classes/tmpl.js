
var cCurrentWeather = new Component({
    target: '.container',
    subscribe: null,
    labels: {
        lb: '.labell'
    },
    childList: {
        input: {
            type: List,
            options: {
                target: '.list',
                itemSelector: '.list__item',
                itemLabels: {
                    day: '.day',
                    id: '.in'
                }
            }
        }
    }
});
