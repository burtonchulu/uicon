function Uicomponent(width,height,xpos,ypos,positioning,compid,bgcolor,uitext){
	this.width = width;
	this.height = height;
	this.xpos = xpos;
	this.ypos = ypos;
	this.positioning = positioning;
	this.compid = compid;
	this.bgcolor = bgcolor;
	this.uitext = uitext;
	this.makeUIComponent = function (){
		var comp = document.createElement("div");
		comp.innerHTML = this.uitext;
		comp.id = this.compid;
		document.body.appendChild(comp);
		};
		this.styleUIComponent = function (){
document.getElementById(this.compid).style.position = this.positioning;
document.getElementById(this.compid).style.left = this.xpos+"px";
document.getElementById(this.compid).style.top = this.ypos+"px";
document.getElementById(this.compid).style.width = this.width+"px";
document.getElementById(this.compid).style.height = this.height+"px";
document.getElementById(this.compid).style.borderRadius = 0.1*this.width+"px";
document.getElementById(this.compid).style.border = "solid";
document.getElementById(this.compid).style.borderWidth = "thin";
document.getElementById(this.compid).style.borderColor = this.bgcolor;
document.getElementById(this.compid).style.background= this.bgcolor;
document.getElementById(this.compid).style.display = "flex";
document.getElementById(this.compid).style.alignItems = "center";
document.getElementById(this.compid).style.justifyContent = "center";
document.getElementById(this.compid).style.boxShadow = "2px 2px 5px rgba(0,0,0,0.6)";
	};
	
	}
	
	Uicomponent.prototype.makeArrowUIComponent = function (arg){
		var nucomp = new Uicomponent(this.width,this.height,this.xpos,this.ypos,this.positioning,this.compid,this.bgcolor,"");
		nucomp.makeUIComponent();
		nucomp.styleUIComponent();
		var arrowcomp = document.createElement("div");
		arrowcomp.id = this.compid+"a";
		document.getElementById(this.compid).appendChild(arrowcomp);
		document.getElementById(arrowcomp.id).style.width = 0.5*nucomp.width+"px";
		document.getElementById(arrowcomp.id).style.height = 0.5*nucomp.height+"px";
		document.getElementById(arrowcomp.id).style.borderTop = "solid";
		document.getElementById(arrowcomp.id).style.borderLeft = "solid";
		document.getElementById(arrowcomp.id).style.borderColor = "white";
		if(arg=="left"){
		document.getElementById(arrowcomp.id).style.transform = "rotate(-45deg)";
		}
		if(arg=="right"){
			document.getElementById(arrowcomp.id).style.transform = "rotate(135deg)";
			}
			if(arg=="up"){
				document.getElementById(arrowcomp.id).style.transform = "rotate(45deg)";
				}
				if(arg=="down"){
					document.getElementById(arrowcomp.id).style.transform = "rotate(-135deg)";
					}
		};
		
		Uicomponent.prototype.makeSearchUIComponent = function (){
			var nucomp = new Uicomponent(this.width,this.height,this.xpos,this.ypos,this.positioning,this.compid,this.bgcolor,this.uitext);
			nucomp.makeUIComponent();
			nucomp.styleUIComponent();
			var searchcomp = document.createElement("div");
			var searchcomp1 = document.createElement("div");
			var searchcomp2= document.createElement("div");
			searchcomp.id = this.compid+"s";
			searchcomp1.id = this.compid+"s1";
			searchcomp2.id = this.compid+"s2";
			document.getElementById(this.compid).appendChild(searchcomp);
			document.getElementById(searchcomp.id).appendChild(searchcomp1);
			document.getElementById(searchcomp.id).appendChild(searchcomp2);
			var el = document.getElementById(searchcomp1.id);
			el.style.width = 0.25*nucomp.width+"px";
			el.style.height = 0.25*nucomp.height+"px";
			el.style.border = "solid";
			el.style.borderColor = "white";
			el.style.borderRadius = 0.25*nucomp.width+"px";
			
			var el1 = document.getElementById(searchcomp2.id);
			el1.style.width = 0.25*nucomp.width+"px";
			el1.style.height = "0px";
			el1.style.borderTop = "solid";
			el1.style.borderColor = "white";
			
			var el3 = document.getElementById(searchcomp.id);
			el3.style.width = 0.9*nucomp.width+"px";
			el3.style.height = 0.9*nucomp.height+"px";
			el3.style.display = "flex";
			el3.style.alignItems = "center";
			el3.style.justifyContent = "center";
			el3.style.transform = "rotate(45deg)";
			};
			
			Uicomponent.prototype.makeMenuUIComponent = function (){
				var nucomp = new Uicomponent(this.width,this.height,this.xpos,this.ypos,this.positioning,this.compid,this.bgcolor,this.uitext);
				nucomp.makeUIComponent();
				nucomp.styleUIComponent();
				for(var i=0;i<3;++i){
				var menucomp = document.createElement("div");
				menucomp.id = this.compid+"m"+i;
				document.getElementById(this.compid).appendChild(menucomp);
				var el = document.getElementById(menucomp.id);
				el.style.border = "solid";
				el.style.width = 0.05*this.width+"px";
				el.style.height = 0.05*this.height+"px";
				el.style.marginLeft = "1px";
				document.getElementById(this.compid).style.transform = "rotate(270deg)";
				}
				};
	