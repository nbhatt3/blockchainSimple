function blockchain(){
  console.log('Starting blockchain application...');
}
var memPool = [];
var chain = [];
var prevHash = '0000000000000000000000000000000000';
// patientId, testCode,testDateTime,testValue, drId, hospitalId
blockchain.prototype.createTransaction=function(from, to,data){
  console.log('Creating transaction...');
  tx = {};
  // define txn data structure
  tx.from = from;
  tx.to = to;
  tx.data = data;
  tx.meta = {
      dateTime: new Date()
  };
  //To avoid making same data hash each time(txn data values may be same), we are concatinating the data hash with dataTime of txn
  hash = md5(JSON.stringify(tx.data)+ tx.meta.dateTime);
  tx.meta.hash = hash;
  memPool.push(tx);
  console.log(tx);
  return(hash);
};

blockchain.prototype.createBlock=function(){
    let tempBlock = {
          block: chain.length+1,
          transactions: memPool,
          blockMeta: {
            dateTime: new Date(),
            prevHash: prevHash
          }
    };
for(nonce=0;nonce<1000000;nonce++){
  temp_data=(prevHash+JSON.stringify(tempBlock.transactions)+nonce);
  hash=md5(temp_data);
  if(hash.substr(0,4)=='0000'){
    tempBlock.blockMeta.hash = hash;
    tempBlock.blockMeta.nonce= nonce;
    memPool= [];
    chain.push(tempBlock);
    prevHash = hash;
    return hash;
  break;
  }
}
};
