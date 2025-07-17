export interface LineStatus {
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  reason?: string;
  validityPeriods: any[];
}

export interface Line {
  id: string;
  name: string;
  modeName: string;
  disruptions: any[];
  lineStatuses: LineStatus[];
}
