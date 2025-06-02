document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre code").forEach((codeBlock) => {
      // Create a button
      const copyButton = document.createElement("button");
      copyButton.innerText = "Copy";
      copyButton.style.position = "absolute";
      copyButton.style.top = "10px";
      copyButton.style.right = "10px";
      copyButton.style.zIndex = "10";
  
      // Append the button to the pre block
      const pre = codeBlock.parentElement;
      pre.style.position = "relative"; // Ensure positioning
      pre.appendChild(copyButton);
  
      // Copy functionality
      copyButton.addEventListener("click", () => {
        const codeText = codeBlock.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          copyButton.innerText = "Copied!";
          setTimeout(() => (copyButton.innerText = "Copy"), 2000);
        });
      });
    });
  });
  