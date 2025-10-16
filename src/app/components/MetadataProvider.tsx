'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const MetadataProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    const getPageInfo = (path: string) => {
      // Remove leading slash and split path
      const segments = path.replace(/^\//, '').split('/').filter(Boolean);
      
      let pageName = 'Home';
      let description = 'Miestilo Lifestyle Private Limited';

      if (segments.length === 0) {
        pageName = 'Home';
        description = 'Welcome to Miestilo - Your Lifestyle Partner';
      } else if (segments[0] === 'pages') {
        // Handle /pages/* routes
        if (segments[1] === 'home') {
          pageName = 'Home';
          description = 'Welcome to Miestilo - Your Lifestyle Partner';
        } else if (segments[1] === 'products') {
          if (segments[2]) {
            pageName = 'Product Details';
            description = 'Explore our premium product collection';
          } else {
            pageName = 'Products';
            description = 'Discover our premium product range';
          }
        } else if (segments[1] === 'blog') {
          if (segments[2] === 'create') {
            pageName = 'Create Blog';
            description = 'Create and publish new blog content';
          } else if (segments[2]) {
            pageName = 'Blog Post';
            description = 'Read our latest insights and updates';
          } else {
            pageName = 'Blog';
            description = 'Latest news, insights and updates from Miestilo';
          }
        } else if (segments[1] === 'workshop') {
          pageName = 'Workshop';
          description = 'Professional workshops and training programs';
        } else if (segments[1] === 'why-us') {
          pageName = 'Why Choose Us';
          description = 'Discover what makes Miestilo unique';
        } else if (segments[1] === 'our-customers') {
          pageName = 'Our Customers';
          description = 'Meet our valued customers and their success stories';
        } else if (segments[1] === 'company') {
          if (segments[2] === 'about-us') {
            pageName = 'About Us';
            description = 'Learn more about Miestilo Lifestyle Private Limited';
          } else {
            pageName = 'Company';
            description = 'About Miestilo Lifestyle Private Limited';
          }
        } else if (segments[1] === 'auth') {
          if (segments[2] === 'login') {
            pageName = 'Login';
            description = 'Sign in to your Miestilo account';
          } else {
            pageName = 'Authentication';
            description = 'Miestilo account access';
          }
        } else {
          // Capitalize first letter and replace hyphens with spaces
          pageName = segments[1]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          description = `${pageName} - Miestilo Lifestyle Private Limited`;
        }
      } else {
        // Handle other routes
        pageName = segments[0]
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        description = `${pageName} - Miestilo Lifestyle Private Limited`;
      }

      return { pageName, description };
    };

    const { pageName, description } = getPageInfo(pathname);
    
    // Update document title with MT prefix and orange-black styling
    document.title = `MT - ${pageName}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Add custom favicon with MT
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/svg+xml';
      newFavicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" fill="%23f97316">M</text><text x="50" y=".9em" font-size="90" fill="%23000">T</text></svg>`;
      document.head.appendChild(newFavicon);
    }

  }, [pathname]);

  return null; // This component doesn't render anything
};

export default MetadataProvider;
