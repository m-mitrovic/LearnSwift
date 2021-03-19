<template>
  <Header/>
  <div class="gif-img"></div>
  <div class="contentBody" id="main">

  <!-- Reusable Vue Components Below -->
  <TextBlock title="What is Swift?">
    Aspire to build the next AirBnB, Uber, or Instagram? One aspect all of these apps have in common is that their iOS are built with the powerful programming language Swift. Swift is a high level programming language that is developed and maintained by Apple. Swift is primarily used to create apps for devices running iOS, MacOS, WatchOS, and TVOS.
  </TextBlock>

  <TextIconBlock title="The Compiler" icon="xcode.png" link="https://developer.apple.com/xcode/">
    Developing apps in Swift is done in the Xcode application. Xcode is a Mac-exclusive app that is released and maintained by Apple. Xcode allows for simplified debugging, live simulator tests, and visual UI editors. Xcode is also used to send your production application for App Store review.  
  </TextIconBlock>

  <TextBlock title="Let's Begin">
    Learning a new programming language can be quite the daunting task, but with this tutorial you'll get a better understanding of how Swift works. This tutorial will be straight-to-the-point, interactive, and most importantly <p2>fun!</p2> If you stick to the end, you can claim a little prize. Let's begin...
  </TextBlock>

  <TextBlock title="Data Types">
    To build an app like Instagram, you would need to fetch the images and display it to the user. To access and use the data, Swift has different data types. Real numbers such as <code>6, 7, 8</code> are classified as an <code>Int</code> &nbsp;&nbsp; A more percise number such as <code>14.03</code> would be a <code>Double</code> &nbsp;&nbsp; 
    <HighlightedCodeBlock>Int = 6 <br>Double = 14.02</HighlightedCodeBlock>
    <br>Values that are text would be called a <code>String</code> and are wrapped in double or single quotation marks. It's best practice to use double quotation marks <code>""</code> in Swift.
    <HighlightedCodeBlock>String = "Hello World!"</HighlightedCodeBlock>
    <br>Another important data type is a <code>Bool</code> &nbsp;&nbsp; They equal either a <code>true</code> or <code>false</code> value.
    <HighlightedCodeBlock>trueBool = true<br>falseBool = false</HighlightedCodeBlock>
  </TextBlock>

  <TextBlock title="Print Statements" placeholder="Your code here..." expectedCode="print(&quot;hi'&quot;)" match="^print\(('.+'|&quot;.+&quot;)\);?$" @completed="completeCode('print')">
    The Xcode console is a helpful tool for development. It is a read-only console that is made for development purposes only. The Xcode console is particulatily useful for debugging errors and printing status messages for the developer. In the console you can print <code>String</code> values, <code>Int</code> values, and even <code>Double</code> values. Here's how you can print any of these values... <HighlightedCodeBlock>print(YOUR_VALUE_HERE)</HighlightedCodeBlock><br><p2>Now it's your turn to print your name.</p2> Follow the syntax above, and remember to use quotation marks when declaring a <code>String</code>
  </TextBlock>

  <TextBlock title="Variables" placeholder="Your code here..." expectedCode="print(&quot;hi'&quot;)" match="Your_BTC_Valuation = \d.+" @completed="completeCode('var')">
    Variables and constants are like containers holding values. Variables help easily track data within your app. For example, Instagram would use a variable to access your username. To declare a variable begin by typing the word <code>var</code> followed by a space and then the variable name. The variable name is the identifier you would use to access the data within the variable. For example, Instagram would have a variable <code>var username</code> which would equal your username. <br><br>
    After you've named the variable, follow a space, then an equal sign, then another space, and finally insert the value you would like the variable to store. At the end it should look something like this... <HighlightedCodeBlock>var name = "Mihajlo M."</HighlightedCodeBlock>
    Now, whenever you'd want to display the data "Mihajlo M.", you can access it by using <code>name</code> &nbsp;&nbsp; 
    
    <br><br>Variables aren't exclusive to <code>String</code> values, they also work with all other data types including <code>Int</code> and <code>Double</code> &nbsp;&nbsp; For example, a stock app might list the stock price as a <code>Double</code> variable...
    <HighlightedCodeBlock>var BTC_Price = 49014.695</HighlightedCodeBlock>

    <br>Variables values could also be changed and would read the new value that they store from that point on. When changing a variable, you do not include the <code>var</code> initialization because the variable already exists and you'd like to change it. Here's an example...
    <HighlightedCodeBlock>var BTC_Price = 49014.695<br>print(BTC_Price) /* Prints 49014.695 */<br><br>BTC_Price = 80241.128<br>print(BTC_Price) /* Prints 80241.128 */</HighlightedCodeBlock>

    <br>One thing you cannot do is change a variable of a certian type the value of a different type. For example, if a variable was initialized as a <code>String</code> the application would error if the value was changed to an <code>Int</code> &nbsp;&nbsp; The <code>BTC_Price</code> variable would error if the value was changed to <code>"Bitcoin, Inc."</code>

    <br><br><p2>Now lets put this knowledge to action!</p2> Change the value of the following variable to any <code>Int</code> you please. Also, try changing the value of the variable to a different type such as a <code>String</code> to get the console upset.
    <HighlightedCodeBlock>var Your_BTC_Valuation = 0.00</HighlightedCodeBlock>
  </TextBlock>

  <TextBlock title="Constants" placeholder="Your code here..." expectedCode="print(&quot;hi'&quot;)" match="let school = (&quot;.+&quot;|'.+');?" @completed="completeCode('const')">
    Constants on the other hand are just like variables where you can assign them values, but they the value could never be changed. The only difference when declaring a constant is that instead of using the word <code>var</code> we use <code>let</code> &nbsp;&nbsp; When you put it all together, it should look something like... <HighlightedCodeBlock>let fullName = "Mihajlo Mitrovic"</HighlightedCodeBlock>
    <br>
    <p2>Now try it yourself,</p2> make a <code>let</code> variable named <code>school</code> and make it equal the <code>String</code> value of the school you are from.
  </TextBlock>
  
  <TextBlock title="Math Operations" placeholder="Your code here..." expectedCode="print(&quot;hi'&quot;)" match="\(?\(15 \+ 45 \- 10\) \* 5\)? (\* 0.5|\/ 2)" @completed="completeCode('math')">
    Math can be done very efficiently and quickly in Swift. We'll cover some of the most basic math operations such as addition, subtration, multiplication, and division. 
    <br><br>One of the most common operator you'd use is addition. Additon could easily be done by placing a <code>+</code> between numbers you'd like to add. For example...
    <HighlightedCodeBlock>let first = 72.33<br>let second = 123.31<br><br>print(first + second) /* Returns 195.64 */</HighlightedCodeBlock>
    <br>As you may have guessed, subtraction could be done identically but with the <code>-</code> operator... 
    <HighlightedCodeBlock>let first = 72.33<br>let second = 123.31<br><br>print(first - second) /* Returns -50.98 */</HighlightedCodeBlock>
    <br>Adding or subtracting values to a variable that is pre-existing is different. Doing the following would result in an error...
    <HighlightedCodeBlock>var BTC_Price = 49136.214<br>BTC_Price + 2.14 /* Error */</HighlightedCodeBlock>
    <br>Instead we use the operator <code>+=</code> to add values to a variable and <code>-=</code> to subtract from a variable. This would've been the correct approach...
    <HighlightedCodeBlock>var BTC_Price = 49136.214<br>BTC_Price += 2.14 /* BTC_Price = 49138.354 */</HighlightedCodeBlock>
    <br>Multiplication can be done by inserting a <code>*</code> in between the values you wish to multiply. Division is done by inserting a <code>/</code> between the values you'd like to divide. Brackets could also be used and the computer would automatically solve the math in BEDMAS order. Here's an example of a more complex mathimatical operation...
    <HighlightedCodeBlock>print((10 * 32 * 2 * 5)/5) /* First the () are multiplied, then the product is divided by 5 */</HighlightedCodeBlock>
    <br><p2>Try it yourself.</p2> Add <code>15</code> and <code>45</code> then subtract <code>10</code> all in brackets, then multiply them by <code>5</code>, and finally split the number in half.
  </TextBlock>

  <TextBlock title="Functions" placeholder="Your function here..." expectedCode="print(&quot;hi'&quot;)" match="func printName\(\) \{ print\((&quot;.+&quot;|'.+')\) \}" @completed="completeCode('func')">
    Functions are a key part to reusing code. Instead of copy/pasting the same tasks along your code, you can declare functions that will perform the task within them whenever they are called.
    <HighlightedCodeBlock>func functionName() {<br> &nbsp;&nbsp; /* Function Content */<br>}</HighlightedCodeBlock>
      As you see above, to declare a function you start with the <code>func</code> keyword, followed by the function name, followed by <code>()</code>, and then the content within the function is surrounded by <code>{ }</code> &nbsp;&nbsp; The function can perform any operations you wish, such as <HighlightedCodeBlock>
        func printNumber() { <br> &nbsp;&nbsp; let number = 23<br> &nbsp;&nbsp; print("Func Loaded! Number: " + number)<br>}
        </HighlightedCodeBlock>
        <br>To call a function simply state the function's name, then add <code>()</code> to the end of the name. 
        <HighlightedCodeBlock>printNumber() /* Prints - Func Loaded! Number: 23 */</HighlightedCodeBlock>
      <br><p2>Give it a go!</p2> Declare a single line function named <code>printName</code> that prints your name.
  </TextBlock>

  <TextBlock title="If/Else Statements" placeholder="Your code here..." expectedCode="print(&quot;hi'&quot;)" match="if userAge (\>\= 18|\> 17) \&\& isFriend (\=\= true|\!\= false) { print\(\&quot;Access Granted\&quot;\) } else { print\(\&quot;Access Denied\&quot;\) }" @completed="completeCode('ifelse')">
    <code>if/else</code> statements let us perform certain tasks depending on the condition of variables. For example, Instagram would use an <code>if/else</code> statement to allow viewing of your photos if a user is on your friends list, and deny viewing of your photos if the user is not on your friends list. Here's how you can declare an <code>if/else</code> statement...
    <HighlightedCodeBlock>let number = 10<br><br>if number == 10 {<br> &nbsp;&nbsp; print("Number is 10") <br>} else { <br> &nbsp;&nbsp; print("Number is not 10") <br>}</HighlightedCodeBlock>
    As you may tell, the syntax for an <code>if/else</code> statement starts with the keyword <code>if</code> then the 2 values you'd like to compare with an operator between them, then <code>{ }</code>, then finally instert <code>else { }</code> &nbsp;&nbsp; Just like the function, anything you place within the <code>{ }</code> will be executed accordingly.
    <br><br>
    Just like there are math operations, there are also <code>if/else</code> statment operations. The most common is a direct comparision by using <code>==</code> which means "equal to". <code>if/else</code> statements also allow for "less than" <code>&lt;</code> and "greater than" <code>&gt;</code> operators. You can combine the less than and greater than operators to form <code>>=</code> which would be "less than or equal to". To execute the <code>if/else</code> statement whenever a value is NOT equal to another value, simply use the <code>!=</code> operator. To recap...
     <HighlightedCodeBlock>equalTo:  ==<br>notEqualTo:  !=<br>greaterThan:  &gt;<br>lessThan:  &lt;<br>greaterThanOrEqualTo:  &gt;=<br>lessThanOrEqualTo:  &lt;=</HighlightedCodeBlock>
     <br>
     You may be wondering if it is possible to compare many values at once in an <code>if/else</code> statement, and the answer to that is surely. Place an <code>||</code> to compare multiple values. The <code>||</code> also known as "or" will return the main if statment if any one of the values is true. 
      <HighlightedCodeBlock>let stockPrice = 3420<br>let hasIncreased = true<br><br>if stockPrice > 3420 || hasIncreased == true {<br> &nbsp;&nbsp; print("Stock Increase") /* Since hasIncreased == true, it would print Stock Increase regardless of the value of stockPrice */<br>} else {<br> &nbsp;&nbsp; print("Stock has not increased")<br>}</HighlightedCodeBlock>
      <br>If you would like to break the <code>if/else</code> statement whenever a single value returns false, then <code>&&</code> would be used. <code>&&</code> stands for "and" meaning it would check if comparison 1 is true, comparison 2 is true, and so on.
      <HighlightedCodeBlock>let stockPrice = 3420<br>let hasIncreased = true<br><br>if stockPrice > 3420 && hasIncreased == true {<br> &nbsp;&nbsp; print("Stock Increase")<br>} else {<br> &nbsp;&nbsp; print("Stock has not increased") /* Because stockPrice is not > 3420, it would print Stock has not increased */<br>}</HighlightedCodeBlock>
      <br><p2>Now give it a go.</p2> Imagine you were hired by Facebook to check whether the variable <code>userAge</code> is 18 or older, and then wether the variable <code>isFriend</code> is not false. If any of these values are not true, then the access should not be granted. Make a single-line <code>if/else</code> statment that prints <code>Access Granted</code> if a user meets these requirements, and prints <code>Access Denied</code> if a user fails to meet these requirements.
  </TextBlock>

  <CertificateBlock :completeCount="countComplete()"/>
  </div>
  <FooterView/> <!-- Footer Vue Component -->
</template>

<script lang="ts">
// Start Localhost: pnpm run serve
// Build: npm run build
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import TextBlock from './components/TextBlock.vue'
import TextIconBlock from './components/TextIconBlock.vue'
import HighlightedCodeBlock from './components/HighlightedCodeBlock.vue'
import "highlight.js/styles/vs2015.css"
import CertificateBlock from './components/Certificate/CertificateBlock.vue'
import FooterView from './components/FooterView.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    TextBlock,
    TextIconBlock,
    HighlightedCodeBlock,
    CertificateBlock,
    FooterView,
  },
  data() {
    return {
      completeSections: {} as Record<string, true> // Variable of completed tests matched to an ID to ensure that a single test can only count as 1 credit
    }
  },
  methods: {
    codeBlockColor(text: string, color: string) { // Styling of small code block
      return `<span style='color: ${color}'>${text}</span>`
    },
    completeCode(id: string) { // Called when user completed a test correctly. Since it saves the id, each test can only count towards 1 credit
      this.completeSections[id] = true
    },
    countComplete(): number { // Gets completed test count for certificate component
      return Object.values(this.completeSections).length
    }
  },
});
</script>

<style>
/* Parent styling for entire website, including components */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Rock+Salt&family=IBM+Plex+Mono:wght@300;400;500&display=swap&family=Nanum+Pen+Script&display=swap?family=Satisfy&display=swap');
:root {
   --accentColor: #fd9644;/*rgb(46, 175, 214); */
  --backgroundColor: #243241;
  --secondaryColor: rgba(0, 0, 0, 0.2);
  --correctColor: #2ed573;
  --errorColor: #ff4757;
}
body {
  background: var(--backgroundColor);
  font-family: 'Poppins', sans-serif;
}
#app { 
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
button {
  background: var(--accentColor);
  border: none;
  outline: none;
  color: #243241;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
}
h1 {
  font-size: 1.7em;
  /* Extra code for font */
  font-family: 'Nanum Pen Script', cursive;
  font-size: 2.5em;
  margin-bottom: 0px;
}
.gif-img {
  border-radius: 20px;
  width: 40%;
  min-height: 200px;
  height: 20vw;
  min-height: 100px;
  padding: 50px;
  background-image: url('https://www.apple.com/newsroom/images/product/app-store/Apple_App_Store_10th_anniversary_07102018_big.gif.large.gif');
  background-size: cover;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 80px;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
code {
  border-radius: 10px;
  font-family:'IBM Plex Mono', monospace;
  background-color: var(--secondaryColor);
  padding: 3px 15px;
  margin: 2px 5px;
  white-space: nowrap;
}
.contentBody#main {
  width: 65%;
  min-width: 400px;
  text-align: center;
  margin: auto;
}
p2 {
  background: linear-gradient(to right, #ffeaa7, #fd79a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
