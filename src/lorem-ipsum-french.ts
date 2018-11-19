const words = require('../words-list');

const lorem = (paragraph: number): string => {
  let text: string = "";
  if (paragraph) {
    for ( let j = 0; j < paragraph; j++) {
      text = text + generateParagraph();
    }

    console.log(text);

  }

  return text;
};

const generateParagraph = () => {
  let paragraph: string = '';
  const maxParagraphLength: number = 250;

  while(paragraph.length <= maxParagraphLength ) {
    // add sentences until max length
    paragraph = paragraph + generateSentence();
  }

  return paragraph + "\n" + "\n";
};

const generateSentence = (): string => {
  // pick random words, capitalize first letter, dot at the end
  let sentence: string = "";
  const sentenceLength: number = Math.floor( 5 + ( 10 * Math.random()));

  for ( let i = 0; i < sentenceLength; i++) {
    // pick up random word
    let wordIndex: number = Math.floor( Math.random() * (words.length - 1) );
    // test if need to add . or capitalize first letter.
    if ( i === 0 ) {
      sentence = words[wordIndex][0].toUpperCase() + words[wordIndex].substring(1, words[wordIndex].length) + " ";
    } else if ( i === sentenceLength - 1) {
      sentence = sentence + words[wordIndex] + ".";
    } else {
      sentence = sentence + words[wordIndex] + " ";
    }
  }

  return sentence;

};

module.exports = lorem;
