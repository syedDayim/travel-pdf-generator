function updatePageContent() {
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    // Update all pages with the input title and content
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`title${i}`).textContent = title || `Title ${i}`;
        document.getElementById(`content${i}`).textContent = content || `Page ${i} content here...`;
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pages = document.querySelectorAll('.pdf-page');
    
    pages.forEach((page, index) => {
        if (index !== 0) {
            pdf.addPage();
        }
        
        // Get the title and content from each page
        const title = page.querySelector('h2').textContent;
        const content = page.querySelector('p').textContent;
        
        // Add the title and content to the PDF
        pdf.setFontSize(18);
        pdf.text(title, 10, 20);
        
        pdf.setFontSize(12);
        pdf.text(content, 10, 30);
    });

    // Save the PDF
    pdf.save(`document.pdf`);
}
