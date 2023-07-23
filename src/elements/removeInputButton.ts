import { Button } from './button';

export class RemoveInputButton extends Button {
  constructor(onRemoveInputClick: () => void, _selector: string = '#remove-input-button') {
    super(onRemoveInputClick, _selector);
  }
}
