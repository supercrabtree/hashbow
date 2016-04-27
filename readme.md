![hashbow](https://raw.githubusercontent.com/supercrabtree/hashbow/master/media/hashbow-header.jpg)

Hashbow creates hexadecimal colors of everything. You can think of it like a crypto library, but instead of outputting md5s or sha1s it turns everything into color hashes.

`hashbow('Bruce Willis')`

outputs `#40BFA8`, a lovely mid turquiose blue.

![](http://supercrabtree.github.io/media/mid-turquiose-blue.svg)

whereas

`hashbow('Nicolas Cage')`

outputs a `#BFA840`, a Dijon Mustard kind of color.

![](http://supercrabtree.github.io/media/dijon-mustard-yellow.svg)

##### But whats the point?

Hashbow's color conversion is consistent, so every time you call `hashbow('Bruce Willis')` you will get the same lovely mid turquoise blue. This is very useful for assigning your users a color, brightening up a comment area, etc.

Hashbow uses the [HSL colorspace](http://hslpicker.com/) to make it easy to get colors that work well together. The first parameter is used to calculate the hue of the result. You can also pass in custom saturation and lightness if you need to tweak (default is 50).

`hashbow('Bruce Willis', 30);`

Outputs `#669990`, a calmer seafoam green.

![](http://supercrabtree.github.io/media/calm-seafoam-green.svg)

Setting the saturation to 0 will make everything greyscale.

`hashbow('Bruce Willis', 0);`

Outputs `#7E8180`

![](http://supercrabtree.github.io/media/grey-willis.svg)

Hashbow will create color hashes of anything and everything, Strings, Objects, Functions, Numbers, whatever, etc.


### Installation
`npm install hashbow`

### Usage
`hashbow(thingyToHash, saturation, lightness)`

### Example
```
const hashbow = require('hashbow');
const actors = ['Bruce Willis', 'Nicolas Cage', 'Leonardo Di Caprio'];

actors.forEach(actor => {

  const el = document.createElement('div');

  el.innerHTML = actor;
  el.style.color = hashbow(actor);
  
  document.body.appendChild(el);

});
```

### CLI
There is a CLI, just install globally

`npm install hashbow --global`

and then

`hashbow boogers`

Outputs `#BF5340`

You can use `-s` and `-l` to modify saturation and lightness too.

`hashbow boogers -s 50 -l 22`

Outputs `#54241C`

now you can color up your git logs, or like, something else that's cool

🙂️
