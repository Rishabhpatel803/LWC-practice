var callbacks = {};

const register = (eventName, callback) => {
    if(!callbacks[eventName]){
        callbacks[eventName] = new Set();
    }
    callbacks[eventName].add(callback); // storing the callback with the event name
};


const unregister = (eventName, callback) => {
    if(!callbacks[eventName]){
        callbacks[eventName].delete(callback);
    }
};

const unregisterAll = () => {
    callbacks = {};
}

const fire = (eventName, payload) => {
    if(callbacks[eventName]){
        callbacks[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                
            }
        });
    }
};

export default {
    register,
    unregister,
    fire,
    unregisterAll
};