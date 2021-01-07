var business = {
	first : "google",
	second : "apple",
	third : "microsoft",
	fourth : "FB",
	fifth: "tiwt" ,

	fullName : function(){
		return this.first + " " +this.fifth;
	}
	
};
document.getElementById("test").innerHTML = business.fullName();

