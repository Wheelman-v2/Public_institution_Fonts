    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Public_institution_Fonts/raw/main';
      var specificPaths = {
        '62570': 'MPVA/62570%20ttf_Typeface%20manual.zip',
        'Sokcho_Bada_Dotum': 'Sokcho-si/Sokcho_Bada_Dotum.zip',
        'Sokcho_Bada_Batang': 'Sokcho-si/Sokcho_Bada_Batang.zip',
        'Sokcho_Bada_Calligraphy': 'Sokcho-si/Sokcho_Bada_Calligraphy.zip',
        // 'font2': 'AnotherFolder/another_font.zip',
        // Add more link types as needed
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }
