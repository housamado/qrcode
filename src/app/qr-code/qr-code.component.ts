import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import QRCodeStyling from 'qr-code-styling';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  name: string = '';
  title: string = '';
  company: string = '';
  phone: string = '';
  email: string = '';
  website: string = '';

  logoPath: string | null = null; // Initialize as null

  // Define colors
  eyeColor: string = '#499BD4'; // Eye color
  mainColor: string = '#270382'; // Main color

  generateQRCode() {
    const qrData = `
      Nom: ${this.name}
      Titre: ${this.title}
      Entreprise: ${this.company}
      Téléphone: ${this.phone}
      Email: ${this.email}
      Site Web: ${this.website}
    `.trim();

    const qrCode = new QRCodeStyling({
      width: 200, // Largeur du QR code
      height: 200, // Hauteur du QR code
      type: "svg",
      data: qrData,
      dotsOptions: {
        color: this.mainColor, // Couleur des points
        type: "dots", // Style de point
      },
      backgroundOptions: {
        color: "#ffffff", // Couleur de fond
      },
      image: this.logoPath || '', // Logo
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 10, // Marge autour du logo
        imageSize: 0.5, // Taille de l'image à 50%
        hideBackgroundDots: true // Masquer les points d'arrière-plan
      },
      cornersSquareOptions: {
        color: this.eyeColor,
        type: "extra-rounded" // Type d'angle pour les yeux
      },
      cornersDotOptions: {
        color: this.eyeColor,
        type: "dot" // Type de point pour les coins
      }
    });

    const canvasElement = document.getElementById("canvas");
    if (canvasElement) {
      qrCode.append(canvasElement);
    } else {
      console.error("L'élément canvas n'a pas été trouvé.");
    }
  }

  onLogoUpload(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.logoPath = e.target?.result as string; // Assurez-vous qu'il est traité comme une chaîne
        console.log('Logo uploaded:', this.logoPath);
      };

      reader.readAsDataURL(fileInput.files[0]); // Lire le fichier comme une URL de données
    }
  }
}
