import {
  InputTextList,
  VerbasizeButton,
  AddInputButton,
  RemoveInputButton,
  VerbasizeOutput,
  CopyOutputButton,
  LoadNewsButton,
  ClearButton,
} from './elements';
import { IlPostNews, GoogleNews, AnsaNews, BbcNews, CnnNews } from './api';
import type { News } from './api/news';

function main() {
  const inputTextList = new InputTextList();
  const verbasizeOutput = new VerbasizeOutput();
  const verbasizeButton = new VerbasizeButton(() => verbasizeOutput.verbasize(inputTextList.text));
  const addInputButton = new AddInputButton(() => inputTextList.addInput());
  const removeInputButton = new RemoveInputButton(() => inputTextList.removeInput());
  const clearButton = new ClearButton(() => {
    inputTextList.clear();
    verbasizeOutput.clear();
  });
  const copyOutputButton = new CopyOutputButton(() =>
    navigator.clipboard.writeText(verbasizeOutput.text),
  );
  const loadNewsButton = new LoadNewsButton(async () => {
    const select = document.getElementById('news-source-select') as HTMLSelectElement;
    if (!select) return;
    let newsSource: News = new GoogleNews(navigator.language || 'en-GB', 'any');
    switch (select.value) {
      case 'ilpost':
        newsSource = new IlPostNews();
        break;
      case 'bbc':
        newsSource = new BbcNews();
        break;
      case 'ansa':
        newsSource = new AnsaNews();
        break;
      case 'cnn':
        newsSource = new CnnNews();
        break;
      case 'google':
      default:
        break;
    }
    inputTextList.loadNews(await newsSource.getNews());
  });
}

main();
