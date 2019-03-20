import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class GuardGuard implements CanActivate {
 
  canActivate(): any {
    return confirm ('This is confidential information. Do you know?')
  }

}

