#!/usr/bin/env node

console.log(`
┌───────────────┐
       200 OK     
└───────────────┘
　　ᕱ ᕱ ||
  ( ･ω･ ||
　 /　つΦ
`);


// process.argv를 사용하여 발표자 목록을 입력(최소 2명의 발표자가 필요함)
// let args = process.argv.slice(2);
// let length = args.length;

// Math.random()을 사용하여 랜덤한 발표자를 선택
// console.log('발표자 : ',args[Math.floor(Math.random() * length)]);

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


