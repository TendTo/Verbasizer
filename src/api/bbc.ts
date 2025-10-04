import { News } from './news';

export class BbcNews extends News {
  public readonly url = 'https://feeds.bbci.co.uk/news/rss.xml';
}
