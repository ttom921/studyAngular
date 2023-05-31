import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
const THEME_DARKNESS_SUFFIX = `-dark`;
@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styleUrls: ['./theme-preview.component.scss']
})
export class ThemePreviewComponent {
  //#region 主題相關
  @HostBinding('class') activeThemeCssClass: string = null!;
  isThemeDark = false;
  activeTheme: string = "indigo-pink";
  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
    'hs-blue'
  ];
  //#endregion 主是相關

  activeTab: string = null!;

  constructor(
    private overlayContainer: OverlayContainer,
  ) {
    // Set default theme here:
    this.setActiveTheme('deeppurple-amber', false);
  }

  handleTabChange(tab: MatTabChangeEvent) {
    this.activeTab = tab.tab.ariaLabel;
  }
  setActiveTheme(theme: string, darkness: any = null) {
    if (darkness === null)
      darkness = this.isThemeDark
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return
    } else
      this.isThemeDark = darkness

    this.activeTheme = theme

    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme

    const classList = this.overlayContainer.getContainerElement().classList
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass)
    else
      classList.add(cssClass)

    this.activeThemeCssClass = cssClass
  }

  toggleDarkness() {
    this.setActiveTheme(this.activeTheme, !this.isThemeDark)
  }
}
