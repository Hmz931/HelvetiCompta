export const highlightText = (text: string, query: string, maxLength: number): string => {
  // Convert both text and query to lowercase for case-insensitive search
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  // Find the index of the query in the text
  const index = lowerText.indexOf(lowerQuery);
  
  // If query not found in text, return a truncated version of the text
  if (index === -1) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  
  // Calculate start and end positions for the excerpt
  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + query.length + 50);
  
  // Build the excerpt with ellipses if needed
  let excerpt = '';
  if (start > 0) {
    excerpt += '...';
  }
  
  excerpt += text.substring(start, end);
  
  if (end < text.length) {
    excerpt += '...';
  }
  
  return excerpt;
};

// New function to check if a number matches a search query
export const matchesNumber = (number: string | number, query: string): boolean => {
  const stringNumber = String(number);
  const stringQuery = String(query).trim();
  
  return stringNumber.includes(stringQuery);
};

// New function to search for account numbers in any format
export const accountNumberMatches = (accountNumber: string | number, query: string): boolean => {
  // Convert both to strings and remove any non-numeric characters for searching
  const cleanAccountNumber = String(accountNumber).replace(/\D/g, '');
  const cleanQuery = query.replace(/\D/g, '');
  
  // If query is empty after cleaning, return false
  if (!cleanQuery) return false;
  
  // Check if the account number includes the query
  return cleanAccountNumber.includes(cleanQuery);
};

// New function to highlight a number in text
export const highlightNumber = (number: string | number, query: string): string => {
  const stringNumber = String(number);
  const index = stringNumber.indexOf(query);
  
  if (index === -1) return stringNumber;
  
  return (
    stringNumber.substring(0, index) + 
    '<span class="bg-yellow-200 text-black">' + 
    stringNumber.substring(index, index + query.length) + 
    '</span>' + 
    stringNumber.substring(index + query.length)
  );
};

// Function for HTML content search
export const searchInHtmlContent = (content: string, query: string): boolean => {
  if (!content) return false;
  
  // Remove HTML tags for search
  const textContent = content.replace(/<[^>]*>/g, ' ');
  return textContent.toLowerCase().includes(query.toLowerCase());
};

// Function to extract excerpt with highlighting from HTML content
export const extractHighlightedHtmlExcerpt = (content: string, query: string, maxLength: number = 150): string => {
  if (!content) return '';
  
  // Remove HTML tags for search
  const textContent = content.replace(/<[^>]*>/g, ' ');
  const lowerTextContent = textContent.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  const index = lowerTextContent.indexOf(lowerQuery);
  
  if (index === -1) {
    // If term not found, return beginning of content
    return textContent.substring(0, maxLength) + '...';
  }
  
  // Calculate start and end for excerpt
  const start = Math.max(0, index - 50);
  const end = Math.min(textContent.length, index + query.length + 70);
  
  let excerpt = '';
  if (start > 0) excerpt += '...';
  
  excerpt += textContent.substring(start, end);
  
  if (end < textContent.length) excerpt += '...';
  
  // Highlight search term
  return excerpt.replace(
    new RegExp(query, 'gi'),
    match => `<span class="bg-yellow-100 text-swiss-dark font-medium">${match}</span>`
  );
};

/**
 * Removes accents/diacritics from a string
 * @param text Text to normalize
 * @returns The text without accents/diacritics
 */
export const normalizeAccents = (text: string): string => {
  if (!text) return '';
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

/**
 * New function that checks if content contains all keywords in a search query, ignoring accents
 * @param content Text content to search in
 * @param query Space-separated keywords to search for
 * @returns True if all keywords are found in the content
 */
export const containsAllKeywords = (content: string, query: string): boolean => {
  if (!content || !query.trim()) return false;
  
  // Remove HTML tags and normalize content, removing accents
  const cleanContent = normalizeAccents(content.replace(/<[^>]*>/g, ' ').toLowerCase());
  
  // Split query into keywords and normalize them
  const keywords = query.toLowerCase().split(/\s+/).filter(keyword => keyword.trim().length > 1)
    .map(keyword => normalizeAccents(keyword));
  
  // If no valid keywords, return false
  if (keywords.length === 0) return false;
  
  // Check if all keywords are present in the content
  return keywords.every(keyword => cleanContent.includes(keyword));
};

/**
 * Highlights multiple keywords in text content with accent-insensitive matching
 * @param content Text content to highlight in
 * @param query Space-separated keywords to highlight
 * @returns HTML string with highlighted keywords
 */
export const highlightMultipleKeywords = (content: string, query: string): string => {
  if (!content || !query.trim()) return content;
  
  // Split query into keywords
  const keywords = query.toLowerCase().split(/\s+/).filter(keyword => keyword.trim().length > 1);
  
  if (keywords.length === 0) return content;
  
  let highlightedContent = content;
  
  // Process each keyword individually to handle accent matching
  for (const keyword of keywords) {
    // Create a regex pattern that matches the keyword regardless of accents
    // We're using a simplified approach here by creating alternatives for common accented chars
    const accentMap: Record<string, string[]> = {
      'a': ['a', 'à', 'á', 'â', 'ä', 'ã', 'å'],
      'e': ['e', 'è', 'é', 'ê', 'ë'],
      'i': ['i', 'ì', 'í', 'î', 'ï'],
      'o': ['o', 'ò', 'ó', 'ô', 'ö', 'õ', 'ø'],
      'u': ['u', 'ù', 'ú', 'û', 'ü'],
      'c': ['c', 'ç'],
      'n': ['n', 'ñ']
    };
    
    let pattern = '';
    for (const char of normalizeAccents(keyword)) {
      if (accentMap[char]) {
        pattern += `[${accentMap[char].join('')}]`;
      } else {
        pattern += escapeRegExp(char);
      }
    }
    
    // Create regex with the pattern
    const keywordPattern = new RegExp(`(${pattern})`, 'gi');
    
    // Replace all occurrences with highlighted version
    highlightedContent = highlightedContent.replace(
      keywordPattern,
      match => `<span class="bg-yellow-100 text-swiss-dark font-medium">${match}</span>`
    );
  }
  
  return highlightedContent;
};

/**
 * Helper function to escape special characters in regex
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extract a relevant excerpt from content that contains all keywords
 * @param content Text content to extract from
 * @param query Space-separated keywords
 * @param maxLength Maximum length of the excerpt
 * @returns HTML string with excerpt and highlighted keywords
 */
export const extractMultiKeywordExcerpt = (content: string, query: string, maxLength: number = 200): string => {
  if (!content || !query.trim()) return content.substring(0, maxLength) + '...';
  
  // Remove HTML tags for searching
  const cleanContent = content.replace(/<[^>]*>/g, ' ');
  
  // Split query into keywords
  const keywords = query.toLowerCase().split(/\s+/).filter(keyword => keyword.trim().length > 1);
  
  if (keywords.length === 0) return cleanContent.substring(0, maxLength) + '...';
  
  // Find the first keyword occurrence, using accent-insensitive comparison
  let firstIndex = -1;
  let firstKeyword = '';
  
  const normalizedContent = normalizeAccents(cleanContent.toLowerCase());
  
  for (const keyword of keywords) {
    const normalizedKeyword = normalizeAccents(keyword);
    const index = normalizedContent.indexOf(normalizedKeyword);
    if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
      firstIndex = index;
      firstKeyword = keyword;
    }
  }
  
  if (firstIndex === -1) {
    // If no keywords found, return the beginning of the content
    return cleanContent.substring(0, maxLength) + '...';
  }
  
  // Calculate excerpt bounds around the first found keyword
  const start = Math.max(0, firstIndex - 40);
  const end = Math.min(cleanContent.length, firstIndex + firstKeyword.length + 140);
  
  // Create excerpt
  let excerpt = '';
  if (start > 0) excerpt += '...';
  
  excerpt += cleanContent.substring(start, end);
  
  if (end < cleanContent.length) excerpt += '...';
  
  // Highlight all keywords in the excerpt
  return highlightMultipleKeywords(excerpt, query);
};
