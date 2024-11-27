export abstract class News {
  public readonly herokuUrl: string = 'https://corsproxy.io';

  public abstract get url(): string;
  public get corsUrl(): string {
    return `${this.herokuUrl}/?${encodeURIComponent(this.url)}`;
  }

  protected defaultParser(xmlString: string): string[] {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    const items = xml.querySelectorAll('item');
    return Array.from(items)
      .map((item) => item.querySelector('title')?.textContent)
      .filter((title) => title !== undefined && title !== null) as string[];
  }

  protected handleError(error: unknown) {
    console.error(error);
    window.location.href = `${this.herokuUrl}/${this.url}`;
  }
}
