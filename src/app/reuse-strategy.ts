import { Injectable } from '@angular/core';
import {
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private static storedHandlers = new Map<string, DetachedRouteHandle>();
  // Hàm xóa sạch toàn bộ cache
  public static deleteAllSnapshots(): void {
    this.storedHandlers.forEach((handle: any) => {
      // Rất quan trọng: Phải destroy componentRef để tránh rò rỉ bộ nhớ
      if (handle.componentRef) {
        handle.componentRef.destroy();
      }
    });
    this.storedHandlers.clear();
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data?.shouldReuse === true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const key = this.getRouteKey(route);
    if (handle) {
      CustomRouteReuseStrategy.storedHandlers.set(key, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getRouteKey(route);
    return !!CustomRouteReuseStrategy.storedHandlers.get(key) && route.data?.shouldReuse === true;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const key = this.getRouteKey(route);
    return CustomRouteReuseStrategy.storedHandlers.get(key) || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getRouteKey(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map(it => it.url.map(segment => segment.path).join('/'))
      .filter(it => it.length > 0)
      .join('/') || route.routeConfig?.path || '';
  }
}
