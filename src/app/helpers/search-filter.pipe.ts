import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any, searchText: string): any {
    if (!users) return [];
    if (!searchText) return users;
    return users.filter((user:any) => user.username.toLowerCase().includes(searchText.toLowerCase()));
  }

}
