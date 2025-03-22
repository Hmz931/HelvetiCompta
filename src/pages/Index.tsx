
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { lexiconTerms } from '@/data/lexiconTerms';
import { glossaryTerms } from '@/data/glossaryTerms';
import { fullAccountsList } from '@/data/courses/chartOfAccounts';
import { courseStructure } from '@/data/courses';
import { 
  highlightText, 
  searchInHtmlContent, 
  extractHighlightedHtmlExcerpt,
  containsAllKeywords,
  extractMultiKeywordExcerpt
} from '@/utils/searchUtils';

// Import refactored components
import HomeHeader from '@/components/home/HomeHeader';
import SearchResults from '@/components/home/SearchResults';
import NoResults from '@/components/home/NoResults';
import MainResources from '@/components/home/MainResources';
import ToolsResources from '@/components/home/ToolsResources';
import SpecialResources from '@/components/home/SpecialResources';
import Partners from '@/components/home/Partners';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ title: string; path: string; excerpt: string; source: string }>>([]);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a search parameter in the URL
    const searchParams = new URLSearchParams(location.search);
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setIsSearching(true);
    }
  }, [location]);

  // Listen for search events from the header
  useEffect(() => {
    const handleHeaderSearch = (event: CustomEvent) => {
      const { term } = event.detail;
      setSearchQuery(term);
      setIsSearching(true);
    };

    window.addEventListener('header-search', handleHeaderSearch as EventListener);
    return () => {
      window.removeEventListener('header-search', handleHeaderSearch as EventListener);
    };
  }, []);
  
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    const query = searchQuery.toLowerCase();
    const results = [];
    
    // Search in lexicon terms
    for (const term of lexiconTerms) {
      if (
        term.title.toLowerCase().includes(query) ||
        containsAllKeywords(term.definition, query) ||
        (term.example && containsAllKeywords(term.example, query))
      ) {
        results.push({
          title: term.title,
          path: `/lexique?term=${encodeURIComponent(term.title)}`,
          excerpt: extractMultiKeywordExcerpt(term.definition, query, 150),
          source: 'Lexique'
        });
      }
    }
    
    // Search in glossary terms
    for (const term of glossaryTerms) {
      if (
        term.title.toLowerCase().includes(query) ||
        containsAllKeywords(term.definition, query) ||
        (term.example && containsAllKeywords(term.example, query))
      ) {
        results.push({
          title: term.title,
          path: `/lexique?term=${encodeURIComponent(term.title)}`,
          excerpt: extractMultiKeywordExcerpt(term.definition, query, 150),
          source: 'Lexique'
        });
      }
    }
    
    // Search in chart of accounts
    for (const account of fullAccountsList) {
      if (
        account.number.includes(query) ||
        containsAllKeywords(account.title, query)
      ) {
        results.push({
          title: `${account.number} - ${account.title}`,
          path: `/formation/chart-of-accounts?account=${encodeURIComponent(account.number)}`,
          excerpt: `Numéro de compte: ${account.number}, Libellé: ${account.title}`,
          source: 'Plan Comptable'
        });
      }
    }
    
    // Search in training courses
    for (const courseId in courseStructure) {
      const course = courseStructure[courseId];
      
      // Search in course title and description
      if (
        course.title.toLowerCase().includes(query) ||
        (course.description && containsAllKeywords(course.description, query))
      ) {
        results.push({
          title: course.title,
          path: `/formation?course=${courseId}`,
          excerpt: course.description 
            ? extractMultiKeywordExcerpt(course.description, query, 150)
            : `Cours de formation sur ${course.title}`,
          source: 'Formation'
        });
      }
      
      // Search in course introduction
      if (course.introduction && (
        searchInHtmlContent(course.introduction, query) || 
        containsAllKeywords(course.introduction, query)
      )) {
        results.push({
          title: `Introduction - ${course.title}`,
          path: `/formation?course=${courseId}`,
          excerpt: extractMultiKeywordExcerpt(course.introduction, query),
          source: 'Formation'
        });
      }
      
      // Search in course sections
      for (const section of course.sections) {
        if (section.title.toLowerCase().includes(query) || containsAllKeywords(section.title, query)) {
          results.push({
            title: section.title,
            path: `/formation?course=${courseId}&section=${section.id}`,
            excerpt: `Section du cours "${course.title}"`,
            source: 'Formation'
          });
        }
        
        // Search in section content
        if (section.content && (
          searchInHtmlContent(section.content, query) || 
          containsAllKeywords(section.content, query)
        )) {
          results.push({
            title: `${section.title} - ${course.title}`,
            path: `/formation?course=${courseId}&section=${section.id}`,
            excerpt: extractMultiKeywordExcerpt(section.content, query),
            source: 'Formation'
          });
        }
        
        // Search in subsections
        if (section.subsections) {
          for (const subsection of section.subsections) {
            if (subsection.title.toLowerCase().includes(query) || containsAllKeywords(subsection.title, query)) {
              results.push({
                title: subsection.title,
                path: `/formation?course=${courseId}&section=${section.id}`,
                excerpt: `Sous-section de "${section.title}" dans le cours "${course.title}"`,
                source: 'Formation'
              });
            }
            
            // Search in subsection content
            if (subsection.content && (
              searchInHtmlContent(subsection.content, query) || 
              containsAllKeywords(subsection.content, query)
            )) {
              results.push({
                title: `${subsection.title} - ${section.title}`,
                path: `/formation?course=${courseId}&section=${section.id}`,
                excerpt: extractMultiKeywordExcerpt(subsection.content, query),
                source: 'Formation'
              });
            }
          }
        }
      }
    }
    
    // Search in tax documentation
    if (
      'tva'.includes(query) || 
      'taxe'.includes(query) || 
      'impôt'.includes(query) || 
      'fiscal'.includes(query) || 
      'fiscalité'.includes(query)
    ) {
      results.push({
        title: 'TVA et fiscalité',
        path: '/formation?course=tax',
        excerpt: highlightText('Principes de la TVA suisse, taux applicables, méthodes de décompte et particularités.', query, 150),
        source: 'Formation'
      });
    }
    
    setSearchResults(results);
  }, [searchQuery]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };
  
  return (
    <div className="animate-fade-in">
      <HomeHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />

      {isSearching && searchResults.length > 0 ? (
        <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
      ) : isSearching && searchResults.length === 0 ? (
        <NoResults searchQuery={searchQuery} />
      ) : (
        <>
          <MainResources />
          <ToolsResources />
          <SpecialResources />
          <Partners />
        </>
      )}
    </div>
  );
};

export default Index;
