const { MarkovMachine } = require('./markov');

describe('MarkovMachine', function() {
    let markMachine;
    beforeEach(function() {
      markMachine = new MarkovMachine("the cat in the hat");
    });

test('should generate text of correct length', () => {
    const numWords = 50;
    const text = markMachine.makeText(numWords);
    const words = text.split(" ");
    expect(words.length).toBeLessThanOrEqual(numWords);
  });

  test('should start with a word from the chains', () => {
    const text = markMachine.makeText();
    const firstWord = text.split(" ")[0];
    expect(Object.keys(markMachine.chains)).toContain(firstWord);
  });
});