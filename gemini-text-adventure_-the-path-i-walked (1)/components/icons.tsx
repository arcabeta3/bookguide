
import React from 'react';

export const SparklesIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2.268l1.428 1.428a1 1 0 010 1.414l-1.428 1.428V15a1 1 0 11-2 0v-5.456L7.572 8.116a1 1 0 010-1.414L9 5.268V4a1 1 0 011-1zM5 10a1 1 0 011-1h2.268l1.428-1.428a1 1 0 111.414 1.414L9.68 10l1.428 1.428a1 1 0 11-1.414 1.414L7.268 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
    <path d="M15 10a1 1 0 01-1 1h-2.268l-1.428 1.428a1 1 0 11-1.414-1.414L10.32 10l-1.428-1.428a1 1 0 111.414-1.414L12.732 9H14a1 1 0 011 1z" />
  </svg>
);

export const SendIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

export const LoadingIcon: React.FC = () => (
    <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
