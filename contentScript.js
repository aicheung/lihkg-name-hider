function replaceUsernamesInThreadList() {
    var elements = document.querySelectorAll('i.i-menu-down');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var parent = element.parentElement;
        if (!parent) 
            continue;
        var parentParent = parent.previousElementSibling;
        if (parentParent && parentParent.firstChild) {
            parentParent.firstChild.style.display = 'none';
        }
    }
}


function replaceUsernamesInPosts() {
    var smallElements = document.querySelectorAll('div[data-post-id] > div > small');

    smallElements.forEach(function(smallElement) {
        var aElement = smallElement.querySelector('a[href^="/profile"]');
        
        if (aElement) {
            var userId = aElement.getAttribute('href').split('/').pop();
            aElement.textContent = userId;
        }
    });
}

function replaceUsernames() {
    replaceUsernamesInThreadList();
    replaceUsernamesInPosts();
}

// Call replaceUsernames initially to cover existing content
replaceUsernames();

// Set up the mutation observer
var observer = new MutationObserver(replaceUsernames);

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
