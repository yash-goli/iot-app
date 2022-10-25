import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MachineDetailsData, MachineStatusList } from "src/app/components/machines/machines.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE = 'https://machinestream.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<MachineStatusList> {
    return this.http.get<MachineStatusList>(`${this.API_BASE}/machines`);
  }

  getMachine(id: string) {
    return this.http.get<MachineDetailsData>(`${this.API_BASE}/machines/${id}`);
  }
}