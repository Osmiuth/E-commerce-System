export const sendMessage = async (message) => {
  try {
    console.log('Starting to load SmartSupp for sending message...');
    console.log('SmartSupp loaded successfully');
    console.log('Sending message to SmartSupp:', message);
    smartsupp('chat:message', message); 
    console.log('Opening SmartSupp chat window');
    smartsupp('chat:open'); // Open the chat window
  } catch (error) {
    console.error('Failed to load SmartSupp:', error);
  }
};