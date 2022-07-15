export default class Observable {
    constructor(value) {
      this._listeners = []; // listener is, in itself, an update() function
      this._value = value;
    }

    notify(listener) {
        listener(this._value);
    }
  
    notifyAll() {
      this._listeners.forEach((listener) => listener(this._value));
    }
  
    attach(listener) {
      this._listeners.push(listener);
    }

    detach(listener) {
        this._listeners = this._listeners.filter((item) => {
                if (item !== listener) 
                    return item;
            }
        );
    }
  
    get value() {
      return this._value;
    }
  
    set value(val) {
      if (val !== this._value) {
        this._value = val;
        this.notifyAll();
      }
    }
}