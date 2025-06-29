import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-google-logo',
  template: `
    <svg
      class="w-5 h-5 mr-3"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 381.5 512 244 512S0 403.3 0 261.8S106.5 11.8 244 11.8S488 119.7 488 261.8zM88 261.8c0 102.3 73.8 185.5 167.1 185.5s167.1-83.2 167.1-185.5S344.2 76.3 251.1 76.3 88 159.5 88 261.8zM393.2 251.1c0-24.9-3.7-48.8-10.6-71.2H251.1v142.5h142.1c-13.3 43.2-51.7 74.3-98.2 74.3-58.2 0-105.3-47.1-105.3-105.3s47.1-105.3 105.3-105.3c30.4 0 54.2 12.5 73.4 30.4l63.4-63.4C376 54.2 319.1 24 251.1 24 149.3 24 68.2 94.4 68.2 184.8s81.1 160.8 182.9 160.8c94.3 0 168.2-63.4 168.2-160.8 0-17.2-1.6-33.6-4.6-49.2H251.1v-71.2h142.1c7-22.4 10.7-46.3 10.7-71.2z"
      ></path>
    </svg>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleLogoComponent {}
