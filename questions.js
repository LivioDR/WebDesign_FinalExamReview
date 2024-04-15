const questions = [ 
    { 
        question: "What is the purpose of the HTML <span> tag?", 
        answers: 
        [ 
            { isCorrect: true, option: "To define a sub-section of an element that will be styled differently than the rest" }, 
            { isCorrect: false, option: "To insert a video on the page" }, 
            { isCorrect: false, option: "To create a new webpage" }, 
            { isCorrect: false, option: "To define a list of items" } 
        ] 
    }, 
    { 
        question: "Which attribute is used with the <img> tag in HTML to define the location of the image?", 
        answers: 
        [ 
            { isCorrect: true, option: "src" }, 
            { isCorrect: false, option: "alt" }, 
            { isCorrect: false, option: "href" }, 
            { isCorrect: false, option: "link" } 
        ] 
    }, 
    { 
        question: "What is the purpose of HTML lists?", 
        answers: 
        [ 
            { isCorrect: true, option: "To organize content in ordered or unordered lists" }, 
            { isCorrect: false, option: "To embed videos in a webpage" }, 
            { isCorrect: false, option: "To create interactive quizzes" }, 
            { isCorrect: false, option: "To style text differently" } 
        ] 
    }, 
    { 
        question: "What is Lorem Ipsum commonly used for in web development?", 
        answers: 
        [ 
            { isCorrect: true, option: "As filler text or placeholder content" }, 
            { isCorrect: false, option: "To generate images" }, 
            { isCorrect: false, option: "To create animations" }, 
            { isCorrect: false, option: "To design logos" } 
        ] 
    }, 
    { 
        question: "Where can filler content like Lorem Ipsum be found?", 
        answers: 
        [ 
            { isCorrect: true, option: "http://www.lipsum.com/" }, 
            { isCorrect: false, option: "http://www.fillertext.com/" }, 
            { isCorrect: false, option: "http://www.placeholdercontent.com/" }, 
            { isCorrect: false, option: "http://www.loremcontent.com/" } 
        ] 
    }, 
    { 
        question: "What is the purpose of the HTML <form> tag?", 
        answers: 
        [ 
            { isCorrect: true, option: "To represent a section of the page for accepting user input" }, 
            { isCorrect: false, option: "To insert images" }, 
            { isCorrect: false, option: "To create tables" }, 
            { isCorrect: false, option: "To define a new webpage" } 
        ] 
    }, 
    { 
        question: "Which attribute is used with the <input> element in HTML to define the kind of control?", 
        answers: 
        [ 
            { isCorrect: true, option: "type" }, 
            { isCorrect: false, option: "id" }, 
            { isCorrect: false, option: "name" }, 
            { isCorrect: false, option: "value" } 
        ] 
    }, 
    { 
        question: "What does the type attribute of the <input> element define?", 
        answers: 
        [ 
            { isCorrect: true, option: "The kind of control the input represents" }, 
            { isCorrect: false, option: "The input's unique identifier" }, 
            { isCorrect: false, option: "The input's name for JavaScript reference" }, 
            { isCorrect: false, option: "The initial value of the input" } 
        ] 
    }, 
    { 
        question: "Which HTML element is used to define a caption for a table?", 
        answers: 
        [ 
            { isCorrect: true, option: "<caption>" }, 
            { isCorrect: false, option: "<header>" }, 
            { isCorrect: false, option: "<footer>" }, 
            { isCorrect: false, option: "<title>" } 
        ] 
    }, 
    { 
        question: "What is the purpose of the HTML <colgroup> element?", 
        answers: 
        [ 
            { isCorrect: true, option: "To allow grouping of columns for formatting" }, 
            { isCorrect: false, option: "To define a new section of the page" }, 
            { isCorrect: false, option: "To create a navigation bar" }, 
            { isCorrect: false, option: "To style text differently" } 
        ] 
    },
    { question: "What is the purpose of the HTML <img> tag?", answers: [ { isCorrect: true, option: "To place an image on the page" }, { isCorrect: false, option: "To create a hyperlink" }, { isCorrect: false, option: "To define a table" }, { isCorrect: false, option: "To style text" } ] }, 
    { question: "Which attribute should be used with the <img> tag to provide an image description for screen readers?", answers: [ { isCorrect: true, option: "alt" }, { isCorrect: false, option: "src" }, { isCorrect: false, option: "title" }, { isCorrect: false, option: "href" } ] }, 
    { question: "What is the purpose of the HTML <ol> tag?", answers: [ { isCorrect: true, option: "To create an ordered list" }, { isCorrect: false, option: "To insert a video" }, { isCorrect: false, option: "To define a form" }, { isCorrect: false, option: "To style text" } ] }, 
    { question: "Which tag is used to define individual list items in HTML lists?", answers: [ { isCorrect: true, option: "<li>" }, { isCorrect: false, option: "<ul>" }, { isCorrect: false, option: "<ol>" }, { isCorrect: false, option: "<div>" } ] }, 
    { question: "What is the purpose of the CSS property 'text-align'?", answers: [ { isCorrect: true, option: "To specify the horizontal alignment of text" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a shadow effect to text" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to change the color of text?", answers: [ { isCorrect: true, option: "color" }, { isCorrect: false, option: "font-family" }, { isCorrect: false, option: "text-decoration" }, { isCorrect: false, option: "background-color" } ] }, 
    { question: "What does the CSS property 'font-weight' control?", answers: [ { isCorrect: true, option: "The thickness of characters in text" }, { isCorrect: false, option: "The spacing between characters" }, { isCorrect: false, option: "The style of the font" }, { isCorrect: false, option: "The alignment of text" } ] }, { question: "Which CSS property is used to add a shadow effect to text?", answers: [ { isCorrect: true, option: "text-shadow" }, { isCorrect: false, option: "background-color" }, { isCorrect: false, option: "color" }, { isCorrect: false, option: "font-weight" } ] }, 
    { question: "What is the purpose of the CSS property 'background-color'?", answers: [ { isCorrect: true, option: "To apply a color to the background of an element" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a border around an element" }, { isCorrect: false, option: "To change the text color" } ] }, { question: "Which CSS property is used to change the case of text?", answers: [ { isCorrect: true, option: "text-transform" }, { isCorrect: false, option: "letter-spacing" }, { isCorrect: false, option: "line-height" }, { isCorrect: false, option: "word-spacing" } ] },
    { question: "What is the purpose of the CSS property 'margin'?", answers: [ { isCorrect: true, option: "To create space around an element" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a border to an element" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to control the spacing between lines of text?", answers: [ { isCorrect: true, option: "line-height" }, { isCorrect: false, option: "margin" }, { isCorrect: false, option: "padding" }, { isCorrect: false, option: "text-indent" } ] }, 
    { question: "What does the CSS property 'padding' control?", answers: [ { isCorrect: true, option: "The space between the content and the border of an element" }, { isCorrect: false, option: "The thickness of the border of an element" }, { isCorrect: false, option: "The space around an element" }, { isCorrect: false, option: "The alignment of text within an element" } ] }, 
    { question: "Which CSS property is used to control the size of text?", answers: [ { isCorrect: true, option: "font-size" }, { isCorrect: false, option: "line-height" }, { isCorrect: false, option: "text-transform" }, { isCorrect: false, option: "font-weight" } ] }, 
    { question: "What is the purpose of the CSS property 'border'?", answers: [ { isCorrect: true, option: "To create a border around an element" }, { isCorrect: false, option: "To change the font style" }, { isCorrect: false, option: "To add a shadow effect to text" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to control the style of a border?", answers: [ { isCorrect: true, option: "border-style" }, { isCorrect: false, option: "border-color" }, { isCorrect: false, option: "border-width" }, { isCorrect: false, option: "border-radius" } ] }, 
    { question: "What does the CSS property 'display' control?", answers: [ { isCorrect: true, option: "The display behavior of an element" }, { isCorrect: false, option: "The font size of text" }, { isCorrect: false, option: "The color of text" }, { isCorrect: false, option: "The spacing between lines of text" } ] }, { question: "Which CSS property is used to control the visibility of an element?", answers: [ { isCorrect: true, option: "visibility" }, { isCorrect: false, option: "display" }, { isCorrect: false, option: "opacity" }, { isCorrect: false, option: "position" } ] }, 
    { question: "What is the purpose of the CSS property 'position'?", answers: [ { isCorrect: true, option: "To specify the positioning method of an element" }, { isCorrect: false, option: "To change the font family" }, { isCorrect: false, option: "To add a background color to an element" }, { isCorrect: false, option: "To control the size of text" } ] }, 
    { question: "Which CSS property is used to control the floating behavior of an element?", answers: [ { isCorrect: true, option: "float" }, { isCorrect: false, option: "clear" }, { isCorrect: false, option: "position" }, { isCorrect: false, option: "display" } ] },
    { question: "What is the purpose of the CSS property 'flex-grow' in Flexbox?", answers: [ { isCorrect: true, option: "To define the ability for a flex item to grow if necessary" }, { isCorrect: false, option: "To set the initial size of the flex item" }, { isCorrect: false, option: "To control the shrink factor of a flex item" }, { isCorrect: false, option: "To specify the alignment of flex items" } ] }, 
    { question: "Which CSS property in Flexbox is a shorthand for flex-grow, flex-shrink, and flex-basis?", answers: [ { isCorrect: true, option: "flex" }, { isCorrect: false, option: "flex-grow" }, { isCorrect: false, option: "flex-shrink" }, { isCorrect: false, option: "flex-basis" } ] }, 
    { question: "What does the 'flex-shrink' property in Flexbox control?", answers: [ { isCorrect: true, option: "The shrink factor of a flex item" }, { isCorrect: false, option: "The ability for a flex item to grow" }, { isCorrect: false, option: "The initial size of the flex item" }, { isCorrect: false, option: "The alignment of flex items" } ] }, 
    { question: "In CSS Grid, what is the purpose of the 'grid-template-columns' property?", answers: [ { isCorrect: true, option: "To define the widths of columns in a grid layout" }, { isCorrect: false, option: "To set the initial size of grid items" }, { isCorrect: false, option: "To control the spacing between grid items" }, { isCorrect: false, option: "To specify the alignment of grid items" } ] }, 
    { question: "Which CSS property is used to create space between columns in a CSS Grid layout?", answers: [ { isCorrect: true, option: "grid-column-gap" }, { isCorrect: false, option: "grid-row-gap" }, { isCorrect: false, option: "grid-gap" }, { isCorrect: false, option: "grid-template-columns" } ] }, 
    { question: "What is the purpose of the 'grid-template-rows' property in CSS Grid?", answers: [ { isCorrect: true, option: "To define the heights of rows in a grid layout" }, { isCorrect: false, option: "To specify the alignment of grid items" }, { isCorrect: false, option: "To control the spacing between grid items" }, { isCorrect: false, option: "To set the initial size of grid items" } ] },
    { question: "What is the purpose of a Content Security Policy (CSP) in web security?", answers: [ { isCorrect: true, option: "To prevent cross-site scripting (XSS) attacks by defining approved sources of content" }, { isCorrect: false, option: "To encrypt all communication between the client and server" }, { isCorrect: false, option: "To restrict access to specific URLs on the server" }, { isCorrect: false, option: "To manage user authentication and session management" } ] }, { question: "Which of the following is a common vulnerability that the OWASP Top 10 list aims to address?", answers: [ { isCorrect: true, option: "Injection attacks like SQL injection and cross-site scripting (XSS)" }, { isCorrect: false, option: "Physical security breaches" }, { isCorrect: false, option: "SEO optimization issues" }, { isCorrect: false, option: "Responsive design challenges" } ] }, { question: "What is the purpose of a meta description tag in SEO?", answers: [ { isCorrect: true, option: "To provide a brief summary of a webpage's content in search engine results" }, { isCorrect: false, option: "To define the keywords for a webpage" }, { isCorrect: false, option: "To specify the character encoding of the webpage" }, { isCorrect: false, option: "To set the viewport for mobile devices" } ] }, { question: "Which of the following is a popular CSS framework for building responsive and mobile-first websites?", answers: [ { isCorrect: true, option: "Bootstrap" }, { isCorrect: false, option: "Tailwind CSS" }, { isCorrect: false, option: "Materialize CSS" }, { isCorrect: false, option: "Bulma CSS" } ] }, { question: "What is the main purpose of using a JavaScript framework like React or Angular?", answers: [ { isCorrect: true, option: "To build interactive and dynamic web applications with reusable components" }, { isCorrect: false, option: "To optimize website loading speed" }, { isCorrect: false, option: "To improve SEO ranking" }, { isCorrect: false, option: "To secure user data on the server" } ] },
    { question: "What is the purpose of using HTTPS on a website?", answers: [ { isCorrect: true, option: "To secure the communication between the user's browser and the website server" }, { isCorrect: false, option: "To improve the website's SEO ranking" }, { isCorrect: false, option: "To increase the website's loading speed" }, { isCorrect: false, option: "To add visual effects to the website" } ] }, { question: "Which of the following is a common practice to enhance website security?", answers: [ { isCorrect: true, option: "Regularly updating software and plugins to patch security vulnerabilities" }, { isCorrect: false, option: "Using weak passwords for user accounts" }, { isCorrect: false, option: "Sharing sensitive data openly on the website" }, { isCorrect: false, option: "Ignoring security audits and testing" } ] }, { question: "What is the purpose of a robots.txt file in SEO?", answers: [ { isCorrect: true, option: "To instruct search engine crawlers on which pages to crawl or not to crawl" }, { isCorrect: false, option: "To display a list of all website visitors" }, { isCorrect: false, option: "To automatically generate meta tags for each page" }, { isCorrect: false, option: "To create a sitemap for the website" } ] }, { question: "Which of the following is a JavaScript framework commonly used for building single-page applications?", answers: [ { isCorrect: true, option: "React" }, { isCorrect: false, option: "Vue.js" }, { isCorrect: false, option: "jQuery" }, { isCorrect: false, option: "Ember.js" } ] }, { question: "What is the purpose of using a CSS preprocessor like Sass or Less?", answers: [ { isCorrect: true, option: "To enhance the capabilities of CSS by adding features like variables and nesting" }, { isCorrect: false, option: "To reduce the file size of CSS files" }, { isCorrect: false, option: "To optimize images on the website" }, { isCorrect: false, option: "To improve server-side security" } ] } 
]

export default questions