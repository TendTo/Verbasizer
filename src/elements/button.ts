export class Button {
  protected _button: HTMLButtonElement;

  constructor(private callback: () => void, private _selector: string) {
    this._button = document.querySelector(this._selector) as HTMLButtonElement;
    if (!(this._button instanceof HTMLButtonElement)) {
      throw new Error(`Button with selector ${this._selector} not found`);
    }
    this._button.addEventListener('click', this.callback);
  }

  public get selector(): string {
    return this._selector;
  }
}
