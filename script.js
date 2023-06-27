// complete the given function

function palindrome(str){
	str = str.split(" ").join("");
	if(str===str.reverse()){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
