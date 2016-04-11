![hashbow](https://raw.githubusercontent.com/supercrabtree/hashbow/master/media/hashbow-header.jpg)

Creates hashes simliar to md5 or sha1 but instead of outputting,  

> 3cc36ef3d5e79c2c9c3dfc5e4a51e279
or
> 08483f4b794f6db97200403646be4e14f67bca38

it gives you colorful hex values like this,

<blockquote>#ff9000</blockquote>
<blockquote>#00eeff</blockquote>
<blockquote>#0022ef</blockquote>

Hashbow will create color hashes of everything, Strings, Objects, Functions, Numbers, null, Booleans, RegExps and Arrays.

It uses manipulates the hue in HSL (you can pass it saturation and lightness) to make sure that your colors are strong and not washed out muddy browns and greys.

The color calculation involves no random, so the outputted hex is always the same for whatever you put in. Very useful for assigning your users a color, or brightening up a comment area.

### Installation
Its on bower and npm

`bower install hashbow`  
`npm install hashbow`

or there is a minified version in the build folder if you're old skool

[MIT Licence](http://opensource.org/licenses/MIT)
