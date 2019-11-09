function Uicomponent(width,height,x_pos,y_pos,positioning,comp_id,ui_bgcolor,ui_color,ui_text){
	this.width = width;
	this.height = height;
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.positioning = positioning;
	this.comp_id = comp_id;
	this.ui_bgcolor = ui_bgcolor;
	this.ui_color = ui_color;
	this.ui_text = ui_text;
	this.makeUIComponent = function (){
		var comp = document.createElement("div");
		comp.innerHTML = this.ui_text;
		comp.id = this.comp_id;
		document.body.appendChild(comp);
		};
		this.styleUIComponent = function (){
document.getElementById(this.comp_id).style.position = this.positioning;
document.getElementById(this.comp_id).style.left = this.x_pos+"px";
document.getElementById(this.comp_id).style.top = this.y_pos+"px";
document.getElementById(this.comp_id).style.width = this.width+"px";
document.getElementById(this.comp_id).style.height = this.width+"px";
document.getElementById(this.comp_id).style.borderRadius = 0.1*this.width+"px";
document.getElementById(this.comp_id).style.border = "solid";
document.getElementById(this.comp_id).style.borderWidth = "thin";
document.getElementById(this.comp_id).style.borderColor = this.ui_bgcolor;
document.getElementById(this.comp_id).style.background = this.ui_bgcolor;
document.getElementById(this.comp_id).style.color = this.ui_color;
document.getElementById(this.comp_id).style.boxShadow = "2px 2px 5px rgba(0,0,0,0.6)";
};
this.displayFlex = function (){
document.getElementById(this.comp_id).style.display = "flex";
document.getElementById(this.comp_id).style.alignItems = "center";
document.getElementById(this.comp_id).style.justifyContent = "center";
	};
this.displayBlock = function (){
	document.getElementById(this.comp_id).style.display = "block";
	};
	
	}
	
	Uicomponent.prototype.makeArrowUIComponent = function (arg){
		var nucomp = new Uicomponent(this.width,this.height,this.x_pos,this.y_pos,this.positioning,this.comp_id,this.ui_bgcolor,this.ui_color,this.ui_text);
		nucomp.makeUIComponent();
		nucomp.styleUIComponent();
		nucomp.displayFlex();
		var arrowcomp = document.createElement("div");
		arrowcomp.id = this.comp_id+"a";
		document.getElementById(this.comp_id).appendChild(arrowcomp);
		document.getElementById(arrowcomp.id).style.width = 0.5*nucomp.width+"px";
		document.getElementById(arrowcomp.id).style.height = 0.5*nucomp.width+"px";
		document.getElementById(arrowcomp.id).style.borderTop = "solid";
		document.getElementById(arrowcomp.id).style.borderLeft = "solid";
		document.getElementById(arrowcomp.id).style.borderWidth = 0.06*this.width+"px";
		document.getElementById(arrowcomp.id).style.borderColor = this.ui_color;
		
		(arg=="left")?document.getElementById(arrowcomp.id).style.transform = "rotate(-45deg)":"";
		(arg=="right")?document.getElementById(arrowcomp.id).style.transform = "rotate(135deg)":"";
		(arg=="up")?document.getElementById(arrowcomp.id).style.transform = "rotate(45deg)":"";
		(arg=="down")?document.getElementById(arrowcomp.id).style.transform = "rotate(-135deg)":"";

		};
		
		Uicomponent.prototype.makeSearchUIComponent = function (){
			var nucomp = new Uicomponent(this.width,this.height,this.x_pos,this.y_pos,this.positioning,this.comp_id,this.ui_bgcolor,this.ui_color,this.ui_text);
			nucomp.makeUIComponent();
			nucomp.styleUIComponent();
			nucomp.displayFlex();
			var searchcomp = document.createElement("div");
			var searchcomp1 = document.createElement("div");
			var searchcomp2= document.createElement("div");
			searchcomp.id = this.comp_id+"s";
			searchcomp1.id = this.comp_id+"s1";
			searchcomp2.id = this.comp_id+"s2";
			document.getElementById(this.comp_id).appendChild(searchcomp);
			document.getElementById(searchcomp.id).appendChild(searchcomp1);
			document.getElementById(searchcomp.id).appendChild(searchcomp2);
			var el = document.getElementById(searchcomp1.id);
			el.style.width = 0.25*nucomp.width+"px";
			el.style.height = 0.25*nucomp.width+"px";
			el.style.borderWidth = 0.06*this.width+"px";
			el.style.border = "solid";
			el.style.borderColor = this.ui_color;
			el.style.borderRadius = 0.25*nucomp.width+"px";
			
			var el1 = document.getElementById(searchcomp2.id);
			el1.style.width = 0.25*nucomp.width+"px";
			el1.style.height = "0px";
			el1.style.borderWidth = 0.06*this.width+"px";
			el1.style.borderTop = "solid";
			el1.style.borderColor = this.ui_color;
			
			var el3 = document.getElementById(searchcomp.id);
			el3.style.width = 0.9*nucomp.width+"px";
			el3.style.height = 0.9*nucomp.height+"px";
			el3.style.display = "flex";
			el3.style.alignItems = "center";
			el3.style.justifyContent = "center";
			el3.style.transform = "rotate(45deg)";
			};
			
			Uicomponent.prototype.makeMenuUIComponent1 = function (){
				var nucomp = new Uicomponent(this.width,this.height,this.x_pos,this.y_pos,this.positioning,this.comp_id,this.ui_bgcolor,this.ui_color,this.ui_text);
				nucomp.makeUIComponent();
				nucomp.styleUIComponent();
				nucomp.displayFlex();
				for(var i=0;i<3;++i){
					var menucomp = document.createElement("div");
					menucomp.id = this.comp_id+"m1"+i;
					document.getElementById(this.comp_id).appendChild(menucomp);
					var el = document.getElementById(menucomp.id);
					el.style.backgroundColor = this.ui_color;
					el.style.width = 0.1*this.width+"px";
					el.style.height = 0.7*this.width+"px";
					el.style.marginLeft = 0.1*this.width+"px";
					document.getElementById(this.comp_id).style.transform = "rotate(270deg)";
					}
				};
				
				Uicomponent.prototype.makeMenuUIComponent2 = function (){
				var nucomp = new Uicomponent(this.width,this.height,this.x_pos,this.y_pos,this.positioning,this.comp_id,this.ui_bgcolor,this.ui_color,this.ui_text);
				nucomp.makeUIComponent();
				nucomp.styleUIComponent();
				nucomp.displayFlex();
				for(var i=0;i<3;++i){
				var menucomp = document.createElement("div");
				menucomp.id = this.comp_id+"m2"+i;
				document.getElementById(this.comp_id).appendChild(menucomp);
				var el = document.getElementById(menucomp.id);
				el.style.backgroundColor = this.ui_color;
				el.style.width = 0.2*this.width+"px";
				el.style.height = 0.2*this.width+"px";
				el.style.borderWidth = 0.06*this.width+"px";
				el.style.marginLeft = 0.02*this.width+"px";
				document.getElementById(this.comp_id).style.transform = "rotate(270deg)";
				}
				};
				
				Uicomponent.prototype.makeHomeUIComponent = function (){
					var nucomp = new Uicomponent(this.width,this.height,this.x_pos,this.y_pos,this.positioning,this.comp_id,this.ui_bgcolor,this.ui_color,this.ui_text);
					nucomp.makeUIComponent();
					nucomp.styleUIComponent();
					nucomp.displayBlock();
					
					var homecomp1 = document.createElement("div");
					homecomp1.id = this.comp_id+"h1";
					var homecomp2 = document.createElement("div");
					homecomp2.id = this.comp_id+"h2";
					
					document.getElementById(this.comp_id).appendChild(homecomp1);
					document.getElementById(this.comp_id).appendChild(homecomp2);
				
					var el1 = document.getElementById(homecomp1.id);
					var el2 = document.getElementById(homecomp2.id);
					el1.style.borderTop = "solid";
					el1.style.borderLeft = "solid";
					el1.style.borderColor = this.ui_color;
					el1.style.borderWidth = 0.06*this.width+"px";
					el1.style.width = 0.47*this.width+"px";
					el1.style.height = 0.47*this.width+"px";
					el1.style.position = "absolute";
					el1.style.left = this.width/2-parseInt(el1.style.width)/2-0.03*this.width+"px";
					el1.style.top = 0.2*this.width+"px";
					el1.style.transform = "rotate(45deg)";
					
					var el1d = Math.sqrt(0.45*this.width*0.45*this.width+0.45*this.width*0.45*this.width);
	                 
	                el2.style.borderLeft = "solid";
	                el2.style.borderRight = "solid";
	                el2.style.borderBottom = "solid";
	                el2.style.borderColor = this.ui_color;
	                el2.style.borderWidth = 0.06*this.width+"px";
	                el2.style.width = el1d-3+"px";
	                el2.style.height = 0.45*this.width+"px";
	                el2.style.position = "absolute";
	                el2.style.left = this.width/2-parseInt(el2.style.width)/2-0.06*this.width+"px";
	                el2.style.top = 0.5*el1d+0.1*this.width+"px";
					};
					
	