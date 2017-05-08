import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  constructor(private router: Router) { }

  checkLogin(url: string): boolean{
    //已经登录，放行（根据 userId ！== null 有问题）
    if (localStorage.getItem('userId') !== null) {
      return true;
    }
    //未登录，存储要访问的url到本地
    localStorage.setItem('redirectUrl', url);
    //跳到登录页面
    this.router.navigate(['/login']);
    //返回false, 取消跳转
    return false;
  }

}
