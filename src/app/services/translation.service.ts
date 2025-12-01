import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLang = 'en';
  private translationsLoaded = false;
  private translations$: Observable<any> | null = null;

  constructor(private http: HttpClient) {
    this.loadTranslations().subscribe();
  }

  loadTranslations(): Observable<any> {
    if (this.translationsLoaded && this.translations$) {
      return this.translations$;
    }

    this.translations$ = this.http.get(`/assets/i18n/${this.currentLang}.json`).pipe(
      map((data: any) => {
        this.translations = data;
        this.translationsLoaded = true;
        return data;
      }),
      catchError((error) => {
        console.error('Error loading translations:', error);
        return of({});
      }),
      shareReplay(1)
    );

    return this.translations$;
  }

  get(key: string, params?: any): string {
    const keys = key.split('.');
    let value: any = this.translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    // Simple parameter replacement
    if (params) {
      Object.keys(params).forEach(paramKey => {
        value = value.replace(`{{${paramKey}}}`, params[paramKey]);
      });
    }
    
    return value || key;
  }

  setLanguage(lang: string): void {
    this.currentLang = lang;
    this.translationsLoaded = false;
    this.translations$ = null;
    this.loadTranslations().subscribe();
  }
}
