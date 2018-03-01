import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ItemList } from './intrerfaces';

import { map } from 'rxjs/operators';

@Injectable()
export class ItemsService {

  private url = 'http://uk.vpar.com/services/request.aspx?action=getRoundLeaderboard&RoundID=536014&RoundLeaderboardID=18837&PageSize=1000&ThumbnailHeight=60&return=3&CallerID=1';

  constructor(private http: Http) {}

  public getItems(): Observable<ItemList[]> {
    const items = this.http.get(this.url).pipe(
        map(res => {
          return res.json().Response.L.FM.map(item => {
            return new ItemList(
                item.Thumbnail,
                item.S,
                item.P,
                item.N,
                item.V,
                item.Pos
            );
          });
        })
    );
    return items;
  }
}
