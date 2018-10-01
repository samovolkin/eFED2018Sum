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
            const comp = new Component(comps[name]);
            comp.subscribe(this.fetchers[comps[name].subscribe]);
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
