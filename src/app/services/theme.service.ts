import {Injectable} from '@angular/core';
import {Themes} from '../models/themes.enum';
import {createColorPalette, FASTDesignSystemProvider} from '@microsoft/fast-components';
import {parseColorHexRGB} from '@microsoft/fast-colors';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // Define keys for local storage
  static KEY_THEME = 'theme';

  // Define the base themes
  baseColours = [
    '#DDDDDD',
    '#121212'
  ];

  accents = [
    '#028090',
    '#A53860',
    '#FE5F55',
    '#FFFD82',
    '#FF9B71',
    '#F08700',
    '#00A6A6',
    '#FF495C',
  ];

  theme  = {
    baseColor: Themes.DARK,
    accent: null,
  };

  constructor() {

    // Check if the user has already selected a theme
    const savedTheme =  localStorage.getItem(ThemeService.KEY_THEME);
    if (savedTheme) {
      try {

        const theme = JSON.parse(savedTheme);

        // Get the base colour (defaults to DARK)
        this.theme.baseColor = this.getThemeValue(theme.baseColor);

        // Leave accent null if it isn't set so we can randomize it
        this.theme.accent = theme.accent ? theme.accent : null;
      } catch (e) {
        // Ignore exception as we already have the default values defined
      }
    }

  }

  /**
   * Helper function to get the current theme based on number value
   * Useful for when we fetch value from JSON
   * @param theme Theme number
   */
  getThemeValue(theme: number): Themes {
    switch (theme) {
      case 0:
        return Themes.LIGHT;
      case 1:
        return Themes.DARK;
      default:
        return Themes.DARK;
    }
  }

  /**
   * Uses the FAST palette generators to define the accent and base colour (light / dark)
   */
  setTheme(): void {

    // Define the colours from the user options
    const primary = this.baseColours[this.theme.baseColor];
    const accent = this.theme.accent ? this.theme.accent : this.accents[Math.floor(Math.random() * this.accents.length)];

    const palette = createColorPalette(parseColorHexRGB(accent));
    const neutralPalette = createColorPalette(parseColorHexRGB(primary));
    const provider = document.querySelector('fast-design-system-provider') as FASTDesignSystemProvider;

    provider.accentBaseColor = accent;
    provider.accentPalette = palette;
    provider.neutralPalette = neutralPalette;
    provider.backgroundColor = primary;
  }


  /**
   * Quick helper for checking if we're in dark (the default) mode
   */
  inDarkMode(): boolean {
    return this.theme.baseColor === Themes.DARK;
  }

  toggleTheme(): void {

    // Toggle the theme between dark / light mode
    this.theme.baseColor = this.theme.baseColor === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    this.setTheme();

    // Save the new settings to the users local settings so we can fetch later on
    localStorage.setItem(ThemeService.KEY_THEME, JSON.stringify(this.theme));

  }

}
