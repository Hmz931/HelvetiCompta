
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
