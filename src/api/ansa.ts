import { News } from './news';

export class AnsaNews extends News {
  public readonly url = 'https://www.ansa.it/sito/ansait_rss.xml';

  public async getNews(): Promise<string[]> {
    let res;
    try {
      res = await fetch(this.corsUrl);
    } catch (error) {
      this.handleError(error);
      return [];
    }
    if (res.status === 403) {
      this.handleError(res);
      return [];
    }
    const xml = await res.text();
    return this.defaultParser(xml);
  }
}
