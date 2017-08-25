var BasicCard = required("./BasicCard.js");

var ClozeCard = fuction(text, cloze){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = function() {
		if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
			}else{
	
				this.brokenCloze = function(){
					if(err);
					console.log("Error")
					};
	}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(this.cloze);
console.log(this.fullText);


module.exports = ClozeCard;


