export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  
  // Format the date as "Month Day, Year"
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};