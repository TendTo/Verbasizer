import { Button } from './button';

export class CopyOutputButton extends Button {
  constructor(onCopyOutput: () => void, _selector: string = '#copy-output-button') {
    super(onCopyOutput, _selector);
  }
}
