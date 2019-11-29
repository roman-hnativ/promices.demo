const states = {
  pending: "Pending",
  resolved: "Resolved",
  rejected: "Rejected"
};

class Pavlik {
  constructor(executor) {
    const getCallback = state => value=> {
      console.log("in getCallback:" + state);
      console.log("in getCallback:" + value);

      this.value = value;
      this.state = state;
    };

    const resolve = getCallback(states.resolved);
    const reject = getCallback(states.rejected);

    this.state = states.pending;
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}

new Pavlik((r, notresolve) => r(42));
