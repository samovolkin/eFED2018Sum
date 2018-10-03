class Fetcher extends Speaker {
    constructor(options) {
        super(options.subscribe, options.subscribers);
        delete options.subscribe;
        delete options.subscribers;
        this.options = options;
        this.url = options.url;
    }

    async onUpdate(query) {
        let request = `${this.url}?${query}`;
        
        for (let i in this.options.param) {
            request += `&${i}=${this.options.param[i]}`;
        }

        request.slice(0, request.length - 1);
        console.log(request);

        let response = await fetch(request);
        response = await response.json();

        console.log(`Data before:`);
        console.log(response);
        const transformedData = this.options.mapper(response);
        console.log(`Data after:`);
        console.log(transformedData);
        this.share(transformedData);
    }
}