import { News } from './news';

type GoogleNewsMethod = 'geo' | 'topic' | 'search' | 'any';
type GoogleNewsTopic =
  | 'WORLD'
  | 'NATION'
  | 'BUSINESS'
  | 'TECHNOLOGY'
  | 'ENTERTAINMENT'
  | 'SCIENCE'
  | 'SPORTS'
  | 'HEALTH';

export class GoogleNews extends News {
  private _location: string;
  private _countryCode: string;
  public topic: GoogleNewsTopic = 'WORLD';

  constructor(_locale: string, _method: 'any');
  constructor(_locale: string, _method: 'topic', _query: GoogleNewsTopic);
  constructor(_locale: string, _method: 'search' | 'geo', _query: string);
  constructor(
    private _locale: string = 'en-GB',
    private _method: GoogleNewsMethod = 'topic',
    private _query: string = '',
  ) {
    super();
    if (!this._locale.match(/^([a-z]{2})-([A-Z]{2})/))
      throw new Error('Invalid Locale Format. (e.g. en-US, ja-JP)');
    const locInfo = this._locale.split('-');
    this._location = locInfo[0].toLowerCase();
    this._countryCode = locInfo[1].toUpperCase();
  }

  public get url(): string {
    let feedUrl = 'https://news.google.com/rss';
    switch (this._method) {
      case 'geo':
      case 'topic':
        // https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-US&gl=US&ceid=US:en
        feedUrl += `/headlines/section/${this._method}/${this._query}?`;
        break;
      case 'search':
        feedUrl += `/search?q=${this._query}&`;
        break;
      default:
        feedUrl += '?';
        break;
    }
    feedUrl += `hl=${this._location}&gl=${this._countryCode}&ceid=${this._countryCode}:${this._location}`;
    return encodeURI(feedUrl);
  }

  protected defaultParser(xmlString: string): string[] {
    return super.defaultParser(xmlString).map((title) => title.replace(/ - [^-]+$/, ''));
  }
}
