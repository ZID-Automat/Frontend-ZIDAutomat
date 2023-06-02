import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'user-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Get all FAQ elements
    const faqItems = document.getElementsByClassName("faq-page");

    // Add click event listener to each FAQ element
    for (let i = 0; i < faqItems.length; i++) {
      const faqItem = faqItems[i] as HTMLElement;
      faqItem.addEventListener("click", function () {
        // Toggle "active" class to highlight the button
        this.classList.toggle("active");

        // Toggle visibility of the FAQ answer
        const faqBody = this.nextElementSibling as HTMLElement;
        if (faqBody.style.display === "block") {
          faqBody.style.display = "none";
        } else {
          faqBody.style.display = "block";
        }
      });
    }
  }
}