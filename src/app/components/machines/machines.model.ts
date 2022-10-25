export interface MachineStatus {
  floor: number;
  id: string;
  install_date: string;
  last_maintenance: string;
  latitude: number;
  longitude: number;
  machine_type: string;
  status: string;
}

export interface MachineStatusList {
  data: MachineStatus[];
}

export enum Status {
  RUNNING = 'running',
  FINISHED = 'finished',
  ERRORED = 'errored'
}

export interface MachineEvent {
  timestamp: string,
  status: string,
}

export interface MachineDetails extends MachineStatus {
  events: MachineEvent[];
}

export interface MachineDetailsData {
  data: MachineDetails;
}