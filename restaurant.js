
$(document).ready(function () {
	var pageObj = {
		strHeaderDiv: "<div id='header'>Blancharu</div>",
		strHeadlineDiv: "<div id='headline'>Blancharu is a fusion Japanese French restaurant that serves the most delicious food!</div>",
		strMainDiv: "<div id='main'>Bacon ipsum dolor sit amet meatloaf swine shankle pig pastrami fatback. Venison leberkas jowl short ribs, shankle spare ribs sirloin swine beef ribs beef sausage flank. Shank bresaola pork chop ball tip strip steak. Flank ribeye tenderloin doner hamburger boudin pancetta turkey pig pork bresaola. Turducken salami t-bone beef andouille pastrami ham, shoulder pork chop short ribs spare ribs jerky sirloin brisket. Rump doner ground round porchetta andouille boudin pork belly cow.</div>",
		strImageDiv: "<div id='image'><img src='http://static3.artspan.com/member/lindarettichdesign/500/2004810.jpg' /></div>"
	}
	
	// Build tabs. Reference: http://jqueryui.com/tabs/
	$("#content").append("<div id='tabs'></div>");
	$("#tabs").append("<ul><li><a href='#home'>Home</a></li><li><a href='#menu'>Menu</a></li><li><a href='#contact'>Contact</a></li></ul>");	
	$("#tabs").append("<div id='home'>" + pageObj.strHeaderDiv + pageObj.strHeadlineDiv + pageObj.strMainDiv + pageObj.strImageDiv + "</div><div id='menu'><p>This is the menu.</p></div><div id='contact'><p>These are the contact details.</p></div>");	
	$("#tabs").tabs();
/*
	$("#home").append(pageObj.strHeaderDiv);
	$("#home").append(pageObj.strHeadlineDiv);
	$("#home").append(pageObj.strMainDiv);
	$("#home").append(pageObj.strImageDiv);
*/	
})

