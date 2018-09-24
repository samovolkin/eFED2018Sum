function Search(id, subscribers) {
    Speaker.call(this, subscribers);
    this.node = document.getElementById(id);
    this.node.onkeydown = function (event) {
        //event.preventDefault();
        if (event.keyCode != 13) return;

        var query = this.node.value;
        this.node.value = '';
        this.share(`q=${query}`);
    }.bind(this);
}


Search.prototype = Object.create(Speaker.prototype);
Search.prototype.constructor = Search;