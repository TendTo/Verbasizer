export class VerbasizeOutput {
  protected _textArea: HTMLTextAreaElement;

  constructor(private _selector: string = '#verbasize-output') {
    this._textArea = document.querySelector(this._selector) as HTMLTextAreaElement;
    if (!(this._textArea instanceof HTMLTextAreaElement)) {
      throw new Error(`Button with selector ${this._selector} not found`);
    }
  }

  // Fisher-Yates (aka Knuth) Shuffle
  private shuffle(strings: string[]): string[] {
    let currentIndex = strings.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [strings[currentIndex], strings[randomIndex]] = [strings[randomIndex], strings[currentIndex]];
    }
    return strings;
  }

  public get selector(): string {
    return this._selector;
  }

  public set text(text: string) {
    this._textArea.value = text;
  }

  public get text(): string {
    return this._textArea.value;
  }

  public verbasize(text: string) {
    const splittedText = text.split(/\s+/).filter((word) => word.length > 0);
    this._textArea.value = this.shuffle(splittedText).join(' ');
  }

  public clear() {
    this._textArea.value = '';
  }
}
