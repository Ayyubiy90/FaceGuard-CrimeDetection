document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const imageUpload = document.getElementById("image-upload");
  const imagePreview = document.getElementById("image-preview");
  const runDetectionBtn = document.getElementById("run-detection");
  const cancelDetectionBtn = document.getElementById("cancel-detection");
  const rotateImageBtn = document.getElementById("rotate-image");
  let rotateAngle = 0;

  // File Upload & Image Preview
  imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        imagePreview.src = reader.result;
        imagePreview.style.display = "block";
      };
    } else {
      alert("Please upload a valid image file.");
    }
  });

  // Run Detection
  runDetectionBtn.addEventListener("click", () => {
    alert("Running Detection...");
    // You could start a progress bar or spinner here
  });

  // Cancel Detection
  cancelDetectionBtn.addEventListener("click", () => {
    imagePreview.style.display = "none";
    // If there's a progress bar or spinner, you'd stop it here
  });

  // Rotate Image
  rotateImageBtn.addEventListener("click", () => {
    rotateAngle += 90;
    imagePreview.style.transform = `rotate(${rotateAngle}deg)`;
  });

  // Export Results
  const exportResultsBtn = document.getElementById("export-results");
  exportResultsBtn.addEventListener("click", () => {
    const results = document.getElementById("results").innerText;
    const blob = new Blob([results], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "results.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  });
});
