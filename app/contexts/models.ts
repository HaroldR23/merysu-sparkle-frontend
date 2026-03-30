export enum Languages {
  ENGLISH = "english",
  SPANISH = "spanish"
}

export type LanguageOption = {
  name: Languages;
  flag: string;
}

// Dashboard Models

export enum ServiceStatus {
  COMPLETADO = "completado",
  PENDIENTE = "pendiente",
  CANCELADO = "cancelado"
}

export interface Service {
  id: string;
  date: string;
  customerName: string;
  serviceType: string;
  employeeNames: string[];
  workedHours: number;
  chargedPrice: number;
  totalCost: number;
  margin: number;
  status: ServiceStatus;
}
export interface CreateServiceData {
  date: string;
  customerName: string;
  serviceType: string;
  chargedPrice: number;
  totalCost: number;
  startTime: string;
  endTime: string;
  customerId: string;
  employeeIds: string[];
  address: string;
  distanceKm: number;
  hourlyRate: number;
  internalNotes: string;
  workedHours: number;
}

export interface EmployeeMetrics {
  totalEmployees: number;
  totalHours: number;
  totalCost: number;
  totalServices: number;
}

export interface Employee {
  id: string;
  name: string;
  workedHours: number;
  employeeCost: number;
  servicesCount: number;
  productivity?: number; // It is gonna be calculated in the backend. So far, it is not being sent by the API, but it is expected to be added in the future.
}

export interface CreateEmployeeData {
  name: string;
  phoneNumber: string;
  hourlyRate: number;
  entryDate: string;
  status: 'activo' | 'inactivo';
  notes: string;
}
export interface EmployeeDashboard {
  employees: Employee[];
  metrics: EmployeeMetrics;
}
export interface DashboardMetrics {
  serviciosRealizados: number;
  serviciosRealizadosChange: number;
  ingresosTotales: number;
  ingresosTotalesChange: number;
  costosTotales: number;
  costosTotalesChange: number;
  margenPromedio: number;
  margenPromedioChange: number;
  horasTrabajadas: number;
  horasTrabajadasChange: number;
}

// API State Types
export interface LoadingState {
  services: boolean;
  clients: boolean;
  employees: boolean;
  finances: boolean;
  dashboardMetrics: boolean;
}

export interface ErrorState {
  services: string | null;
  clients: string | null;
  employees: string | null;
  finances: string | null;
  dashboardMetrics: string | null;
}
