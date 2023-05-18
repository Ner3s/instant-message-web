export function getUidImageProject(url: string): string {
  return url.split('/o/')[1].split('?')[0];
}
