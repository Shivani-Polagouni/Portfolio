import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Gets the URL for an asset with proper path resolution
   */
  getAssetUrl(path: string): string {
    // This helps ensure we always get the right path regardless of deployment setup
    return path.startsWith('/assets') ? path : `/assets/${path.replace(/^assets\//, '')}`;
  }

  /**
   * Gets a safe URL for an asset (useful for images and other resources)
   */
  getSafeAssetUrl(path: string): SafeUrl {
    const url = this.getAssetUrl(path);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}