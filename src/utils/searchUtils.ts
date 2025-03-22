
// Utility functions for searching data

// Normalize text for accent-insensitive search
export const normalizeAccents = (text: string): string => {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

// Check if a text contains all of a set of search terms
export const containsAllSearchTerms = (text: string, searchTerms: string[]): boolean => {
  const normalizedText = normalizeAccents(text);
  
  return searchTerms.every(term => {
    const normalizedTerm = normalizeAccents(term);
    return normalizedText.includes(normalizedTerm);
  });
};

// Check if a term contains any numerical search term (for account numbers)
export const containsAccountNumber = (text: string, searchTerms: string[]): boolean => {
  const accountNumbers = searchTerms.filter(term => /^\d+$/.test(term.trim()));
  if (accountNumbers.length === 0) return false;
  
  return accountNumbers.some(numTerm => text.includes(numTerm));
};

// Highlight matching terms in text
export const highlightMatchingTerms = (text: string, searchTerms: string[]): string => {
  if (!text || searchTerms.length === 0 || searchTerms[0].trim() === '') {
    return text;
  }
  
  let highlightedText = text;
  
  searchTerms.forEach(term => {
    if (term.trim() === '') return;
    
    const normalizedTerm = normalizeAccents(term.trim());
    if (normalizedTerm === '') return;
    
    // Create a regex that's case insensitive and accent insensitive
    // This requires finding all variations of the characters with accents
    const accentVariations: { [key: string]: string[] } = {
      'a': ['a', 'à', 'á', 'â', 'ä', 'ã', 'å'],
      'e': ['e', 'è', 'é', 'ê', 'ë'],
      'i': ['i', 'ì', 'í', 'î', 'ï'],
      'o': ['o', 'ò', 'ó', 'ô', 'ö', 'õ', 'ø'],
      'u': ['u', 'ù', 'ú', 'û', 'ü'],
      'c': ['c', 'ç'],
      'n': ['n', 'ñ']
    };
    
    let regexPattern = '';
    for (const char of normalizedTerm) {
      if (accentVariations[char]) {
        regexPattern += `[${accentVariations[char].join('')}]`;
      } else {
        regexPattern += char;
      }
    }
    
    const regex = new RegExp(`(${regexPattern})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });
  
  return highlightedText;
};

// Extract a relevant excerpt from text that contains the search terms
export const extractRelevantExcerpt = (text: string, searchTerms: string[], maxLength: number = 200): string => {
  if (!text) return '';
  
  const normalizedText = normalizeAccents(text);
  let bestExcerptStart = 0;
  let highestTermCount = 0;
  
  // If the text is shorter than maxLength, just return the whole text
  if (text.length <= maxLength) {
    return highlightMatchingTerms(text, searchTerms);
  }
  
  // Find the paragraph with the most search terms
  const paragraphs = text.split(/\n+/);
  let bestParagraph = '';
  
  for (const paragraph of paragraphs) {
    const normalizedParagraph = normalizeAccents(paragraph);
    let termCount = 0;
    
    searchTerms.forEach(term => {
      const normalizedTerm = normalizeAccents(term.trim());
      if (normalizedTerm && normalizedParagraph.includes(normalizedTerm)) {
        termCount++;
      }
    });
    
    if (termCount > highestTermCount) {
      highestTermCount = termCount;
      bestParagraph = paragraph;
    }
  }
  
  // If we found a good paragraph, use it for our excerpt
  if (bestParagraph) {
    // If paragraph is still too long, extract a window around the first match
    if (bestParagraph.length > maxLength) {
      for (const term of searchTerms) {
        const normalizedTerm = normalizeAccents(term.trim());
        if (!normalizedTerm) continue;
        
        const termIndex = normalizeAccents(bestParagraph).indexOf(normalizedTerm);
        if (termIndex !== -1) {
          // Calculate start and end positions for the excerpt window
          const start = Math.max(0, termIndex - Math.floor(maxLength / 2));
          const end = Math.min(bestParagraph.length, start + maxLength);
          
          let excerpt = bestParagraph.substring(start, end);
          
          // Add ellipsis if we're not starting/ending at the actual start/end
          if (start > 0) excerpt = '...' + excerpt;
          if (end < bestParagraph.length) excerpt = excerpt + '...';
          
          return highlightMatchingTerms(excerpt, searchTerms);
        }
      }
    }
    
    // If paragraph fits or we couldn't find a better excerpt window
    return highlightMatchingTerms(bestParagraph, searchTerms);
  }
  
  // Fallback to simple excerpt if no good paragraph found
  const firstMatchIndex = searchTerms.reduce((earliestIndex, term) => {
    const normalizedTerm = normalizeAccents(term.trim());
    if (!normalizedTerm) return earliestIndex;
    
    const index = normalizedText.indexOf(normalizedTerm);
    return index !== -1 && (index < earliestIndex || earliestIndex === -1) ? index : earliestIndex;
  }, -1);
  
  if (firstMatchIndex !== -1) {
    const start = Math.max(0, firstMatchIndex - Math.floor(maxLength / 4));
    const end = Math.min(text.length, start + maxLength);
    
    let excerpt = text.substring(start, end);
    
    // Add ellipsis if needed
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    return highlightMatchingTerms(excerpt, searchTerms);
  }
  
  // If all else fails, just return the first part of the text
  return highlightMatchingTerms(text.substring(0, maxLength) + '...', searchTerms);
};

// Generate search suggestions based on partial matches
export const generateSearchSuggestions = (searchText: string, allTerms: string[]): string[] => {
  if (!searchText || searchText.trim().length < 2) return [];
  
  const normalizedSearchText = normalizeAccents(searchText.trim().toLowerCase());
  const matches = allTerms
    .filter(term => normalizeAccents(term.toLowerCase()).includes(normalizedSearchText))
    .slice(0, 5); // Limit to 5 suggestions
    
  return matches;
};

// Calculate relevance score for search results sorting
export const calculateRelevanceScore = (text: string, title: string, searchTerms: string[]): number => {
  const normalizedText = normalizeAccents(text);
  const normalizedTitle = normalizeAccents(title);
  let score = 0;
  
  searchTerms.forEach(term => {
    const normalizedTerm = normalizeAccents(term.trim());
    if (!normalizedTerm) return;
    
    // Higher score for term in title
    if (normalizedTitle.includes(normalizedTerm)) {
      score += 10;
      
      // Even higher if it starts with the term
      if (normalizedTitle.startsWith(normalizedTerm)) {
        score += 5;
      }
      
      // Higher score for exact title match
      if (normalizedTitle === normalizedTerm) {
        score += 20;
      }
    }
    
    // Score for term in text
    if (normalizedText.includes(normalizedTerm)) {
      score += 5;
      
      // Count occurrences for additional relevance
      const occurrences = (normalizedText.match(new RegExp(normalizedTerm, 'gi')) || []).length;
      score += Math.min(occurrences, 5); // Cap at 5 to avoid extreme bias
    }
  });
  
  return score;
};
