
export const highlightText = (text: string, query: string, maxLength: number): string => {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  
  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + query.length + 50);
  
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
