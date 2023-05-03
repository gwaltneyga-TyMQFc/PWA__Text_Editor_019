const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Event handler added to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.prepPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.prepPrompt;

    if (!eventPrompt) {
        return;
    }
    eventPrompt.prompt();

    window.eventPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

//Added a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.eventPrompt = null;

});
