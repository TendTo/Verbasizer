import { Button } from './button';

export class ClearButton extends Button {
  constructor(onClearClick: () => void, _selector: string = '#clear-button') {
    super(onClearClick, _selector);
  }
}
