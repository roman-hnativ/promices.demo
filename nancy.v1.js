const states = {
  pending: "Pending",
  resolved: "Resolved",
  rejected: "Rejected"
};

class Pavlik {
  constructor(executor) {
    const resolve = () => {
      console.log("in constructor resolve");
      this.state = states.resolved;
    };

    const reject = () => {
      console.log("in constructor reject");
      this.state = states.rejected;
    };

    this.state = states.pending;
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}

new Pavlik(
  (resolve, reject) => {
    console.log("in executor");
    resolve('42');
//    throw new Error();
  }
);
