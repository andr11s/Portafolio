((d) => {
	const $menu_btn = d.querySelector(".menu-btn");
	const $menu = d.querySelector(".menu");

	$menu_btn.addEventListener("click", (e) => {
		$menu_btn.firstElementChild.classList.toggle("none");
		$menu_btn.lastElementChild.classList.toggle("none");
		$menu.classList.toggle("is-active");
	});

	d.addEventListener("click", (e) => {
		if (!e.target.matches(".menu a")) return false;

		$menu_btn.firstElementChild.classList.remove("none");
		$menu_btn.lastElementChild.classList.add("none");
		$menu.classList.remove("is-active");
	});
})(document);
