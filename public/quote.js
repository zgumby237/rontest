async function fetchQuotes(topic, count) {
    const endpoint = "https://wp.zybooks.com/quotes.php";
    const queryString = `topic=${topic}&count=${count}`;
    const url = `${endpoint}?${queryString}`;
  
    const response = await fetch(url);
 
    const quoteDiv = document.querySelector("#quotes");
    if (response.ok) {
       const quotes = await response.json();
       if (quotes.error) {
          quoteDiv.innerHTML = quotes.error;
       } 
       else {
          let html = "<ol>";
          for (let quoteItem of quotes) {
             html += `<li>${quoteItem.quote} - ${quoteItem.source}</li>`;
          }
          html += "</ol>";
 
          quoteDiv.innerHTML = html;
       }
    } 
    else {
       quoteDiv.innerHTML = "Quote is unavailable.";
    }
 }
 window.addEventListener("DOMContentLoaded", function () {
     document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
  
        // Get values from drop-downs
        const topicDropdown = document.querySelector("#topicSelection");
        const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
        const countDropdown = document.querySelector("#countSelection");
        const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
 
        // Get and display quotes
        fetchQuotes(selectedTopic, selectedCount);
     });
  });