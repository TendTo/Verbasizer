import { Button } from './button';

export class VerbasizeButton extends Button {
  constructor(onRemoveInputClick: () => void, _selector: string = '#verbasize-button') {
    super(onRemoveInputClick, _selector);
  }
}
