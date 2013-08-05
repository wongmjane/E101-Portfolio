/*
(function(window){
	var document = window.document;
	var wrapper = document.getElementById("womchun-script").parentElement;
	var container = document.createElement("div");
	wrapper.appendChild(container);
}) (window);
*/

(function(window) {

	var document = window.document;

	var body = document.getElementsByTagName("body")[0];

	var resourceBaseURL = "https://raw.github.com/womc/E101-Portfolio/master/";

	function getResourceURL(fileName) {
		return resourceBaseURL + fileName;
	}

	var pageMeta = {
		createdYear: 2013,
		authorNickname: "womchun",
		authorNicknameIPA: "'wɔmtʃun",
		authorNicknameDescription: "a guy named Manchun Wong who has just finished his Summer Writing Class",
		authorFullname: "Manchun Wong",
		stylesheetFilename: "womchun-skin.css"
	};

	var LifeIsLike = [
		{
			name: "flower",
			desc: "It will only be blooming when they grow up if they are cared when they are small. It is sad when the flowers are wilting and fade. But how amazing and wonderful was it when it was blooming."
		},

		{
			name: "hiking",
			desc: "These is many mini hills throughout your life. You need to go over them or you will stay there forever and die. Sometimes there are some poisonous fruit that looks very attractive to eat. You should tolerate not to eat them. The more you walked, the more experiences you gain. The longer you walked, the steeper it is, the more likely to die in the end. Once you get to the top of the mountain, you will see the path of your whole life and how beautiful it is. Some people are lucky enough to have a smooth plain mountain to hike. They get food and utilities to survive too. Some people have to hike with very steep mountain. They have no food and any utilities to be assisted. They have to find food or they will die."
		},

		{
			name: "traveller",
			desc: "Some stayed longer while some stayed shorter. Some are fortunate while some are tuff. In the journey, there must be some obstacles and challenges. They seems will stop from the traveller keep going."
		},

		{
			name: "coffee",
			desc: "It is a bit bitter. When suffering, life tastes like Americano, bitter like hell. Well, there are many different types of flavours and additions for coffee. If you added milk, the Americano will become Latte. Those different additions are like different types of moment in the life. They can be sour, sweet, bitter or spicy. When you are suffering, it will be unavoidable that your life is served as a cup of Americano. You have to be wise enough to make moves, to make your cup of Americano taste sweeter or smoother. There are different types of additions you have to add when you drink your cup of coffee. You have to choose the right moment to do it. When you have just finished your cup of coffee, that’s it. But you could still memorize how wonderful your cup of coffee was."
		}
	];

	var Essays = [
		{
			name: "diagnostic",
			title: "Diagnostic Essay",
			desc: "This is written for diagnostic use. It includes reviews of the previous summer vacation with different perspectives. Thus, the tones of reviews are in different seriousnesses respectively.",
			best: false
		},

		{
			name: "selfintro",
			title: "Self-Introduction",
			desc: "This is a self-introduction. By reading this essay, you will know my points of view about English writing in the beginning of the class.",
			best: false
		},

		{
			name: "fun",
			title: "Fun Things To Do",
			desc: "This introduces some of my interests, written for friends and college students. You may be interested to do those thing when you feel bored.",
			best: false
		},

		{
			name: "fighter",
			title: "Classroom Fighter",
			desc: "This is a black-comedy story. And it is mostly real. By exaggerating the personalities of characters, students and teachers who read this story will know the things to notice during the classes.",
			best: true
		},

		{
			name: "superpower",
			title: "Shine of Superpower",
			desc: "One of the usages of critical thinking. From third-person perspective, we will be able to look through the superpower nation and the trend.",
			best: false
		},

		{
			name: "asians",
			title: "Asians in America",
			desc: "This is written for new coming Asian international students who are going to have their academic life in the United States of America about the facts and solutions of the potential racism issues toward them.",
			best: false
		}
	];

	var EssaysFolderURL = "http://goo.gl/ZvZ0Tz";

	var FacebookQuote = {
		text: "Nowadays, Facebook is almost being around every corner in the world. But is it really good? I cannot agree more... Well, I prefer quality over quantity.",
		URL: "http://blog.womchun.com/2013/05/i-stopped-using-facebook.html"
	};

	pageMeta.navLinks = Array.prototype.slice.call(document.getElementById("WikispacesNavbarAllPagesEntryItems").getElementsByTagName("ol")[0].getElementsByTagName("a")).map(function(i){return {name:i.innerHTML, href:i.href};});

	body.innerHTML = "";
	document.title = pageMeta.authorNickname + ": " + pageMeta.authorNicknameDescription;
	document.getElementsByTagName("style")[0].innerHTML="";

	body.appendChild((function(style) {
		style.type = "text/css";
		style.innerHTML = '@import url("' + getResourceURL(pageMeta.stylesheetFilename) + '");';
		return style;
	})(document.createElement("style")));

	var container = document.createElement("div");
	container.id = "container";

	var pageSections = [];


	//HEADER SECTION START
	var header = document.createElement("header");
	
	var headerContent = document.createElement("div");
	headerContent.id = "headerContent";

	header.appendChild(headerContent);

	headerContent.appendChild((function(h1) {
		h1.innerHTML=pageMeta.authorNickname;
		return h1;
	})(document.createElement("h1")));

	headerContent.appendChild((function(desc) {
		desc.innerHTML = "["+pageMeta.authorNicknameIPA+"] ";

		desc.appendChild((function(italic) {
			italic.className+="italic";
			italic.innerHTML = "n.,"
			return italic;
		})(document.createElement("span")));

		desc.appendChild(document.createElement("br"));

		desc.innerHTML += pageMeta.authorNicknameDescription;

		return desc;
	})(document.createElement("div")));

	pageSections.push(header);
	//HEADER SECTION END


	//LIFE IS LIKE... SECTION START
	var lifeLike = document.createElement("section");
	lifeLike.id = "lifeLike";

	lifeLike.appendChild((function(lifeLikeContent) {
		lifeLikeContent.id = "lifeLikeContent";
		
		lifeLikeContent.appendChild((function(beginning) {
			jQuery(window).scroll(function() {
				if(jQuery(beginning).offset().top > jQuery("#whatDone").offset().top - jQuery("#whatDone").height() * 2) {
					jQuery(beginning).addClass("vanish");
				} else {
					jQuery(beginning).removeClass("vanish");
				}
				if(jQuery(window).scrollTop() >= jQuery(beginning).offset().top) {
					jQuery(beginning).addClass("fixed");
				}
				if(jQuery(beginning).offset().top <= jQuery("#lifeLikeParagraph").offset().top) {
					jQuery(beginning).removeClass("fixed");
				}
				
			});
			beginning.id = "lifeLikeBeginning";
			beginning.innerHTML = "Life is like"
			return beginning;
		})(document.createElement("h2")));

		lifeLikeContent.appendChild((function(paragraph) {
			paragraph.id = "lifeLikeParagraph";

			for(var i = 0; i < LifeIsLike.length; i++) {
				paragraph.appendChild((function(item, metaphor) {

					item.appendChild((function(title) {
						jQuery(title).addClass("metaphorName");
						title.innerHTML = metaphor.name + ". ";
						return title;
					})(document.createElement("span")));

					item.appendChild((function(paragraph) {
						paragraph.innerHTML = metaphor.desc;
						return paragraph;
					})(document.createElement("p")));

					jQuery(window).scroll(function() {
						if(jQuery("#lifeLikeBeginning").offset().top > jQuery(item).offset().top) {
							jQuery(lifeLike).addClass(metaphor.name);
						} else {
							jQuery(lifeLike).removeClass(metaphor.name);
						}
						updateLifeLike();
					});
					return item;
				})(document.createElement("li"), LifeIsLike[i]));
			}

			return paragraph;
		})(document.createElement("ul")));
		return lifeLikeContent;
	})(document.createElement("div")));

	function updateLifeLike() {
		jQuery(lifeLike).css("height", Number((jQuery("#lifeLikeParagraph").height()+10)*1.1).toString() + "px");
	}

	pageSections.push(lifeLike);
	//LIFE IS LIKE... SECTION END

	//WHAT HAVE I DONE SECTION START
	var whatDone = document.createElement("h2");
	whatDone.id = "whatDone";

	whatDone.innerHTML += "What Have I Written?";
	pageSections.push(whatDone);
	//WHAT HAVE I DONE SECTION END

	//ESSAYS LIST SECTION START
	var essaysList = document.createElement("section");
	essaysList.id = "essaysList";

	essaysList.appendChild((function(items) {
		items.id = "essaysListItems";

		for(var i = 0; i < Essays.length; i++) {
			items.appendChild((function(item) {
				jQuery(item).addClass("essayListItem");
				jQuery(item).addClass(Essays[i].name);

				item.appendChild((function(title) {
					jQuery(title).addClass("essayListItemTitle");
					title.innerHTML += Essays[i].title;
					if(Essays[i].best) {
						title.appendChild((function(best) {
							jQuery(best).addClass("bestBlock");
							best.innerHTML += "Best Seller";
							return best;
						})(document.createElement("div")));
					}
					return title;
				})(document.createElement("span")));

				item.appendChild((function(descriptionWrapper) {
					jQuery(descriptionWrapper).addClass("essayListItemDescriptionWrapper");
					descriptionWrapper.appendChild((function(description) {
						jQuery(description).addClass("essayListItemDescription");
						description.innerHTML += Essays[i].desc;
						return description;
					})(document.createElement("li")));
					return descriptionWrapper;
				})(document.createElement("ul")));
				return item;
			})(document.createElement("li")));
		}

		items.appendChild((function(viewAll) {
			jQuery(viewAll).addClass("essayListViewAll");
			viewAll.appendChild((function(link) {
				link.href = EssaysFolderURL;
				link.innerHTML += "Free Sample: 6 Exclusive Essays in 1 Pack! Get it now!"
				return link;
			})(document.createElement("a")));
			return viewAll;
		})(document.createElement("li")));
		return items;
	})(document.createElement("ul")));

	pageSections.push(essaysList);
	//ESSAYS LIST SECTION END

	//FACEBOOK QUOTE SECTION START
	var fbQuote = document.createElement("section");
	fbQuote.id = "fbQuote";

	fbQuote.appendChild((function(quote) {
		quote.href = FacebookQuote.URL;

		quote.innerHTML += "&ldquo;";

		quote.appendChild((function(text) {
			text.innerHTML = FacebookQuote.text;
			return text;
		})(document.createElement("p")));

		quote.innerHTML += "&rdquo;";

		quote.appendChild((function(quoteCite) {
			jQuery(quoteCite).addClass("fbQuoteCite");
			quoteCite.innerHTML += " - " + pageMeta.authorFullname;
			return quoteCite;
		})(document.createElement("span")));
		return quote;
	})(document.createElement("a")));

	pageSections.push(fbQuote);
	//FACEBOOK QUOTE SECTION END

	//FOOTER SECTION START
	var footer = document.createElement("footer");
	footer.appendChild((function(license) {
		license.id = "license";
		license.innerHTML += pageMeta.authorFullname + " &copy; " + new Date().getFullYear();
		return license;
	})(document.createElement("div")));
	pageSections.push(footer);
	//FOOTER SECTION END

	for(var i=0; i < pageSections.length; i++) {
		container.appendChild(pageSections[i]);
	}

	//PRECACHE RESOURCES
	(function(images) {
		var caches = [];
		for(var i = 0; i < images.length; i++) {
			caches[i] = new Image();
			caches[i].src = getResourceURL(images[i]);
		}
	}) ([
		"background-1.jpg",
		"background-pixel.png",
		"background-flower.jpg",
		"background-hiking.jpg",
		"background-traveller.jpg",
		"background-coffee.jpg",
		"background-paper.jpg"
		]);

	body.appendChild(container);
})(window);