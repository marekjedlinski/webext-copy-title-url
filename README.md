# Firefox/Chrome extension: Copy page title (or selection) and url to clipboard via context menu

This Firefox/Chrome extension adds an item to the context menu which allows you to __copy the title and the url__ of the current page to clipboard. If any __text is selected on the page__, the selected text is copied instead of the title of the page (the url is always included).

This is useful when emailing/sharing links or collecting citations/quotes from the web.

It should serve as a basic replacement for the fantastic ["QuoteURLText" extension](https://addons.mozilla.org/en-US/firefox/addon/quoteurltext/) by Jay Palat, which had more functionality but is no longer supported by Firefox.


## Requirements

Firefox (Quantum) 57 or later. Developed and tested in Firefox 58.

## How to use

* When browsing any web page:

Right-click the page. In the context menu, a new item will be displayed: "Copy page title and url". This command will copy the title of the current page and its URL to clipboard.

* When (some) text on the page is selected:

Right-click the selected text. In the context menu, a new item will be displayed: "Copy selection and url". This command will copy the selected text and the URL (but not the page title) to clipboard.

If you hold down the Control or Shift key while clicking the menu item, the extension will copy the title of the page as well as the selected text and the URL.

## Version history

1.3:
- Rewritten for compatibility with Chrome. Now the same code can be used to generate the extension for both browsers.
- Added support for Ctrl key in addition to Shift key (due to an apparent bug in Chrome, which modifies selection range on Shift+right click)

1.2:
- Initial release, Firefox only

## Author and links

Marek Jedliński
marek.jedlinski@gmail.com

github:
https://github.com/marekjedlinski/webext-copy-title-url

The initial Firefox-only version lives in its own repo here:
https://github.com/marekjedlinski/firefox-copy-title-url


