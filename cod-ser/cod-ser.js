class CodSer extends HTMLElement {
	static observedAttributes = ["text"];

	constructor() {
		super();
		this.attachShadow({
			mode: "open",
		});
		this.render();
		this.addEventListener("click", (e) => {
			dispatchShowSer(this, this.getAttribute("url"));
		});
	}

	attributeChangedCallback(attr, oldVal, newVal) {
		switch (attr) {
			case "text":
				this.render();
				break;
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="${import.meta.resolve("./cod-ser.css")}"/>
		<a>${this.getAttribute("text")}</a>`;
	}
}

function dispatchShowSer(element, url) {
	let e = new CustomEvent("show-ser", {
		detail: {
			url: url,
		},
		bubbles: true,
	});
	element.dispatchEvent(e);
}

customElements.define("cod-ser", CodSer);

export { CodSer, dispatchShowSer };
