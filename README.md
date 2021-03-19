[![LearnSwift](https://i.imgur.com/Zl0oOug.png)](https://ics4u1-a2687.web.app)

# Learn Swift
Learn Swift is an interactive & mobile friendly website which teaches the fundamentals of the programming language Swift. Enjoy an easy-to-follow walkthrough of the various aspects of Swift like data types, variables, functions, and loops. Test your new knowledge immediately with interactive consoles within the website. By the end, you'll be one step closer to making the next Instagram or Uber and have a shiny certificate!

## Live Preview
Try [Learn Swift](https://ics4u1-a2687.web.app) yourself.

## Languages Used
Learn Swift was developed in Vue.JS. The reason Vue.JS was an optimal choice was because of its powerful component capabilities which allowed me to reuse my components (avoiding the messy copy/paste scenerio). The languages used in the project consits of HTML, CSS, TypeScript, and JavaScript. I also used RegExpressions to form expressions to validate a users response and allow for dynamic inputs (such as printing any string).

## Console
The custom-made console in this project works very interestingly. Instead of it being a full-fledged console, which comes with massive drawbacks like data size, I made a component-specific console that utilizes RegExpressions. RegExpressions allow me to match the input text to a certain expression that is sent as a property. This allows me to extremely efficiently and persisely match the users inputed code with viable code...all while saving a ton of data size. If the user has successfully completed a test, 1 point is awarded to them. The console allows everything that the genuine Swift console allows such as ```"``` or ```'``` to declare a string, and an optional ending ```;```

## Frameworks Used
- [highlight.js](https://www.npmjs.com/package/highlight.js): Highlights/colors Swift code. 
- [html-to-image](https://www.npmjs.com/package/html-to-image): Converts certificate div to downloadable image.
- [js-confetti](https://www.npmjs.com/package/js-confetti): Releases a pleasant surprise when the user completes all tests.

Everything else in the website was created by Mihajlo M.

## Skip To The Source Code
The ```cs-website``` folder contains the website. Skip to the source code [here.](https://github.com/m-mitrovic/LearnSwift/tree/main/cs-website/src)

## License
[MIT](https://choosealicense.com/licenses/mit/)
