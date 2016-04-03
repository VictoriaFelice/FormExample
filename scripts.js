$("#form").validate({
	rules: {
		inputPONumber : {
			required : true
		},
		inputJobName : {
			required : true
    },
		inputJobDescription : {
			required : true
    },
		inputQuantityNeeded : {
			required : true
    },
		inputDateNeeded : {
			required : true
    }
  },
	//set error messages for the fields
  messages: {
		inputPONumber: "Enter PO Number",
    inputJobName: "Enter job name",
    inputJobDescription: "Enter job description",
		inputQuantityNeeded: "Enter quantity needed",
		inputDateNeeded: "Enter date needed"
  },
  //set submit handler for the form
  submitHandler: function(form) {
    form.submit();
  }
});