class Page {
    constructor(options) {
        this.search = new Search(options.search);

        this.fetchers = {};
        for (let name in options.fetchers) {
             const fetcher = new Fetcher(options.fetchers[name]);
             fetcher.subscribe(this.search);
             this.fetchers[name] = fetcher;
        }

        this.components = {};

        const comps = options.components;
        for (let name in comps) {
            let comp;
            if ('type' in comps[name]) {
                comp = new comps[name].type(comps[name]);
            } else comp = new Component(comps[name]); 
            comp.onUpdate = function(data) { this.render(data); };

            if ('subscribe' in comps[name]) comp.subscribe(this.fetchers[comps[name].subscribe]);
            this.components[name] = comp;
        }
    }
}


//
//  options:
//      -searchForm   <= str
//      -fetchers     <= object with named Fetcher options
//      -components
//
//
//
//
//
