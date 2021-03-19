/*

  Dark Theme
  © Mafee7

*/

var $pageTheme;

try{

const theme = {
  dark: () => {
    $pageTheme = "dark";
  },
	superdark: () => {
		$pageTheme = "sdark";
	},
	light: () => {
		$pageTheme = "light";
	}
}

setInterval(() => {
	if($pageTheme){
		if($pageTheme === "dark"){
			document.querySelectorAll("*").forEach(elem =>{
				elem.style.backgroundColor = `rgb(70,70,70)`;
				elem.style.color = "white";
			});
		}
		if($pageTheme === "sdark"){
			document.querySelectorAll("*").forEach(elem =>{
				elem.style.backgroundColor = `rgb(34,34,34)`;
				elem.style.color = "white";
			});
		}
		if($pageTheme === "light"){
			document.querySelectorAll("*").forEach(elem =>{
				elem.style.backgroundColor = `rgb(200,200,200)`;
				elem.style.color = "black"
			});
		}
	}
}, 100);

ThemeInit();
	
}catch (){
	console.error("Theme.js: An Error Occured.");
}
// Mafee 7

