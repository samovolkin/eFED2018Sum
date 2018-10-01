class Utils {
    static extract(list, req) {
        if (typeof req == 'string')
            return list.map((item) => item[req]);
        
        return list.map(function(item) {
            let buf = {};
            for(let styleProperty in req) {
                if (req[styleProperty] instanceof Array)
                    buf[styleProperty] = req[styleProperty][1](item[req[styleProperty][0]]);
                else
                    buf[styleProperty] = (req[styleProperty])(item[styleProperty]);
            }
            return buf;
        });
    }
}