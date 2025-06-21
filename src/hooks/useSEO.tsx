
import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schemaData?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    updateMetaTag('name', 'description', seoData.description);

    // Update keywords if provided
    if (seoData.keywords) {
      updateMetaTag('name', 'keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', seoData.ogTitle || seoData.title);
    updateMetaTag('property', 'og:description', seoData.ogDescription || seoData.description);
    updateMetaTag('property', 'og:url', window.location.href);
    
    if (seoData.ogImage) {
      updateMetaTag('property', 'og:image', seoData.ogImage);
    }

    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', seoData.ogTitle || seoData.title);
    updateMetaTag('property', 'twitter:description', seoData.ogDescription || seoData.description);

    // Update canonical URL
    if (seoData.canonicalUrl) {
      updateCanonicalUrl(seoData.canonicalUrl);
    }

    // Add schema.org JSON-LD if provided
    if (seoData.schemaData) {
      addSchemaData(seoData.schemaData);
    }
  }, [seoData]);
};

const updateMetaTag = (attribute: string, name: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateCanonicalUrl = (url: string) => {
  let element = document.querySelector('link[rel="canonical"]');
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', url);
};

const addSchemaData = (schemaData: object) => {
  // Remove existing schema script if any
  const existingScript = document.querySelector('script[data-schema="page"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'page');
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);
};
