let arrays=[];
let eng=[];
let hin=[];
var count=0;
var f_sentence="", flag="";
var n=0;
var word="";
function choice(){
  arrays=[];
	count=0;
	f_sentence="";
  flag=""; word="";
	n=0;
 document.getElementById("wrap").innerHTML = "";
	var reform = document.createElement("input");
reform.type = "button";
  reform.value = "Re-form the sentence"; 
  reform.id = "rf"; 
  reform.onclick = function() {document.getElementById("format").innerHTML = "";
    document.getElementById("words").innerHTML = "";

    sent_b(arrays);};
  var foo4 = document.getElementById("wrap");  
  foo4.appendChild(reform);

	 eng = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"], ["some students like to study in the night","at night some students like to study"], ["John and Mary went to church","Mary and John went to church"], ["John went to church after eating","after eating John went to church","John after eating went to church"], ["did he go to market","he did go to market"], ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"], ["John goes to the library and studies","John studies and goes to the library"], ["John ate an apple so did she","she ate an apple so did John"], ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"], ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday", "I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

	 hin = [["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"], ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"], ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"], ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"], ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"], ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"], ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है", " बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];



	var d= document.getElementById("lang");
	var ch = d.options[d.selectedIndex].text;
	if (ch=="English" || ch=="Hindi"){
		document.getElementById("disp_ins").innerHTML =	"Form a sentence (Declarative or Interrogative or any other type) from the given words " + "<br>" + "(select the buttons in proper order)";
	}
	if(ch =="English"){
		n=Math.floor(Math.random() * 10) + 1;
		var en=eng[n][1];
		//document.getElementById("e").innerHTML = eng[n][1];
		flag="eng"
		randomEng(en);
	}
	else if(ch =="Hindi"){
		n=Math.floor(Math.random() * 7) + 1;
		var hi=hin[n][1];
		//document.getElementById("h").innerHTML = hin[n][1];
		flag="hin"
		randomHin(hi);
	}

}

function randomEng(en){
	var n = en.length;
	en_array=en.trim().split(" ");

	var currentIndex = en_array.length, temporaryValue, randomIndex;
    while (0 != currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = en_array[currentIndex];
    en_array[currentIndex] = en_array[randomIndex];
    en_array[randomIndex] = temporaryValue;
  }
  for (i = 0; i < en_array.length; i++) {
  arrays[i] = en_array[i];
}
  sent_b(en_array);
}


function randomHin(hi){
	var set_h=1;
	var n = hi.length;
	hi_array=hi.trim().split(" ");

	var currentIndex = hi_array.length, temporaryValue, randomIndex;
    while (0 != currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = hi_array[currentIndex];
    hi_array[currentIndex] = hi_array[randomIndex];
    hi_array[randomIndex] = temporaryValue;
  }
 for (i = 0; i < hi_array.length; i++) {
  arrays[i] = hi_array[i];
}
  sent_b(hi_array);
}



function sent_b(array) { 
	clearBox();
	count=0;
	for(i=0; i<array.length; i++){
		add("button", array[i], i);  

}

}

function add(type, val, text) {   
  var element = document.createElement("input"); 
   
  element.type = type;
  element.value = val; 
  element.id = text; 
  element.onclick = function() { 
    document.getElementById("format").innerHTML = "Formed Sentence (after selecting words):";
    
    word+=element.value;
    word+=" ";
    document.getElementById("words").innerHTML = word;
    f_sentence=word;


    var e = document.getElementById(text);
    e.style.display = 'none';
    count=count+1;

    if (count==arrays.length)
	{
	check();
	}

  };
  var foo = document.getElementById("display");  
  foo.appendChild(element);

  
} 

function clearBox()
{
    document.getElementById("display").innerHTML = "";
    //document.getElementById("wrap").innerHTML = "";
    document.getElementById("checkstr").innerHTML = "";
    document.getElementById("checkstring").innerHTML = "";
    document.getElementById("ca").innerHTML = "";
    document.getElementById("answerc").innerHTML = "";
    document.getElementById("answerw").innerHTML = "";
    document.getElementById("correctanswer").innerHTML = "";
    document.getElementById("words").innerHTML = "";
    word="";

}


function check()
{
		var i=0;
var checking = document.createElement("input"); 
  checking.type = "button";
  checking.value = "Check the correctness of the sentence!"; 
  checking.id = "check_sent"; 

var view = document.createElement("input"); 
view.type = "button";
view.value = "View possible correct answers!"; 
view.id = "view_correct"; 

  checking.onclick = function() { 
  
  f_sentence=f_sentence.trim();
  //document.getElementById("checkstring").innerHTML = f_sentence;
  if(flag=="eng")
  {
  	for(i=0; i<eng[n].length;i++)
  	{
  		//document.getElementById("answer").innerHTML = f_sentence;

  		if (f_sentence == eng[n][i])
  		{
        document.getElementById("answerw").innerHTML = "";
        document.getElementById("checkstr").innerHTML = "";
        document.getElementById("ca").innerHTML = "";
  			document.getElementById("answerc").innerHTML = "Correct answer!!";
  			break;
  		}
  		else
  		{
        document.getElementById("answerc").innerHTML = "";
  			document.getElementById("answerw").innerHTML = "Wrong answer";

  			  var foo3 = document.getElementById("ca");  
  				foo3.appendChild(view);

  			view.onclick = function() {
  				
  				var cs="";
  				for(i=0; i<eng[n].length;i++)
  				{
  					cs+=eng[n][i];
  					cs+="<br>"
  				}
  			document.getElementById("correctanswer").innerHTML = cs;
  			var x = document.getElementById("correctanswer");
  			//var x = document.getElementById("view_correct");
  			if (view.value === "View possible correct answers!") {
    		view.value = "Hide answers";
    		x.style.display = "block";
  			} else {
    		view.value = "View possible correct answers!";
  			x.style.display = "none";
  			}

  			}
  		}
  	
  	}
  }
  else
  	{
  		for(i=0; i<hin[n].length;i++)
  		{
  		//document.getElementById("answer").innerHTML = eng[n][i];

  		if (f_sentence == hin[n][i])
  		{
        document.getElementById("answerw").innerHTML = "";
        document.getElementById("checkstr").innerHTML = "";
        document.getElementById("ca").innerHTML = "";
  			document.getElementById("answerc").innerHTML = "Correct answer!!";
  			break;
  		}
  		else
  		{
  			document.getElementById("answerc").innerHTML = "";	
  			document.getElementById("answerw").innerHTML = "Wrong answer";

  			var foo3 = document.getElementById("ca");  
  			foo3.appendChild(view);

  			view.onclick = function() {
  			var cs2="";
  				for(i=0; i<hin[n].length;i++)
  				{
  					cs2+=hin[n][i];
  					cs2+="<br>"
  				}
  			document.getElementById("correctanswer").innerHTML = cs2;
  			var x = document.getElementById("correctanswer");
  			if (view.value === "View possible correct answers!") {
    		view.value = "Hide answers";
    		x.style.display = "block";
  			} else {
    		view.value = "View possible correct answers!";
  			x.style.display = "none";
  			}

  			}
  		}
  	
  		}


  	} 
};

var foo2 = document.getElementById("checkstr");  
  foo2.appendChild(checking);

}