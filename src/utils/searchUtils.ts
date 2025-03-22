/**
 * Normalizes a string by converting it to lowercase and removing accents.
 * @param str The string to normalize.
 * @returns The normalized string.
 */
export const normalizeAccents = (str: string): string => {
  if (!str) return '';
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

/**
 * Returns text with highlighted search terms using HTML
 */
export const highlightText = (text: string, searchQuery: string, maxLength: number = 200): string => {
  if (!text || !searchQuery.trim()) return text;
  
  const normalizedText = normalizeAccents(text.toLowerCase());
  const terms = searchQuery.toLowerCase().split(/\s+/).filter(term => term.length > 0);
  
  // If there are no valid search terms, return original text
  if (terms.length === 0) return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  
  let result = text;
  const normalizedTerms = terms.map(term => normalizeAccents(term));
  
  for (const term of normalizedTerms) {
    const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  }
  
  if (result.length > maxLength) {
    result = result.substring(0, maxLength) + '...';
  }
  
  return result;
};

/**
 * Checks if HTML content contains a specific search term
 */
export const searchInHtmlContent = (htmlContent: string, searchTerm: string): boolean => {
  if (!htmlContent || !searchTerm.trim()) return false;
  
  // Remove HTML tags to get plain text
  const plainText = htmlContent.replace(/<[^>]*>/g, ' ');
  
  const normalizedContent = normalizeAccents(plainText.toLowerCase());
  const normalizedTerm = normalizeAccents(searchTerm.toLowerCase());
  
  return normalizedContent.includes(normalizedTerm);
};

/**
 * Checks if text contains all keywords from search query
 */
export const containsAllKeywords = (text: string, query: string): boolean => {
  if (!text || !query.trim()) return false;
  
  const plainText = typeof text === 'string' ? text.replace(/<[^>]*>/g, ' ') : '';
  const normalizedText = normalizeAccents(plainText.toLowerCase());
  const keywords = query.toLowerCase().split(/\s+/).filter(keyword => keyword.length > 0);
  
  return keywords.every(keyword => 
    normalizedText.includes(normalizeAccents(keyword))
  );
};

/**
 * Extracts a text excerpt around the search term with highlighting
 */
export const extractHighlightedHtmlExcerpt = (
  htmlContent: string, 
  searchTerm: string, 
  maxLength: number = 200
): string => {
  if (!htmlContent || !searchTerm.trim()) return '';
  
  // Remove HTML tags to get plain text
  const plainText = htmlContent.replace(/<[^>]*>/g, ' ');
  
  const normalizedContent = normalizeAccents(plainText.toLowerCase());
  const normalizedTerm = normalizeAccents(searchTerm.toLowerCase());
  
  if (!normalizedContent.includes(normalizedTerm)) return plainText.substring(0, maxLength);
  
  const indexOfTerm = normalizedContent.indexOf(normalizedTerm);
  const startIndex = Math.max(0, indexOfTerm - 60);
  const endIndex = Math.min(plainText.length, indexOfTerm + searchTerm.length + 60);
  
  let excerpt = plainText.substring(startIndex, endIndex);
  
  // Add ellipsis if needed
  if (startIndex > 0) excerpt = '...' + excerpt;
  if (endIndex < plainText.length) excerpt = excerpt + '...';
  
  // Highlight the search term in the excerpt
  return highlightText(excerpt, searchTerm);
};

/**
 * Extracts a text excerpt that contains multiple keywords with highlighting
 */
export const extractMultiKeywordExcerpt = (
  content: string, 
  searchQuery: string, 
  maxLength: number = 200
): string => {
  if (!content || !searchQuery.trim()) return '';
  
  // Remove HTML tags to get plain text
  const plainText = typeof content === 'string' ? content.replace(/<[^>]*>/g, ' ') : '';
  
  const keywords = searchQuery.toLowerCase().split(/\s+/).filter(keyword => keyword.length > 0);
  
  if (keywords.length === 0) return plainText.substring(0, maxLength);
  
  // Find the first keyword occurrence
  let bestStartIndex = plainText.length;
  let matchedKeyword = '';
  
  for (const keyword of keywords) {
    const normalizedKeyword = normalizeAccents(keyword);
    const normalizedContent = normalizeAccents(plainText.toLowerCase());
    const indexOfKeyword = normalizedContent.indexOf(normalizedKeyword);
    
    if (indexOfKeyword !== -1 && indexOfKeyword < bestStartIndex) {
      bestStartIndex = indexOfKeyword;
      matchedKeyword = keyword;
    }
  }
  
  if (bestStartIndex === plainText.length) {
    // No keyword found, return the beginning of the content
    return plainText.substring(0, maxLength);
  }
  
  // Extract excerpt around the first occurrence
  const startIndex = Math.max(0, bestStartIndex - 60);
  const endIndex = Math.min(plainText.length, bestStartIndex + matchedKeyword.length + 100);
  
  let excerpt = plainText.substring(startIndex, endIndex);
  
  // Add ellipsis if needed
  if (startIndex > 0) excerpt = '...' + excerpt;
  if (endIndex < plainText.length) excerpt = excerpt + '...';
  
  // Highlight all keywords in the excerpt
  return highlightText(excerpt, searchQuery, maxLength);
};

// Helper function to escape special characters in regex
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
