function loadAnalysis() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type') || 'week';
  
  // 修改路径，确保正确指向JSON文件
  fetch(`../api/responses/${type}.json`)
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
