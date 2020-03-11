const FURFILLED = 'FURFILLED';
const REJECTED = 'REJECTED';
const PEDDING = 'PENDDING';

class Promise {
  constructor(excutor) {
    //
    this.value = null;
    this.status = PEDDING;
    this.onRejectedCallBack = [];
    this.onResolvedCallBack = [];
    // resolvefangfa
    resolve = (value) => {
      if (this.status !== PEDDING) return;
      this.status = FURFILLED;
      this.value = value;
      this.onResolvedCallBack.forEach(fn => fn());
    }
    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then ()
}