import { News } from './news';

export class CnnNews extends News {
  public readonly url = 'http://rss.cnn.com/rss/cnn_topstories.rss';
}
