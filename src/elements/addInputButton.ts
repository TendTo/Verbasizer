import { Button } from './button';

export class AddInputButton extends Button {
  constructor(onAddInputClick: () => void, _selector: string = '#add-input-button') {
    super(onAddInputClick, _selector);
  }
}
