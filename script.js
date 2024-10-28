//your JS code here. If required.
document.querySelector("form").addEventListener("submit",(event)=>{
	event.preventDefault();
	const name=document.getElementById("name").value;
	const age=document.getElementById("age").value;

	if(!name || !age){
		alert("inputs can't be empty");
		return;
	}
	function ageValidation(age, name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (parseInt(age) >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // 4-second delay
        });
    }
	ageValidation(age,name)
          .then((result)=>{
			  alert(result);
		  })
          .catch((error)=>{
			  alert(error);
		  });
});