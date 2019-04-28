function blockchain(){
  console.log('Starting blockchain application...');
}
var memPool = [];
// the long data input parameters are prone to any missing data , or mismatch. So this long input should be avoided
// Also, 2 parameters from, to should be separated. All data elements should be sent directly from front-end collectively in a JSON format
blockchain.prototype.createTransaction=function(from, to,patientId, testCode,testDateTime,testValue, drIncharge, hospitalId){
  console.log('Creating transaction...');
  console.log(from+' : '+to+' : '+assetid+' : '+amount);
  tx = {};
  // define txn data structure
  tx.from = from;
  tx.to = to;
  tx.data = {
    patientId : patientId,
    testCode: testCode,
    testDateTime: testDateTime,
    testValue: testValue,
    drIncharge: drIncharge,
    hospitalId: hospitalId
  };

  hash = md5(JSON.stringify(tx.data));
  tx.hash = hash;
  tx.time = new Date();
  memPool.push(tx);
  console.log(tx);
}
