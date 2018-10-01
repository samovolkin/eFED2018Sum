const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

var searchInput = document.getElementById("search-input");
searchInput.onkeydown = function(event) {
    if (event.keyCode != 13) return;

    var searchRequest = searchInput.value;
    console.log(searchRequest);
    var query = /^zip\:\d+$/.test(searchRequest) ? `zip=${searchRequest.slice(4)}` : `q=${searchRequest}`;
    searchInput.value = "";
    updateInfoViaMock(searchRequest);
};

function updateInfoViaMock(req) {
    render({
        ".average-maximum": {
            ".row__cell": extract(historyWeatherMock[req], "average-maximum"),
        },
        ".average-minimum": {
            ".row__cell": extract(historyWeatherMock[req], "average-minimum"),
        },
        ".record-maximum": {
            ".row__cell": extract(historyWeatherMock[req], "record-maximum"),
        },
        ".record-minimum": {
            ".row__cell": extract(historyWeatherMock[req], "record-minimum"),
        },
    });
}

function render(pairs, searchIn = document) {
    for (var objectSelector in pairs) {
        var selectedObject = searchIn.querySelector(objectSelector);
        var selectedObjectItems = pairs[objectSelector];

        for (var selector in selectedObjectItems) {
            var item = selectedObjectItems[selector];
            if (item instanceof Array) {
                var containers = selectedObject.querySelectorAll(selector);
                for (var i = 0; i < item.length; i++) {
                    if (typeof item[i] == "object") {
                        for (var property in item[i]) {
                            if (property == "textContent" || property == "src")
                                containers[i][property] = item[i][property];
                            else containers[i].style[property] = item[i][property];
                        }
                    } else containers[i].textContent = item[i];
                }
                continue;
            }
            if (typeof item == "object") {
                for (var _property in selectedObjectItems[selector]) {
                    selectedObject.querySelector(selector).style[_property] = item[_property];
                }
            } else selectedObject.querySelector(selector).textContent = item;
        }
    }
}

var historyWeatherMock = {
    Izhevsk: [
        {
            "average-maximum": -10,
            "average-minimum": -16,
            "record-minimum": -31,
            "record-maximum": 1,
        },
        {
            "average-maximum": -7,
            "average-minimum": -14,
            "record-minimum": -20,
            "record-maximum": 0,
        },
        {
            "average-maximum": 0,
            "average-minimum": -10,
            "record-minimum": -16,
            "record-maximum": 5,
        },
        {
            "average-maximum": 0,
            "average-minimum": -5,
            "record-minimum": -10,
            "record-maximum": 6,
        },
        {
            "average-maximum": 10,
            "average-minimum": 0,
            "record-minimum": -5,
            "record-maximum": 15,
        },
        {
            "average-maximum": 15,
            "average-minimum": 5,
            "record-minimum": -1,
            "record-maximum": 20,
        },
        {
            "average-maximum": 23,
            "average-minimum": 14,
            "record-minimum": 10,
            "record-maximum": 30,
        },
        {
            "average-maximum": 30,
            "average-minimum": 20,
            "record-minimum": 14,
            "record-maximum": 35,
        },
        {
            "average-maximum": 20,
            "average-minimum": 14,
            "record-minimum": 7,
            "record-maximum": 25,
        },
        {
            "average-maximum": 14,
            "average-minimum": 7,
            "record-minimum": 0,
            "record-maximum": 18,
        },
        {
            "average-maximum": 4,
            "average-minimum": -8,
            "record-minimum": -14,
            "record-maximum": 10,
        },
        {
            "average-maximum": -10,
            "average-minimum": -16,
            "record-minimum": -20,
            "record-maximum": -5,
        },
    ],
    Sarapul: [
        {
            "average-maximum": -8,
            "average-minimum": -15,
            "record-minimum": -25,
            "record-maximum": 1,
        },
        {
            "average-maximum": -7,
            "average-minimum": -14,
            "record-minimum": -20,
            "record-maximum": 0,
        },
        {
            "average-maximum": 5,
            "average-minimum": -7,
            "record-minimum": -16,
            "record-maximum": 9,
        },
        {
            "average-maximum": 0,
            "average-minimum": -5,
            "record-minimum": -10,
            "record-maximum": 6,
        },
        {
            "average-maximum": -14,
            "average-minimum": 0,
            "record-minimum": -7,
            "record-maximum": 15,
        },
        {
            "average-maximum": -14,
            "average-minimum": 5,
            "record-minimum": -1,
            "record-maximum": 10,
        },
        {
            "average-maximum": 23,
            "average-minimum": 14,
            "record-minimum": 10,
            "record-maximum": 30,
        },
        {
            "average-maximum": 30,
            "average-minimum": 20,
            "record-minimum": 14,
            "record-maximum": 35,
        },
        {
            "average-maximum": 15,
            "average-minimum": 14,
            "record-minimum": 7,
            "record-maximum": 24,
        },
        {
            "average-maximum": 14,
            "average-minimum": 7,
            "record-minimum": 0,
            "record-maximum": 18,
        },
        {
            "average-maximum": 7,
            "average-minimum": -8,
            "record-minimum": -12,
            "record-maximum": 10,
        },
        {
            "average-maximum": -10,
            "average-minimum": -16,
            "record-minimum": -20,
            "record-maximum": -5,
        },
    ],
    Moscow: [
        {
            "average-maximum": -8,
            "average-minimum": -15,
            "record-minimum": -20,
            "record-maximum": 1,
        },
        {
            "average-maximum": -7,
            "average-minimum": -14,
            "record-minimum": -19,
            "record-maximum": 0,
        },
        {
            "average-maximum": 5,
            "average-minimum": -7,
            "record-minimum": -16,
            "record-maximum": 9,
        },
        {
            "average-maximum": 1,
            "average-minimum": -5,
            "record-minimum": -10,
            "record-maximum": 10,
        },
        {
            "average-maximum": -13,
            "average-minimum": 0,
            "record-minimum": -7,
            "record-maximum": 16,
        },
        {
            "average-maximum": -14,
            "average-minimum": 5,
            "record-minimum": -1,
            "record-maximum": 10,
        },
        {
            "average-maximum": 23,
            "average-minimum": 14,
            "record-minimum": 10,
            "record-maximum": 30,
        },
        {
            "average-maximum": 24,
            "average-minimum": 20,
            "record-minimum": 14,
            "record-maximum": 31,
        },
        {
            "average-maximum": 15,
            "average-minimum": 14,
            "record-minimum": 7,
            "record-maximum": 24,
        },
        {
            "average-maximum": 14,
            "average-minimum": 7,
            "record-minimum": 0,
            "record-maximum": 18,
        },
        {
            "average-maximum": 4,
            "average-minimum": -8,
            "record-minimum": -12,
            "record-maximum": 10,
        },
        {
            "average-maximum": -12,
            "average-minimum": -16,
            "record-minimum": -23,
            "record-maximum": -5,
        },
    ],
};
