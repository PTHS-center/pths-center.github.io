class CodSerHandler extends HTMLElement {
	constructor() {
		super();
		this.addEventListener("show-ser", (e) => {
			let target = "_blank";
			if (this.getAttribute("iframe")) {
				target = this.getAttribute("iframe");
			}
			if (e.detail?.url) {
				let url = e.detail.url;
				if (this.getAttribute("prefix")) {
					url = this.getAttribute("prefix") + url;
				}
				window.open(url, target);
				document.querySelector(`#${target}-a`).href = url;
			}
		});
	}
}

customElements.define("cod-ser-handler", CodSerHandler);

export {
	CodSerHandler
};