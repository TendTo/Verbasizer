import { Button } from './button';

export class LoadNewsButton extends Button {
  constructor(onLoadNewsButton: () => void, _selector: string = '#load-news-button') {
    super(onLoadNewsButton, _selector);
  }
}
