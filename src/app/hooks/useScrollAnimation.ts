import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px'
  } = options;

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all registered elements
    elementRefs.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup: unobserve all elements
      elementRefs.current.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [threshold, rootMargin]);

  // Function to register a new element for observation
  const addElementRef = (element: HTMLElement | null) => {
    if (element && !elementRefs.current.includes(element)) {
      elementRefs.current.push(element);
    }
  };

  // Function to create a ref callback
  const createRef = () => {
    return (element: HTMLElement | null) => {
      addElementRef(element);
    };
  };

  return { createRef, addElementRef };
};

// Alternative hook for single element (simpler usage)
export const useScrollAnimationSingle = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px'
  } = options;

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return elementRef;
};
