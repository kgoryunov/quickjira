document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('jiraUrl', options => {
    document.getElementById('jiraUrl').value = (options && options.jiraUrl) || '';
  });

  document.getElementById('optionsForm').addEventListener('submit', handleOptionsFormSubmit);
});

function handleOptionsFormSubmit(event) {
  chrome.storage.sync.set(
    {
      jiraUrl: document.getElementById('jiraUrl').value,
    },
    () => window.close()
  );

  event.preventDefault();
}
