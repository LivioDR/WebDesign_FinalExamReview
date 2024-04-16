const questions = [ 
    { question: "What is the purpose of the HTML <span> tag?", 
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
    { question: "What is the purpose of the HTML <colgroup> element?", answers: [ { isCorrect: true, option: "To allow grouping of columns for formatting" }, { isCorrect: false, option: "To define a new section of the page" }, { isCorrect: false, option: "To create a navigation bar" }, { isCorrect: false, option: "To style text differently" } ] },
    { question: "What is the purpose of the HTML <img> tag?", answers: [ { isCorrect: true, option: "To place an image on the page" }, { isCorrect: false, option: "To create a hyperlink" }, { isCorrect: false, option: "To define a table" }, { isCorrect: false, option: "To style text" } ] }, 
    { question: "Which attribute should be used with the <img> tag to provide an image description for screen readers?", answers: [ { isCorrect: true, option: "alt" }, { isCorrect: false, option: "src" }, { isCorrect: false, option: "title" }, { isCorrect: false, option: "href" } ] }, 
    { question: "What is the purpose of the HTML <ol> tag?", answers: [ { isCorrect: true, option: "To create an ordered list" }, { isCorrect: false, option: "To insert a video" }, { isCorrect: false, option: "To define a form" }, { isCorrect: false, option: "To style text" } ] }, 
    { question: "Which tag is used to define individual list items in HTML lists?", answers: [ { isCorrect: true, option: "<li>" }, { isCorrect: false, option: "<ul>" }, { isCorrect: false, option: "<ol>" }, { isCorrect: false, option: "<div>" } ] }, 
    { question: "What is the purpose of the CSS property 'text-align'?", answers: [ { isCorrect: true, option: "To specify the horizontal alignment of text" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a shadow effect to text" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to change the color of text?", answers: [ { isCorrect: true, option: "color" }, { isCorrect: false, option: "font-family" }, { isCorrect: false, option: "text-decoration" }, { isCorrect: false, option: "background-color" } ] }, 
    { question: "What does the CSS property 'font-weight' control?", answers: [ { isCorrect: true, option: "The thickness of characters in text" }, { isCorrect: false, option: "The spacing between characters" }, { isCorrect: false, option: "The style of the font" }, { isCorrect: false, option: "The alignment of text" } ] }, 
    { question: "Which CSS property is used to add a shadow effect to text?", answers: [ { isCorrect: true, option: "text-shadow" }, { isCorrect: false, option: "background-color" }, { isCorrect: false, option: "color" }, { isCorrect: false, option: "font-weight" } ] }, 
    { question: "What is the purpose of the CSS property 'background-color'?", answers: [ { isCorrect: true, option: "To apply a color to the background of an element" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a border around an element" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to change the case of text?", answers: [ { isCorrect: true, option: "text-transform" }, { isCorrect: false, option: "letter-spacing" }, { isCorrect: false, option: "line-height" }, { isCorrect: false, option: "word-spacing" } ] },
    { question: "What is the purpose of the CSS property 'margin'?", answers: [ { isCorrect: true, option: "To create space around an element" }, { isCorrect: false, option: "To change the font size" }, { isCorrect: false, option: "To add a border to an element" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to control the spacing between lines of text?", answers: [ { isCorrect: true, option: "line-height" }, { isCorrect: false, option: "margin" }, { isCorrect: false, option: "padding" }, { isCorrect: false, option: "text-indent" } ] }, 
    { question: "What does the CSS property 'padding' control?", answers: [ { isCorrect: true, option: "The space between the content and the border of an element" }, { isCorrect: false, option: "The thickness of the border of an element" }, { isCorrect: false, option: "The space around an element" }, { isCorrect: false, option: "The alignment of text within an element" } ] }, 
    { question: "Which CSS property is used to control the size of text?", answers: [ { isCorrect: true, option: "font-size" }, { isCorrect: false, option: "line-height" }, { isCorrect: false, option: "text-transform" }, { isCorrect: false, option: "font-weight" } ] }, 
    { question: "What is the purpose of the CSS property 'border'?", answers: [ { isCorrect: true, option: "To create a border around an element" }, { isCorrect: false, option: "To change the font style" }, { isCorrect: false, option: "To add a shadow effect to text" }, { isCorrect: false, option: "To change the text color" } ] }, 
    { question: "Which CSS property is used to control the style of a border?", answers: [ { isCorrect: true, option: "border-style" }, { isCorrect: false, option: "border-color" }, { isCorrect: false, option: "border-width" }, { isCorrect: false, option: "border-radius" } ] }, 
    { question: "What does the CSS property 'display' control?", answers: [ { isCorrect: true, option: "The display behavior of an element" }, { isCorrect: false, option: "The font size of text" }, { isCorrect: false, option: "The color of text" }, { isCorrect: false, option: "The spacing between lines of text" } ] }, 
    { question: "Which CSS property is used to control the visibility of an element?", answers: [ { isCorrect: true, option: "visibility" }, { isCorrect: false, option: "display" }, { isCorrect: false, option: "opacity" }, { isCorrect: false, option: "position" } ] }, 
    { question: "What is the purpose of the CSS property 'position'?", answers: [ { isCorrect: true, option: "To specify the positioning method of an element" }, { isCorrect: false, option: "To change the font family" }, { isCorrect: false, option: "To add a background color to an element" }, { isCorrect: false, option: "To control the size of text" } ] }, 
    { question: "Which CSS property is used to control the floating behavior of an element?", answers: [ { isCorrect: true, option: "float" }, { isCorrect: false, option: "clear" }, { isCorrect: false, option: "position" }, { isCorrect: false, option: "display" } ] },
    { question: "What is the purpose of the CSS property 'flex-grow' in Flexbox?", answers: [ { isCorrect: true, option: "To define the ability for a flex item to grow if necessary" }, { isCorrect: false, option: "To set the initial size of the flex item" }, { isCorrect: false, option: "To control the shrink factor of a flex item" }, { isCorrect: false, option: "To specify the alignment of flex items" } ] }, 
    { question: "Which CSS property in Flexbox is a shorthand for flex-grow, flex-shrink, and flex-basis?", answers: [ { isCorrect: true, option: "flex" }, { isCorrect: false, option: "flex-grow" }, { isCorrect: false, option: "flex-shrink" }, { isCorrect: false, option: "flex-basis" } ] }, 
    { question: "What does the 'flex-shrink' property in Flexbox control?", answers: [ { isCorrect: true, option: "The shrink factor of a flex item" }, { isCorrect: false, option: "The ability for a flex item to grow" }, { isCorrect: false, option: "The initial size of the flex item" }, { isCorrect: false, option: "The alignment of flex items" } ] }, 
    { question: "In CSS Grid, what is the purpose of the 'grid-template-columns' property?", answers: [ { isCorrect: true, option: "To define the widths of columns in a grid layout" }, { isCorrect: false, option: "To set the initial size of grid items" }, { isCorrect: false, option: "To control the spacing between grid items" }, { isCorrect: false, option: "To specify the alignment of grid items" } ] }, 
    { question: "Which CSS property is used to create space between columns in a CSS Grid layout?", answers: [ { isCorrect: true, option: "grid-column-gap" }, { isCorrect: false, option: "grid-row-gap" }, { isCorrect: false, option: "grid-gap" }, { isCorrect: false, option: "grid-template-columns" } ] }, 
    { question: "What is the purpose of the 'grid-template-rows' property in CSS Grid?", answers: [ { isCorrect: true, option: "To define the heights of rows in a grid layout" }, { isCorrect: false, option: "To specify the alignment of grid items" }, { isCorrect: false, option: "To control the spacing between grid items" }, { isCorrect: false, option: "To set the initial size of grid items" } ] },
    { question: "What is the purpose of a Content Security Policy (CSP) in web security?", answers: [ { isCorrect: true, option: "To prevent cross-site scripting (XSS) attacks by defining approved sources of content" }, { isCorrect: false, option: "To encrypt all communication between the client and server" }, { isCorrect: false, option: "To restrict access to specific URLs on the server" }, { isCorrect: false, option: "To manage user authentication and session management" } ] }, 
    { question: "Which of the following is a common vulnerability that the OWASP Top 10 list aims to address?", answers: [ { isCorrect: true, option: "Injection attacks like SQL injection and cross-site scripting (XSS)" }, { isCorrect: false, option: "Physical security breaches" }, { isCorrect: false, option: "SEO optimization issues" }, { isCorrect: false, option: "Responsive design challenges" } ] }, 
    { question: "What is the purpose of a meta description tag in SEO?", answers: [ { isCorrect: true, option: "To provide a brief summary of a webpage's content in search engine results" }, { isCorrect: false, option: "To define the keywords for a webpage" }, { isCorrect: false, option: "To specify the character encoding of the webpage" }, { isCorrect: false, option: "To set the viewport for mobile devices" } ] }, 
    { question: "Which of the following is a popular CSS framework for building responsive and mobile-first websites?", answers: [ { isCorrect: true, option: "Bootstrap" }, { isCorrect: false, option: "Tailwind CSS" }, { isCorrect: false, option: "Materialize CSS" }, { isCorrect: false, option: "Bulma CSS" } ] }, 
    { question: "What is the main purpose of using a JavaScript framework like React or Angular?", answers: [ { isCorrect: true, option: "To build interactive and dynamic web applications with reusable components" }, { isCorrect: false, option: "To optimize website loading speed" }, { isCorrect: false, option: "To improve SEO ranking" }, { isCorrect: false, option: "To secure user data on the server" } ] },
    { question: "What is the purpose of using HTTPS on a website?", answers: [ { isCorrect: true, option: "To secure the communication between the user's browser and the website server" }, { isCorrect: false, option: "To improve the website's SEO ranking" }, { isCorrect: false, option: "To increase the website's loading speed" }, { isCorrect: false, option: "To add visual effects to the website" } ] }, 
    { question: "Which of the following is a common practice to enhance website security?", answers: [ { isCorrect: true, option: "Regularly updating software and plugins to patch security vulnerabilities" }, { isCorrect: false, option: "Using weak passwords for user accounts" }, { isCorrect: false, option: "Sharing sensitive data openly on the website" }, { isCorrect: false, option: "Ignoring security audits and testing" } ] }, 
    { question: "What is the purpose of a robots.txt file in SEO?", answers: [ { isCorrect: true, option: "To instruct search engine crawlers on which pages to crawl or not to crawl" }, { isCorrect: false, option: "To display a list of all website visitors" }, { isCorrect: false, option: "To automatically generate meta tags for each page" }, { isCorrect: false, option: "To create a sitemap for the website" } ] }, 
    { question: "Which of the following is a JavaScript framework commonly used for building single-page applications?", answers: [ { isCorrect: true, option: "React" }, { isCorrect: false, option: "Vue.js" }, { isCorrect: false, option: "jQuery" }, { isCorrect: false, option: "Ember.js" } ] }, 
    { question: "What is the purpose of using a CSS preprocessor like Sass or Less?", answers: [ { isCorrect: true, option: "To enhance the capabilities of CSS by adding features like variables and nesting" }, { isCorrect: false, option: "To reduce the file size of CSS files" }, { isCorrect: false, option: "To optimize images on the website" }, { isCorrect: false, option: "To improve server-side security" } ] },
    { question: "What does the CSS Box Model consist of?", answers: [ { isCorrect: true, option: "Content, padding, border, and margin" }, { isCorrect: false, option: "Header, footer, sidebar, and main content" }, { isCorrect: false, option: "Images, videos, text, and links" }, { isCorrect: false, option: "HTML, CSS, JavaScript, and PHP" } ] }, 
    { question: "Which part of the box model is responsible for the actual content like text or images?", answers: [ { isCorrect: true, option: "Content box" }, { isCorrect: false, option: "Padding box" }, { isCorrect: false, option: "Border box" }, { isCorrect: false, option: "Margin box" } ] }, 
    { question: "What does the padding box in the box model represent?", answers: [ { isCorrect: true, option: "The space around the content inside the border" }, { isCorrect: false, option: "The outermost layer of the box" }, { isCorrect: false, option: "The area where the content is displayed" }, { isCorrect: false, option: "The space between the border and the next element" } ] }, 
    { question: "Which CSS property is used to apply padding to an element?", answers: [ { isCorrect: true, option: "padding" }, { isCorrect: false, option: "margin" }, { isCorrect: false, option: "border" }, { isCorrect: false, option: "content" } ] }, 
    { question: "What is the purpose of the margin box in the box model?", answers: [ { isCorrect: true, option: "To create space outside the border of the element" }, { isCorrect: false, option: "To define the area where the content is displayed" }, { isCorrect: false, option: "To add space around the content inside the border" }, { isCorrect: false, option: "To set the thickness of the border" } ] },
    { question: "What is the purpose of the CSS selector 'p'?", answers: [ { isCorrect: true, option: "To target all <p> elements on the page" }, { isCorrect: false, option: "To style <div> elements" }, { isCorrect: false, option: "To apply styles to links" }, { isCorrect: false, option: "To target specific classes" } ] }, 
    { question: "Which CSS selector is used to target elements with a specific class?", answers: [ { isCorrect: true, option: ".classname" }, { isCorrect: false, option: "#idname" }, { isCorrect: false, option: "elementname" }, { isCorrect: false, option: "element.classname" } ] }, 
    { question: "What does the CSS property 'font-size' control?", answers: [ { isCorrect: true, option: "The size of the text in an element" }, { isCorrect: false, option: "The spacing between lines of text" }, { isCorrect: false, option: "The thickness of characters in text" }, { isCorrect: false, option: "The color of the text" } ] }, 
    { question: "Which unit is commonly used for font sizing in CSS to make text responsive?", answers: [ { isCorrect: true, option: "em" }, { isCorrect: false, option: "px" }, { isCorrect: false, option: "pt" }, { isCorrect: false, option: "%" } ] }, 
    { question: "What is the purpose of the CSS property 'color'?", answers: [ { isCorrect: true, option: "To set the color of text or elements" }, { isCorrect: false, option: "To add a shadow effect to text" }, { isCorrect: false, option: "To control the spacing between characters" }, { isCorrect: false, option: "To define the font family" } ] }, 
    { question: "Which CSS property is used to add a background color to an element?", answers: [ { isCorrect: true, option: "background-color" }, { isCorrect: false, option: "text-color" }, { isCorrect: false, option: "font-color" }, { isCorrect: false, option: "color-background" } ] }, 
    { question: "What does the CSS property 'font-family' define?", answers: [ { isCorrect: true, option: "The type of font to be used for text" }, { isCorrect: false, option: "The size of the font" }, { isCorrect: false, option: "The spacing between characters" }, { isCorrect: false, option: "The color of the text" } ] }, 
    { question: "Which CSS property is used to control the spacing between characters in text?", answers: [ { isCorrect: true, option: "letter-spacing" }, { isCorrect: false, option: "word-spacing" }, { isCorrect: false, option: "line-height" }, { isCorrect: false, option: "text-indent" } ] },
    { question: "What is the main philosophy behind a mobile-first design approach for websites?", answers: [ { isCorrect: true, option: "To prioritize designing for mobile devices before desktops or larger screens" }, { isCorrect: false, option: "To focus only on desktop design and then adapt it for mobile" }, { isCorrect: false, option: "To design for tablets first and then adjust for other devices" }, { isCorrect: false, option: "To design separately for each device size without considering responsiveness" } ] }, 
    { question: "Why is mobile-first design important for user experience?", answers: [ { isCorrect: true, option: "Because more users access websites from mobile devices and expect a seamless experience" }, { isCorrect: false, option: "Because desktop users are the primary target audience for most websites" }, { isCorrect: false, option: "Because mobile devices have larger screens and better resolution" }, { isCorrect: false, option: "Because mobile-first design is a trend without real benefits" } ] }, 
    { question: "What does it mean to design with a mobile-first approach in terms of content prioritization?", answers: [ { isCorrect: true, option: "To focus on essential content and features for mobile users and then enhance for larger screens" }, { isCorrect: false, option: "To overload the mobile version with all possible content and features" }, { isCorrect: false, option: "To ignore content hierarchy and structure for mobile devices" }, { isCorrect: false, option: "To design separately for mobile and desktop with no content overlap" } ] }, 
    { question: "How does a mobile-first design contribute to better performance and loading speed?", answers: [ { isCorrect: true, option: "By starting with a simpler, more streamlined design that can be enhanced for larger screens, reducing unnecessary elements" }, { isCorrect: false, option: "By including complex animations and effects that are optimized for mobile devices" }, { isCorrect: false, option: "By using high-resolution images and videos that may slow down mobile loading times" }, { isCorrect: false, option: "By focusing on desktop design first and then optimizing for mobile, leading to faster loading speeds" } ] },
    { question: "What is the purpose of the 'git init' command in Git?", answers: [ { isCorrect: true, option: "To initialize a new Git repository in the current directory" }, { isCorrect: false, option: "To commit changes to the repository" }, { isCorrect: false, option: "To push changes to a remote repository" }, { isCorrect: false, option: "To create a new branch in Git" } ] }, 
    { question: "Which Git command is used to stage changes for a commit?", answers: [ { isCorrect: true, option: "git add" }, { isCorrect: false, option: "git commit" }, { isCorrect: false, option: "git push" }, { isCorrect: false, option: "git checkout" }] }, 
    { question: "What does the 'git commit' command do in Git?", answers: [ { isCorrect: true, option: "To record the changes to the repository" }, { isCorrect: false, option: "To create a new branch" }, { isCorrect: false, option: "To merge branches" }, { isCorrect: false, option: "To push changes to a remote repository" }] },
    { question: "What is the purpose of the 'git init' command in Git?", answers: [ { isCorrect: true, option: "To initialize a new Git repository in the current directory" }, { isCorrect: false, option: "To commit changes to the repository" }, { isCorrect: false, option: "To push changes to a remote repository" }, { isCorrect: false, option: "To create a new branch in Git" } ] }, 
    { question: "Which Git command is used to stage changes for a commit?", answers: [ { isCorrect: true, option: "git add" }, { isCorrect: false, option: "git commit" }, { isCorrect: false, option: "git push" }, { isCorrect: false, option: "git checkout" } ] }, 
    { question: "What does the 'git commit' command do in Git?", answers: [ { isCorrect: true, option: "To record the changes to the repository" }, { isCorrect: false, option: "To create a new branch" }, { isCorrect: false, option: "To merge branches" }, { isCorrect: false, option: "To push changes to a remote repository" } ] }, 
    { question: "Which Git command is used to view the commit history?", answers: [ { isCorrect: true, option: "git log" }, { isCorrect: false, option: "git status" }, { isCorrect: false, option: "git branch" }, { isCorrect: false, option: "git diff" } ] }, 
    { question: "What is the purpose of the 'git push' command in Git?", answers: [ { isCorrect: true, option: "To push changes from the local repository to a remote repository" }, { isCorrect: false, option: "To pull changes from a remote repository to the local repository" }, { isCorrect: false, option: "To reset the repository to a previous commit" }, { isCorrect: false, option: "To create a new branch in the repository" } ] },
    { question: "What is the purpose of the <table> tag in HTML?", answers: [ { isCorrect: true, option: "To create a table to display data in rows and columns" }, { isCorrect: false, option: "To insert an image on the webpage" }, { isCorrect: false, option: "To define a form for user input" }, { isCorrect: false, option: "To style text content" } ] }, 
    { question: "Which HTML tag must appear right after the <table> tag to define a caption for the table?", answers: [ { isCorrect: true, option: "<caption>" }, { isCorrect: false, option: "<thead>" }, { isCorrect: false, option: "<tr>" }, { isCorrect: false, option: "<th>" } ] }, 
    { question: "What is the purpose of the <th> tag in an HTML table?", answers: [ { isCorrect: true, option: "To define a header cell in a table" }, { isCorrect: false, option: "To create a new row in the table" }, { isCorrect: false, option: "To style the table with CSS" }, { isCorrect: false, option: "To insert an image in the table" } ] }, 
    { question: "Which HTML tag is used to group together table rows (<tr>) in a table?", answers: [ { isCorrect: true, option: "<tbody>" }, { isCorrect: false, option: "<thead>" }, { isCorrect: false, option: "<tfoot>" }, { isCorrect: false, option: "<td>" } ] }, 
    { question: "What is the purpose of the <form> tag in HTML?", answers: [ { isCorrect: true, option: "To represent a section of the page for accepting user input" }, { isCorrect: false, option: "To create a table layout" }, { isCorrect: false, option: "To define a caption for an image" }, { isCorrect: false, option: "To style text content" } ] },
    { question: "What is the purpose of the 'alt' attribute in the <img> tag for images?", answers: [ { isCorrect: true, option: "To provide alternative text for screen readers and when images cannot be displayed" }, { isCorrect: false, option: "To change the color of the image" }, { isCorrect: false, option: "To add a border around the image" }, { isCorrect: false, option: "To make the image clickable" } ] }, 
    { question: "Why is it important to use semantic HTML elements like <nav>, <main>, and <footer> for web accessibility?", answers: [ { isCorrect: true, option: "To improve the structure and navigation of the webpage for assistive technologies" }, { isCorrect: false, option: "To enhance the visual design of the webpage" }, { isCorrect: false, option: "To increase the loading speed of the webpage" }, { isCorrect: false, option: "To add animations to the webpage" } ] }, 
    { question: "What is the significance of providing keyboard accessibility on a website for users with disabilities?", answers: [ { isCorrect: true, option: "It allows users to navigate and interact with the website using only the keyboard" }, { isCorrect: false, option: "It changes the color scheme of the website" }, { isCorrect: false, option: "It adds audio descriptions to the content" }, { isCorrect: false, option: "It disables certain features of the website" } ] }, 
    { question: "How does ensuring proper color contrast contribute to web accessibility?", answers: [ { isCorrect: true, option: "It improves readability and ensures content is distinguishable for users with visual impairments" }, { isCorrect: false, option: "It enhances the visual appeal of the website" }, { isCorrect: false, option: "It increases the loading speed of the website" }, { isCorrect: false, option: "It adds interactive elements to the website" } ] }, 
    { question: "Why is providing descriptive text labels for form elements important for web accessibility?", answers: [ { isCorrect: true, option: "It helps users understand the purpose of form fields, especially for screen reader users" }, { isCorrect: false, option: "It changes the font style of the form elements" }, { isCorrect: false, option: "It restricts the input in form fields" }, { isCorrect: false, option: "It hides the form elements from users" } ] },
    { question: "What is the purpose of CSS transitions?", answers: [ { isCorrect: true, option: "To change property values smoothly over a specified duration" }, { isCorrect: false, option: "To create complex animations with keyframes" }, { isCorrect: false, option: "To apply filters to images and videos" }, { isCorrect: false, option: "To define the layout of a webpage" } ] }, 
    { question: "How can you control the timing of a CSS transition?", answers: [ { isCorrect: true, option: "By specifying the duration, timing function, and delay" }, { isCorrect: false, option: "By using keyframes to define animation sequences" }, { isCorrect: false, option: "By setting the animation-fill-mode property" }, { isCorrect: false, option: "By adjusting the animation-iteration-count" } ] }, 
    { question: "What does the CSS property 'transform' do?", answers: [ { isCorrect: true, option: "It allows elements to be transformed in 2D or 3D space" }, { isCorrect: false, option: "It controls the timing of animations" }, { isCorrect: false, option: "It changes the color of elements" }, { isCorrect: false, option: "It defines the layout of a webpage" } ] }, 
    { question: "How can you create a keyframe animation in CSS?", answers: [ { isCorrect: true, option: "By using the @keyframes rule to define the animation sequence" }, { isCorrect: false, option: "By setting the animation-duration property" }, { isCorrect: false, option: "By applying transitions to elements" }, { isCorrect: false, option: "By adjusting the animation-fill-mode property" } ] }, 
    { question: "What is the purpose of the CSS property 'animation-play-state'?", answers: [ { isCorrect: true, option: "To pause and resume an animation sequence" }, { isCorrect: false, option: "To control the direction of an animation" }, { isCorrect: false, option: "To define the number of times an animation should repeat" }, { isCorrect: false, option: "To configure what values are applied by the animation before and after it is executing" } ] },
    { question: "What is the difference between CSS transitions and CSS animations?", answers: [ { isCorrect: true, option: "Transitions change property values over a specified duration, while animations allow for more complex keyframe-based animations" }, { isCorrect: false, option: "Transitions are only for 2D transformations, while animations can handle 3D transformations" }, { isCorrect: false, option: "Transitions are triggered by user interactions, while animations run automatically" }, { isCorrect: false, option: "Animations are more efficient for simple property changes than transitions" } ] }, 
    { question: "How can you create a fade-in effect using CSS transitions?", answers: [ { isCorrect: true, option: "By setting the opacity property from 0 to 1 with a specified duration" }, { isCorrect: false, option: "By using the transform property to scale the element up" }, { isCorrect: false, option: "By applying a rotation animation to the element" }, { isCorrect: false, option: "By changing the background color of the element" } ] }, 
    { question: "What is the purpose of the CSS property 'animation-timing-function'?", answers: [ { isCorrect: true, option: "To define how the animation progresses through keyframes" }, { isCorrect: false, option: "To set the duration of the animation" }, { isCorrect: false, option: "To control the direction of the animation" }, { isCorrect: false, option: "To pause and resume the animation" } ] }, 
    { question: "How can you create a continuous rotation animation in CSS?", answers: [ { isCorrect: true, option: "By using keyframes to rotate the element 360 degrees and setting the animation-iteration-count to infinite" }, { isCorrect: false, option: "By applying a transition to the rotation property" }, { isCorrect: false, option: "By using the transform property with a rotate value" }, { isCorrect: false, option: "By setting the animation-play-state to running" } ] }, 
    { question: "What is the purpose of the CSS property 'animation-fill-mode'?", answers: [ { isCorrect: true, option: "To configure what values are applied by the animation before and after it is executing" }, { isCorrect: false, option: "To control the timing of the animation" }, { isCorrect: false, option: "To define the number of times an animation should repeat" }, { isCorrect: false, option: "To pause and resume an animation sequence" } ] },
    { question: "What is the purpose of using CSS frameworks in web development?", answers: [ { isCorrect: true, option: "To provide pre-written CSS code for easier styling and layout of web pages" }, { isCorrect: false, option: "To host websites on servers for public access" }, { isCorrect: false, option: "To create dynamic content on web pages" }, { isCorrect: false, option: "To optimize images and videos for faster loading times" } ] }, 
    { question: "Which of the following is a popular CSS framework known for its responsive design and grid system?", answers: [ { isCorrect: true, option: "Bootstrap" }, { isCorrect: false, option: "Tailwind CSS" }, { isCorrect: false, option: "Bulma CSS" }, { isCorrect: false, option: "Material Design" } ] }, 
    { question: "What is the role of web hosting in the context of websites?", answers: [ { isCorrect: true, option: "To provide server space for storing website files and making them accessible on the internet" }, { isCorrect: false, option: "To design and develop the visual layout of a website" }, { isCorrect: false, option: "To optimize website performance for search engines" }, { isCorrect: false, option: "To manage user interactions and data on the website" } ] }, 
    { question: "Which hosting provider is known for offering a generous free tier of web hosting and backend data storage?", answers: [ { isCorrect: true, option: "Firebase by Google" }, { isCorrect: false, option: "HostPapa" }, { isCorrect: false, option: "GoDaddy" }, { isCorrect: false, option: "BlueHost" } ] }, 
    { question: "What is the benefit of using a CSS framework like Bootstrap for web development?", answers: [ { isCorrect: true, option: "It simplifies the process of creating responsive and visually appealing websites" }, { isCorrect: false, option: "It speeds up the server response time for websites" }, { isCorrect: false, option: "It automatically generates domain names for websites" }, { isCorrect: false, option: "It provides secure SSL certificates for website encryption" } ] }
]

export default questions