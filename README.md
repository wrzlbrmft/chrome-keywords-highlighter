# Automatic Keywords Highlighter

<img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/src/icons/icon128.png" align="right" style="padding-left: 10px;" />

Set a list of keywords and *Automatic Keywords Highlighter* will automatically
highlight them on any web page you visit. The icon shows you how often a keyword
was highlighted on the current page.

Instead of searching for the interesting bits of a web page, let *Automatic
Keywords Highlighter* show them to you instantly. Simply type in a list of
keywords and pick your favourite highlighter color.

Stop searching! Use *Automatic Keywords Highlighter!*

## Installation

You can install *Automatic Keywords Highlighter* directly from the
[Chrome Web Store](https://chrome.google.com/webstore/detail/automatic-keywords-highli/gcpknobcboilhnacklgmaamlcnblneoi).

## Screenshots

<a href="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot1.jpg" target="_blank"><img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot1.jpg" width="150" border="0" /></a>
&nbsp;
<a href="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot2.jpg" target="_blank"><img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot2.jpg" width="150" border="0" /></a>
&nbsp;
<a href="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot3.jpg" target="_blank"><img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot3.jpg" width="150" border="0" /></a>
&nbsp;
<a href="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot4.jpg" target="_blank"><img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-keywords-highlighter/master/google-webstore/screenshot4.jpg" width="150" border="0" /></a>
&nbsp;

## How to Contribute

Feel free to join and help me improve this extension. Here are a few ideas:

* Translate it into other languages.
* Port it to other browsers like
[Mozilla Firefox](https://www.mozilla.org/firefox) or
[Internet Explorer](http://windows.microsoft.com/internet-explorer/).

### Getting the Source Code

You can download the latest source code as a [ZIP
file](https://github.com/wrzlbrmft/chrome-keywords-highlighter/archive/master.zip)
or use Git:

```
git clone https://github.com/wrzlbrmft/chrome-keywords-highlighter.git
```

### Testing in Google Chrome

If you want to test your contributions in Chrome, you can load the extension
directly from its source directory. First, download the source code as described
above. Then open Chrome and follow these steps:

1. Visit `chrome://extensions`.
2. Make sure that the *Developer mode* is active (checkbox in the upper-right
corner).
3. Click on *Load unpacked extension...*.
4. Navigate into the `src` directory of the source code and select it.

Whenever you updated a file of the extension you have to reload it in Chrome.
To do so, simply visit `chrome://extensions` again and hit *Ctrl+R*.

## Build Instructions

Actually, there is not much to build unless you want to write your own extension
based on this one. For that, I added a buildfile for
[Apache Ant](http://ant.apache.org/), see `build.xml`. It helps you create the
ZIP file which you have to upload to the
[Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).

To build the ZIP file, navigate into the top directory of the extension and run

```
ant zip
```

or simply

```
ant
```

**NOTE:** Make sure you already have a private key, if not see *Private Key*.

The ZIP file is then located in the `build` directory.

To clean up after a build, run

```
ant clean
```

This will not delete the private key file of course.

### Private Key

In order to build a ZIP file using Ant, you have to have a private key for the
extension. To create one follow
[these instructions](https://developer.chrome.com/extensions/packaging#creating).

Rename the private key file to `key.pem` and make sure it is in the top
directory of the extension. You do not need the `.crx` file, so it can be
deleted.

### Versioning

The version number of the extension is maintained in the Ant buildfile
`build.xml` and only copied to `manifest.json` of the ZIP file during the build
process.

To change the version number, open `build.xml` and edit this
line:

```xml
<property name="version" value="0.1.0" />
```

## License

This software is distributed under the terms of the
[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

Based on an earlier Chrome extension named
*[Keywords Highlighter](https://code.google.com/p/keywords-highlighter/)*
([Chrome Web Store](https://chrome.google.com/webstore/detail/keywords-highlighter/nnfnbecknbhnihnjjbblckanjajgjkkh))
which was also using
[highlight](http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html)
by [Johann Burkard](http://johannburkard.de/), both distributed under the terms
of the [MIT License](http://opensource.org/licenses/MIT).

The icon is taken from the
*[Soft Scraps Icons](http://www.iconarchive.com/show/soft-scraps-icons-by-hopstarter.html)*
icons pack designed by [Jojo Mendoza](https://twitter.com/hopstarter)
distributed under the terms of the
[CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/) license.
