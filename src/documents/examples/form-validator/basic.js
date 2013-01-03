AUI().ready('aui-form-validator', function(A) {

  var validator1 = new A.FormValidator({
    boundingBox: '#fm1',

    rules: {
      name: {
        required: true
      },
      email: {
        required: true
      },
      age: {
        required: true,
        digits: true
      }
    }
  });
});