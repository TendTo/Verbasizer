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
import { IlPostNews, AnsaNews } from './api';

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
    const ilPostNews = new AnsaNews();
    inputTextList.loadNews(await ilPostNews.getNews());
  });
}

main();
