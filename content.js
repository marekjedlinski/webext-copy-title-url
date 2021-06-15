let modKeyDown = false;

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        // grab Shift key state as fast as we can
        const forceTitle = modKeyDown;
        let clipboardData = '[' + request.tabTitle + '](' + request.tabUrl + ')';

        if (request.useSelection) {
            const selectedText = window.getSelection().toString().trim();
            if (selectedText) {
                clipboardData = '[' + selectedText + '](' + request.tabUrl + ')';
                if (forceTitle) {
                    clipboardData = '[' + request.tabTitle + '](' + clipboardData + ')';
                }
            }
        }

        // When we copy data, we create a new DOM element.
        // This destroys current selection, so we save the selection
        // and restore it after copying.
        let selectionRange = null;
        if (request.useSelection) {
            selectionRange = saveSelection();
        }

        copyToClipboard(clipboardData);

        if (selectionRange) {
            restoreSelection(selectionRange);
        }
    }
);

function copyToClipboard(data) {
    // https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
    const copySource = document.createElement('textarea');
    copySource.textContent = data;
    document.body.appendChild(copySource);
    copySource.select();
    document.execCommand('copy');
    document.body.removeChild(copySource);
}

document.addEventListener('keydown', event => {
    modKeyDown = (event.shiftKey || event.ctrlKey);
});


document.addEventListener('keyup', event => {
    // for our purposes, user will not be pressing any other keys
    modKeyDown = false;
});


// Save and Restore DOM text selection, by dantaex
// https://gist.github.com/dantaex/543e721be845c18d2f92652c0ebe06aa
// (reduced to bare minimum that we need here)
function saveSelection() {
    if (window.getSelection) {
        const sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    }
    return null;
}

function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
