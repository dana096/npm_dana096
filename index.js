#!/usr/bin/env node

console.log(`
┌───────────────┐
       200 OK     
└───────────────┘
　　ᕱ ᕱ ||
  ( ･ω･ ||
　 /　つΦ
`);



function presenterList ({presenters = []} = {}) {
		console.log('발표자', presenters);
}

function extendsPickedRandomPresenter ({presenters = []} = {}) {
		const length = presenters.length;
		const selectedPresenter = presenters[Math.floor(Math.random() * length)];
		console.log('발표자 : ', selectedPresenter);
}

const args = process.argv.slice(2);
presenterList({presenters: args});
extendsPickedRandomPresenter({presenters: args});
