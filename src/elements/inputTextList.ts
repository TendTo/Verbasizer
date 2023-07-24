export class InputTextList {
  private _listElement: HTMLElement;
  private _inputTexts: HTMLTextAreaElement[];
  private _template: HTMLTemplateElement;

  constructor(
    private _parentSelector: string = '.input-text-list',
    private _inputSelector: string = '.input-text-list textarea',
    private _templateSelector: string = '#input-text-template',
  ) {
    this._listElement = document.querySelector(this._parentSelector) as HTMLElement;
    if (!(this._listElement instanceof HTMLElement)) {
      throw new Error(`Parent with selector ${this._parentSelector} not found`);
    }
    this._inputTexts = Array.from(document.querySelectorAll(this._inputSelector));
    if (!(this._inputTexts.length > 0)) {
      throw new Error(`Input text with selector ${this._inputSelector} not found`);
    }
    this._template = document.querySelector(this._templateSelector) as HTMLTemplateElement;
    if (!(this._template instanceof HTMLTemplateElement)) {
      throw new Error(`Template with selector ${this._templateSelector} not found`);
    }
  }

  public get parentSelector(): string {
    return this._parentSelector;
  }

  public get inputSelector(): string {
    return this._inputSelector;
  }

  public get templateSelector(): string {
    return this._templateSelector;
  }

  public get numberOfInputs(): number {
    return this._inputTexts.length;
  }

  public get text(): string {
    return this._inputTexts
      .filter(
        (inputText) =>
          (inputText.parentElement?.querySelector('[type="checkbox"]') as HTMLInputElement)
            .checked && inputText.value.trim().length > 0,
      )
      .map((inputText) => inputText.value)
      .join(' ');
  }

  public addInput() {
    const clone = document.importNode(this._template.content, true)
      .firstElementChild as HTMLElement;
    const inputText = clone.querySelector('textarea');
    if (!(inputText instanceof HTMLTextAreaElement)) {
      throw new Error(`Input text with selector  not found`);
    }
    this._listElement.appendChild(clone);
    this._inputTexts.push(inputText);
  }

  public removeInput() {
    if (this._inputTexts.length > 1) {
      this._listElement.removeChild(this._inputTexts.pop()?.parentElement as HTMLElement);
    }
  }

  public loadNews(news: string[]) {
    this.clear();
    for (let i = 0; i < news.length; i++) {
      this._inputTexts[i % this._inputTexts.length].value += `${news[i]}\n\n`;
    }
  }

  public clear() {
    this._inputTexts.forEach((inputText) => (inputText.value = ''));
  }
}
