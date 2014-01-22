(function($) {

	$.fn.toolTip = function() {

		var popup = document.getElementById("js-tooltip"),
			popup_inner;

		if(!popup) {
			popup = document.createElement("div");
			popup.className = "tooltip-popup";

			popup_inner = document.createElement("div");
			popup_inner.className = "tooltip-popup__inner";

			popup.appendChild(popup_inner);

			document.body.appendChild(popup);
		}
		else {
			popup_inner = popup.children[0];
		}

		this.each(function() {

			$(this).click(function(e) {

				var pageYOffset = window.pageYOffset || document.documentElement.scrollTop,
					pos = $(this).offset(),
					y = pos.top,
					yTmp,
					height;

				e.stopPropagation();

				popup_inner.innerHTML = this.getAttribute("tooltip-text");
				popup.style.left = "";
				popup.style.top = "";

				height = popup.offsetHeight;

				yTmp = y - height;

				if(yTmp >= pageYOffset) {
					popup.style.top = yTmp + "px";
				}
				else {
					popup.style.top = (y + this.offsetHeight) + "px";
				}
				popup.style.left = (pos.left + this.offsetWidth) + "px";

			});

		});

		$(document).on("click", function() {
			
			popup_inner.innerHTML = "";
			popup.style.left = "";
			popup.style.top = "";

		});

	}

})(jQuery);

$(document).ready(function() {

	$(".js-tooltip").toolTip();

});