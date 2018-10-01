class Speaker {
    constructor(subscribe, subscribers = []) {
        this.subscribers = subscribers;
    
        if (subscribe instanceof Array) {
            for (let i of subscribe)
                this.subscribe(i);
        } 
        else if (subscribe instanceof Speaker) {
            this.subscribe(subscribe);
        }
    }

    share(data) {
        for (let subcriber of this.subscribers) {
            //new Promise(function(resolve, reject) {
                subcriber.onUpdate(data);
            //});
        }
        console.log(`Data shared from ${this.constructor.name}`)
    }

    addSubscriber(sub) {
        if (sub in this.subscribers) {
            console.warn(`Subscriber ${sub.constructor.name} is already in subscribers list`);
        }
        else {
            this.subscribers.push(sub);
            console.log(`${sub.constructor.name} is sub of ${this.constructor.name} now`);
        }
    }

    removeSubscriber(sub) {
        this.subscribers = this.subscribers.filter(x => x != sub);
    }

    subscribe(speaker) {
        speaker.addSubscriber(this);
    }

    unsubscribe(speaker) {
        speaker.removeSubscriber(this);
    }

    onUpdate(data) {
        console.log('Got: ' + data);
    }
}