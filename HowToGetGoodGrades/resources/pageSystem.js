var back = document.getElementById("back");
var next = document.getElementById("next");
var heading = document.getElementById("heading");
var main = document.getElementById("main");
var pageCount = document.getElementById("pageCount");
var pageBar = document.getElementById("pageBar");
var grayOut = function()
{
	if(pageNum===0)
	{
		back.className="grayOut";
		back.disabled=true;
	}
	else
	{
		back.className="";
		back.disabled=false;
	}
	if(pageNum==(pageHeadings.length-1))
	{
		next.className="grayOut";
		next.disabled=true;
	}
	else
	{
		next.className="";
		next.disabled=false;
	}
};
var update = function()
{
	heading.innerHTML=pageHeadings[pageNum];
	main.innerHTML=pageBodies[pageNum];
	pageBar.value=pageNum+1;
	pageBar.max=pageHeadings.length;
	pageCount.innerHTML=pageNum+1+"/"+pageHeadings.length;
};
update();
grayOut();
back.addEventListener("click",function(){if(pageNum!==0){pageNum-=1;}update();grayOut();});
next.addEventListener("click",function(){if(pageNum<(pageHeadings.length-1)){pageNum+=1;}update();grayOut();});