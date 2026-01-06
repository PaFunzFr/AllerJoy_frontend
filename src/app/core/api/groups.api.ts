import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GroupListDto } from './models/group.dto';
import { GroupDetailDto } from './models/group-detail.dto';
import { Group } from '../../features/groups/models/group.model';
import { GroupDetail } from '../../features/groups/models/group-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsApi {

  constructor(private http: HttpClient) { }
  
  getGroupsList(): Observable<Group[]> {
    return this.http
      .get<GroupListDto[]>('/api/groups') // => to be defined: endpoint get GroupList
      .pipe(map((dtos: GroupListDto[]) => dtos.map(dto => this.fromDto(dto))));
  }

  getGroupDetail(id: number): Observable<Group> {
    return this.http
      .get<GroupDetailDto>(`/api/groups/${id}/`) // => to be defined: endpoint get GroupList
      .pipe(map(dto => this.fromDetailDto(dto)));
  }

  private fromDto(dto: GroupListDto): Group {
    return {
      id: dto.id,
      name: dto.name,
      image: dto.image ? dto.image : '',
      date: dto.date ? new Date(dto.date) : null,
      createdById: dto.created_by
    };
  }

  private fromDetailDto(dto: GroupDetailDto): GroupDetail {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      image: dto.image ? dto.image : '',
      date: dto.date ? new Date(dto.date) : null,
      createdById: dto.created_by,
      createdAt: new Date(dto.created_at),
    };
  }
  
}
