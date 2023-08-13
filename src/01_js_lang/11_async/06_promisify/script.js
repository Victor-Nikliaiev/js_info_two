function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

function loadScriptPromise(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (error, script) => {
            if (error) {
                reject(error);
            } else {
                resolve(script);
            }
        });
    });
}

function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(error, ...results) {
                if (error) {
                    reject(error);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);

            f.call(this, ...args);
        });
    };
}
