import React, { useState, useDeferredValue } from 'react';

function SearchWithDeferredValue() {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  
  const items = [
    'The quick brown fox jumps over the lazy dog.',
    'A watched pot never boils, they say.',
    'She sells seashells by the seashore.',
    'To be or not to be, that is the question.',
    'All that glitters is not gold.',
    'Actions speak louder than words.',
    'An apple a day keeps the doctor away.',
    'Curiosity killed the cat, but satisfaction brought it back.',
    'Better late than never, but never late is better.',
    'The pen is mightier than the sword.',
    'Beauty is in the eye of the beholder.',
    'Every cloud has a silver lining.',
    'Fortune favors the brave.',
    'A journey of a thousand miles begins with a single step.',
    'It’s always darkest before the dawn.',
    'Look before you leap, and think before you act.',
    'Practice makes perfect, but nobody’s perfect.',
    'Rome wasn’t built in a day.',
    'Time flies when you’re having fun.',
    'You can’t judge a book by its cover.',
    'A picture is worth a thousand words.',
    'Actions speak louder than words.',
    'Barking up the wrong tree.',
    'Burning the midnight oil to finish the project.',
    'Caught between a rock and a hard place.',
    'Cutting corners never leads to success.',
    'Don’t count your chickens before they hatch.',
    'Great minds think alike, but fools seldom differ.',
    'Haste makes waste in the long run.',
    'In the heat of the moment, things got out of hand.'
  ];

  // Filter the items based on the deferred search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchWithDeferredValue;
