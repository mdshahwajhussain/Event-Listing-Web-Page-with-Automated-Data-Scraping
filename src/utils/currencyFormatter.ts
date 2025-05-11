export const formatCurrency = (price: string): string => {
  // Handle "Free" or special cases
  if (price.toLowerCase().includes('free')) {
    return 'Free';
  }

  // Extract numbers from the price string
  const numbers = price.match(/\d+/g);
  if (!numbers) return price;

  // Convert prices to INR (assuming original prices are in AUD)
  // Using approximate conversion rate: 1 AUD = 55 INR
  const convertToINR = (amount: number) => Math.round(amount * 55);

  // Handle price ranges
  if (numbers.length > 1) {
    const min = convertToINR(parseInt(numbers[0]));
    const max = convertToINR(parseInt(numbers[1]));
    return `₹${min.toLocaleString('en-IN')} - ₹${max.toLocaleString('en-IN')}`;
  }

  // Handle single price
  const amount = convertToINR(parseInt(numbers[0]));
  return `₹${amount.toLocaleString('en-IN')}`;
};