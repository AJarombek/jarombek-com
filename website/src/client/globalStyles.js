/**
 * Global Styles for the application
 * @author Andrew Jarombek
 * @since 6/28/2018
 */

const globalStyles = {};

globalStyles.dev = `
  @font-face {
    font-family: Sylexiad;
    font-weight: normal;
    src: url("http://localhost:8080/client/assets/SylexiadSansThin.ttf") format("truetype");
  }

  @font-face {
    font-family: Sylexiad-Bold;
    font-weight: bold;
    src: url("http://localhost:8080/client/assets/SylexiadSansThin-Bold.ttf") 
        format("truetype");
  }

  @font-face {
    font-family: Dyslexie;
    font-weight: bold;
    src: url("http://localhost:8080/client/assets/dyslexie-bold.ttf") 
        format("truetype");
  }

  @font-face {
    font-family: Fantasque-Bold;
    font-weight: bold;
    src: url("http://localhost:8080/client/assets/FantasqueSansMono-Bold.ttf") 
        format("truetype");
  }
  
  @font-face {
    font-family: Longway;
    font-weight: bold;
    src: url("http://localhost:8080/client/assets/Longway-Regular.otf") 
        format("opentype");
  }
  
  @font-face {
    font-family: ElegantIcons;
    font-weight: bold;
    src: url("http://localhost:8080/client/assets/ElegantIcons.eot?#iefix") format("opentype"),
        url("http://localhost:8080/client/assets/ElegantIcons.ttf") format("truetype"),
        url("http://localhost:8080/client/assets/ElegantIcons.woff") format("woff");
  }
`;

globalStyles.prod = `
  @font-face {
    font-family: Sylexiad;
    font-weight: normal;
    src: url("https://asset.jarombek.com/fonts/SylexiadSansThin.ttf") format("truetype");
  }

  @font-face {
    font-family: Sylexiad-Bold;
    font-weight: bold;
    src: url("https://asset.jarombek.com/fonts/SylexiadSansThin-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: Dyslexie;
    font-weight: bold;
    src: url("https://asset.jarombek.com/fonts/dyslexie-bold.ttf") format("truetype");
  }

  @font-face {
    font-family: Fantasque-Bold;
    font-weight: bold;
    src: url("https://asset.jarombek.com/fonts/FantasqueSansMono-Bold.ttf") format("truetype");
  }
  
  @font-face {
    font-family: Longway;
    font-weight: bold;
    src: url("https://asset.jarombek.com/fonts/Longway-Regular.otf") format("opentype");
  }
  
  @font-face {
    font-family: ElegantIcons;
    font-weight: bold;
    src: url("https://asset.jarombek.com/fonts/ElegantIcons.eot?#iefix") format("opentype"),
        url("https://asset.jarombek.com/fonts/ElegantIcons.ttf") format("truetype"),
        url("https://asset.jarombek.com/fonts/ElegantIcons.woff") format("woff");
  }
`;

export default globalStyles;
