// See related issue: https://github.com/gatsbyjs/gatsby/issues/8982
export function fixTocCodeTag(tocLinks = ''): string {
  const lessThanSignRegex = /&#x3C;/gi;

  return tocLinks.replace(lessThanSignRegex, '<');
}
