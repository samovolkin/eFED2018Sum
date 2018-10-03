class Search extends Speaker {
    constructor(selector, subscribers) {
        super(subscribers);
        this.target = document.querySelector(selector);
        this.target.onkeydown = (event) => {
            //event.preventDefault();
            if (event.keyCode != 13) return;
    
            const query = this.target.value;
            this.target.value = '';
            this.share(`q=${query}`);
        };
    }
}