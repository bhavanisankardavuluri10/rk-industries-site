import { useEffect, useState } from 'react';

const quotes = [
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth does not belong to us; we belong to the Earth.", author: "Chief Seattle" },
  { text: "In every walk with nature, one receives far more than they seek.", author: "John Muir" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" },
  { text: "The environment is everything that isn't me.", author: "Albert Einstein" },
  { text: "We have a single mission: to protect and hand on the planet to the next generation.", author: "François Hollande" },
  { text: "The future will either be green or not at all.", author: "Bob Brown" },
  { text: "Climate change is a result of the greatest market failure the world has seen.", author: "Nicholas Stern" },
  { text: "The Earth provides enough to satisfy every man's needs, but not every man's greed.", author: "Mahatma Gandhi" },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen" },
  { text: "The environment is where we all meet; where we all have a mutual interest.", author: "Lady Bird Johnson" },
  { text: "There is no such thing as 'away'. When we throw anything away, it must go somewhere.", author: "Annie Leonard" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We don't have to engage in grand, heroic actions to participate in change.", author: "Dalai Lama" },
  { text: "The environment is not a luxury, but a necessity.", author: "Gro Harlem Brundtland" },
  { text: "Every day is Earth Day.", author: "Kathleen Rogers" },
  { text: "The Earth is a fine place and worth fighting for.", author: "Ernest Hemingway" },
  { text: "We are the first generation to feel the effect of climate change and the last generation who can do something about it.", author: "Barack Obama" }
];

export const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedQuote, setTypedQuote] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuote = quotes[currentIndex];
    const fullText = `"${currentQuote.text}" — ${currentQuote.author}`;

    // Typing
    if (!isDeleting && typedQuote.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedQuote(fullText.slice(0, typedQuote.length + 1));
      }, 30); // Faster typing speed
      return () => clearTimeout(timeout);
    }

    // Hold after typing
    if (!isDeleting && typedQuote.length === fullText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000); // 3-second pause to read
      return () => clearTimeout(timeout);
    }

    // Deleting
    if (isDeleting && typedQuote.length > 0) {
      const timeout = setTimeout(() => {
        setTypedQuote(typedQuote.slice(0, -1));
      }, 15); // Faster deleting speed
      return () => clearTimeout(timeout);
    }

    // Switch to next quote
    if (isDeleting && typedQuote.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }

  }, [currentIndex, typedQuote, isDeleting]);

  return (
    <div className="text-center h-24 flex flex-col justify-center">
      <p className="text-lg md:text-xl text-foreground/90 font-medium italic mb-2 min-h-[3em]">
        {typedQuote.split(' — ')[0]}
        <span className="inline-block w-0.5 h-6 bg-foreground/70 animate-pulse" />
      </p>
      {typedQuote.includes(' — ') && (
        <p className="text-sm text-primary font-semibold animate-fade-in-up">
          — {typedQuote.split(' — ')[1]}
        </p>
      )}
    </div>
  );
};
