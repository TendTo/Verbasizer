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
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://www.ilpost.it/feed');
  const xml = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const items = doc.querySelectorAll('item');
  const titles = Array.from(items)
    .map((item) => item.querySelector('title')?.textContent)
    .filter((title) => title !== undefined && title !== null) as string[];
  inputTextList.loadNews(titles);
});
