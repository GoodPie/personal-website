import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {Themes} from '../../../models/themes.enum';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-colour-toggle',
  templateUrl: './colour-toggle.component.html',
  styleUrls: ['./colour-toggle.component.scss']
})
export class ColourToggleComponent implements AfterViewInit{

  inDarkMode: boolean;


  constructor(public themeService: ThemeService) {

    this.themeService.setTheme();
    const inDakrMode = this.themeService.inDarkMode();
    this.inDarkMode = inDakrMode;

  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    const inDakrMode = this.themeService.inDarkMode();
    this.inDarkMode = inDakrMode;
  }

  ngAfterViewInit(): void {
    this.themeService.setTheme();
    const inDakrMode = this.themeService.inDarkMode();
    this.inDarkMode = inDakrMode;
  }





}
