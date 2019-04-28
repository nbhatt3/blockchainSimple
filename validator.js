function validator(){
    var valid=true;

    if($('#patientID').val()==''){
        valid=false;
      }
      return valid;
}