function Fetcher(url, options, subscribe, subscribers) {
    var _ = this;
    Speaker.call(this, subscribe, subscribers);
    this.onUpdate = function (query) {
        var request = `${url}?${query}`;
        
        for (var i in options.param) {
            request += `&${i}=${options.param[i]}`;
        }

        request.slice(0, request.length - 1);
        console.log(request);

        fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var transformedData = new options.transformer(data);
            _.share(transformedData);
        });
    }
}


Fetcher.prototype = Object.create(Speaker.prototype);
Fetcher.prototype.constructor = Fetcher;