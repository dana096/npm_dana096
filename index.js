#!/usr/bin/env node

console.log(`
┌───────────────┐
       200 OK     
└───────────────┘
　　ᕱ ᕱ ||
  ( ･ω･ ||
　 /　つΦ
`);



class PresenterList {
	constructor(presenters) {
		this.presenters = presenters;
	}
	pickedRandomPresenter() {
		const length = this.presenters.length;
		const selectedPresenter = this.presenters[Math.floor(Math.random() * length)];
		console.log('발표자 : ', selectedPresenter);
	}
}

class ExtendsPickedRandomPresenter extends PresenterList {
	constructor(presenters) {
		super (presenters);
	}
}

const args = process.argv.slice(2);
const extendsPickedRandomPresenter = new ExtendsPickedRandomPresenter(args);
extendsPickedRandomPresenter.pickedRandomPresenter();
