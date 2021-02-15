
class BenderLabsLabel {

	constructor() {

		this.element = document.getElementById("bender-labs-label");
		this.entries = ["Bender Labs","Compassionate","Disciplined","Humble","Innovative","Loyal","Truthful","United"];
		this.i = 0;
		this.entry = this.entries[this.i];
		this.deltaTime = 0;
		this.add = true;
		this.startTime = new Date();
	}
	loop(instance) {

		instance.element.querySelector("h1").innerText = instance.entry;
		let endTime = new Date();
		instance.deltaTime += endTime - instance.startTime;
		instance.startTime = endTime;
		if (instance.entry.length == instance.entries[instance.i].length && instance.deltaTime > 2000) {

			instance.entry = instance.entry.substring(0, instance.entry.length - 1);
			instance.deltaTime = 0;
			instance.add = false;
		} else if (instance.entry.length > 0 && instance.deltaTime > 50 && !instance.add) {

			instance.entry = instance.entry.substring(0, instance.entry.length - 1);
			instance.deltaTime = 0;

		} else if (instance.entry.length == 0 && instance.deltaTime > 50) {

				instance.add = true;
				instance.i += 1;
				instance.i %= instance.entries.length;
				instance.entry = instance.entries[instance.i][0];
				instance.deltaTime = 0;
		} else if (instance.entry.length > 0 && instance.entry.length < instance.entries[instance.i].length && instance.deltaTime > 100 && instance.add) {

			instance.entry = instance.entries[instance.i].substring(0,instance.entry.length + 1);
			instance.deltaTime = 0;
		}
		window.requestAnimationFrame(() => {

			instance.loop(instance);
		});
	}

}

window.onload = () => {

	document.querySelector("body").setAttribute("class", "");
}

var bndrLabel = new BenderLabsLabel();
window.requestAnimationFrame(() => {

	bndrLabel.loop(bndrLabel);
});
