document.addEventListener('DOMContentLoaded', () => {
  console.log("inside the event listeners yuh")
  const saveButton = document.getElementById('save-button');

  saveButton.addEventListener('click', () => {
    const saveFrameContainer = document.getElementById('saveFrameContainer');

    // Use html2canvas to capture the HTML elements as an image
    html2canvas(saveFrameContainer, {useCORS: true}, {scrollY: -window.scrollY}).then(canvas => {
      // Create a data URL for the canvas image
      const dataUrl = canvas.toDataURL('image/png');

      // Create a new link element and download the image
      const link = document.createElement('a');
      link.download = 'chart.png';
      link.href = dataUrl;
      link.click();
    });
  });
});
