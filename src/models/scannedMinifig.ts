export interface ScannedMinifigure {
  id: string;
  quantity: number;
  lastScanned: string;
  firstScanned: string;
}

export interface RecentScan {
  id: string;
  scannedAt: string;
}
