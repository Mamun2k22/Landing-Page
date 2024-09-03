import { useEffect } from 'react';

const GoogleTranslate = () => {
  // useEffect(() => {
  //   const addGoogleTranslateScript = () => {
  //     const script = document.createElement('script');
  //     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     window.googleTranslateElementInit = function() {
  //       new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  //     };
  //   };

  //   addGoogleTranslateScript();
  // }, []);

  return (
    <div id="google_translate_element" className="flex items-center space-x-2">
      <span className="text-sm">En</span>
      <img
        src="https://cdn-icons-png.flaticon.com/128/2875/2875427.png"
        alt="Google Translate Icon"
        className="w-4 h-4"
      />
    </div>
  );
};

export default GoogleTranslate;
