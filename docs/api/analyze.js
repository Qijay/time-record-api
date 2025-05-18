function loadAnalysis() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type') || 'week';
  
  // 注意这里的路径
  fetch(`responses/${type}.json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').textContent = JSON.stringify(data);
    })
    .catch(error => {
      document.getElementById('result').textContent = JSON.stringify({
        code: 500,
        message: "error",
        error: error.message
      });
    });
}
