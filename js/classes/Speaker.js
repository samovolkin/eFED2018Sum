function Speaker(subscribe, subscribers) {
    this.subscribers = subscribers || [];

    if (subscribe instanceof Array) {
        for (var i of subscribe)
            this.subscribe(i);
    } 
    else if (subscribe instanceof Speaker) {
        this.subscribe(subscribe);
    }
}


Speaker.prototype.share = function (data) {
    for (var subcriber of this.subscribers) {
        new Promise(function(resolve, reject) {
            subcriber.onUpdate(data);
        });
    }
    console.log(`Data shared from ${this.constructor.name}`)
};

Speaker.prototype.addSubscriber = function(sub) {
    if (sub in this.subscribers) {
        console.warn(`Subscriber ${sub.constructor.name} is already in subscribers list`);
    }
    else {
        this.subscribers.push(sub);
        console.log(`${sub.constructor.name} is sub of ${this.constructor.name} now`);
    }
};

Speaker.prototype.removeSubscriber = function(sub) {
    this.subscribers = this.subscribers.filter(x => x != sub);
};

Speaker.prototype.subscribe = function(speaker) {
    speaker.addSubscriber(this);
};

Speaker.prototype.unsubscribe = function(speaker) {
    speaker.removeSubscriber(this);
};

Speaker.prototype.onUpdate = function (data) {
    console.log('Got: ' + data);
}

Speaker.prototype.constructor = Speaker;