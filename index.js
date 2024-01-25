#!/usr/bin/env node

// process.argv를 사용하여 발표자 목록을 입력
const args = process.argv.slice(2);

// 최소 두 명의 발표자가 필요함
if (args.length < 2) {
  console.error('적어도 두 명의 발표자가 필요합니다.');
  process.exit(1);
}

// Math.random()을 사용하여 랜덤한 발표자를 선택
const randomIndex = Math.floor(Math.random() * args.length);
const selectedPresenter = args[randomIndex];

// 선택된 발표자를 출력
console.log(`발표자: ${selectedPresenter}`"\n" +
"┌───────────────┐\n" +
"       200 OK     \n" +
"└───────────────┘\n" +
"　　ᕱ ᕱ ||\n" +
"  ( ･ω･ ||\n" +
"　 /　つΦ\n");	
);
